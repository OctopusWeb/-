/**
 * 功能：每个切片特有的js，配置加载的js和css。
 * 适用范围:初化，高化
 * @thinlong
 * v3.0
 * 
 * 最新修改时间
 * 2016.12.2
 * 
 */

/*
 * 全学科公共文件
 * --必加--
 * js/jquery.min.js
 * css/preload.min.css
 * js/preload.min.js
 * 
 * --动画(选加)-- 
 * --createjs相关--
 * js/preloadjs-0.6.1.min.js
 * js/easeljs-0.8.1.min.js
 * js/tweenjs-0.6.1.min.js
 * js/movieclip-0.8.1.min.js
 * js/animaCreateJs.js
 * 
 * --其他--
 * 视具体情况而定
 */
var myPublicFiles = ["js/jquery.min.js",
					 "css/preload.min.css", 
					 "js/preload.min.js",
					 "js/easeljs-0.8.1.min.js",
					 "js/preloadjs-0.6.1.min.js",
					 "js/tweenjs-0.6.1.min.js",
				  	 "js/movieclip-0.8.1.min.js",
				 	 "js/animaCreateJs.js"
					];
/**
 * 学科(初化，高化)通用文件
 * --必加--
 * css/chemistry2.css
 * js/chemistry2.js
 */


var myCommonFiles = ["css/chemistry2.css", 
					 "js/chemistry2.js",
					 "anima/animaCreateJsContrl.js"
					];

/**
 * 课件私有文件
 */
var myPrivateFiles = [
	"js/index.js"
];


var loader = new h5_loader();
loader.addPublicFiles(myPublicFiles)
loader.addCommonFiles(myCommonFiles);
loader.addPrivateFiles(myPrivateFiles);
loader.load();