$(function(){
	var pArr =[];
	var qusArr = [
		'<h1 class="blue">Cl<p>+4</p></h1><h1>O</h1><h2>2</h2>',
		'<h1 class="blue">C<p>+4</p></h1><h1>O</h1><h2>2</h2>',
		'<h1 class="blue">Fe<p>+2</p></h1><h1>O</h1>',
		'<h1 class="blue">Fe<p>+3</p></h1><h1>(OH)</h1><h2>3</h2>',
		'<h1 class="blue">Fe<p>+3</p></h1><h2>2</h2><h1>O</h1><h2>3</h2>',
		'<h1 class="blue">S<p>+4</p></h1><h1>O</h1><h2>2</h2>',
		'<h1>H</h1><h1 class="blue">N<p>+5</p></h1><h1>O</h1><h2>3</h2>',
		'<h1 class="blue">Si<p>+4</p></h1><h1>O</h1><h2>2</h2>',
		'<h1></h1><h1 class="blue">O<p>0</p></h1><h2>2</h2>',
		'<h1 class="blue">N<p>-3</p></h1><h1>H</h1><h2>3</h2>',
		
		'<h1>Na</h1><h1 class="blue">Cl<p>+1</p></h1>',
		'<h1>Na</h1><h1 class="blue">N<p>+3</p></h1><h1>O</h1><h2>2</h2>',
		'<h1 class="blue">Na<p>+1</p></h1><h1>Cl</h1>',
<<<<<<< HEAD
		'<h1>Na</h1><h2>2</h2><h1 class="blue">S<p>+6</p></h1><h1>O</h1><h2>4</h2>',
=======
		'<h1>Na</h1><h2>2</h2>2<h1 class="blue">S<p>+6</p></h1><h1>O</h1><h2>4</h2>',
>>>>>>> 4d6319a5a0606ea77b5532b4718f113700b89d7e
		'<h1>Na</h1><h2>2</h2><h1 class="blue">S<p>+4</p></h1><h1>O</h1><h2>3</h2>',
		
		'<h1>Na</h1><h2>2</h2><h1 class="blue">Si<p>+4</p></h1><h1>O</h1><h2>3</h2>',
		'<h1>Na</h1><h2>2</h2><h1>H</h1><h1 class="blue">C<p>+4</p></h1><h1>O</h1><h2>3</h2>',
		'<h1>Na</h1><h2>2</h2><h1 class="blue">C<p>+4</p></h1><h1>O</h1><h2>3</h2>',
		'<h1 class="blue">Mn<p>+2</p></h1><h1>CO</h1><h2>3</h2>',
		'<h1>K</h1><h1 class="blue">Mn<p>+7</p></h1><h1>O</h1><h2>4</h2>',
		
		'<h1>K</h1><h1 class="blue">Cl<p>+5</p></h1><h1>O</h1><h2>3</h2>',
		'<h1>K</h1><h2>2</h2><h1 class="blue">Mn<p>+6</p></h1><h1>O</h1><h2>4</h2>',
		'<h1>H</h1><h1 class="blue">Cl<p>+7</p></h1><h1>O</h1><h2>4</h2>',
		'<h1>H</h1><h1 class="blue">Cl<p>+1</p></h1><h1>O</h1>',
		'<h1>H</h1><h2>3</h2><h1 class="blue">B<p>+3</p></h1><h1>O</h1><h2>3</h2>',
		'<h1>H</h1><h2>2</h2><h1 class="blue">O<p>-2</p></h1>'
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
		'<h1 class="blue">Cl<p>+4</p></h1><h1>O</h1><h2>2</h2>',
		'<h1 class="blue">C<p>+4</p></h1><h1>O</h1><h2>2</h2>',
		'<h1 class="blue">Fe<p>+2</p></h1><h1>O</h1>',
		'<h1 class="blue">Fe<p>+3</p></h1><h1>(OH)</h1><h2>3</h2>',
		'<h1 class="blue">Fe<p>+3</p></h1><h2>2</h2><h1>O</h1><h2>3</h2>',
		'<h1 class="blue">S<p>+4</p></h1><h1>O</h1><h2>2</h2>',
		'<h1>H</h1><h1 class="blue">N<p>+5</p></h1><h1>O</h1><h2>3</h2>',
		'<h1 class="blue">Si<p>+4</p></h1><h1>O</h1><h2>2</h2>',
		'<h1></h1><h1 class="blue">O<p>0</p></h1><h2>2</h2>',
		'<h1 class="blue">N<p>-3</p></h1><h1>H</h1><h2>3</h2>',
		
		'<h1>Na</h1><h1 class="blue">Cl<p>+1</p></h1>',
		'<h1>Na</h1><h1 class="blue">N<p>+3</p></h1><h1>O</h1><h2>2</h2>',
		'<h1 class="blue">Na<p>+1</p></h1><h1>Cl</h1>',
		'<h1>Na</h1><h2>2</h2><h1 class="blue">S<p>+6</p></h1><h1>O</h1><h2>4</h2>',
		'<h1>Na</h1><h2>2</h2><h1 class="blue">S<p>+4</p></h1><h1>O</h1><h2>3</h2>',
		
		'<h1>Na</h1><h2>2</h2><h1 class="blue">Si<p>+4</p></h1><h1>O</h1><h2>3</h2>',
		'<h1>Na</h1><h2>2</h2><h1>H</h1><h1 class="blue">C<p>+4</p></h1><h1>O</h1><h2>3</h2>',
		'<h1>Na</h1><h2>2</h2><h1 class="blue">C<p>+4</p></h1><h1>O</h1><h2>3</h2>',
		'<h1 class="blue">Mn<p>+2</p></h1><h1>CO</h1><h2>3</h2>',
		'<h1>K</h1><h1 class="blue">Mn<p>+7</p></h1><h1>O</h1><h2>4</h2>',
		
		'<h1>K</h1><h1 class="blue">Cl<p>+5</p></h1><h1>O</h1><h2>3</h2>',
		'<h1>K</h1><h2>2</h2><h1 class="blue">Mn<p>+6</p></h1><h1>O</h1><h2>4</h2>',
		'<h1>H</h1><h1 class="blue">Cl<p>+7</p></h1><h1>O</h1><h2>4</h2>',
		'<h1>H</h1><h1 class="blue">Cl<p>+1</p></h1><h1>O</h1>',
		'<h1>H</h1><h2>3</h2><h1 class="blue">B<p>+3</p></h1><h1>O</h1><h2>3</h2>',
		'<h1>H</h1><h2>2</h2><h1 class="blue">O<p>-2</p></h1>'
		]
		
		ansArr = [
			"+4","+4","+2","+3","+3","+4","+5","+4","0","-3","+1","+3","+1","+6","+4","+4","+4","+4","+2","+7","+5","+6","+7","+1","+3","-2"
		]
		
		$(".foot-center-box").css({"width":0+"%"});
		$(".foot-num").html(0+"/15");
		$(".hui-btn").removeClass("selectedBtn");
		var ansArr1=[];
		qusNum++;
		$(".foot-num").html(qusNum+"/15");
		$(".hui-img").addClass("kapai");
		var mathDom = parseInt(Math.random()*qusArr.length);
		result=[];
		socal=0;
		qusNum=0;
		
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
		if(qusNum==15){
			pageContorller.socalShow()
		}else{
			$(".hui-btn").off("click");
			$(".foot-right").on("click",function(){
				pageContorller.changeQus();
			})
		}
	}
	pageContorller.socalShow = function(){
		var index="";
		for(var i=0;i<result.length;i++){
			(i-3)%4==0?cla = "class = 'rightBorder'" : cla=""
			i> 11 ?cla = "class = 'bottomBorder'" : cla=cla
			if(result[i][1] == result[i][2]){
<<<<<<< HEAD
				index+="<li "+cla+"><div class='scoreGroup'>"+result[i][0]+"</div></li>"
			}else{
				index+="<li "+cla+"><div class='scoreGroup wrong'>"+result[i][0]+"</div><img src='img/wrong_img.svg'/></li>"
=======
				index+="<li "+cla+"><p></p><div class='scoreGroup'>"+result[i][0]+"</div></li>"
			}else{
				index+="<li "+cla+"><p></p><div class='scoreGroup wrong'>"+result[i][0]+"</div><img src='img/wrong_img.svg'/></li>"
>>>>>>> 4d6319a5a0606ea77b5532b4718f113700b89d7e
			}
		}
		index+="<li></li>"
		$(".score ul").html(index);
		setTimeout(function(){
			$(".hui-last").show();
			$(".hui-img,.hui-title,.hui-btngroup,.hui-foot").hide();
			for (var i=0;i<$(".score ul li").length-1;i++) {
				if(i==0 && result[i][3]){
					$(".score ul li").eq(i).find("p").html(result[i][3])
				}else{
					$(".score ul li").eq(i).find("p").html(result[i][2])
				}
				
			}
		},2000)
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
