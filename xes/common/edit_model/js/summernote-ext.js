(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'));
  } else {
    // Browser globals
    factory(window.jQuery);
  }
}(function ($) {

  // Extends plugins for adding hello.
  //  - plugin is external module for customizing.
  $.extend($.summernote.plugins, {
    /**
     * @param {Object} context - context object has status of editor.
     */
    'hello': function (context) {
      var self = this;

      // ui has renders to build ui elements.
      //  - you can create a button with `ui.button`
      var ui = $.summernote.ui;

      // add hello button
      context.memo('button.hello', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>换肤',
          tooltip: '换肤',
//        click: function () {
//          // invoke insertText method with 'hello' on editor module.
////          context.invoke('editor.insertText', 'hello');
//        },
        });
				
        // create jQuery object from button instance.
        var $hello = button.render();
        $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $hello;
      });
    },
    //'changebg': function (context) {
    //  var self = this;
    //
    //  // ui has renders to build ui elements.
    //  //  - you can create a button with `ui.button`
    //  var ui = $.summernote.ui;
    //
    //  // add hello button
    //  context.memo('button.changebg', function () {
    //    // create button
    //    var button = ui.button({
    //      contents: '<i class="fa fa-child"/>换背景',
    //      tooltip: '换背景',
    //      click:changebg
    //    });
    //
    //    // create jQuery object from button instance.
    //    var $changebg = button.render();
    //    return $changebg;
    //  });
    //},
    'blank': function (context) {
      var self = this;

      // ui has renders to build ui elements.
      //  - you can create a button with `ui.button`
      var ui = $.summernote.ui;

      // add hello button
      context.memo('button.blank', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>答案',
          tooltip: '设置填空答案',
          click: blank
        });

        // create jQuery object from button instance.
        var $blank = button.render();
//      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $blank;
      });
    },
    'setStep': function (context) {
      var self = this;
      // ui has renders to build ui elements.
      //  - you can create a button with `ui.button`
      var ui = $.summernote.ui;

      // add hello button
      context.memo('button.setStep', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>步骤',
        tooltip: '设置步骤',
          click: setStep
        });
        // create jQuery object from button instance.
        var $setStep = button.render();
//      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $setStep;
      });
    },
    //设置选中为可以点击的
    'setClick': function (context) {
      var self = this;
      var ui = $.summernote.ui;
      context.memo('button.setClick', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>设置点击按钮',
          tooltip: '设置点击弹出按钮',
          click: setClick
        });				
        // create jQuery object from button instance.
        var $setClick = button.render();
        $setClick.attr("disabled","disabled");
//      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $setClick;
      });
    },
    'setDrawer': function (context) {
      var self = this;
      var ui = $.summernote.ui;
      context.memo('button.setDrawer', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>添加几何画板',
          tooltip: '添加几何画板',
          click: setDrawer
        });
        // create jQuery object from button instance.
        var $setDrawer = button.render();
        //$setDrawer.attr("disabled","disabled");
//      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $setDrawer;
      });
    },
    'insertEngin': function (context) {
      var self = this;
      var ui = $.summernote.ui;
      context.memo('button.insertEngin', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>插入引擎',
          tooltip: '插入引擎文件',
          click: insertEngin
        });
        // create jQuery object from button instance.
        var $setDrawer = button.render();
        //$setDrawer.attr("disabled","disabled");
//      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $setDrawer;
      });
    },
    //设置选中为点击之后的弹出块
    'setPop': function (context) {
      var self = this;
      var ui = $.summernote.ui;
      context.memo('button.setPop', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>设置弹出内容',
          tooltip: '设置为弹出块',
          click: setPop
        });				
        // create jQuery object from button instance.
        var $setPop = button.render();
        $setPop.attr("disabled","disabled");
//      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $setPop;
      });
    },
    //设置选中为点击之后的弹出块
    'setPopR': function (context) {
      var self = this;
      var ui = $.summernote.ui;
      context.memo('button.setPopR', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>设置右侧弹出',
          tooltip: '设置为右侧弹出',
          click: setPopR
        });
        // create jQuery object from button instance.
        var $setPopR = button.render();
        $setPopR.attr("disabled","disabled");
//      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $setPopR;
      });
    },
//    //设置选中为可点击（点击出弹框）
//    'setClick2': function (context) {
//      var self = this;
//      var ui = $.summernote.ui;
//      context.memo('button.setClick2', function () {
//        // create button
//        var button = ui.button({
//          contents: '<i class="fa fa-child"/>可点击2',
//          tooltip: '设置为可点击',
//          click: setClick2
//        });
//        // create jQuery object from button instance.
//        var $setClick2 = button.render();
////      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
//        return $setClick2;
//      });
//    },
    //设置选中为点击之后出现的弹框
    'setPopWindow': function (context) {
      var self = this;
      var ui = $.summernote.ui;
      context.memo('button.setPopWindow', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>设置弹框',
          tooltip: '设置为弹框',
          click: setPopWindow
        });
        // create jQuery object from button instance.
        var $setPopWindow = button.render();
        $setPopWindow.attr("disabled","disabled");
//      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $setPopWindow;
      });
    },
    'insertRsource': function (context) {
      var self = this;

      // ui has renders to build ui elements.
      //  - you can create a button with `ui.button`
      var ui = $.summernote.ui;

      // add hello button
      context.memo('button.insertRsource', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>插入动画',
          tooltip: '插入canvas动画',
          //click: context.createInvokeHandler('canvasDialog.show')
        });
        // create jQuery object from button instance.
        var $insertRsource = button.render();
        $insertRsource.attr({"data-toggle":"modal","data-target":"#canvasdropper"});
        return $insertRsource;
      });
    },
    'reset': function (context) {
      var self = this;

      // ui has renders to build ui elements.
      //  - you can create a button with `ui.button`
      var ui = $.summernote.ui;

      // add hello button
      context.memo('button.reset', function () {
        // create button
        var button = ui.button({
          contents: '<i class="fa fa-child"/>重置',
          tooltip: '重置',
          click: reset
        });
				
        // create jQuery object from button instance.
        var $reset = button.render();
//      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
        return $reset;
      });
    },
//    'math': function (context) {
//      var self = this;
//
//      // ui has renders to build ui elements.
//      //  - you can create a button with `ui.button`
//      var ui = $.summernote.ui;
//
//      // add hello button
//      context.memo('button.math', function () {
//        // create button
//        var button = ui.button({
//          contents: '<i class="fa fa-child"/>公式',
//          tooltip: '打开公式编辑',
//          click: math
//        });
//
//        // create jQuery object from button instance.
//        var $math = button.render();
////      $hello.attr({"data-toggle":"modal","data-target":"#dropper"});
//        return $math;
//      });
//    }
  });
}));
