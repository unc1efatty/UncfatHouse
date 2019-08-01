			//固定header小top光标
			function headerTop(){
					function SignAccess(el){
					$(el+' li').mouseenter(function(){
						let left = $(this).position().left
						let uLiwidth = $(this).width()
						$(this).nextAll('.sign-a').css({
							left : left + 35 + 'px',
							width: uLiwidth,
							display:'block',
							transition:'all .5s'
						})
					})
					$(el).mouseleave(function(){
						$(this).children('.sign-a').css({
							width:'0px',
							transition:'all .2s',
						})
					})
				}
				SignAccess('.header-navUl')
				SignAccess('.header-navUl2')
			}
			
			
			// 点击菜单图标收 放左边固定栏
			function ClickOnTheMenu(){
					$('.icon-liebiaoshouqi').click(function(){
						//Math.round取整
					if (Math.round($('.fixedNav').width())<=46) {
						$('.fixedNav').width('220px')
						$('.header').css('padding-left','220px')
						$('.section').css({
							width:'calc(100% - 220px)',
							paddingLeft:'220px'
						})
						// $(this).addClass('iconfont icon-liebiaoshouqi')
					} else{
						$('.fixedNav').width('46px')
						$('.header').css('padding-left','46px')
						// $('.icon-liebiaoshouqi').addClass('iconfont icon-liebiaoshouqi')
						$('.section').css({
							width:'calc(100% - 46px)',
							paddingLeft:'46px'
						})
				
					}
				})
			}
			//左边固定下拉框
			function ContractionBar(){
				$('.anitTwo').click(function(){
					$(this).next(".anit").siblings('.anit').hide(500),
					$(this).next('.anit').toggle(500)
					//fadeOut()方法用户淡出可见元素
				})
				$('.anit li').click(function(){
					$(this).css({
						background:'rgb(0, 150, 136)',
						color:'white'
					})
					$(this).siblings('.anit li').css({
						background:'rgb(22, 24, 29)',
						color:'rgb(185, 185, 188)'
					})
				})
			}
			//左边固定小光标
				function leftFixedTheCursor(){
					$('.anitTwo').mouseenter(function(){
					var top = $(this).position().top
					$('#sign').css({
						top : top,
						height:'50px',
						display:'block',
					})
					$('.navUl').mouseleave(function(){
						$('#sign').css({
							top:top+25+'px',
							height:'0px',
							// transformOrigin:'scale(1,1)',
						})
					})
				})
			}
			//當屏幕大小小於992的時候，自適應
				function AdaptiveScreen(){
					$(window).resize(() => {
					if ($(window).width() <= 992) {
						$('.fixedNav').css('width', '0px')
						$('.header').css('padding-left', '0px')
						$('.section').css({
							width: '100%',
							paddingLeft: '0px',
						})
						$('section-core').css({
							width: '100%',
						})
						$('.secCore-left').css('width', '100%')
						$('.secCore-right').css('width', '100%')
						$('.cLeftTop-left').css('width', '100%')
						$('.cLeftTop-right').css({
							width: '100%',
							marginLeft: '0px',
							marginTop: '15px'
						})
					} else {
						$('.fixedNav').css('width', '220px')
						$('.header').css('padding-left', '220px')
						$('.section').css({
							width: 'calc(100% - 220px)',
							paddingLeft: '220px'
						})
						$('.secCore-left').css('width', 'calc((100% / 3) * 2 - 15px)')
						$('.secCore-right').css('width', 'calc((100% / 3))')
						$('.cLeftTop-left').css('width', 'calc((100% / 2) - 15px)')
						$('.cLeftTop-right').css({
							width: 'calc((100% / 2)',
							marginLeft: '15px',
							marginTop: '0px'
						})
					}
				})
				
			}
			//跳转页面
			function goToUrl(cite){
				$('#webpage').click(function(){
					location.href=cite;
				})
			}
			
			
			
			// 图片插件
				function ImagePlugIns(){
				var dom = document.getElementById("container");
				var left = document.getElementsByClassName('.secCore-left');
				var resizeWorldMapContainer = function() {
					dom.style.width = left.innerWidth + '%';
				};
				resizeWorldMapContainer();
				var myChart = echarts.init(dom);
				var app = {};
				var option = {
					title: {
						text: '未来一周气温变化',
						subtext: '纯属虚构'
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['最高气温', '最低气温']
					},
					toolbox: {
						show: true,
						feature: {
							mark: {
								show: true
							},
							dataView: {
								show: true,
								readOnly: false
							},
							magicType: {
								show: true,
								type: ['line', 'bar']
							},
							restore: {
								show: true
							},
							saveAsImage: {
								show: true
							}
						}
					},
					calculable: true,
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
							formatter: '{value} °C'
						}
					}],
					series: [{
							name: '最高气温',
							type: 'line',
							data: [11, 11, 15, 13, 12, 13, 10],
							markPoint: {
								data: [{
										type: 'max',
										name: '最大值'
									},
									{
										type: 'min',
										name: '最小值'
									}
								]
							},
							markLine: {
								data: [{
									type: 'average',
									name: '平均值'
								}]
							}
						},
						{
							name: '最低气温',
							type: 'line',
							data: [1, -2, 2, 5, 3, 2, 0],
							markPoint: {
								data: [{
									name: '周最低',
									value: -2,
									xAxis: 1,
									yAxis: -1.5
								}]
							},
							markLine: {
								data: [{
									type: 'average',
									name: '平均值'
								}]
							}
						}
					]
				};
				myChart.setOption(option);
				window.onresize = function() {
					resizeWorldMapContainer();
					myChart.resize();
				};
				}
				