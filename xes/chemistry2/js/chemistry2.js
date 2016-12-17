var inited = [];
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		onResize = function() {
			var clientWidth = docEl.clientWidth;
			if(!clientWidth) return;
			if(clientWidth <= 409.6) {
				docEl.style.fontSize = '40px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 1024) + 'px';
				docEl.style.overflowX = 'hidden';
			}
			$("#pdfToImgBox img").each(function(i) {
				var img = $(this);
				$(img).css("zoom", 860 / 1600 * (clientWidth <= 409.6 ? 0.4 : clientWidth / 1024));
			})
		};
	var ready = false;
	if(ready == false) {
		ready = true;
		var clientWidth = docEl.clientWidth;
		if(!clientWidth) return;
		if(clientWidth <= 409.6) {
			docEl.style.fontSize = '40px';
		} else {
			docEl.style.fontSize = 100 * (clientWidth / 1024) + 'px';
		}

		$("#pdfToImgBox img").each(function(i) {
			var img = $(this);
			$(img).css("zoom", 860 / 1600 * (clientWidth <= 409.6 ? 0.4 : clientWidth / 1024));
		});

	}
	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, onResize, false);
	doc.addEventListener('DOMContentLoaded', onResize, false);
})(document, window);
//屏幕缩放


//样式自动改变
(function() {
	var leng = $(".bottom-bar-background").length;
	if(leng == 0){
		$(".warp").addClass("warp-high");	
	}
})();
//================================内容上下位置的遮盖部位填充=====================================
var c = 0; //当前的页面缩放比 ；
(function() {
	c = document.documentElement.clientWidth / 1024;
	if(c < 0.4) {
		c = 0.4
	}
	coverTop = ($("#header").height()) / c / 100;
	var coverBottom = ($("#bottom-bar").height()) / c / 100;
	$(".content").prepend($("<div></div>").css({
		"width": "100%",
		"height": coverTop + "rem",
		"margin-bottom": "0.4rem"
	})).append($("<div></div>").css({
		"width": "100%",
		"height": coverBottom + "rem",
		"margin-top": "0.4rem"
	}))
})();

//========================================二级标题的点击显示 隐藏效果=================================；
(function() {
	$(".second-title").click(function() {
		var clickObj = $(this).children(".second-title-imgspan");
		var next1
		var next1 = $(this).children().eq(1);
		var next2 = $(this).next(".second-title-content");
		if(clickObj.css("transform") == "none") {
			clickObj.css("transform", "rotate(90deg)")
		} else {
			clickObj.css("transform", "none")
		};
		if(next1[0]) {
			if(next1.css("opacity") == 0) {
				next1.css("opacity", "1");
			} else {
				next1.css("opacity", "0");
			}
		};
		if(next2[0]) {
			if(next2.css("opacity") == 0) {
				next2.css("opacity", "1");
			} else {
				next2.css("opacity", "0");
			}
		};
	});
})();

//==========================================填空题的点击显示答案效果==================================
(function() {
	var font_result_img = $(".Completion-div .font-result-clickimg");
	var font_result = $(".font-result");
	font_result_img.click(function() {
		if($(this).parents(".Completion-div").find(".font-result").css("color") == "rgba(1, 1, 1, 0)") {
			$(this).parents(".Completion-div").find(".font-result").css("color", "#00F6FF");
		} else {
			$(this).parents(".Completion-div").find(".font-result").css("color", "rgba(1, 1, 1, 0)");
		}
		//		$(this).css("opacity", "0.4");
	});
	$(".font-result").css("cursor", "pointer")
	$(".font-result").click(function() {
		if($(this).css("color") == "rgba(1, 1, 1, 0)") {
			$(this).css("color", "#00F6FF");
		} else {
			$(this).css("color", "rgba(1, 1, 1, 0)");
		}
	});

})();

//========================================================== 选择题的答案显示===================================
(function() {
	$(".example-explain-div .query-span").click(function() {
		var query = $(this).parents(".example-explain-div").find(".example-explain-div-result").children();
		var queryNum = $(this).attr("name");
		var inner = "";
		for(var i = 0; i < queryNum.length; i++) {
			inner += $(($(query[queryNum[i] - 1]).children())[0]).html()[0]
			$(query[queryNum[i] - 1]).css("color", "#00f6ff");
		}
		$(this).css({
			"background": "none",
			"color": "#00f6ff"
		}).html(inner)
	});
})();

//======================================动画讲解模块下面的左右切换；文字部分的切换=====================================
(function() {
	var explain_div_leng = 0;
	var explain_div_index = 0;
	$(".explain-div .explain-div-content-left").click(function() {
		$(".explain-div-content-right").css("opacity", "1")
		if(explain_div_index == 0) {} else {
			explain_div_index--
			explain_div_leng = $(this).parents(".explain-div").find(".explain-div-content_box").children().length;
			$(this).parents(".explain-div").find(".explain-div-content-box").children().css("display", "none")
			$(this).parents(".explain-div").find(".explain-div-content-box").children()[explain_div_index].style.display = 'block';
			if(explain_div_index == 0) {
				$(this).css("opacity", "0.3")
			};
		};
	});
	$(".explain-div .explain-div-content-right").click(function() {
		$(".explain-div-content-left").css("opacity", "1")
		explain_div_leng = $(this).parents(".explain-div").find(".explain-div-content-box").children().length;
		if(explain_div_index < explain_div_leng - 1) {
			explain_div_index++
			$(this).parents(".explain-div").find(".explain-div-content-box").children().css("display", "none")
			$(this).parents(".explain-div").find(".explain-div-content-box").children()[explain_div_index].style.display = 'block';
			if(explain_div_index == explain_div_leng - 1) {
				$(this).css("opacity", "0.3")
			};
		};
	});
})();

//==================================表格里面的点击显示隐藏的功能================================
(function() {
	var table_glass = $(".table-glass");
	var table_hiddle = $(".table-hiddle");
	var table_L = $(".table-hiddle-L");
	var table_H = $(".table-hiddle-H");

	//	table_glass.click(function() {
	//		console.log($(this).parent().css("color"))
	//		if($(this).parent().css("color")== "rgba(1, 1, 1, 0)"){
	//				$(this).parent().css("color", "rgba(255,255,255,1)")
	//		}else{
	//			$(this).parent().css("color", "rgba(1, 1, 1, 0)")
	//		};
	//	});点击放大镜出图片

	table_hiddle.click(function() {
		if($(this).css("color") == "rgba(1, 1, 1, 0)") {
			$(this).css("color", "rgba(255,255,255,1)")
		} else {
			$(this).css("color", "rgba(1, 1, 1, 0)")
		};
	});

	table_H.siblings().css("color", "rgba(255,255,255,0)");
	table_H.click(function() {
		console.log($(this).siblings().css("color"))
		if($(this).siblings().css("color") == "rgba(255, 255, 255, 0)") {
			$(this).siblings().css("color", "rgba(255,255,255,1)");
		} else {
			$(this).siblings().css("color", "rgba(255, 255, 255, 0)");
		}
	});
	
	var table_td = table_L.parent().siblings().children("td");
	var index1 = [];
	for(let i=0;i<table_L.length; i++){
		index1.push($(table_L[i]).index())
	};
	for(let i=0; i<table_td.length; i++) {
			if(index1.indexOf($(table_td[i]).index()) >=0 ){
				$(table_td[i]).css("color", "rgba(255, 255, 255, 0)");
			}
	};
	table_L.click(function() {
		var index = $(this).index();
		for(let i = 0; i < table_td.length; i++) {
			if($(table_td[i]).css("color") == "rgba(255, 255, 255, 0)" && $(table_td[i]).index() == index ) {
				$(table_td[i]).css("color", "rgba(255, 255, 255, 1)");
			} else if($(table_td[i]).index() != index){
				
			}else{
				$(table_td[i]).css("color", "rgba(255, 255, 255, 0)");
			}
		};
	});
})();


//=================================================基本图片预览弹出窗口的功能按键=================================================
(function() {
	//下面是动态控制图片样式的代码
	var look_img1 = $(".look-img");
	var look_img1leng = look_img1.length;
	for(let i = 0; i < look_img1leng; i++) {
		var look_img = $(look_img1[i]);
		look_img.append($("<i></i>").css({
			"display": "block",
			"width": "100%",
			"height": "0.01rem",
			"clear": "both"
		}));
		var img_length = look_img.children("div");
		img_length.css("cursor", "pointer");
		//下面是设置样式的更加内部图片数量的不同动态的设置样式
		if(img_length.length == 1) {
			look_img.children("div").css({
				"width": "5.2rem",
				"height": "3rem",
				"margin": "0 auto"
			});
		} else if(img_length.length == 2) {
			look_img.children("div").css({
				"width": "3.7rem",
				"height": "2.48rem",
				"float": "left"
			});
			look_img.children("div").eq(0).css("margin-right", "0.8rem")
		} else if(img_length.length == 3) {
			look_img.children("div").css({
				"width": "2.6rem",
				"height": "2rem",
				"float": "left"
			});
			img_length[1].style.marginLeft = "0.34rem";
			img_length[2].style.marginLeft = "0.34rem";
		} else if(img_length.length == 4) {
			look_img.children("div").css({
				"width": "2.6rem",
				"height": "2rem",
				"float": "left",
				"margin-right": "0.35rem",
				"margin-bottom": "0.4rem"
			});
			img_length[0].style.marginLeft = "1.45rem";
			img_length[1].style.marginRight = "0.4rem";
			img_length[2].style.marginLeft = "1.45rem";
			img_length[3].style.marginRight = "0.4rem";
		} else if(img_length.length > 4) {
			look_img.children("div").css({
				"width": "2.6rem",
				"height": "2rem",
				"float": "left",
				"margin-right": "0.34rem",
				"margin-bottom": "0.4rem"
			});
			for(let i = 0; i < img_length.length; i++) {
				if((i + 1) % 3 == 0) {
					img_length[i].style.marginRight = "0px";
				};
			};
		};
		look_img.children().bind("click", look_img_click_fun);
	};

	//下面是点击图片的时候存储图片已经图片说明的方法代码；
	var imgArr //存放图片的数组
	var spanArr //存放图片说名的代码；并不是每一个图片都有说明		
	var img_Twindow = $(".img-Twindow"); //图片的弹框 
	var explain_div_content_left = $(".img-Twindow .explain-div-content-left"); //左切换按键
	var explain_div_content_right = $(".img-Twindow .explain-div-content-right"); //右切换按键	
	var img_Twindow_close = $(".img-Twindow .img-Twindow-close"); //弹框关闭按键
	var img_Twindow_img_div = $(".img-Twindow-img-div"); //放置span内容的div
	var img_TwindowImg = img_Twindow.children().children("img"); //弹框显示图片的位；
	//下面是图片浏览的点击弹框时间  浏览图片用；
	function look_img_click_fun() {
		//重点在这里  如何提取出正确的图片列表
		spanArr = []; //存放图片说名的代码；并不是每一个图片都有说明		
		imgArr = []; //存放图片的数组
		var sibObj = $(this).parent().children().children("img");
		var sibObjspan = $(this).parent().children();
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
		img_Twindow.css("display", "block"); //弹框显示
		$(".popup-shade").css("display", "block"); //遮罩显示

		var index = imgArr.indexOf($(this).children("img").attr("src")); //这个图片的位置；
		//下面是判断是否显示左右点击按键  已经按键应该具有的样式
		if(sibObj.length == 1) {
			explain_div_content_left.css("display", "none");
			explain_div_content_right.css("display", "none");
		} else {
			explain_div_content_left.css("display", "block");
			explain_div_content_right.css("display", "block");
		};
		judgeImg1(index);
		YNspan1(index);
		explain_div_content_left[0].addEventListener("click", funleft, false);
		explain_div_content_right[0].addEventListener("click", funright, false);
		img_Twindow_close[0].addEventListener("click", funclose, false);
	}

	function funleft() {
		var index = imgArr.indexOf(img_Twindow.children().children("img").attr("src"));
		index--
		YNspan1(index);
		judgeImg1(index);

	};

	function funright() {
		var index = imgArr.indexOf(img_Twindow.children().children("img").attr("src"));
		index++
		YNspan1(index);
		judgeImg1(index);
	};

	function funclose() {
		img_Twindow.css("display", "none")
		$(".popup-shade").css("display", "none"); //遮罩显示

		spanArr = [];
		imgArr = [];
		explain_div_content_left[0].removeEventListener("click", funleft, false);
		explain_div_content_right[0].removeEventListener("click", funright, false);
		img_Twindow_close[0].removeEventListener("click", funclose, false);
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
	//	 判断应该显示哪一张图片 已经按键的样子
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
		img_Twindow.children().children("img").attr("src", imgArr[index2]);
	};
})();


//====================================图片浏览外加问题解答的图片浏览点击效果==========================================
(function() {
	var question_img_box_img = $(".question-img-box-img"); //可以点击部分
	var img_Twindow = $(".img-Twindow"); //弹框;
	var imgArr //存放图片的数组
	var spanArr //存放问题和答案对象的模块
	var explain_div_content_left = $(".m") //做切换按键
	var explain_div_content_right = $(".m") //右切换按键
	var img_TwindowImg1 //弹框显示图片的位；
	var img_Twindow_close = $(".m") //弹框关闭按键;
	var img_Twindow_img_div //放置span内容的div;	
	$(".question-img-box").children(".question-img-box-img").css("display", "none");
	$(".question-img-box").children(".question-img-box-img").eq(0).css("display", "block");
	question_img_box_img.click(function() {
		imgArr = []; //存放图片的数组
		spanArr = []; //存放问题和答案对象的模块
		explain_div_content_left = $(".img-Twindow .explain-div-content-left"); //做切换按键
		explain_div_content_right = $(".img-Twindow .explain-div-content-right"); //右切换按键
		img_TwindowImg1 = img_Twindow.children().children("img"); //弹框显示图片的位；
		img_Twindow_close = $(".img-Twindow .img-Twindow-close"); //弹框关闭按键;
		img_Twindow_img_div = $(".img-Twindow-img-div"); //放置span内容的div;	
		var sibObj = $(this).parent(".question-img-box").children(".question-img-box-img").children("img"); //图片集合
		var sibObjspan = $(this).parent(".question-img-box").children(".question-img-box-img"); //span内容集合；
		for(let i = 0; i < sibObjspan.length; i++){
			var span = $(sibObjspan[i]).children(".wenti");
			if(span[0]) {
				spanArr.push(span[0].innerHTML)
			} else {
				spanArr.push("1");
			}
		};
		for(let i = 0; i < sibObj.length; i++) {
			var imgUrl = $(sibObj[i]).attr("src")
			imgArr.push(imgUrl);
		};
		img_Twindow.css("display", "block"); //弹框显示
		var index = imgArr.indexOf($(this).children("img").attr("src")); //这个图片的位置；
		//下面是判断是否显示左右点击按键  已经按键应该具有的样式
		explain_div_content_left.css("display", "block");
		explain_div_content_right.css("display", "block");
		if(imgArr.length<2){
		explain_div_content_left.css("display", "none");
		explain_div_content_right.css("display", "none");
		}
		judgeImg(index);
		YNspan(index);
		explain_div_content_left[0].addEventListener("click", funleft, false);
		explain_div_content_right[0].addEventListener("click", funright, false);
		img_Twindow_close[0].addEventListener("click", funclose, false);
	});


	function funleft(){
		var index = imgArr.indexOf(img_Twindow.children().children("img").attr("src"));
		index--
		judgeImg(index);
		YNspan(index);
	};

	function funright() {
		var index = imgArr.indexOf(img_Twindow.children().children("img").attr("src"));
		index++
		judgeImg(index);
		YNspan(index);
	};

	function funclose() {
		img_Twindow.css("display", "none")
		spanArr = [];
		imgArr = [];
		explain_div_content_left[0].removeEventListener("click", funleft, false);
		explain_div_content_right[0].removeEventListener("click", funright, false);
		img_Twindow_close[0].removeEventListener("click", funclose, false);
	};

	//	判断问题是啥 以及答案是啥
	function YNspan(num) {

		img_Twindow_img_div.css("display", "none");
		var index = 0;
		if(num <= 0) {
			index = 0;
		} else if(num => imgArr.length - 1) {
			index = imgArr.length - 1;
		} else {
			index = num;
		};
		img_TwindowImg1.css({
			"width": "6rem",
			"height": "4.5rem",
			"margin": "0 auto"
		});
		img_Twindow_img_div.html(spanArr[index]);
		img_Twindow_img_div.css("display", "block");
		var img_click = img_Twindow_img_div.find(".font-result-clickimg");
		img_click.click(function() {
			var daan_img = $(this).attr("data-img");
			if(daan_img) {
				$(this).css("background", "url(" + daan_img + ")center no-repeat");
			} else {
				$(this).parent(".font-result").css("color", "#00f6ff");
				$(this).css("opacity","0")
			};
		});
	};
	// 判断应该显示哪一张图片 已经按键的样子
	function judgeImg(num) {
		var index = 0;
		if(num < 0) {
			index = 0;
		} else if(num > imgArr.length - 1) {
			index = imgArr.length - 1;
		} else {
			index = num;
		};
		if(index == 0) {
			explain_div_content_left.css("opacity", "0.3");
			explain_div_content_right.css("opacity", "1");
			img_Twindow.children().children("img").attr("src", imgArr[0]);
		} else if(index == imgArr.length - 1) {
			explain_div_content_right.css("opacity", "0.3");
			explain_div_content_left.css("opacity", "1");
			img_Twindow.children().children("img").attr("src", imgArr[index]);
		} else {
			img_Twindow.children().children("img").attr("src", imgArr[index]);
			explain_div_content_right.css("opacity", "1");
			explain_div_content_left.css("opacity", "1");
		}
	};
})();

//=========================================================================图片浏览模块的切图代码  有问题  可以出弹框的左右切换图片的控制模块js==========================
(function() {
	var left1 = $(".question-img-box .explain-div-content-left"); //左边按键
	var right1 = $(".question-img-box .explain-div-content-right"); //右边按键
	var img = $(".question-img-box").children(".question-img-box-img"); //内容集合
	img.css("display", "none");
	$(img[0]).css("display", "block");
	var index = 0;

	left1.click(function() {
		index--
		if(index <= 0) {
			index = 0;
		};
		fun1(index);
	});
	right1.click(function() {
		index++
		if(index > img.length - 1) {
			index = img.length - 1;
		};
		fun1(index);
	});

	function fun1(num) {
		var index = 0;
		img.css("display", "none");
		if(num == 0) {
			index = 0;
			$(img[0]).css("display", "block");
			right1.css("opacity", "1");
			left1.css("opacity", "0.3");
		} else if(num == img.length - 1) {
			index = img.length - 1;
			$(img[index]).css("display", "block");
			left1.css("opacity", "1");
			right1.css("opacity", "0.3");
		} else {
			index = num;
			$(img[index]).css("display", "block");
			left1.css("opacity", "1");
			right1.css("opacity", "1");
		};
	}
})();


//=================================================页面中直接浏览大图模块的切图代码  大图片浏览模块======================================
(function() {
	var left = $(".browse-img-box .explain-div-content-left"); //左边按键
	var right = $(".browse-img-box .explain-div-content-right"); //右边按键
	var img = $(".browse-img-box").children(".browse-img-box-img");
	var content = $(".browse-img-box-content").children("span");
	var num1 = $(".browse-img-box-content").find(".num1");
	var num2 = $(".browse-img-box-content").find(".num2");
	img.css("display", "none");
	$(img[0]).css("display", "block");
	content.html(img.children("span").html());
	num1.html("1")
	num2.html("/&nbsp;" + img.length)
	var index = 0;
	left.click(function() {
		index--
		if(index < 0) {
			index = 0;
		};
		fun1(index);
	});
	right.click(function() {
		index++
		if(index > img.length - 1) {
			index = img.length - 1;
		};
		fun1(index);
	});

	function fun1(num) {
		var index = 0;
		img.css("display", "none");
		if(num == 0) {
			index = 0;
			$(img[0]).css("display", "block");
			left.css("opacity", "0.3");
			right.css("opacity", "1");
		} else if(num == img.length - 1) {
			index = img.length - 1;
			$(img[index]).css("display", "block");
			left.css("opacity", "1");
			right.css("opacity", "0.3");
		} else {
			index = num;
			$(img[index]).css("display", "block");
			left.css("opacity", "1");
			right.css("opacity", "1");
		};
		content.html($(img[index]).children("span").html());
		num1.html(index + 1)
	}
})();

//====================================================文本弹框功里面的tab切换功能=================================
(function() {
	var img_Twindow_close = $(".content-Twindow .img-Twindow-close");
	img_Twindow_close.click(function() {
		$(this).parent().css("display", "none");
	});

	var tab_menu = $(".content-Twindow .tab-menu").children("li");
	var leng = tab_menu.length; //可以点击的li的长度
	var $ul = $(".content-Twindow .tab-menu");
	var lengArr = []; //li右边界限值
	var lengArr1 = []; //li左边的界限值
	var leftArr = []; //存放定位位置的数组
	var num = 0;

	var inner = $(".content-Twindow .content-Twindow-content").children(".inner");
	for(let i = 0; i < leng; i++) {
		tab_menu[i].index = i;
		tab_menu[i].addEventListener("click", funClick, false);
	};

	inner.css("display", "none");
	$(inner[0]).css("display", "block")

	function funClick() {
		var i = this.index;
		$(this).addClass("current").siblings().removeClass("current");
		$(".tab-box").children().eq(i).show().siblings().hide();
		inner.css("display", "none");
		$(inner[i]).css("display", "block")
		console.log(inner[i])
	};

	for(let i = 0; i < leng; i++) {
		lengArr.push((tab_menu[i].offsetWidth + tab_menu[i].offsetLeft) / c / 100);
		lengArr1.push((tab_menu[i].offsetLeft) / c / 100);
	}; //遍历左边和右边的位置
	for(let i = 0; i < lengArr.length; i++) {
		if(lengArr[i] - num > 5.7) {
			leftArr.push(lengArr[i]);
			num = lengArr1[i];
		};
	}; //遍历出需要定的位置

	var leftBtn = $(".content-Twindow .tab-switch").find(".left-btn");
	var rightBtn = $(".content-Twindow .tab-switch").find(".right-btn");

	if(leftArr.length == 0) {
		leftBtn.css("display", "none");
		rightBtn.css("display", "none");
	}; //判断初始化是不是需要显示左右点击按键

	var clickNum = 0;
	leftBtn.click(function() {
		clickNum--
		if(clickNum <= 0) {
			clickNum = 0;
			leftBtn.css({
				"opacity": "0.4",
				"cursor": "auto"
			});
			rightBtn.css("opacity", "1");
		} else {
			leftBtn.css({
				"opacity": "1",
				"cursor": "pointer"
			});
			rightBtn.css({
				"opacity": "1",
				"cursor": "pointer"
			});
		};
		console.log(clickNum);
		ulPo(clickNum);
	});
	rightBtn.click(function() {
		clickNum++;
		if(clickNum >= leftArr.length) {
			clickNum = leftArr.length;
			rightBtn.css({
				"opacity": "0.4",
				"cursor": "auto"
			});
			leftBtn.css("opacity", "1");
		} else {
			leftBtn.css({
				"opacity": "1",
				"cursor": "pointer"
			});
			rightBtn.css({
				"opacity": "1",
				"cursor": "pointer"
			});
		};
		ulPo(clickNum);
	});

	function ulPo(num) {
		var index;
		if(num <= 0) {
			index = 0
			$ul.css("left", "0rem");
		} else {
			index = num - 1;
			$ul.css("left", ("-" + leftArr[index]) + "rem");
		};
	};
	ulPo(0);
})();

//===============================头部导航的点击切换的效果=============================================
(function() {
	var tab_menu = $(".header .tab-menu").children("li"); //可以点击的li
	var $ul = $(".header .tab-menu"); //ul容器
	var leng = tab_menu.length; //可以点击的li的长度
	var lengArr = []; //li右边界限值
	var lengArr1 = []; //li左边的界限值
	var leftArr = []; //存放定位位置的数组
	var num = 0;
	var inner = $(".content").children(".inner");
	var innerPage;
	var content_left = $(".prevPage-btn");
	var content_right = $(".nextPage-btn");

	//	 给所有的选项卡注册单击事件
	for(let i = 0; i < leng; i++) {
		tab_menu[i].index = i;
		tab_menu[i].addEventListener("click", funClick, false);
	};

	//导航点击事件
	function funClick() {
		var i = this.index;
		$(".move-window").css("display", "none");
		$(this).addClass("current").siblings().removeClass("current");
		$(".tab-box").children().eq(i).show().siblings().hide();
		inner.css("display", "none");
		tabContent($(inner[i]))
	};

	//循环遍历所有的位置
	for(let i = 0; i < leng; i++) {
		lengArr.push((tab_menu[i].offsetWidth + tab_menu[i].offsetLeft) / c / 100);
		lengArr1.push((tab_menu[i].offsetLeft) / c / 100);
	};
	for(let i = 0; i < lengArr.length; i++) {
		if(lengArr[i] - num > 7.2) {
			leftArr.push(lengArr[i]);
			num = lengArr1[i];
		};
	};

	var leftBtn = $(".tab-container").find(".left-btn");
	var rightBtn = $(".tab-container").find(".right-btn");
	//判断导航是否应该出现按键
	if(leftArr.length == 0) {
		leftBtn.css("display", "none");
		rightBtn.css("display", "none");
	}; //判断初始化是不是需要显示左右点击按键

	var clickNum = 0;
	leftBtn.click(function() {
		clickNum--
		if(clickNum <= 0) {
			clickNum = 0;
			leftBtn.css({
				"opacity": "0.4",
				"cursor": "auto"
			});
			rightBtn.css("opacity", "1");
		} else {
			leftBtn.css({
				"opacity": "1",
				"cursor": "pointer"
			});
			rightBtn.css({
				"opacity": "1",
				"cursor": "pointer"
			});
		};
		ulPo(clickNum);
	});
	rightBtn.click(function() {
		clickNum++;
		if(clickNum >= leftArr.length - 1) {
			clickNum = leftArr.length - 1;
			rightBtn.css({
				"opacity": "0.4",
				"cursor": "auto"
			});
			leftBtn.css("opacity", "1");
		} else {
			leftBtn.css({
				"opacity": "1",
				"cursor": "pointer"
			});
			rightBtn.css({
				"opacity": "1",
				"cursor": "pointer"
			});
		};
		ulPo(clickNum);
	});

	function ulPo(num) {
		var index;
		if(num <= 0) {
			index = 0
			$ul.css("left", "0rem");
		} else {
			index = num - 1;
			$ul.css("left", ("-" + leftArr[index]) + "rem");
		};
	};
	ulPo(0);

	//页面内容的翻页效果
	var tabContent_content;
	var tabContent_content_click = 0;

	function tabContent(center) {
		center.css("display", "block");
		innerPage = center.children(".innerPage");
		if(innerPage.length > 1) {
			content_left.css("display", "block");
			content_right.css("opacity","0.4")
			content_right.css("display", "block");
			center.children(".innerPage").css("display", "none");
			center.children(".innerPage").eq(0).css("display", "block");
			tabContent_content = center;
		} else {
			content_left.css("display", "none");
			content_right.css("display", "none");
		}
	};
	inner.css("display", "none");
	tabContent($(inner[0]))
	content_left.click(function() {
		var length = tabContent_content.children(".innerPage").length;
		tabContent_content_click++
		if(tabContent_content_click >= length - 1) {
			tabContent_content_click = length - 1;
			content_left.css({
				"opacity": "0.4",
				"cursor": "auto"
			});
		}
		content_right.css("opacity", "1");
		tabContent_content.children(".innerPage").css("display", "none");
		tabContent_content.children(".innerPage").eq(tabContent_content_click).css("display", "block");
	});
	content_right.click(function() {
		tabContent_content_click--
		if(tabContent_content_click <= 0) {
			tabContent_content_click = 0
			content_right.css({
				"opacity": "0.4",
				"cursor": "auto"
			});
			
		}
		content_left.css("opacity", "1");
		tabContent_content.children(".innerPage").css("display", "none");
		tabContent_content.children(".innerPage").eq(tabContent_content_click).css("display", "block");
	});
})();

//=========================================文字说明的鼠标事件============================;
(function() {
	$(".browse-img-box-content").bind("mouseover", function() {
		$(".browse-img-box-content").css({
			'height': 'auto',
			'max-height': '3.26rem',
			'min-height': '0.84rem'
		});
		$('.jiantou').addClass("jiantou_mouseover");
	})
	$(".browse-img-box-content").bind("mouseout", function() {
		$(".browse-img-box-content").css('height', '0.84rem');
		$('.jiantou').removeClass("jiantou_mouseover");
	})
})()

//===================================================动画弹框控制=========================
function myScroll() {
	//前边是获取chrome等一般浏览器 如果获取不到就是ie了 就用ie的办法获取
	var x = document.body.scrollTop || document.documentElement.scrollTop;
	var timer = setInterval(function() {
		x = x - 100;
		if(x < 100) {
			x = 0;
			window.scrollTo(x, x);
			clearInterval(timer);
		}
		window.scrollTo(x, x);
	}, "10");
};

(function() {
	var middle_pop_up_btn_box = $(".middle-pop-up-btn-box").children("div");
	middle_pop_up_btn_box.click(function() {
		var pop = $(this).parents(".middle-pop-up-btn-box").siblings(".pop-up").eq($(this).index())
		pop.show();
		$(".popup-shade").css("display", "block"); //遮罩显示

		myScroll();
	});

	$(".closeBtn").click(function() {
		$(this).parents(".pop-up").fadeOut();
		$(".popup-shade").css("display", "none"); //遮罩显示

	});
})();

//动画的外部展示图片弹框的外部展示样式控制
(function() {
	//下面是动态控制图片样式的代码
	var look_img1 = $(".middle-pop-up-btn-box");
	var leng = look_img1.length;
	for(let i = 0; i < leng; i++) {
		var look_img = $(look_img1[i]);
		look_img.append($("<i></i>").css({
			"display": "block",
			"width": "100%",
			"height": "0.01rem",
			"clear": "both"
		}));
		var img_length = look_img.children("div");
		img_length.css("cursor", "pointer");
		//下面是设置样式的更加内部图片数量的不同动态的设置样式
		if(img_length.length == 1) {
			look_img.children("div").css({
				"width": "4rem",
				"height": "2.26rem",
				"margin": "0 auto"
			});
		} else if(img_length.length == 2) {
			look_img.children("div").css({
				"width": "3.98rem",
				"height": "2.26rem",
				"float": "left"
			});
			look_img.children("div").eq(0).css("margin-right", "0.62rem")
		} else if(img_length.length == 3) {
			look_img.children("div").css({
				"width": "2.6rem",
				"height": "2rem",
				"float": "left"
			});
			img_length[1].style.marginLeft = "0.34rem";
			img_length[2].style.marginLeft = "0.34rem";
		} else if(img_length.length == 4) {
			look_img.children("div").css({
				"width": "2.6rem",
				"height": "2rem",
				"float": "left",
				"margin-right": "0.35rem",
				"margin-bottom": "0.4rem"
			});
			img_length[0].style.marginLeft = "1.45rem";
			img_length[1].style.marginRight = "0.4rem";
			img_length[2].style.marginLeft = "1.45rem";
			img_length[3].style.marginRight = "0.4rem";
		} else if(img_length.length > 4) {
			look_img.children("div").css({
				"width": "2.6rem",
				"height": "2rem",
				"float": "left",
				"margin-right": "0.34rem",
				"margin-bottom": "0.4rem"
			});
			for(let i = 0; i < img_length.length; i++) {
				if((i + 1) % 3 == 0) {
					img_length[i].style.marginRight = "0px";
				};
			};
		};
	}
})();

//=================================================侦听窗口的滚用来控制视频图片小弹窗的======================================
(function() {
		var scrollNum = 0; //判断是否需要继续
		var moveWindowObj;
		$(window).scroll(function() {
				var scrollT = (document.documentElement.scrollTop + document.body.scrollTop) / c / 100;
				//获取需要进入小浮框的元素
				var qq = $(".move-window-class"); //全部该类dom
				var q = []; //需要增加id的dom
				var qF = []; //判断距顶距离的dom
				if(qq.length > 0) { //遍历出来需要进入浮框的元素
					for(let i = 0; i < qq.length; i++) {
						var pan = $(qq[i]).parents(".inner").css("display");
						if(pan == "block") {
							q.push(qq[i]);
							qF.push(($(qq[i]).parent(".move-window-classF"))[0]);
						}
					}
				};
				//判断该页面上是不是有需要进入小浮框的元素
				if(qF.length > 0) {
					var leng = $("#header").height(); //头部高度
					var num0 = (qF[0].offsetTop - leng) / c / 100; //第一个元素距顶高度；
					var numW0 = ($(qF[0]).height() / c / 100) * 1; //第一个元素的自身高度；
				if(q.length == 1) {
						if((num0 * 1 + numW0) < scrollT) {
							if(scrollNum == 0) {
								moveWindowObj = $(q[0]);
								move_window_mouse(moveWindowObj,false)
								scrollNum = 1;
							}
						} else if(num0 > scrollT) {
								move_window_mouse(moveWindowObj,true)
								scrollNum = 0;
						};
					};
					var num2 = (qF[qF.length - 1].offsetTop - leng) / c / 100; //最后一个元素的顶部距顶距离；
					var numW2 = ($(qF[qF.length - 1]).height() / c / 100) * 1; //最后一个元素的高度;
					for(let i = 0; i < q.length - 1; i++) {
						var num = (qF[i].offsetTop - leng) / c / 100; //第i个元素的距顶距离
						var numW = num + ($(qF[i]).height() / c / 100) * 1; //第i个元素的底部距顶距离；
						var num1 = (qF[i + 1].offsetTop - leng) / c / 100; //第i个元素的下一个元素的顶部距顶距离；
						if(numW < scrollT && scrollT < num1) { //中间位置
							if($(q[i]).attr("name") != "uuu"){
								console.log("jijijijij")
								move_window_mouse(moveWindowObj,true)
								moveWindowObj = $(q[i]);
								move_window_mouse(moveWindowObj,false)
								scrollNum = 0
							}
						}else if(num0 > scrollT) { //第一个的最上面
							move_window_mouse(moveWindowObj,true)
							scrollNum = 0
						}else if((num2 * 1 + numW2 * 1) < scrollT){ //最后一个元素滚动完毕
							if($(q[i]).attr("name") != "uuu" && scrollNum != 2){
								move_window_mouse(moveWindowObj,true)
								moveWindowObj = $(q[q.length - 1]);
								move_window_mouse(moveWindowObj,false)
								scrollNum = 1
							}
						};
					};
				};
			//=========================================可以拖动的小窗口的js代码============================;
			function move_window_mouse(obj,MA) {
				var move_window; //新的窗口
				var move_window_close; //新的关闭按键
				var move_window_cover; //新的遮罩层
				if(MA&&obj){
 					obj.find(".move-window-close").unbind(); //关闭按键绑定
					obj.find(".move-window-cover").unbind(); //遮罩层绑定按下
					obj.find(".move-window-cover").css("display","none")
					obj.unbind();
					obj.removeAttr("id");
					obj.removeAttr("name");
				}else if(obj){
					obj.attr("id", "move-window");
					obj.attr("name","uuu");
					move_window = $("#move-window"); //新的窗口
					move_window_close = move_window.find(".move-window-close"); //新的关闭按键
					move_window_cover = move_window.find(".move-window-cover"); //新的遮罩层
					move_window.bind("mouseover", mouseoverMouseover); //新窗口绑定移入
					move_window.bind("mouseout", mouseoutFun); //新窗口绑定移出
					move_window_close.bind("click", closeClick); //关闭按键绑定
					move_window_cover.bind('mousedown', mousedownFun); //遮罩层绑定按下
					move_window_cover.bind('mouseup', fun2); //遮罩层绑定鼠标抬起
				}
				var bottom_move = 0;
				var right_move = 0;
				function mouseoutFun() {
					move_window_cover.css("display", "none")
				};
				function mouseoverMouseover() {
					move_window_cover.css("display", "block")
				};
				function closeClick() {
					if(scrollNum == 1) {
						scrollNum = 2;
					};
					move_window_mouse(moveWindowObj,true)
					moveWindowObj.attr("style","none");
				};
				function mousedownFun(e){
					var e = e || event;
					var ax, ay, aa = 0;
					fontS = document.documentElement.clientWidth / 1024;
					(fontS <= 0.4) && (fontS = 0.4);
					ax = e.offsetX;
					ay = e.offsetY;
					ax1 = e.clientX;
					ay1 = e.clientY;
					var scrollT = document.documentElement.scrollTop + document.body.scrollTop / c / 100;
					onmousemove = function(e) {
						if(bottom_move == 0) {
							bottom_move = (ay1 - ay) / fontS / 100;
							right_move = (ax1 - ax) / fontS / 100;
						};
						document.documentElement.scrollTop = scrollT + "rem";
						var e = e || event;
						ax1 = e.clientX;
						ay1 = e.clientY;
						if(bottom_move == 0) {
							bottom_move = (ay1 - ay) / fontS / 100;
							right_move = (ax1 - ax) / fontS / 100;
						};
						if((ax1 - ax) / fontS / 100 < 0.2) {
							move_window[0].style.left = 0.2 + "rem";
						} else if((ax1 - ax) / fontS / 100 > right_move) {
							move_window[0].style.left = right_move + "rem";
						} else {
							move_window[0].style.left = (ax1 - ax) / fontS / 100 + "rem";
						};
						if((ay1 - ay) / fontS / 100 < 0.2) {
							move_window[0].style.top = 0.2 + 'rem';
						} else if((ay1 - ay) / fontS / 100 > bottom_move) {
							move_window[0].style.top = bottom_move + 'rem';
						} else {
							move_window[0].style.top = (ay1 - ay) / fontS / 100 + 'rem';
						};
					};
				};
				function fun2() {
					onmousemove = "null";
				};
			};
			//	侧面锚点定位判断
			var side_content_sigh = $(".side-content-sigh"); //页面中需要定位的元素；
			var side_content_anchor = $(".side-content-anchor"); //页面中从侧面定位导航栏；
			var side_content_anchorLeng = side_content_anchor.length; //页面中导航栏的个数；
			var side_content_sighLeng = side_content_sigh.length; //页面中需要定位的元素的个数；
			var side_content_anchorArr; //保存指定的导航栏；
			var side_content_sighArr = []; //保存指定的页面内部定位元素；
			var leng = $("#header").height();
			for(let i = 0; i < side_content_anchorLeng; i++) {
				if($(side_content_anchor[i]).parents(".inner").css("display") == "block") {
					side_content_anchorArr = $(side_content_anchor[i]).children();
				}
			};
			for(let i = 0; i < side_content_sighLeng; i++) {
				if($(side_content_sigh[i]).parents(".inner").css("display") == "block") {
					side_content_sighArr.push(side_content_sigh[i].offsetTop - leng);
				}
			};
			for(let i = 0; i < side_content_sighArr.length - 1; i++) {
				let topNum1 = side_content_sighArr[i] / c / 100;
				let topNum2 = side_content_sighArr[i + 1] / c / 100;
				if(topNum1 * 1 - 0.1 < scrollT && scrollT < topNum2 * 1 - 0.1) {
					$(".side-content-anchor").children().eq(i).css({
						"background": "#013285",
						"color": "#00f6ff"
					}).siblings().css({
						"background": "#0053b9",
						"color": "#fff"
					});
				} else if(topNum2 * 1 - 0.1 < scrollT) {
					$(side_content_anchorArr[side_content_sighArr.length - 1]).css({
						"background": "#013285",
						"color": "#00f6ff"
					}).siblings().css({
						"background": "#0053b9",
						"color": "#fff"
					});
				};
			};
		}); //滚动事件里面的东西
})(); //滚动事件最外层包裹



//侧面锚点的点击框样式已经功能实现;
(function() {
	var side_content_anchor = $(".side-content-anchor").children(); //侧栏锚点点击事件；
	$(side_content_anchor[0]).css({
		"border-top-left-radius": "0.04rem",
		"border-top-right-radius": "0.04rem"
	});
	$(side_content_anchor[side_content_anchor.length - 1]).css({
		"border-bottom-left-radius": "0.04rem",
		"border-bottom-right-radius": "0.04rem",
		"border": "none"
	});
	var side_content_sigh = $(".side-content-sigh"); //页面里面的需要定位的锚点位置；
	var length = side_content_sigh.length;
	var side_content_sigh_Arr = [];
	for(let i = 0; i < length; i++) {
		let hidden = $(side_content_sigh[i]).parents(".inner").css("display");
		side_content_sigh_Arr.push(side_content_sigh[i]);
	};
	side_content_anchor.click(function() {
		side_content_anchor.css({
			"background": "#0053b9",
			"color": "#fff"
		});
		$(this).css({
			"background": "#013285",
			"color": "#00f6ff"
		});
		let index = $(this).index();
		var leng = $("#header").height();
		var top = side_content_sigh_Arr[index].offsetTop;
		$("html,body").stop().animate({
			scrollTop: top - leng
		}, 1000);
	});
})();







//侧面点击出现提示框的侧面点击按键功能；
(function() {
	var side_content_block = $(".side-content-block").children(); //侧栏出弹框提示的点击按键；
	$(side_content_block[0]).css({
		"border-top-left-radius": "0.04rem",
		"border-top-right-radius": "0.04rem"
	});
	$(side_content_block[side_content_block.length - 1]).css({
		"border-bottom-left-radius": "0.04rem",
		"border-bottom-right-radius": "0.04rem",
		"border": "none"
	});
	var side_content_block_this;
	var side_content_block_thisNum = 0;
	side_content_block.click(function() {
		side_content_block.children("div").css("display", "none");
		side_content_block.children(".side-content-arrows").css("display", "none");
		side_content_block.css({
			"background": "#0053b9",
			"color": "#fff"
		});
		if($(this).index() != side_content_block_this) {
			$(this).children("div").css("display", "block");
			$(this).children(".side-content-arrows").css("display", "block");
			$(this).css({
				"background": "#013285",
				"color": "#00f6ff"
			});
			side_content_block_thisNum = 0
		} else if($(this).index() == side_content_block_this && side_content_block_thisNum == 0) {
			side_content_block_thisNum = 1;
		} else if($(this).index() == side_content_block_this && side_content_block_thisNum == 1) {
			$(this).children("div").css("display", "block");
			$(this).children(".side-content-arrows").css("display", "block");
			$(this).css({
				"background": "#013285",
				"color": "#00f6ff"
			});
			side_content_block_thisNum = 0;
		};
		side_content_block_this = $(this).index();
	})
})();




