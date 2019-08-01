  
  // 在界面小于1300px的情况下，点击按钮左侧边出现
  function clickappear(){
		   if($(window).width() <= 900){
		     $('.menu-button').click(function(){
		     $('.sidebar').css("left","0px")
		   })
		  }
		 $(".OverB-content").click(function(e){
			let _this = $(e.target)
			if(!_this.hasClass(".sidebar") && !_this.hasClass(".menu-button")){
				$('.sidebar').css("left","-300px")
			}
		})
	}
   