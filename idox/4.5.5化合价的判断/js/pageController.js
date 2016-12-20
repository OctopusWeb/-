$(function(){
	var queArr= [
/*ClO2*/	['<h1 class="blue">Cl<span class="span">+4</span></h1><h2>O<span class="span">-2</span></h2><h3>2</h3>'],
/*HClO*/	['<h2>H<span class="span">+1</span></h2><h1 class="blue">Cl<span class="span">+1</span></h1><h2>O<span class="span">-2</span></h2>'],
/*HClO4*/	['<h2>H<span class="span">+1</span></h2><h1 class="blue">Cl<span class="span">+7</span></h1><h2>O<span class="span">-2</span></h2><h3>4</h3>'],
/*SiO2*/	['<h1 class="blue">Si<span class="span">+4</span></h1><h2>O<span class="span">-2</span></h2><h3>2</h3>'],
/*Na2SiO3*/	['<h1>Na<span class="span">+1</span></h1><h3>2</h3><h1 class="blue">Si<span class="span">+4</span></h1><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*KClO3*/	['<h2>K<span class="span">+1</span></h2><h1 class="blue">Cl<span class="span">+5</span></h1><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*MnSiO3*/	['<h1 class="blue">Mn<span class="span">+2</span></h1><h2>C<span class="span">+4</span></h2><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*KMnO4*/	['<h2>K<span class="span">+1</span></h2><h1 class="blue">Mn<span class="span">+7</span></h1><h2>O<span class="span">-2</span></h2><h3>4</h3>'],
/*K2MnO4*/	['<h2>K<span class="span">+1</span></h2><h3>2</h3><h1 class="blue">Mn<span class="span">+6</span></h1><h2>O<span class="span">-2</span></h2><h3>4</h3>'],
/*NH3*/		['<h2 class="blue">N<span class="span">-3</span></h2><h2>H<span class="span">+1</span></h2><h3>3</h3>'],
/*HNO3*/	['<h2>H<span class="span">+1</span></h2><h2 class="blue">N<span class="span">+5</span></h1><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*NaNO2*/	['<h1>Na<span class="span">+1</span></h1><h2 class="blue">N<span class="span">+3</span></h2><h2>O<span class="span">-2</span></h2><h3>2</h3>'],
/*SO2*/	    ['<h2 class="blue">S<span class="span">+4</span></h2><h2>O<span class="span">-2</span></h2><h3>2</h3>'],
/*Na2SO4*/	['<h1>Na<span class="span">+1</span></h1><h3></h3><h2 class="blue">S<span class="span">+6</span></h2><h2>O<span class="span">-2</span></h2><h3>4</h3>'],
/*Na2SO3*/	['<h1>Na<span class="span">+1</span></h1><h3>2</h3><h2 class="blue">S<span class="span">+4</span></h2><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*H3BO3*/	['<h2>H<span class="span">+1</span></h2><h3>3</h3><h2 class="blue">B<span class="span">+3</span></h2><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*H20*/	    ['<h2>H<span class="span">+1</span></h2><h3>3</h3><h2 class="blue">B<span class="span">+3</span></h1><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*Nacl*/	['<h2>Na<span class="span">+1</span></h2><h1>Cl<span class="span">-1</span></h1>'],
/*FeO*/		['<h1>Fe<span class="span">+2</span></h1><h2>O<span class="span">-2</span></h2>'],
/*Fe2O3*/	['<h1>Fe<span class="span">+3</span></h1><h3>2</h3><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*SO2*/		['<h2>S<span class="span">+4</span></h2><h2>O<span class="span">-2</span></h2><h3>2</h3>'],
/*CO2*/		['<h2>C<span class="span">+4</span></h2><h2>O<span class="span">-2</span></h2><h3>2</h3>'],
/*Fe(OH)3*/	['<h1>Fe<span class="span">+3</span></h1><h1>(O<span class="span">-2</span></h1><h1>H)<span class="span">+1</span></h1><h3>3</h3>'],
/*Na2CO3*/	['<h1>Na<span class="span">+1</span></h1><h3>2</h3><h1>C<span class="span">+4</span></h1><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*NaHCO3*/	['<h1>Na<span class="span">+1</span></h1><h2>H<span class="span">+1</span></h2><h2>C<span class="span">+4</span></h2><h2>O<span class="span">-2</span></h2><h3>3</h3>'],
/*O2*/		['<h2>O<span class="span">0</span></h2><h3>2</h3>']
	]
	var num=0;
	function changeQus(){
		setTimeout(function(){
			$(".hui-img").removeClass("kapai");
			$(".span").on("click",function(){
				$(this).toggleClass("span")
			})
		},500)
		$(".hui-group").html(queArr[num]);
		var len = $(".hui-group h1").length+$(".hui-group h2").length;
		$(".hui-group").css({"left":4.3-(1.1*len)/2+"rem"})
	}
	$(".foot-right").on("click",function(){
		$(".hui-img").addClass("kapai");
		setTimeout(function(){
			changeQus();
		},500)
		num++;
		if(num>=queArr.length){
			num =0;
			$(".fixBtn").fadeIn();
			setTimeout(function(){
				$(".fixBtn").fadeOut()
			},1000);
		}
	})
	$(".span").on("click",function(){
		$(this).toggleClass("span")
	})
})
