$(function(){
	var qusName1=["干冰用于人工降雨","高锰酸钾是紫黑色固体","铝合金用于制作门窗","铜丝可用做电线","氧气是无色无味的气体","液氮用作冷冻剂","用氢气充灌气球","酒精可用作燃料","天然气燃烧","氧气用于切割金属"]
	var qusArr1 = ["w0.png","w1.png","w2.png","w3.png","w4.png","w5.png","w6.png","h0.png","h1.png","h2.png"];
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
		qusName1=["干冰用于人工降雨","高锰酸钾是紫黑色固体","铝合金用于制作门窗","铜丝可用做电线","氧气是无色无味的气体","液氮用作冷冻剂","用氢气充灌气球","酒精可用作燃料","天然气燃烧","氧气用于切割金属"]
		qusArr1 = ["w0.png","w1.png","w2.png","w3.png","w4.png","w5.png","w6.png","h0.png","h1.png","h2.png"];
	
		socal=0;
		qusNum=0;
		$(".foot-center-box").css({"width":0+"%"});
		$(".foot-num").html(0+"/10");
		$(".foot-left-num1").html(0);
		pageContorller.changeQus()
		
	})
	
	pageContorller.changeQus = function(){
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
		},500)
		

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
		if(qusNum==10){pageContorller.socalShow()}
		$(".hui-btn").off("click");
		$(".foot-right").on("click",function(){
			pageContorller.changeQus();
		})
	}
	pageContorller.socalShow = function(){
		var socal1 = socal/10;
		$(".score1 img").attr({"src":"img/"+socal1+"_.png"})
		$(".hui-last").show();
		$(".hui-img").hide();
		$(".hui-btngroup").hide();
		$(".hui-foot").hide();
	}
	init();
	function init(){
		qusNum++;
		$(".foot-num").html(qusNum+"/10");
		$(".hui-btn").removeClass("green-btn");
		$(".hui-btn").removeClass("red-btn");
		$(".hide").hide();
		var num = parseInt(Math.random()*(qusArr1.length-1));
		type=qusArr1[num].substr(0,1);
		$(".hui-img .imgs").attr({"src":"img/"+qusArr1[num]});
		$(".title").html(qusName1[num]);
		qusArr1.splice(num,1);
		qusName1.splice(num,1)
		

		$(".foot-right").off("click");
		$(".hui-btn").on("click",function(){
			$(".hui-img").removeClass("kapai");
			pageContorller.selectQus($(this).attr("id"));
		})
	}
})
