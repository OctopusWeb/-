/**
 * Created by xuekaima on 2016/12/18.
 */
$(function() {
    $('#choices div').unbind();
    var PageController = function() {
        $('.answer').removeClass('right');
        $('.answer').removeClass('wrong');
        $('.foot-left-num1').text('0');
        $('.foot-center-box').width('0%');
        $('.foot-num span').text('1');
        this.score = 0;
        this.progress = 0;
        this.hasJudged = false;
        this.questions = [
            {
                "question": "固体药品的取用正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/1/x1.png",
                        "answer": "r"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/1/x2.png",
                        "answer": "w"
                    }
                ]
            },
            {
                "question": "固体药品的取用正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/2/x3.png",
                        "answer": "w"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/2/x4.png",
                        "answer": "r"
                    }
                ]
            },
            {
                "question": "液体的倾倒正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/3/x5.png",
                        "answer": "w"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/3/x6.png",
                        "answer": "r"
                    },
                    {
                        "choice": "选项3",
                        "img": "img/3/x7.png",
                        "answer": "w"
                    }
                ]
            },
            {
                "question": "液体的量取正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/4/x8.png",
                        "answer": "r"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/4/x9.png",
                        "answer": "w"
                    }
                ]
            },
            {
                "question": "用滴管取液体正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/5/x10.png",
                        "answer": "r"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/5/x11.png",
                        "answer": "w"
                    }
                ]
            },
            {
                "question": "酒精灯的使用正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/6/x12.png",
                        "answer": "w"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/6/x13.png",
                        "answer": "r"
                    }
                ]
            },
            {
                "question": "酒精灯的使用正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/7/x14.png",
                        "answer": "r"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/7/x15.png",
                        "answer": "w"
                    }
                ]
            },
            {
                "question": "加热方法正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/8/x16.png",
                        "answer": "r"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/8/x17.png",
                        "answer": "w"
                    },
                    {
                        "choice": "选项3",
                        "img": "img/8/x18.png",
                        "answer": "w"
                    }
                ]
            },
            {
                "question": "闻气味正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/9/x19.png",
                        "answer": "r"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/9/x20.png",
                        "answer": "w"
                    }
                ]
            },
            {
                "question": "称量固体正确的是?",
                "choices": [
                    {
                        "choice": "选项1",
                        "img": "img/10/x21.png",
                        "answer": "r"
                    },
                    {
                        "choice": "选项2",
                        "img": "img/10/x22.png",
                        "answer": "w"
                    }
                ]
            }
        ];
    }
    PageController.prototype.showQuestion = function() {
        var que = this.questions.shift();
        $('.question').text(que.question);
        for(var i = 0; i < que.choices.length; i++) {
            var answer = $('#choices .answer').eq(i);
            answer.attr('data-answer', que.choices[i].answer);
            answer.find('img').attr('src', que.choices[i].img);
            answer.find('span').text(que.choices[i].choice);
        }
        if(que.choices.length > 2){
            $('#choices .answer').css('margin', '0');
            $('#choices .answer').eq(2).show();
            $('#choices .answer').css({'width':'2.6rem','height': '2rem','margin-right': '0.34rem'});
            $('#choices .answer').eq(2).css('margin-right','0');
        }else {
            $('#choices .answer').css('margin', '0');
            $('#choices .answer').eq(2).hide();
            $('#choices .answer').css({'width':'3.7rem','height': '2.48rem'});
            $('#choices .answer').eq(0).css('margin-right', '0.8rem');
        }
        this.progress += 1;
    }
    PageController.prototype.judgeAnswer = function(el) {
        this.hasJudged = true;
        if(el.attr('data-answer') == 'r') {
            el.addClass('right');
            this.score += 10;
            $('.foot-center-box').width(this.score + '%');
            $('.foot-left-num1').text(this.score);
        }else {
            el.addClass('wrong');
        }
        if(this.progress >= 10) {
            var _this = this;
            setTimeout(function(){
                $('.questions').hide();
                $('.result').show();
                $('.hui-foot').hide();
                var hundred = Math.floor(_this.score/100);
                var ten = Math.floor(_this.score/10);
                if(hundred > 0) {
                    $('#hundred, #ten').show();
                    $('#hundred').attr('data-num', '1');
                    $('#ten').attr('data-num', '0');
                }else if(ten > 0) {
                    $('#hundred').hide();
                    $('#ten').show();
                    $('#ten').attr('data-num', ten);
                }else {
                    $('#hundred, #ten').hide();
                }
            },500);
        }
    }


    var pageController = new PageController();
    pageController.showQuestion();

    $('#choices').on('click', '.answer', function(){
        if(!pageController.hasJudged)
            pageController.judgeAnswer($(this));
    });
    $('.again-btn').on('click', function() {
        $('.result').hide();
        $('.questions').show();
        $('.hui-foot').show();
        pageController = null;
        pageController = new PageController();
        pageController.showQuestion();
    })

    $('.foot-right').on('click', function() {
        if(!pageController.hasJudged) {
            // alert('请选择一个选项');
            return;
        }
        if(pageController.progress >= 10) {
            $('.questions').hide();
            $('.result').show();
            $('.hui-foot').hide();
            var hundred = Math.floor(pageController.score/100);
            var ten = Math.floor(pageController.score/10);
            if(hundred > 0) {
                $('#hundred, #ten').show();
                $('#hundred').attr('data-num', '1');
                $('#ten').attr('data-num', '0');
            }else if(ten > 0) {
                $('#hundred').hide();
                $('#ten').show();
                $('#ten').attr('data-num', ten);
            }else {
                $('#hundred, #ten').hide();
            }
            return;
        }
        $('.answer[data-answer=r]').removeClass('right');
        $('.answer[data-answer=w]').removeClass('wrong');
        $('.answer').addClass('rotate');
        setTimeout(function(){
            $('.answer').removeClass('rotate');
        },1000);
        pageController.showQuestion();
        pageController.hasJudged = false;
       
        $('.foot-num span').text(pageController.progress);
    });
});