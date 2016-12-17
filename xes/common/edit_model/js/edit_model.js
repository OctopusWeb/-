/**
 * Created by se7en on 2016/10/18.
 */
var inited = [];
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        onResize = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth<=409.6){
                docEl.style.fontSize='40px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 1024) + 'px';
                docEl.style.overflowX = 'hidden';
            }
            $("#pdfToImgBox img").each(function(i) {
                var img = $(this);
                $(img).css("zoom", 860/1600 * (clientWidth<=409.6?0.4:clientWidth/1024));
            })
        };
    var ready = false;
    if(ready == false){
        ready = true;
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if(clientWidth<=409.6){
            docEl.style.fontSize='40px';
        }else{
            docEl.style.fontSize = 100 * (clientWidth / 1024) + 'px';
        }
        $("#pdfToImgBox img").each(function(i){
            var img = $(this);
            $(img).css("zoom", 860/1600 *(clientWidth<=409.6?0.4:clientWidth/1024));
        });

    }
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, onResize, false);
    doc.addEventListener('DOMContentLoaded', onResize, false);
})(document, window);
(function (doc, win) {
    var docEl = doc,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        onResize = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth<=409.6){
                docEl.style.fontSize='40px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 1024) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, onResize, false);
    doc.addEventListener('DOMContentLoaded', onResize, false);
})(document.getElementsByClassName("pop-up"), window);
//生成预览模板时去掉多余的加载文件
function removeNode(){
    var arr = $("head")[0].childNodes;
    for(var i = arr.length-1;i>=0;i--){
        var node = arr[i];
        if(node.nodeName=="SCRIPT" && node.id!='canvasinitxx' && node.className!='canvasinit' && node.outerHTML.indexOf('loader_common_middle_math.js')<0 && node.id!='initjs' && node.outerHTML.indexOf('my_init_middle_math.js')<0){
            console.log(node.outerHTML);
            node.remove();
        }
        if(node.nodeName=="LINK" && node.id!='cssx' && node.outerHTML.indexOf('first.css')<0){
            node.remove();
        }
    }
}
//se7en 设置填空答案
function blank(){
    var range = $('.summernote').summernote('range');
    var dom = $('.summernote').summernote('dom');
    var editable = $('.summernote').summernote('editable');
    var Editor = $('.summernote').summernote('Editor');
    var beforeCommand = $('.summernote').summernote('beforeCommand');
    var afterCommand = $('.summernote').summernote('afterCommand');
    var style = $('.summernote').summernote('mystyle');
    var rng1 = range.create(editable).wrapBodyInlineWithPara();
    var paras = rng1.nodes(dom.isPara, { includeAncestor: true });
    var t = new Date().getTime();
    var rng = Editor.createRange();
    if (rng && rng.isCollapsed()) {
        var spans = style.styleNodes(rng);
        var firstSpan = list.head(spans);
        if (firstSpan && !dom.nodeLength(firstSpan)) {
            firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
            range.createFromNodeAfter(firstSpan.firstChild).select();
            $editable.data(KEY_BOGUS, firstSpan);
        }
    }
    else {
        beforeCommand();
        var answer = style.styleNodes(rng);
        $(answer).wrap('<span class = "answer answer_'+t+'"></span>');
        if ($(answer).parent().parent().parent().is("td")&&$(answer).parent().parent().parent().text()==$(answer).text()) {
        	$(answer).parent().parent().parent().addClass("answer_td").css({"background":"url(img/fangda.svg) no-repeat 98% 88%","background-size":"0.2rem"});
        }else{
        	if( answer.length>1){
	            $(answer).eq($(answer).length-1).after("<font class='ask-btn' id = '"+ t +"'>&nbsp;</font>").css("padding-right","0.1rem");
	            $(answer).eq(0).css("padding-left","0.1rem");
	            //$('.answer_'+t).wrapAll('<span></span>')
	        }else {
	            $(answer).after("<font class='ask-btn' id= '"+ t +"'>&nbsp;</font>");
	            $(answer).css({
	                "padding-right":"0.1rem",
	                "padding-left":"0.1rem"
	            });
	        }
        }     
        afterCommand();
    }
}
//预览模式下图片可以点击放大
function bigImage() {
	var imgArr; //存放图片的数组
	var spanArr //存放图片说名的代码；并不是每一个图片都有说明
	var explain_div_content_left = $(".img-Twindow .explain-div-content-left"); //左切换按键
    var explain_div_content_right = $(".img-Twindow .explain-div-content-right"); //右切换按键
    var img_Twindow_img_div = $(".img-Twindow-img-div"); //放置span内容的div
	var img_TwindowImg = $(".img-Twindow-img").children("img"); //弹框显示图片的位；
	$(".imgPop").on('click', function () {
		$(".black-mark").show();
		imgArr = []; //存放图片的数组
		spanArr = []; //存放图片说名的代码；并不是每一个图片都有说明
		var sibObj = $(".imgPop").children("img");
		if ($(".tab-menu")) {
			var sibObj = $(".tabPage").eq($(".tab-menu .current").index()).find(".imgPop").children("img");
		} 
		var sibObjspan = $(".imgPop");
		if ($(".tab-menu")) {
			var sibObjspan = $(".tabPage").eq($(".tab-menu .current").index()).find(".imgPop");
		} 
		for(let i = 0; i < sibObjspan.length; i++) {
			var span = $(sibObjspan[i]).children("span");
			if(span[0]) {
				spanArr.push(span[0].innerHTML)
			} else {
				spanArr.push("");
			}
		};
		for(let i = 0; i < sibObj.length; i++) {
			var imgUrl = $(sibObj[i]).attr("src")
			imgArr.push(imgUrl);
		};
		$(".img_Twindow").show();$(".content_Twindow").show();
		var index = imgArr.indexOf($(this).children("img").attr("src")); //这个图片的位置；
		//下面是判断是否显示左右点击按键  已经按键应该具有的样式
		if(sibObj.length == 1) {
			$(".img-Twindow .explain-div-content-left").hide();
			$(".img-Twindow .explain-div-content-right").hide();
		} else {
			$(".img-Twindow .explain-div-content-left").show();
			$(".img-Twindow .explain-div-content-right").show();
		};
		judgeImg1(index);
		YNspan1(index);
		explain_div_content_left[0].addEventListener("click", funleft, false);
		explain_div_content_right[0].addEventListener("click", funright, false);
		
	})
	function funleft() {
		var index = imgArr.indexOf($(".img-Twindow-img").children("img").attr("src"));
		index--
		YNspan1(index);
		judgeImg1(index);
	};
	function funright() {
		var index = imgArr.indexOf($(".img-Twindow-img").children("img").attr("src"));
		index++
		YNspan1(index);
		judgeImg1(index);
	};
	//	判断是否有span标签内容,也就是判断是否有图片上说明
	function YNspan1(num1) {
		var index1 = 0;
		if(num1 <= 0) {
			index1 = 0;
		} else if(num1 >= imgArr.length - 1) {
			index1 = imgArr.length - 1;
		} else {
			index1 = num1;
		};
		if(spanArr[index1] == "") {
			img_TwindowImg.css({
				"width": "100%",
				"height": "100%"
			})
			img_Twindow_img_div.css("display", "none");
			console.log("空")
		} else {
			img_TwindowImg.css({
				"width": "6rem",
				"height": "4.5rem",
				"margin": "0 auto"
			});
			img_Twindow_img_div.html(spanArr[index1]);
			img_Twindow_img_div.css("display", "block");
		}
	};
	function judgeImg1(num) {
		var index2 = 0;
		explain_div_content_right.css("opacity", "1");
		explain_div_content_left.css("opacity", "1");
		if(num <= 0) {
			index2 = 0;
			explain_div_content_left.css("opacity", "0.3");
			explain_div_content_right.css("opacity", "1");
		} else if(num >= imgArr.length - 1) {
			index2 = imgArr.length - 1;
			explain_div_content_right.css("opacity", "0.3");
			explain_div_content_left.css("opacity", "1");
		} else {
			index2 = num;
		};
		$(".img-Twindow-img").children("img").attr("src", imgArr[index2]);
	};
}
// 预览模式下增加显示答案
function addShowAnswerAndImg(){
    //控制填空答案的可见 不可见
    for (var i=0; i<$(".answer_td").length; i++) {
    	$(".answer_td").eq(i).find(".answer").children("span").css({"border":0});	
    	$(".answer_td").eq(i).click(function(){
    		if ($(this).find(".answer").children("span").css("color")=="rgba(255, 255, 255, 0)") {
	            $(this).find(".answer").children("span").css({
	                color:"rgba(255, 255, 255, 1)"
	            });
	        }
	        else{
	            $(this).find(".answer").children("span").css({
	                color:"rgba(255, 255, 255, 0)"
	            });
	        }
    	})
    }
    $(".ask-btn").on("click",function(){
        if ($(this).css("opacity")=="1") {
            $(this).css("opacity","0.4");
            $(".answer_" + $(this).attr("id")+" span").css({
                color:"rgba(0, 246, 255,1)"
            });
        }
        else{
            $(".answer_" + $(this).attr("id")+" span").css({
                color:"rgba(0, 246, 255,0)"
            });
            $(this).css("opacity","1");
        }
    })
}
//whh 五张图片时，上边三张，下边两张，让下边两张图片和三张图的尺寸一样
//function twoPic(){
//  var range = $('.summernote').summernote('range');
//  var dom = $('.summernote').summernote('dom');
//  var editable = $('.summernote').summernote('editable');
//  var Editor = $('.summernote').summernote('Editor');
//  var beforeCommand = $('.summernote').summernote('beforeCommand');
//  var afterCommand = $('.summernote').summernote('afterCommand');
//  var style = $('.summernote').summernote('mystyle');
//
//  var rng1 = range.create(editable).wrapBodyInlineWithPara();
//  var paras = rng1.nodes(dom.isPara, { includeAncestor: true });
//  $(paras).children().eq(0).css({"float":"left","margin-left":"1.2rem"});
//  for (var j=0; j<$(paras).children().length; j++) {
//      $(paras).children("span:has(img)").eq(j).attr("five","true").attr("class","three");
//      scale(218,140);
//  }
//  function scale(w,h){
//      var img_width=$(paras).children().eq(j).children().attr("own-width");
//      var img_height=$(paras).children().eq(j).children().attr("own-height");
//      if (img_width>w || img_height>h) {
//          var min_per = Math.min(w/img_width,h/img_height);
//          $(paras).children().eq(j).children().css({"width":img_width*min_per/100+"rem","height":img_height*min_per/100+"rem"});
//      } else if (img_width<=w || img_height<=h) {
//          $(paras).children().eq(j).children().css({"width":img_width/100+"rem","height":img_height/100+"rem"});
//      }
//  }
//}
//whh 实时监听内容改变时，重新布局图片样式
//var img_num,
//  img_width,
//  img_height,
//  min_per;
//function calculate(){
//  for (var i=0; i<$(".note-editable").children().length; i++) {
//      img_num = $(".note-editable").children().has("img").eq(i).children("span:has(img)").length;
//      $(".note-editable").children().has("img").eq(i).children("span:not(:has(img))").attr("class","");//所有的p下面的没有img的span标签去掉class
//      switch (img_num){
//          case 1:
//              $(".note-editable").children().has("img").eq(i).children("span:has(img)").attr("class","one");
//              for (var j=0; j<$(".note-editable").children().has("img").eq(i).children("span:has(img)").length; j++) {
//                  scale(340,180);
//              }
//              break;
//          case 2:
//              if ($(".note-editable").children().has("img").eq(i).children("span:has(img)").attr("five") == "true") {
//                  $(".note-editable").children().has("img").eq(i).children("span:has(img)").attr("class","three");
//              } else{
//                  $(".note-editable").children().has("img").eq(i).children("span:has(img)").attr("class","two");
//                  for (var j=0; j<$(".note-editable").children().has("img").eq(i).children("span:has(img)").length; j++) {
//                      scale(340,180);
//                  }
//              }
//              break;
//          case 3:
//              $(".note-editable").children().has("img").eq(i).children("span:has(img)").attr("class","three");
//              for (var j=0; j<$(".note-editable").children().has("img").eq(i).children("span:has(img)").length; j++) {
//                  scale(218,140);
//              }
//              break;
//          default:
//              $(".note-editable").children().has("img").eq(i).children("span:has(img)").attr("class","three");
//              for (var j=0; j<$(".note-editable").children().has("img").eq(i).children("span:has(img)").length; j++) {
//                  scale(218,140);
//              }
//              break;
//      }
//      function scale(w,h){
//          img_width=$(".note-editable ").children().has("img").eq(i).children("span:has(img)").eq(j).children().attr("own-width");
//          img_height=$(".note-editable ").children().has("img").eq(i).children("span:has(img)").eq(j).children().attr("own-height");
//          if (img_width>w || img_height>h) {
//              min_per = Math.min(w/img_width,h/img_height);
//              $(".note-editable").children().has("img").eq(i).children("span:has(img)").eq(j).children().
//              css({"width":img_width*min_per/100+"rem","height":img_height*min_per/100+"rem"});
//          } else if (img_width<=w || img_height<=h) {
//              $(".note-editable").children().has("img").eq(i).children("span:has(img)").eq(j).children().
//              css({"width":img_width/100+"rem","height":img_height/100+"rem"});
//          }
//      }
//
//  }
//}
function parentVideoDialog(){
    window.parent.uploadRes(new Date().getTime(),'VIDEO','create');
}


/**是否是electron环境*/
function isElectron(){
    var sUserAgent = navigator.userAgent.toLowerCase();
    return sUserAgent.indexOf("electron")>-1;
}
function isServer(){
    return window.location.host!="";
}
// canvas动画
function initcanvas(dom_id,path,type,id,func){
    init(dom_id,path,type,id,func);
    var  canvas, stage, exportRoot;
    function init(dom_id,path,type,id,func) {
        canvas = document.getElementById(dom_id);
        window.onresize = function() {
            //canvas.style.position = "absolute";
            var rem =parseInt($(".pop-up").css("width")) ;
            var scale = Math.min(rem / canvas.width);
            canvas.style.width = canvas.width * scale + "px";
            canvas.style.height = canvas.height * scale + "px";
            // canvas.style.left = "0px";
            // canvas.style.top = "0px";
            // canvas.style.marginLeft = "-0.5rem";
        };
        if(inited[dom_id] ==true){
            window.onresize();
        }else {
            inited[dom_id] = true;
            images = images||{};
            ss = ss||{};
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", function(evt){
                handleFileLoad(evt)
            });
            loader.addEventListener("complete", function(evt){
                handleComplete(evt,id,func)
            });

            loader.setMaxConnections(100);
            loader.loadFile({src:path, type:type, id:id}, true);
            loader.loadManifest(lib.properties.manifest);
        }
        // console.log(inited);
    }

    function handleFileLoad(evt) {
        if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
    }

    function handleComplete(evt,id,func) {
        var queue = evt.target;
        ss[id] = queue.getResult(id);
        exportRoot = eval(func);
        stage = new createjs.Stage(canvas);
        stage.addChild(exportRoot);
        stage.update();
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
}
//
//function canvasLoading(lib,canvasId){
//    var head = document.getElementsByTagName('head');
//    if(head&&head.length){
//        head = head[0];
//    }else{
//        head = document.body;
//    }
//    var script = document.createElement('script');
//    script.type = "text/javascript";
//    head.appendChild( script);
//    script.src = "js/"+ lib +".js";
//    script.onload = script.onreadystatechange = function(){
//        if ((!this.readyState) || this.readyState == "complete" || this.readyState == "loaded" ){
//            $(".loading-img").css({
//                "display":"none"
//            });
//            $(".loading-body").css({
//                "animation-play-state":"paused",
//                "-webkit-animation-play-state":"paused"
//            });
//            initcanvas(canvasId,'images/'+lib+'_atlas_.json','spritesheet',lib+'_atlas_','new lib.'+lib+'()');
//        }
//    }
//}
//
//function myScroll() {
//    //前边是获取chrome等一般浏览器 如果获取不到就是ie了 就用ie的办法获取
//    var x = document.body.scrollTop || document.documentElement.scrollTop;
//    var timer = setInterval(function() {
//        x = x - 100;
//        if(x < 100) {
//            x = 0;
//            window.scrollTo(x, x);
//            clearInterval(timer);
//        }
//        window.scrollTo(x, x);
//    }, "10");
//}
function tabmenuW(){
 // 设置tab选项卡所在容器的宽度
 var aW = 0;
 var ass = 1/document.documentElement.style.fontSize.replace("px","");
 $.each($('.tab-menu > li'),function(i,item){
     aW += item.offsetWidth;
 });
 aW = aW*ass+0.61*$('.tab-menu > li').length;
 $('.tab-menu ').css("width",aW+"rem");
}
function tab_menu(){
 var rempx = 1/document.documentElement.style.fontSize.replace("px","");
 var first_index = 0;
 var oLeft=0;
 $(".tab-switch>.rightBtn").on("click",function(){
     tabmenuW();
     oLeft += $('.tab-menu > li').eq(first_index).outerWidth(true);
     first_index += 1;
     $('.tab-menu ').css("left",-oLeft*rempx + "rem");
     if (first_index >= $('.tab-menu > li').length) {
         first_index = 0;
         oLeft = 0;
         $('.tab-menu ').css("left",0);
     }
 });

 $(".tab-switch>.leftBtn").on("click",function(){
     tabmenuW();
     if (first_index <= 1) {
         first_index = 0;
         oLeft = 0;
         $('.tab-menu ').css("left",0);
     }else{
         first_index--;
         oLeft -=  $('.tab-menu > li').eq(first_index).outerWidth(true);
         $('.tab-menu ').css("left",-oLeft*rempx + "rem");
     }
 });
 tabmenuW();
 // 给所有的选项卡注册单击事件
 $('.tab-menu').on("click","li",function(){
     tabmenuW();
     var i = $(this).index();
     $(this).addClass("current").siblings().removeClass("current");
     $(".tab-box").children().eq(i).show().siblings().hide();
 });

 //增加tab标签方法
 $(".addtabli").on('click',function(){
     var aW =  $('.tab-menu')[0].offsetWidth*10.24/document.documentElement.clientWidth;
     $(".tab-menu").append("<li><span >小标题</span><a>×</a><b></b></li>");
     aW +=1.66;
     $('.tab-menu ').css("width",aW +"rem");
     tabmenuW();
     if(aW>=7.6){
         $(".tab-switch").show();
     }
 });
}