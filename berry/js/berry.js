;(function($){
    var berry = {
        init:function(){
            var that = this;

            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.footerFn();
            that.cookieFn();
            that.mouseWheelFn();
        },

        headerFn:function(){
            
            var $mainLi = $('#section1 .menu-area > ul > li');
            var $mainBtn = $('#section1 .main-btn');
            var $sub = $('#section1 .sub');
            var click = true;

            var $headerBox = $('#header .header-box');
            var $sideBtn = $('#header .side-btn');
            var $iconBox = $('#header .icon-box');
            
            var $leftMenuArea  = $('#section1 .left-box .menu-area');
            var $MenuAreaBg    = $('#section1 .left-box .menu-areaBg');
            var $rightMenuArea = $('#section1 .right-box .menu-area');

            var $headerBox = $('#header .header-box');
            var $aside = $('#header #aside');

            setTimeout(function(){
                $headerBox.addClass('addAni');
                $aside.addClass('addAni');
            }, 800);

            $sideBtn.on({
                click:function(){
                    $(this).toggleClass('addBtn');
                    $iconBox.toggleClass('addBtn');
                    $headerBox.toggleClass('addBtn');
                    $leftMenuArea.toggleClass('addBtn');
                    $rightMenuArea.toggleClass('addBtn');

                    $MenuAreaBg.removeClass('addBtn');

                    setTimeout(function(){
                        $MenuAreaBg.addClass('addBtn');
                        $headerBox.toggleClass('addHide');
                    }, 1200);

                    $mainLi.removeClass('addClick');
                    $sub.stop().slideUp(500);
                }
            });


            $mainBtn.each(function(idx){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        if (click === true) { // 연속클릭시 발생하는 오류를 막기위해 버튼 클릭시 일정시간동안 동일실행이 불가능하도록 지정
                            click = false;
                            if ($mainLi.eq(idx).hasClass('addClick') === false) {
                                $mainLi.removeClass('addClick')
                            }
                            $(this).parent().toggleClass('addClick');
    
                            if ($mainBtn.eq(idx).hasClass('addClick') === false) {
                                $mainBtn.removeClass('addClick')
                            }
                            $sub.stop().slideUp(500);
                            $(this).next().stop().slideToggle(500);

                            setTimeout(function(){
                                click = true;
                            }, 500);
                        }

                    },
                    mouseenter:function(){
                        if(idx === 0){
                            $MenuAreaBg.css({background:'url(./img/img_subVisual01.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 1){
                            $MenuAreaBg.css({background:'url(./img/img_subVisual02.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 2){
                            $MenuAreaBg.css({background:'url(./img/img_subVisual03.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 3){
                            $MenuAreaBg.css({background:'url(./img/img_subVisual04.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 4){
                            $MenuAreaBg.css({background:'url(./img/img_subVisual05.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 5){
                            $MenuAreaBg.css({background:'url(./img/img_subVisual06.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                    }
                });
            })




        },
        section1Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var leftW  = 0.651;
            var rightW = 0.349;
            var $section1 = $('#section1');

            var $leftSlideView = $('#section1 .left-box .slide-view');
            var $leftSlideWrap = $('#section1 .left-box .slide-wrap');
            var $leftSlide  = $('#section1 .left-box .slide');
            var $leftSlideW = $leftSlide.innerWidth();
            var $prevBtn = $('#section1 .prev-btn');
            var $nextBtn = $('#section1 .next-btn');
            var cnt = 0;
            
            var TouchS      = 0;
            var TouchE      = 0;
            var TouchDelta  = false;
            var TouchYstart = 0;
            var TouchYend   = 0;
            
            var $rightSlide  = $('#section1 .right-box .slide');
            var $rightSlideW = $('#section1 .right-box .slide').innerWidth();
            var btn = null;

            var $nowPage = $('#section1 .now-page');
            var $totalPage = $('#section1 .total-page');
            var $plus = $('#section1 .plus');
            var $market = $('#section1 .market');

            var $btnWrap = $('#section1 .btn-wrap');
            var $leftBox = $('#section1 .left-box');
            var $rightTopBox = $('#section1 .right-box .top-box');
            var $rightBottomBox = $('#section1 .right-box .bottom-box');

            var setId    = null;
            var setId2   = null;
            var timercnt = 0;
            var $progressbar = $('#section1 .progress-bar');
            
            // 시작시 실행
            setTimeout(function(){
                $nowPage.html(cnt+1);
                $totalPage.html($rightSlide.length);
                $leftBox.addClass('addAni');
                $rightTopBox.addClass('addAni');
                $rightBottomBox.addClass('addAni');
                $btnWrap.addClass('addAni');
            }, 0);

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();

                $leftSlide.css({width:Math.round($winW*leftW)});
                $leftSlideW = $leftSlide.innerWidth();
                $leftSlideWrap.css({width:$leftSlideW*5});

                $rightSlide.css({width:$winW*rightW});
                $section1.css({width:$winW,height:$winH})
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            function leftSlideFn(){
                $leftSlideWrap.stop().animate({left:-$leftSlideW*cnt}, 800, function(){
                    if(cnt>2){cnt=0;}
                    if(cnt<0){cnt=2;}
                    $leftSlideWrap.stop().animate({left:-$leftSlideW*cnt}, 0)
                })
            }
            function rightSlideFn(){
                if(btn === false){
                    $rightSlide.css({zIndex:1}).stop().animate({opacity:1}, 0);
                    $rightSlide.eq(cnt).css({zIndex:2});
                    $rightSlide.eq(cnt===2?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 800);
                }
                else if(btn === true){
                    $rightSlide.css({zIndex:1});
                    $rightSlide.eq(cnt-1).css({zIndex:2});
                    $rightSlide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1}, 800);
                }
            }

            function prevCountFn(){
                cnt --;
                leftSlideFn();
                btn = false;
                if(cnt<0){
                    cnt=2;
                }
                rightSlideFn();
                $nowPage.html(cnt+1);
                progressFn();
            }
            function nextCountFn(){
                cnt ++;
                leftSlideFn();
                btn = true;
                if(cnt>2){
                    cnt=0;
                }
                rightSlideFn();
                $nowPage.html(cnt+1);
                progressFn();
            }
            $prevBtn.on({
                click:function(){
                    if(!$leftSlideWrap.is(':animated')){
                        prevCountFn();
                        slideTimerFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$leftSlideWrap.is(':animated')){
                        nextCountFn();
                        slideTimerFn();
                    }
                }
            });


            $leftSlideView.on({
                mousedown:function(e){
                    TouchDelta = true;
                    e.preventDefault();
                    TouchS = e.clientX;
                },
                mouseup:function(e){
                    TouchDelta = false;
                    e.preventDefault();
                    TouchE = e.clientX;
                    TouchSwipeFn();
                },
                mouseleave:function(e){
                    if(TouchDelta === true){
                        TouchDelta = false;
                        e.preventDefault();
                        TouchE = e.clientX;
                        TouchSwipeFn();
                    }
                },

                touchstart:function(e){
                    TouchDelta = true;
                    e.preventDefault();
                    TouchS = e.originalEvent.changedTouches[0].clientX;
                    TouchYstart = e.originalEvent.changedTouches[0].clientY;
                },
                touchend:function(e){
                    TouchDelta = false;
                    e.preventDefault();
                    TouchE = e.originalEvent.changedTouches[0].clientX;
                    TouchYend = e.originalEvent.changedTouches[0].clientY;

                    TouchSwipeFn();
                    if(TouchYstart-TouchYend < -50){
                        
                    }
                    if(TouchYstart-TouchYend > 50){
                      $('html,body').stop().animate({scrollTop: $('#section2').offset().top }, 600);
                    }  
                }
            });
            function TouchSwipeFn(){
                if(TouchS-TouchE > 30){
                    if(!$leftSlideWrap.is(':animated')){
                        nextCountFn();
                        slideTimerFn();
                    }
                }
                if(TouchS-TouchE < -30){
                    if(!$leftSlideWrap.is(':animated')){
                        prevCountFn();
                        slideTimerFn();
                    }
                }
            }

            $plus.on({
                click:function(){
                    $(this).toggleClass('addClick');
                    $market.toggleClass('addClick');
                }
            });

            function autoPlayFn(){
                setId = setInterval(nextCountFn, 5000);
                $progressbar.addClass('addAni');
            }
            autoPlayFn();

            function slideTimerFn(){
                timercnt = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    timercnt++;
                    if (timercnt >= 5) {
                        clearInterval(setId2);
                        nextCountFn();
                        autoPlayFn();
                    }
                }, 1000);
            }

            // If the script that makes the change to DOM is in the same thread, for some reason the change will not apply until the thread is finished.
            // So going by your way, the browser will see as if nothing has happened because the 'animate' class is removed and added in the same thread.
            // DOM을 변경하는 스크립트가 동일한 스레드에 있는 경우, 어떤 이유로 인해 스레드가 완료될 때까지 변경 내용이 적용되지 않습니다.
            // 따라서 브라우저는 'animate' 클래스가 제거되고 동일한 스레드에 추가되기 때문에 아무 일도 일어나지 않은 것처럼 보이게 됩니다.
            function progressFn(){
                $progressbar.removeClass('addAni');
                setTimeout(function(){
                    $progressbar.addClass('addAni');
                }, 10)
            }

            
        },
        section2Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var leftW  = 0.651;
            var rightW = 0.349;
            var $section2 = $('#section2');

            var $centerSlideView = $('#section2 .center-slide .slide-view');
            var $centerSlideWrap = $('#section2 .center-slide .slide-wrap');
            var $centerSlide = $('#section2 .center-slide .slide');
            var $centerSlideW = $centerSlide.innerWidth();
            var $prevBtn = $('#section2 .prev-btn');
            var $nextBtn = $('#section2 .next-btn');
            var cnt = 0;

            var $slideArea  = $('#section2 .slide-area');
            var $leftSlide  = $('#section2 .left-slide .slide');
            var $leftSlideW = $leftSlide.innerWidth();

            var $rightSlideWrap = $('#section2 .right-box .slide-wrap');
            var $rightSlide  = $('#section2 .right-box .slide');
            var $rightSlideW = $rightSlide.innerWidth();
            var btn = null;

            var $nowPage = $('#section2 .now-page');
            var $totalPage = $('#section2 .total-page');

            var $plus = $('#section1 .plus');
            var $market = $('#section1 .market');
            var t = 0;


            setTimeout(function(){
                $nowPage.html(cnt+1);
                $totalPage.html($leftSlide.length);
            }, 0);

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();
                
                $centerSlide.css({width:Math.round($winW*(leftW/2))});
                $centerSlideW = $centerSlide.innerWidth();
                $centerSlideWrap.css({width:$centerSlideW*5});

                $leftSlide.css({width:$winW*(leftW/2)});
                $leftSlideW = $leftSlide.innerWidth();
                $slideArea.css({width:$leftSlideW});

                $rightSlide.css({width:$winW*(rightW/2)});
                $rightSlideW = $rightSlide.innerWidth();
                $rightSlideWrap.css({width:$rightSlideW*8});

                $section2.css({width:$winW,height:$winH})
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            function centerSlideFn(){
                if(btn === false){
                    $centerSlide.stop().animate({opacity:0}, 550, function(){
                        if(cnt===2){
                            $centerSlide.eq(3).stop().animate({opacity:1});
                        }
                    });
                    $centerSlide.eq(cnt===2?0:cnt+1).stop().animate({opacity:1},0);
                    
                }
                if(btn === true){
                    $centerSlide.stop().animate({opacity:1});
                    $centerSlide.eq(cnt).stop().delay(150).animate({opacity:0}, 600);
                }
                $centerSlideWrap.stop().delay(300).animate({left:-$centerSlideW*cnt}, 600, function(){
                    if(cnt>2){cnt=0;}
                    if(cnt<0){cnt=2;}
                    $centerSlideWrap.stop().animate({left:-$centerSlideW*cnt}, 0)
                })
            }
            function rightSlideFn(){
                $rightSlideWrap.stop().animate({left:-$rightSlideW*cnt}, 600, function(){
                    if(cnt>2){cnt=0;}
                    if(cnt<0){cnt=2;}
                    $rightSlideWrap.stop().animate({left:-$rightSlideW*cnt}, 0)
                })
            }
            function leftSlideFn(){
                if(btn === false){
                    $leftSlide.css({zIndex:1}).stop().animate({opacity:1}, 0);
                    $leftSlide.eq(cnt).css({zIndex:2});
                    $leftSlide.eq(cnt===2?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 800);
                }
                else if(btn === true){
                    $leftSlide.css({zIndex:1});
                    $leftSlide.eq(cnt-1).css({zIndex:2});
                    $leftSlide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1}, 800);
                }
            }
            
            function prevCountFn(){
                btn = false;
                cnt --;
                centerSlideFn();
                rightSlideFn();
                if(cnt<0){
                    cnt=2;
                }
                leftSlideFn();
                $nowPage.html(cnt+1);
            }
            function nextCountFn(){
                btn = true;
                cnt ++;
                centerSlideFn();
                rightSlideFn();
                if(cnt>2){
                    cnt=0;
                }
                leftSlideFn();
                $nowPage.html(cnt+1);
            }
            $prevBtn.on({
                click:function(){
                    if(!$centerSlideWrap.is(':animated')&&!$leftSlide.is(':animated')){
                        prevCountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$centerSlideWrap.is(':animated')&&!$leftSlide.is(':animated')){
                        nextCountFn();
                    }
                }
            });

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section2').offset().top){
                    if(t === 0){
                        t = 1;
                        $plus.addClass('addScroll');
                        $market.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $plus.removeClass('addScroll');
                    $market.removeClass('addScroll');
                }
            });


        },
        section3Fn:function(){
            var $winW  = $(window).width();
            var $winH  = $(window).height();
            var $section3 = $('#section3');
            var $img = $('#section3 .img-box img');
            var t = 0;

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();

                $section3.css({width:$winW,height:$winH})
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section3').offset().top){
                    if(t === 0){
                        t = 1;
                        $img.addClass('addAni');
                    }
                }
                if($(window).scrollTop() === $('#section2').offset().top){
                    t = 0;
                    $img.removeClass('addAni');
                }
            });

        },
        footerFn:function(){
            var $familyBtn = $('#footer .family-btn');
            var $familyList = $('#footer .family-list');




            $familyBtn.on({
                click:function(){
                    $(this).toggleClass('addClick');
                    $familyList.toggleClass('addClick');
                }
            });


        },
        cookieFn:function(){
            var start = 0;
            var end = 0;

            // 2-1
            function getCookieFn(name){
                start = 0;
                end = document.cookie.indexOf('=');
                
                if(document.cookie.slice(start, end) === name){
                    start = document.cookie.indexOf('=')+1;
                    return document.cookie.slice(start);    // no
                }
                return '';  // 쿠키값을 못찾으면 ''을 리턴시킴
                
            }

            // 2-2
            function openPopFn(){
                var isCookie = getCookieFn('popup');

                if(isCookie !== 'no'){
                    window.open('popup.html', 'popup', 'width=400, height=600, top=100, left=1050');
                }
            }
            openPopFn();


        },
        mouseWheelFn:function(){
            var $main = $('#main');
            var $section = $('.section');
            var wheelDelta = 0;
            var cnt = 0;

            var $goTopBtn = $('#footer .gotop-btn');

            $goTopBtn.on({
                click:function(event){
                    event.preventDefault();
                    cnt=0;
                    var url = $(this).attr('href');
                    $('html,body').stop().animate({scrollTop:$(url).offset().top}, 800);
                }
            });

            $main.on('mousewheel DOMMouseScroll',function(event){
                event.preventDefault();

                if (event.originalEvent.wheelDelta) {
                    wheelDelta = event.originalEvent.wheelDelta;
                } else {    // 파이어폭스
                    wheelDelta = event.detail*-1
                }

                if (!$('html,body').is(':animated')) {
                    if(wheelDelta < 0) {
                        cnt++;
                        if (cnt>=3) {
                            cnt=3;
                            $('html,body').stop().animate({scrollTop:$section.eq(cnt-1).offset().top+200}, 800, 'swing');
                        } else {
                            $('html,body').stop().animate({scrollTop:$section.eq(cnt).offset().top}, 800, 'swing');
                        }
                    } else {
                        cnt--;
                        if (cnt<0) {cnt=0;}
                        $('html,body').stop().animate({scrollTop:$section.eq(cnt).offset().top}, 800, 'swing');
                    }
                }
            });
            

        }
        
    }
    berry.init();

})(jQuery);