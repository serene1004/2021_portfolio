(function ($) {

    var profile = {
        init: function () {
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.wheelEventFn();
        },
        section1Fn: function () {
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section1 = $('#section1');
            var $modal = $('#modal');
            var $introBox = $('#section1 .intro-box');
            var $introBoxH1 = $('#section1 .intro-box > h1');
            var $introBoxP = $('#section1 .intro-box > p');
            var $introBoxSpan = $('#section1 .intro-box > span');
            var $intro = $('#section1 .intro');
            var $cube = $('#wrap .cube');
            var $weather = $('#section1 .weather');
            var $timeA = $('#section1 .weather .time li > a');
            var $middayImg = $('#section1 .weather .midday > img');
            var x = 0;
            var y = 0;
            var xPercent = 0.095; // event.client에 곱해질 %변수
            var yPercent = 0.2;
            var $a = $('#section1 .link-wrap > span > a');
            var $profile = $('#section1 .profile > ul > li');
            var $profileA = $('#section1 .profile > ul > li > a');
            var $skills = $('#section1 .skills > ul > li');
            var $skillsP = $('#section1 .skills > ul > li > p');
            var $progressbar = $('#section1 .skills .progress-bar');

            window.onload = function() {
                setTimeout (function () {
                    scrollTo(0,0);
                }, 100);
            }

            function resizeFn() {
                $winW = $(window).width();
                $winH = $(window).height();

                $section1.css({width: $winW,height: $winH});
            }
            $(window).resize(function () {
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $modal.on({
                click: function () {
                    $('html').removeClass('addModal');
                    $modal.hide(0);

                    $intro.addClass('addAni');
                    $introBoxH1.hide(0);
                    $introBoxP.hide(0);
                    $introBoxSpan.hide(0);
                    setTimeout(function () {
                        $introBox.hide(0);
                    }, 1500)
                }
            });

            $section1.on({
                mousemove: function (event) {
                    x = event.clientX * xPercent;
                    y = event.clientY * yPercent;
                    $cube.css({
                        transform: 'perspective(600px) rotateX(' + (y - 90) + 'deg) rotateY(' + (x - 90) + 'deg) scale3d(1,1,1)'
                    });

                    $middayImg.eq(2).css({
                        transform: 'translateX(' + event.clientX + 'px) translateY(' + event.clientY + 'px) rotate(-60deg)'
                    })
                }
            });

            $a.each(function (idx) {
                $(this).on({
                    mouseenter: function () {
                        $a.removeClass('addAni');
                        $(this).addClass('addAni');
                        if (idx === 0) {
                            $profile.removeClass('addAni');
                            $skills.removeClass('addAni');
                            $progressbar.removeClass('addAni');
                        } else if (idx === 1) {
                            $profile.removeClass('addAni');
                            $skills.removeClass('addAni');
                            $progressbar.removeClass('addAni');
                        } else if (idx === 2) {
                            $profile.addClass('addAni');
                            $skills.addClass('addAni');
                            setTimeout(function () {
                                $progressbar.addClass('addAni');
                            }, 2000)
                        } else if (idx === 3) {
                            $profile.removeClass('addAni');
                            $skills.removeClass('addAni');
                            $progressbar.removeClass('addAni');
                        }
                    }
                });
            });

            $timeA.each(function (idx) {
                $(this).on({
                    click: function () {
                        $timeA.removeClass('addClick')
                        $(this).addClass('addClick');
                        if (idx === 0) {
                            $section1.removeClass('addClick');
                            $timeA.removeClass('addColor');
                            $weather.removeClass('addClick');
                            $profile.removeClass('addColor');
                            $skillsP.removeClass('addColor');
                            $profileA.removeClass('addColor');
                            $a.removeClass('addColor');
                        } else if (idx === 1) {
                            $section1.addClass('addClick');
                            $timeA.addClass('addColor');
                            $weather.addClass('addClick');
                            $profile.addClass('addColor');
                            $skillsP.addClass('addColor');
                            $profileA.addClass('addColor');
                            $a.addClass('addColor');
                        }
                    }
                });
            });

            // timer
            var today = null;
            var hour = null;
            var minute = null;
            var second = null;
            var txt = '';

            function timerFn() {
                today = new Date();
                hour = today.getHours();
                if (hour < 10) {
                    hour = '0' + hour;
                } else {
                    hour = hour;
                }

                minute = today.getMinutes();
                if (minute < 10) {
                    minute = '0' + minute;
                } else {
                    minute = minute;
                }

                second = today.getSeconds();
                if (second < 10) {
                    second = '0' + second;
                } else {
                    second = second;
                }

                txt = hour + ' : ' + minute + ' : ' + second + '';
                $a.eq(0).html(txt);
            }
            setInterval(function () {
                timerFn();
            }, 1000);


        },
        section2Fn: function () {
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section2 = $('#section2');
            var $p = $('#section2 .portfolio p');
            var $h2 = $('#section2 .portfolio h2');
            var $H3 = $('#section2 .portfolio h3');
            var $li = $('#section2 .portfolio ul > li');
            var $btnWrap = $('#section2 .title .btn-wrap');
            var t = 0;

            function resizeFn() {
                $winW = $(window).width();
                $winH = $(window).height();

                $section2.css({width: $winW,height: $winH});
            }

            $(window).resize(function () {
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section2').offset().top) {
                    if (t === 0) {
                        t = 1;
                        $btnWrap.addClass('addScroll');
                        $p.addClass('addScroll');
                        $h2.addClass('addScroll');
                        $H3.addClass('addScroll');
                        $li.addClass('addScroll');
                        $titleNavList.parent().addClass('addScroll');
                        $slideContainer.addClass('addScroll');
                        setTimeout(function(){
                            $pofolList01.addClass('addScroll');
                        }, 200);
                        setTimeout(function(){
                            $pofolList02.addClass('addScroll');
                        }, 400);
                        setTimeout(function(){
                            $pofolList03.addClass('addScroll');
                        }, 600);
                        setTimeout(function(){
                            $pofolList04.addClass('addScroll');
                        }, 800);
                    }
                }
                if ($(window).scrollTop() === $('#section1').offset().top) {
                    t = 0;
                    $btnWrap.removeClass('addScroll');
                    $p.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $H3.removeClass('addScroll');
                    $li.removeClass('addScroll');
                    $titleNavList.parent().removeClass('addScroll');
                    $slideContainer.removeClass('addScroll');
                    $pofolList.removeClass('addScroll');
                }
            });

            // fadeInOut Evnet
            var $portfolio = $('#section2 .portfolio');
            var $pofol = $('#section2 .pofol');
            var $pofolList   = $('#section2 .pofol ul > .list');
            var $pofolList01 = $('#section2 .pofol ul > .list01');
            var $pofolList02 = $('#section2 .pofol ul > .list02');
            var $pofolList03 = $('#section2 .pofol ul > .list03');
            var $pofolList04 = $('#section2 .pofol ul > .list04');


            function fadeTitleFn() {
                $portfolio.css({opacity:0, zIndex: 1, transition:'all 0s'});
                $portfolio.eq(cnt).css({opacity:1, zIndex: 2, transition:'all 1s'});

                $pofol.css({opacity:0, zIndex: 1, transition:'all 0s'});
                $pofol.eq(cnt).css({opacity:1, zIndex: 2, transition:'all 1s'});
            }


            // title영역 nav 제어
            var $titleNavList = $('#section2 .title-nav li');

            $titleNavList.each(function (idx) {
                $(this).on({
                    click: function () {
                        $titleNavList.children().removeClass('addClick');
                        $(this).children().addClass('addClick');
                        cnt = idx;
                        fadeTitleFn();
                        $slideWrap.stop().animate({left: -$slideW*cnt}, 600);
                    }
                });
            });

            // content영역 슬라이드
            var $slideContainer = $('#section2 .slide-container');
            var $slideView = $('#section2 .slide-view');
            var $slideWrap = $('#section2 .slide-wrap');
            var $slideW = $('#section2 .slide').innerWidth();
            var mDown = null;
            var start = null;
            var end = null;
            var cnt = 0;
            var toggle = 0;
            var move = 0;

            var st = null;  // 이전, 다음을 애니메이션을 위해 사용하는 변수
            var ed = null;  // 이전, 다음을 애니메이션을 위해 사용하는 변수
            

            $slideView.on('mousedown', function(event){
                event.preventDefault();
                toggle = 0;
                mDown = true;   // 드래그 시작
                if (cnt === 0) {
                    start = event.offsetX;
                } else if (cnt === 1) {
                    start = event.offsetX + $slideW*cnt;
                } else if (cnt === 2) {
                    start = event.offsetX + $slideW*cnt;
                } else if (cnt === 3) {
                    start = event.offsetX + $slideW*cnt;
                } else if (cnt === 4) {
                    start = event.offsetX + $slideW*cnt;
                }
                st = event.clientX;
            });


            $section2.on('mouseup', function(event){
                event.preventDefault();
                ed = event.clientX;

                mDown = false;   // 드래그 종료
                if ((st-ed) < -100) {
                    if (toggle === 0) {
                        toggle = 1;
                        prevCountFn();
                    }
                }
                if ((st-ed) > 100) {
                    if (toggle === 0) {
                        toggle = 1;
                        nextCountFn();
                    }
                }

                $slideWrap.stop().animate({left: -$slideW*cnt}, 600);
                $titleNavList.children().removeClass('addClick');
                $titleNavList.children().eq(cnt).addClass('addClick');
            });

            function prevCountFn(){
                cnt--;
                if (cnt < 0) {
                    cnt = 0;
                }
                fadeTitleFn();
            }
            function nextCountFn(){
                cnt++;
                if (cnt > 4) {
                    cnt = 4;
                }
                fadeTitleFn();
            }

            $slideView.on('mousemove', function(event){
                if (mDown === true) {
                    end = event.offsetX;
                    $slideWrap.css({left:end-start});
                    if (cnt === 0 && (end-start) > 0) {
                        if ((end-start) > 20) {
                            move = end-start;
                            move = 20;
                            $slideWrap.css({left:move});
                        }
                    } else if (cnt === 4 && (end-start) < -$slideW*cnt) {
                        if ((end-start) < -$slideW*cnt-20) {
                            move = end-start;
                            move = -$slideW*cnt-20;
                            $slideWrap.css({left:move});
                        }
                    }
                }
            });

        },
        section3Fn: function () {
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section3 = $('#section3');
            var $fireworks = $('.firework i');
            var $fireworksLine = $('.firework i > i');
            var $firework = $('.firework i > span');
            var $ignite = $('.firework > span > span');
            var $fireworkBtn = $('.firework-btn');
            var fire = true;
            var t = 0;

            var $p = $('#section3 .contact p');
            var $span = $('#section3 .contact > span');
            var $h4 = $('#section3 .contact h4');
            var $h2 = $('#section3 .contact h2');
            var $btnWrap = $('#section3 .contact .firework-btn-wrap');
            var $waveText = $('#section3 .wave-text span');


            function resizeFn() {
                $winW = $(window).width();
                $winH = $(window).height();

                $section3.css({width: $winW,height: $winH});
            }

            $(window).resize(function () {
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            $(window).scroll(function () {
                if ($(window).scrollTop() >= $('#section3').offset().top) {
                    if (t === 0) {
                        t = 1;
                        $p.addClass('addScroll');
                        $span.addClass('addScroll');
                        $h4.addClass('addScroll');
                        $h2.addClass('addScroll');
                        fireworkFn();
                    }
                }
                if ($(window).scrollTop() === $('#section2').offset().top) {
                    t = 0;
                    $p.removeClass('addScroll');
                    $span.removeClass('addScroll');
                    $h4.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $btnWrap.removeClass('addScroll');
                    $waveText.removeClass('addClick');
                }
            });

            $h2.on({
                click: function () {
                    $waveText.toggleClass('addClick');
                }
            })

            function fireworkFn() {
                if (fire === true) {
                    fire = false;
                    $ignite.addClass('addAni');
                    setTimeout(function () {
                        $fireworks.addClass('addAni');
                        $fireworksLine.addClass('addAni');
                    }, 2000);
                    setTimeout(function () {
                        $fireworksLine.removeClass('addAni');
                    }, 3500);
                    setTimeout(function () {
                        $firework.addClass('addAni');
                    }, 4500);

                    setTimeout(function () {
                        $ignite.removeClass('addAni');
                        $fireworks.removeClass('addAni');
                        $firework.removeClass('addAni');
                        fire = true;
                        $btnWrap.addClass('addScroll');
                    }, 20000)
                }
            }
            
            $fireworkBtn.on({
                click: function () {
                    $btnWrap.removeClass('addScroll');
                    fireworkFn();
                }
            });



        },
        wheelEventFn: function () {
            var $main = $('#main');
            var $section = $('.section');
            var wheelDelta = 0;
            var cnt = 0;
            var $a = $('#section1 .link-wrap > span > a');

            var $goTopBtn = $('.gotop-btn');

            $goTopBtn.on({
                click: function (event) {
                    event.preventDefault();
                    cnt = 0;
                    var url = $(this).attr('href');
                    $('html,body').stop().animate({
                        scrollTop: $(url).offset().top
                    }, 800);
                }
            });

            $a.each(function (idx) {
                $(this).on({
                    click: function (event) {
                        event.preventDefault();
                        if (idx === 0) {
                            cnt = 0;
                        } else if (idx === 1) {
                            cnt = 2;
                        } else if (idx === 3) {
                            cnt = 1;
                        }
                        var url = $(this).attr('href');
                        $('html,body').stop().animate({
                            scrollTop: $(url).offset().top
                        }, 800);
                    }
                });
            });


            $main.on('mousewheel DOMMouseScroll', function (event) {
                event.preventDefault();

                if (event.originalEvent.wheelDelta) {
                    wheelDelta = event.originalEvent.wheelDelta;
                } else { // 파이어폭스
                    wheelDelta = event.detail * -1
                }

                if (!$('html,body').is(':animated')) {
                    if (wheelDelta < 0) {
                        cnt++;
                        if (cnt >= 2) {
                            cnt = 2;
                            $('html,body').stop().animate({
                                scrollTop: $section.eq(cnt).offset().top
                            }, 800, 'swing');
                        } else {
                            $('html,body').stop().animate({
                                scrollTop: $section.eq(cnt).offset().top
                            }, 800, 'swing');
                        }
                    } else {
                        cnt--;
                        if (cnt < 0) {
                            cnt = 0;
                        }
                        $('html,body').stop().animate({
                            scrollTop: $section.eq(cnt).offset().top
                        }, 800, 'swing');
                    }
                }
            });
        }

    }

    profile.init();

})(jQuery);