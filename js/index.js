$(function(){
//	ctrl+shift+F,自动调整格式
	/*获取屏幕宽高*/
	var nowpage=0;
//	当前页数
	var width=window.innerWidth;
	var height=window.innerHeight;
	
	$(".content").width(width);
	$(".content").height(4*height);
	
	$(".page").width(width);
	$(".page").height(height);
//	不是jquery自带的，是引入的插件
//  手指触屏滑动的事件
//  参数:滑动距离、滑动方向、手指数
    $(".content").swipe({
    	swipe:function(event,direction,distance,duration,fingerCount){
//  		console.log(direction);
            if(direction=="up"){
            	nowpage++;
            	if(nowpage>3){
            		nowpage=3;
            	}
            }else{
            	nowpage--;
            	if(nowpage<0){
            		nowpage=0;
            	}
            }
            //  animate({要做的动画效果,{duration:动画时长,comlete:动画执行完后要做的事情}})
            $(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
//          	翻页后,如果当前是第二页,则显示字
             	if(nowpage==1){
    		        $(".page2-Farm").fadeIn(1000,function(){
    			       $(".page2-IT").fadeIn(1000)
    		        })
//  		        while(1){
//  		        	$(".page2-Star").animate({left:"-100%",bottom:"-100%"},{duration:2000});
//  		        }
    		        
    	        }
             	if(nowpage==2){
             		$(".page3-ETitle").fadeIn(2000);
             		$(".page3-LTitle").fadeIn(2500);
             		$(".page3-Bus").animate({left:"-100%"},{duration:2000});
             		$(".page3-Avatar").animate({left:"35%"},{duration:2500,complete:function(){
//           			slow=600ms
             			$(".page3-ETitle").fadeOut("slow");
             			$(".page3-LTitle").fadeOut("slow");
             			$(".page3-Bus").fadeOut("slow");
             			$(".page3-Avatar").fadeOut("slow");
             			$(".page3-Station").fadeOut("slow",function(){
             				$(".page3-2Wall").fadeIn("slow");
             				$(".page3-2Avatar").fadeIn("slow",function(){
             					$(".page3-2Space").animate({width:"36%"},{duration:400,complete:function(){
             						$(".page3-2Txt").animate({width:"60%"},{duration:400})
             					}})
             				});
             			});
             		}});
             	}
             }});
    	}
    });
//  建筑淡入,飞机闪出
    $(".page1-Building").fadeIn(600,function(){
    	$(".page1-Flight").animate({width:"70%"},{duration:1000})
    })
//   点灯
    $(".page4-Off").click(function(){
    	$(this).attr("src","img/lightOn.png")
    	$(".page4-Offbg").fadeOut("slow");
    	$(".page4-Guide").fadeOut("slow");
    	$(".page4-Title").fadeOut("slow",function(){
    		$(".page4-Onbg").fadeIn("slow");
    		$(".page4-Run").fadeIn(1500);
    	});
    	
    })
})



/*d等文档完成之后再执行JS代码*/
