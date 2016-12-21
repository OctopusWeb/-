$(function(){
	var qusName1=[["Na","+","B"],["Mg","2+","B"],["Al","3+","B"],["Cl","-","A"],["K","+","B"]
				,["Ca","2+","B"],["Zn","2+","B"],["Ag","+","B"],["S","2-","A"],["Na","+","B"]
	]
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
		$(".hui-foot").show();
		socal=0;
		qusNum=0;
		$(".foot-center-box").css({"width":0+"%"});
		$(".foot-num").html(0+"/10");
		$(".foot-left-num1").html(0);
		qusNum++;
		$(".foot-num").html(qusNum+"/10");
		$(".hide").hide();
		$(".hui-img").addClass("kapai");
		
		var arr = qusName1[qusNum-1];
		setTimeout(function(){
			$(".chooseBox h4").removeClass("selected");
			$(".hui-img h1").eq(0).html(arr[0])
			$(".hui-box h3").eq(0).html(arr[0])
			$(".hui-box h3").eq(1).html(arr[0]+"<p>"+arr[1]+"</p>");
			$(".hui-box h3").eq(1).css({"text-indent":"-999rem"})
			
			$(".choose").hide();
		},500);
	})
	
	
	
	pageContorller.changeQus = function(){
		qusNum++;
		$(".foot-num").html(qusNum+"/10");
		$(".hide").hide();
		$(".hui-img").addClass("kapai");
		
		var arr = qusName1[qusNum-1];
		setTimeout(function(){
			$(".chooseBox h4").removeClass("selected");
			$(".hui-img h1").eq(0).html(arr[0])
			$(".hui-box h3").eq(0).html(arr[0])
			$(".hui-box h3").eq(1).html(arr[0]+"<p>"+arr[1]+"</p>");
			$(".hui-box h3").eq(1).css({"text-indent":"-999rem"})
			
			$(".choose").hide();
		},500);

		$(".foot-right").off("click");
		$(".chooseBox h4").on("click",function(){
			$(".hui-img").removeClass("kapai");
			$(this).parent().find("h4").removeClass("selected")
			$(this).addClass("selected");
			if($(".selected").length==3){
				var a = $(".selected").eq(0).attr("id");
				var b = $(".selected").eq(1).attr("id");
				var c = $(".selected").eq(2).attr("id");
				type = a+b+c;
				$(".hui-box h3").eq(1).css({"text-indent":"0rem"})
				pageContorller.selectQus(arr[2],type)
			}
		})
	}
	pageContorller.selectQus = function(types,type){
		
		types == "A"?types="034":types="125";
		console.log(types+""+type)
		if(types == type){
			socal+=10;
			$(".foot-left-num1").html(socal);
			$(".foot-center-box").css({"width":socal+"%"});
			$(".right").show();
		}else{
			$(".wrong").show();
		}
		if(qusNum==10){
			pageContorller.socalShow()
		}else{
			$(".chooseBox h4").off("click")
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
		$(".hide").hide();		
		var arr = qusName1[qusNum-1];
		$(".chooseBox h4").removeClass("selected");
		$(".hui-img h1").eq(0).html(arr[0])
		$(".hui-box h3").eq(0).html(arr[0])
		$(".hui-box h3").eq(1).html(arr[0]+"<p>"+arr[1]+"</p>");
		$(".hui-box h3").eq(1).css({"text-indent":"-999rem"})
		$(".hui-img").removeClass("kapai");
		$(".choose").hide();

		$(".foot-right").off("click");
		$(".chooseBox h4").on("click",function(){
			$(this).parent().find("h4").removeClass("selected")
			$(this).addClass("selected");
			if($(".selected").length==3){
				var a = $(".selected").eq(0).attr("id");
				var b = $(".selected").eq(1).attr("id");
				var c = $(".selected").eq(2).attr("id");
				type = a+b+c;
				$(".hui-box h3").eq(1).css({"text-indent":"0rem"})
				pageContorller.selectQus(arr[2],type)
			}
		})
	}
})
