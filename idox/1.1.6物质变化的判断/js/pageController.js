$(function(){
	var qusName1=["香水挥发","冰川在融化","玻璃破碎","菠萝榨汁","干冰升华","酒杯破碎","铁丝弯折","湿衣晾干","石头的粉碎","水沸腾","蜡烛的融化"]
	var qusName2=["钢铁生锈","菜刀生锈","蜡烛燃烧","煤炭燃烧","面包发霉","青铜器生锈","蔬菜腐烂","水果腐烂","纸张燃烧"]
	var qusArr1 = ["w0.png","w1.png","w2.png","w3.png","w4.png","w5.png","w6.png","w7.png","w8.png","w9.png","w10.png"];
	var qusArr2 = ["h0.png","h1.png","h2.png","h4.png","h5.png","h6.png","h7.png","h8.png","h9.png"];
	var type;
	var socal=0;
	var qusNum=0;
	var pageContorller = {};
	
	$(".foot-right").on("click",function(){
		pageContorller.changeQus()
	})
	$("#reset").on("click",function(){
		$(".hui-last").hide();
		$(".hui-img").show();
		$(".hui-btngroup").show();
		$(".hui-foot").show();
		qusArr1 = ["w0.png","w1.png","w2.png","w3.png","w4.png","w5.png","w6.png","w7.png","w8.png","w9.png","w10.png"];
		qusArr2 = ["h0.png","h1.png","h2.png","h4.png","h5.png","h6.png","h7.png","h8.png","h9.png"];
		qusName1=["香水挥发","冰川在融化","玻璃破碎","菠萝榨汁","干冰升华","酒杯破碎","铁丝弯折","湿衣晾干","石头的粉碎","水沸腾","蜡烛的融化"]
		qusName2=["钢铁生锈","菜刀生锈","蜡烛燃烧","煤炭燃烧","面包发霉","青铜器生锈","蔬菜腐烂","水果腐烂","纸张燃烧"]
		socal=0;
		qusNum=0;
		$(".foot-center-box").css({"width":0+"%"});
		$(".foot-num").html(0+"/10");
		$(".foot-left-num1").html(0);
		
		qusNum++;
		$(".foot-num").html(qusNum+"/10");
		$(".hui-btn").removeClass("green-btn");
		$(".hui-btn").removeClass("red-btn");
		$(".hide").hide();
		$(".hui-img").addClass("kapai");
		var num = parseInt(Math.random()*(qusArr1.length-1));
		type=qusArr1[num].substr(0,1);
		setTimeout(function(){
			$(".hui-img .imgs").attr({"src":"img/"+qusArr1[num]});
			$(".title").html(qusName1[num]);
			qusArr1.splice(num,1);
			qusName1.splice(num,1)
		},100)
		
	})
	
	pageContorller.changeQus = function(){
		qusNum++;
		$(".foot-num").html(qusNum+"/10");
		$(".hui-btn").removeClass("green-btn");
		$(".hui-btn").removeClass("red-btn");
		$(".hide").hide();
		$(".hui-img").addClass("kapai");
		if(Math.random()>0.5){
			type= "w";
			var num = parseInt(Math.random()*qusArr1.length);
			setTimeout(function(){
				$(".hui-img .imgs").attr({"src":"img/"+qusArr1[num]});
				$(".title").html(qusName1[num]);
				qusArr1.splice(num,1);
				qusName1.splice(num,1)
			},500)
			
			
		}else{
			type="h";
			var num = parseInt(Math.random()*qusArr2.length);
			setTimeout(function(){
				$(".hui-img .imgs").attr({"src":"img/"+qusArr2[num]});
				$(".title").html(qusName2[num]);
				qusArr2.splice(num,1)
				qusName2.splice(num,1)
			},500)
			
		}
		$(".foot-right").off("click");
		$(".hui-btn").on("click",function(){
			$(".hui-img").removeClass("kapai");
			pageContorller.selectQus($(this).attr("id"));
		})
	}
	pageContorller.selectQus = function(types){
		types == "w"?btn=0:btn=1;
		if(types == type){
			socal+=10;
			$(".foot-left-num1").html(socal);
			$(".foot-center-box").css({"width":socal+"%"});
			$(".hui-btn").eq(btn).addClass("green-btn");
			$(".right").show();
		}else{
			$(".hui-btn").eq(btn).addClass("red-btn");
			$(".wrong").show();
		}
		if(qusNum==10){
			pageContorller.socalShow();
		}else{
			$(".hui-btn").off("click");
			$(".foot-right").on("click",function(){
				pageContorller.changeQus();
			})
		}
	}
	pageContorller.socalShow = function(){
		setTimeout(function(){
			var socal1 = socal/10;
			$(".score1 img").attr({"src":"img/"+socal1+"_.png"})
			$(".hui-last").show();
			$(".hui-img").hide();
			$(".hui-btngroup").hide();
			$(".hui-foot").hide();
		},2000)
	}
	init();
	function init(){
		qusNum++;
		$(".foot-num").html(qusNum+"/10");
		$(".hui-btn").removeClass("green-btn");
		$(".hui-btn").removeClass("red-btn");
		$(".hide").hide();
		if(Math.random()>0.5){
			type= "w";
			var num = parseInt(Math.random()*qusArr1.length);
			$(".hui-img .imgs").attr({"src":"img/"+qusArr1[num]});
			$(".title").html(qusName1[num])
			
			qusArr1.splice(num,1);
			qusName1.splice(num,1)
		}else{
			type="h";
			var num = parseInt(Math.random()*qusArr2.length);
			$(".hui-img .imgs").attr({"src":"img/"+qusArr2[num]});
			$(".title").html(qusName2[num])
			qusArr2.splice(num,1)
			qusName2.splice(num,1)
		}
		$(".foot-right").off("click");
		$(".hui-btn").on("click",function(){
			$(".hui-img").removeClass("kapai");
			pageContorller.selectQus($(this).attr("id"));
		})
	}
})
