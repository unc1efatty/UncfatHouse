var timer=null;
$('#play').click(function () {
    var time = 30;
    $('#fenshu').html('0');
	$('#play').hide();
    $('#time').html(time);
    var timer = setInterval(function () {
        time -= 1;
        $('#time').html(time);
        if (time <= 0) {
            clearInterval(timer);
            $('#play p').show();
            alert('Game Over');
        }
    }, 1000)

    var arr = [timg_1, timg_2, timg_3, timg_4, timg_5, timg_6, timg_7, timg_8, timg_9];
    var playgame = null;
    var lala=null;
    clearInterval(playgame);
    
     playgame = setInterval(function () {
        var index = Math.floor((Math.random() * arr.length)); 
        console.log(index)
        $(arr[index]).animate({ 'top': '80px' }, 300)
        lala = setInterval(function () {
            $(arr[index]).animate({ 'top': '190px' }, 300)
        }, 1350)
        
        if (time <= 2) {
            clearInterval(playgame);
        }
    }, 500)
})



var fenshu = 0;
$('.game div img').click(function(){
    $(this).animate({ 'top': '190px' }, 50)
    fenshu += 1;
    $('#fenshu').html(fenshu);
})

$('#end').click(function(){
	history.go(0)
})
$('img').mousedown(function(e){
	e.preventDefault()
})
//console.log(arr.sort(()=>{ return 0.5 - Math.random()}));