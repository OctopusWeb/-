$(document).ready(function(){
	//初始化砸蛋游戏
	function init(){
		new animaCreateJs([
				{ canvasId:"canvas1", name:"dh1", lib:dh1, autoPlay:false, loadJson:false}, 
				{ canvasId:"canvas2", name:"dh", lib:dh, autoPlay:true, loadJson:false}, 
				{ canvasId:"canvas3", name:"dh1", lib:dh1, autoPlay:false, loadJson:false}, 
				{ canvasId:"canvas4", name:"equalHighEqualWide", lib:equalHighEqualWide, autoPlay:false, loadJson:false}, 
		]);
	}
	init();
});
