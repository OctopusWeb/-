$(function(){
	var qusArr = [
		'<h1 class="blue">Cl</h1><h1>O</h1><h2>2</h2>',
		'<h1 class="blue">C</h1><h1>O</h1><h2>2</h2>',
		'<h1 class="blue">Fe</h1><h1>O</h1>',
		'<h1 class="blue">Fe</h1><h1>(OH)</h1><h2>3</h2>',
		'<h1 class="blue">Fe</h1><h2>2</h2><h1>O</h1><h2>3</h2>',
		'<h1 class="blue">S</h1><h1>O</h1><h2>2</h2>',
		'<h1>H</h1><h1 class="blue">N</h1><h1>O</h1><h2>3</h2>',
		'<h1 class="blue">Si</h1><h1>O</h1><h2>2</h2>',
		'<h1></h1><h1 class="blue">O</h1><h2>2</h2>',
		'<h1 class="blue">N</h1><h1>H</h1><h2>3</h2>',
		
		'<h1>Na</h1><h1 class="blue">Cl</h1>',
		'<h1>Na</h1><h1 class="blue">N</h1><h1>O</h1><h2>2</h2>',
		'<h1 class="blue">Na</h1><h1>Cl</h1>',
		'<h1>Na</h1><h2>2</h2>2<h1 class="blue">S</h1><h1>O</h1><h2>4</h2>',
		'<h1>Na</h1><h2>2</h2><h1 class="blue">S</h1><h1>O</h1><h2>3</h2>',
		
		'<h1>Na</h1><h2>2</h2><h1 class="blue">Si</h1><h1>O</h1><h2>3</h2>',
		'<h1>Na</h1><h2>2</h2><h1>H</h1><h1 class="blue">C</h1><h1>O</h1><h2>3</h2>',
		'<h1>Na</h1><h2>2</h2><h1 class="blue">C</h1><h1>O</h1><h2>3</h2>',
		'<h1 class="blue">Mn</h1><h1>CO</h1><h2>3</h2>',
		'<h1>K</h1><h1 class="blue">Mn</h1><h1>O</h1><h2>4</h2>',
		
		'<h1>K</h1><h1 class="blue">Cl</h1><h1>O</h1><h2>3</h2>',
		'<h1>K</h1><h2>2</h2><h1 class="blue">Mn</h1><h1>O</h1><h2>4</h2>',
		'<h1>H</h1><h1 class="blue">Cl</h1><h1>O</h1><h2>4</h2>',
		'<h1>H</h1><h1 class="blue">Cl</h1><h1>O</h1>',
		'<h1>H</h1><h2>3</h2><h1 class="blue">B</h1><h1>O</h1><h2>3</h2>',
		'<h1>H</h1><h2>2</h2><h1 class="blue">O</h1>'
	]
	
	var ansArr = [
		"+4","+4","+2","+3","+3","+4","+5","+4","0","-3","+1","+3","+1","+6","+4","+4","+4","+4","+2","+7","+5","+6","+7","+1","+3","-2"
	]
	var result=[];
	var socal=0;
	var qusNum=0;
	var pageContorller = {};
	
	$(".foot-right").on("click",function(){
		pageContorller.changeQus()
	})
	$("#reset").on("click",function(){
		$(".hui-last").hide();
		$(".hui-img,.hui-title,.hui-btngroup,.hui-foot").show();
		qusArr = [
			'<h1 class="blue">Cl</h1><h1>O</h1><h2>2</h2>',
			'<h1 class="blue">C</h1><h1>O</h1><h2>2</h2>',
			'<h1 class="blue">Fe</h1><h1>O</h1>',
			'<h1 class="blue">Fe</h1><h1>(OH)</h1><h2>3</h2>',
			'<h1 class="blue">Fe</h1><h2>2</h2><h1>O</h1><h2>3</h2>',
			'<h1 class="blue">S</h1><h1>O</h1><h2>2</h2>',
			'<h1>H</h1><h1 class="blue">N</h1><h1>O</h1><h2>3</h2>',
			'<h1 class="blue">Si</h1><h1>O</h1><h2>2</h2>',
			'<h1></h1><h1 class="blue">O</h1><h2>2</h2>',
			'<h1 class="blue">N</h1><h1>H</h1><h2>3</h2>',
			
			'<h1>Na</h1><h1 class="blue">Cl</h1>',
			'<h1>Na</h1><h1 class="blue">N</h1><h1>O</h1><h2>2</h2>',
			'<h1 class="blue">Na</h1><h1>Cl</h1>',
			'<h1>Na</h1><h2>2</h2>2<h1 class="blue">S</h1><h1>O</h1><h2>4</h2>',
			'<h1>Na</h1><h2>2</h2><h1 class="blue">S</h1><h1>O</h1><h2>3</h2>',
			
			'<h1>Na</h1><h2>2</h2><h1 class="blue">Si</h1><h1>O</h1><h2>3</h2>',
			'<h1>Na</h1><h2>2</h2><h1>H</h1><h1 class="blue">C</h1><h1>O</h1><h2>3</h2>',
			'<h1>Na</h1><h2>2</h2><h1 class="blue">C</h1><h1>O</h1><h2>3</h2>',
			'<h1 class="blue">Mn</h1><h1>CO</h1><h2>3</h2>',
			'<h1>K</h1><h1 class="blue">Mn</h1><h1>O</h1><h2>4</h2>',
			
			'<h1>K</h1><h1 class="blue">Cl</h1><h1>O</h1><h2>3</h2>',
			'<h1>K</h1><h2>2</h2><h1 class="blue">Mn</h1><h1>O</h1><h2>4</h2>',
			'<h1>H</h1><h1 class="blue">Cl</h1><h1>O</h1><h2>4</h2>',
			'<h1>H</h1><h1 class="blue">Cl</h1><h1>O</h1>',
			'<h1>H</h1><h2>3</h2><h1 class="blue">B</h1><h1>O</h1><h2>3</h2>',
			'<h1>H</h1><h2>2</h2><h1 class="blue">O</h1>'
		]
		
		ansArr = [
			"+4","+4","+2","+3","+3","+4","+5","+4","0","-3","+1","+3","+1","+6","+4","+4","+4","+4","+2","+7","+5","+6","+7","+1","+3","-2"
		]
		result=[];
		socal=0;
		qusNum=0;
		$(".foot-center-box").css({"width":0+"%"});
		$(".foot-num").html(0+"/15");
		pageContorller.changeQus();
		
	})
	
	pageContorller.changeQus = function(){
		$(".hui-btn").removeClass("selectedBtn");
		var ansArr1=[];
		qusNum++;
		$(".foot-num").html(qusNum+"/15");
		$(".hui-img").addClass("kapai");
		var mathDom = parseInt(Math.random()*qusArr.length);
		setTimeout(function(){
			$(".hui-group").html(qusArr[mathDom]);
			ansArr1.push(qusArr[mathDom],ansArr[mathDom])
			qusArr.splice(mathDom,1);
			ansArr.splice(mathDom,1);
			$(".hui-btn").on("click",function(){
				$(this).addClass("selectedBtn");
				$(".hui-img").removeClass("kapai");
				pageContorller.selectQus($(this).attr("id"),ansArr1);
			})
		},500)
		
		$(".foot-right").off("click");
	}
	pageContorller.selectQus = function(types,arr){
		arr.push(types);
		result.push(arr);
		socal+=6.666;
		$(".foot-center-box").css({"width":socal+"%"});
		if(qusNum==15){pageContorller.socalShow()}
		$(".hui-btn").off("click");
		$(".foot-right").on("click",function(){
			pageContorller.changeQus();
		})
	}
	pageContorller.socalShow = function(){
		$(".hui-last").show();
		$(".hui-img,.hui-title,.hui-btngroup,.hui-foot").hide();
		var index="";
		for(var i=0;i<result.length;i++){
			(i-3)%4==0?cla = "class = 'rightBorder'" : cla=""
			i> 11 ?cla = "class = 'bottomBorder'" : cla=cla
			if(result[i][1] == result[i][2]){
				index+="<li "+cla+"><p>"+result[i][1]+"</p><div class='scoreGroup'>"+result[i][0]+"</div></li>"
			}else{
				index+="<li "+cla+"><p>"+result[i][1]+"</p><div class='scoreGroup wrong'>"+result[i][0]+"</div><img src='img/wrong_img.svg'/></li>"
			}
		}
		index+="<li></li>"
		$(".score ul").html(index);
	}
	init()
	function init(){
		var ansArr1=[];
		qusNum++;
		$(".foot-num").html(qusNum+"/15");
		var mathDom = parseInt(Math.random()*qusArr.length);
		$(".hui-group").html(qusArr[mathDom]);
		ansArr1.push(qusArr[mathDom],ansArr[mathDom])
		qusArr.splice(mathDom,1);
		ansArr.splice(mathDom,1);
		$(".hui-btn").on("click",function(){
			$(this).addClass("selectedBtn");
			$(".hui-img").removeClass("kapai");
			pageContorller.selectQus($(this).attr("id"),ansArr1);
		})
		
		$(".foot-right").off("click");
	}
})
