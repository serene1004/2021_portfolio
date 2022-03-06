;(function($){
    var litho = {
        btn:0,
        init:function(){
            var that = this;
            
            that.scrollEventFn();
            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.section5Fn();
            that.section6Fn();
            that.section7Fn();
            that.section8Fn();
            that.section9Fn();
            that.section10Fn();
            that.section11Fn();
            that.footerFn();
            that.goTopFn();
            that.modalFn();
        },
        scrollEventFn:function(){
            var $win        = $(window);
            var $header     = $('#header');
            var $headerWrap = $('#header .wrap');
            var $whiteLogo  = $('#header .white-logo');
            var $blackLogo  = $('#header .black-logo');
            var $navMainBtn = $('#header #nav .main-btn');
            var $aside      = $('#header #aside li i');
            var $bar        = $('#header .bar');
            var scrollOld   = 0;
            var scrollNew   = 0;
            var result      = null;
            var that        = this;

            var $nav = $('#header #nav');
            var $bar = $('#header .bar');

            
            function scrollFn(){
                scrollNew = $win.scrollTop();
                var scroll = function(){
                    if(scrollOld - scrollNew > 0){result = 'Up';}
                    else{result = 'Down';}
                }
                scroll();
                
                if(scrollNew <= 20){
                    $header.removeClass('addDown');
                    $headerWrap.removeClass('addDown');
                    $whiteLogo.removeClass('addDown');
                    $blackLogo.removeClass('addDown');
                    $header.removeClass('addUp');
                    $navMainBtn.removeClass('addDown');
                    $aside.removeClass('addDown');
                }
                else{
                    if(result === 'Up'){
                        if(that.btn === 1){    // 모바일모드
                            $header.removeClass('addDown');
                            $header.removeClass('addUp');
                            $nav.stop().slideUp(0);
                            $bar.removeClass('addMobile');
                            that.btn = 0;
                        }
                        else{                   // pc모드
                            $header.addClass('addDown');
                            $headerWrap.addClass('addDown');
                            $whiteLogo.addClass('addDown');
                            $blackLogo.addClass('addDown');
                            $navMainBtn.addClass('addDown');
                            $aside.addClass('addDown');
                            $header.removeClass('addUp');
                        }
                    }
                    if(result === 'Down'){
                        if(that.btn === 1){    // 모바일모드
                            $header.removeClass('addDown');
                            $header.addClass('addUp');
                            $nav.stop().slideUp(0);
                            $bar.removeClass('addMobile');
                            that.btn = 0;
                        }
                        else{                   // pc모드
                            $header.removeClass('addDown');
                            $header.addClass('addUp');
                        }
                    }
                };
                scrollOld = scrollNew;
            };

            $win.scroll(function(){
                scrollFn();
            });            

        },
        headerFn:function(){
            var $nav       = $('#header #nav');
            var $mainBtn   = $('#header .main-btn');
            var $sub       = $('#header .sub');
            var $subBtn    = $('#header .sub-btn');
            var $subSub    = $('#header .sub-sub');
            var $subSubBtn = $('#header .sub-sub-btn');
            var $subSubSub = $('#header .sub-sub-sub');
            var $mobileBtn = $('#header .mobile-btn');
            var $bar       = $('#header .bar');
            var pc         = 0;
            var mobile     = 0;
            var that = this;
            var click = true;


            function pcFn(){
                $sub.css({display:'none',height:'auto'});
                $subSub.css({display:'none'});
                $subSubSub.css({display:'none'});
                $nav.css({display:'inline-block'});
                $bar.removeClass('addMobile');

                $mainBtn.off('click');
                $subBtn.off('click');
                $subSubBtn.off('click');

                $mainBtn.on({
                    mouseenter:function(event){
                        event.preventDefault();
                        $sub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
                $subBtn.on({
                    mouseenter:function(event){
                        event.preventDefault();
                        $subSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
                $subSubBtn.on({
                    mouseenter:function(event){
                        event.preventDefault();
                        $subSubSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
    
                $nav.on({
                    mouseleave:function(event){
                        event.preventDefault();
                        $sub.stop().hide();
                        $subSub.stop().hide();
                    }
                });
            }

            function mobileFn(){
                $nav.css({display:'none'});
                $mainBtn.off('mouseenter');
                $subBtn.off('mouseenter');
                $subSubBtn.off('mouseenter');
                $nav.off('mouseleave');
                $bar.removeClass('addMobile');
                $sub.css({height:'auto'});

                // 클릭이벤트가 누적실행되는것을 방지하기위해
                // 이벤트 삭제 후 이벤트 재등록
                $mainBtn.off('click');
                $subBtn.off('click');
                $subSubBtn.off('click');


                // $sub 슬라이드업 이후 오는 $(this).next() 의 슬라이드토글로인해
                // 메인버튼이 닫혀있는 상태에서 메인버튼 내부에서 슬라이드 토글이 발생하는것?으로 추정됨
                // 버튼클릭시 addDown 클래스가 있을경우 슬라이드 업, 클래스 제거
                // 버튼클릭시 addDown 클래스가 없을경우 슬라이드 다운, 클래스 부여
                $mainBtn.on({
                    click:function(event){
                        if(click === true){
                            click = false;
                            event.preventDefault();
                            $sub.css({height:'auto'});
                            $sub.stop().slideUp();
                            $subSub.stop().slideUp();
                            $subSubSub.stop().slideUp();
                            $(this).next().stop().slideToggle(400);

                            setTimeout(function(){
                                click = true;
                            }, 500)
                        }

                        // if($(this).hasClass('addDown') === true){
                        //     $sub.stop().slideUp();
                        //     $subSub.stop().slideUp();
                        //     $subSubSub.stop().slideUp();
                        //     $mainBtn.removeClass('addDown');
                        //     $subBtn.removeClass('addDown');
                        //     $subSubBtn.removeClass('addDown');
                        // }
                        // else{
                        //     $sub.stop().slideUp();
                        //     $subSub.stop().slideUp();
                        //     $subSubSub.stop().slideUp();
                        //     $mainBtn.removeClass('addDown');
                        //     $subBtn.removeClass('addDown');
                        //     $subSubBtn.removeClass('addDown');
                        //     $(this).next().stop().slideDown(400);
                        //     $(this).addClass('addDown');
                        // }
                    }
                });
                $subBtn.on({
                    click:function(event){
                        if(click === true){
                            click = false;
                            event.preventDefault();
                            $sub.css({height:'auto'});
                            $subSub.stop().slideUp();
                            $subSubSub.stop().slideUp();
                            $(this).next().stop().slideToggle(400);

                            setTimeout(function(){
                                click = true;
                            }, 500)
                        }
                    }
                });
                $subSubBtn.on({
                    click:function(event){
                        if(click === true){
                            click = false;
                            event.preventDefault();
                            $sub.css({height:'auto'});
                            $subSubSub.stop().slideUp();
                            $(this).next().stop().slideToggle(400);
                            
                            setTimeout(function(){
                                click = true;
                            }, 500)
                        }
                    }
                });
            }

            $mobileBtn.on({
                click:function(event){
                    if(click === true){
                        click = false;
                        event.preventDefault();
                        $sub.stop().slideUp();
                        $subSub.stop().slideUp();
                        $subSubSub.stop().slideUp();
                        $bar.toggleClass('addMobile');
                        $nav.stop().slideToggle(400);
                        
                        setTimeout(function(){
                            click = true;
                        }, 500)
                        return that.btn === 0 ? that.btn = 1 : that.btn = 0;
                    }
                }
            });

            function pcMobileFn(){
                if($(window).innerWidth() > 980 ){
                    pc = 1;
                    mobile = 0;
                    pcFn();
                    that.btn = 0;
                }
                else{
                    pc = 0;
                    mobile = 1;
                    mobileFn();
                }
            };
            
            $(window).resize(function(){
                that.btn = 0;
                $mainBtn.removeClass('addDown');
                $subBtn.removeClass('addDown');
                $subSubBtn.removeClass('addDown');
                pcMobileFn();
            });
            setTimeout(pcMobileFn, 10);

            
        },
        section1Fn:function(){
            var $winW      = $(window).width();
            var $winH      = $(window).height();
            var $section1  = $('#section1');
            var $slideView = $('#section1 .slide-view');
            var $slideWrap = $('#section1 .slide-wrap');
            var $slide     = $('#section1 .slide');
            var slideW     = $('#section1 .slide').innerWidth();
            var n          = $('#section1 .slide').length;  // n=3
            var $prevBtn   = $('#section1 .prev-btn');
            var $nextBtn   = $('#section1 .next-btn'); 
            var cnt        = 0;
            var next       = [];
            var prev       = [];

            var touchS     = 0;
            var touchE     = 0;
            var touchD     = false;
            var touchYstart = 0;
            var touchYend = 0;

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                
                if($winW > 600){
                    $winH = $(window).height();
                }
                else{
                    $winH = 600;
                }
                $slide.css({width:$winW,height:$winH});
                $section1.css({width:$winW,height:$winH});
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            function mainPrevSlideFn(){
                var j = n;
                for(var i=0; i<n; i++){
                    j--;
                    prev[i] = j;
                }

                var temp = prev.pop();
                           prev.unshift(temp);

                for(var i=n-1; i>cnt; i--){
                    var temp = prev.shift();
                               prev.push(temp);
                }

                for(var i=0; i<n; i++){
                    $slide.eq(prev[i]).stop().animate({left:(100*(-i))+'%'}, 0).animate({left:(100*(-i+1))+'%'}, 400, 'easeInOutCubic');
                }
            }
            function mainNextSlideFn(){
                for(var i=0; i<n; i++){
                    next[i] = i;
                    // console.log('넥스트 설정',next);
                }
                var temp = next.pop();
                           next.unshift(temp);
                        //    console.log('임시부여이후',next);

                for(var i=0; i<cnt; i++){
                    var temp = next.shift();
                               next.push(temp);
                        //    console.log('푸쉬이후',next);
                 }

                for(var i=0; i<n; i++){
                    $slide.eq(next[i]).stop().animate({left:(100*i)+'%'}, 0).animate({left:(100*(i-1))+'%'}, 400, 'easeInOutCubic');
                }
            }

            function prevSlideCountFn(){
                cnt--;
                if(cnt<0){cnt=2;}
                mainPrevSlideFn();
            }
            function nextSlideCountFn(){
                cnt++;
                if(cnt>2){cnt=0;}
                mainNextSlideFn();
            }

            $prevBtn.on({
                click:function(){
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$slide.is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });
            

            $slideView.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.clientX;
                    touchYstart = e.clientY;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.clientX;
                    touchYend = e.clientY;
                    touchSwipeFn();

                    if( touchYstart-touchYend < -50 ){
                        
                    }
                    if( touchYstart-touchYend > 50 ){
                      $('html,body').stop().animate({scrollTop: $('#section2').offset().top }, 600);
                    } 
                },
                mouseleave:function(e){
                    if(touchD === true){
                        touchE = e.clientX;
                        touchSwipeFn();
                        touchD = false;
                    }
                },

                touchstart:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.originalEvent.changedTouches[0].clientX;
                    touchYstart = e.originalEvent.changedTouches[0].clientY;
                },
                touchend:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.originalEvent.changedTouches[0].clientX;
                    touchYend = e.originalEvent.changedTouches[0].clientY;
                    touchSwipeFn();

                    if( touchYstart-touchYend < -50 ){
                        
                      }
                      if( touchYstart-touchYend > 50 ){
                        $('html,body').stop().animate({scrollTop: $('#section2').offset().top }, 600);
                      }     
                }
            });

            function touchSwipeFn(){
                if(touchS-touchE > 30){
                    if(!$slide.is(':animated')){
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE < -30){
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            }

        },
        section2Fn:function(){
            var $contentWrap = $('#section2 .content-wrap');
            var t = 0;


            $(window).scroll(function(){
                if($(window).scrollTop() >= 200){
                    if(t === 0){
                        t = 1;
                        $contentWrap.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $contentWrap.removeClass('addScroll');
                }
            });

        },
        section3Fn:function(){
            var $imgBox     = $('#section3 .img-box');
            var $imgGap     = $('#section3 .img-gap');
            var $content    = $('#section3 .content');
            var $contentW   = $('#section3 .content').innerWidth();
            var $contentH   = $contentW*0.768235294;
            var x           = 0;
            var y           = 0;
            var $h2         = $('#section3 h2');
            var $list1      = $('#section3 .list1');
            var $list2      = $('#section3 .list2');
            var $titleBtn   = $('#section3 .title-btn');
            var t           = 0;
            

            function resizeFn(){
                $contentW = $('#section3 .content').innerWidth();
                $contentH = $contentW*0.768235294;
                $content.css({height:$contentH});
            }
            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 10);

            $imgBox.on({
                mousemove:function(event){
                    // 사진의 중심이 기준이되서 마우스위치에따라서 상하좌우로 rotateXY값이 변화
                    // 북서 X:- Y:+    북 X:- Y:0   북동 X:- Y:-
                    // 서쪽 X:0 Y:+        센터     동쪽 X:0 Y:-
                    // 남서 X:+ Y:+    남 X:+ Y:0   남동 X:+ Y:-

                    // 북서 x:  y:    북동 x:  y:   북동 x:  y: 
                    // 서쪽 x:  y:    센터 x:  y:   동쪽 x:  y: 
                    // 남서 x:  y:    남동 x:  y:   남동 x:  y: 

                    // console.log('x:',event.clientX);
                    // console.log('y:',event.clientY);

                    x = event.clientX*0.05;
                    y = event.clientY*0.05;
                    x = x-33.5;
                    y = y-33;
                    // console.log('x:',x);
                    // console.log('y:',y);
                    $('.pos').text('x= ' + x + ' / y= '+ y);
                    $imgGap.css({transform:'perspective(1000px) rotateX('+ y +'deg) rotateY('+ -x +'deg) scale3d(1,1,1)'});
                }
            });
            

            $(window).scroll(function(){
                if($(window).scrollTop() >= 450){
                    if(t === 0){
                        t = 1;
                        $imgBox.addClass('addScroll');
                        $h2.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= 550){
                    if(t === 1){
                        t = 2;
                        $list1.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= 650){
                    if(t === 2){
                        t = 3;
                        $list2.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= 750){
                    if(t === 3){
                        t = 4;
                        $titleBtn.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $imgBox.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $list1.removeClass('addScroll');
                    $list2.removeClass('addScroll');
                    $titleBtn.removeClass('addScroll');
                }
            });            


        },
        section4Fn:function(){
            var $winW       = $(window).width();
            var $winH       = $(window).height();
            var $galleryBtn = $('#section4 .gallery-btn');
            var $galleryImg = $('#section4 .gallery-img');
            var $content    = $('#section4 .content');
            var $contentW   = $('#section4 .content').innerWidth();
            var $ul         = $('#section4 .content .gallery-wrap'); // 갤러리 ul
            var $li         = $('#section4 .content .gallery-wrap > li'); // 갤러리 li
            var liW         = $contentW/cols;
            var liH         = liW*1;
            var imgW        = Math.ceil(liW)-30;
            var imgH        = imgW*1;
            var n           = $li.length;
            var cols        = 4;
            var rows        = Math.ceil(n/cols);
            var btnNum      = 0;
            var $title      = $('#section4 .title');
            var $galleryNav = $('#section4 #gallery-nav');
            var $col        = $('#section4 .col');
            var $galContent = $('#section4 .gallery-content');
            var t           = 0;


            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section3').offset().top-80){
                    if(t === 0){
                        t = 1;
                        $title.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section3').offset().top){
                    if(t === 1){
                        t = 2;
                        $galleryNav.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section3').offset().top+120){
                    if(t === 2){
                        t = 3;
                        $galContent.eq(0).addClass('addScroll');
                        $galContent.eq(1).addClass('addScroll');
                        $galContent.eq(2).addClass('addScroll');
                        $galContent.eq(3).addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section3').offset().top+370){
                    if(t === 3){
                        t = 4;
                        $galContent.eq(4).addClass('addScroll2');
                        $galContent.eq(5).addClass('addScroll2');
                        $galContent.eq(6).addClass('addScroll2');
                        $galContent.eq(7).addClass('addScroll2');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $title.removeClass('addScroll');
                    $galleryNav.removeClass('addScroll');
                    $galContent.eq(0).removeClass('addScroll');
                    $galContent.eq(1).removeClass('addScroll');
                    $galContent.eq(2).removeClass('addScroll');
                    $galContent.eq(3).removeClass('addScroll');
                    $galContent.eq(4).removeClass('addScroll2');
                    $galContent.eq(5).removeClass('addScroll2');
                    $galContent.eq(6).removeClass('addScroll2');
                    $galContent.eq(7).removeClass('addScroll2');
                }
            });

            
            function galleryResizeFn(){
                $winW = $(window).innerWidth();
                $contentW = $('#section4 .content').innerWidth();
                
                if($winW > 963){
                    cols = 4;
                }
                else if($winW > 683){
                    cols = 3;
                }
                else{
                    cols = 2;
                }

                liW  = $contentW/cols;
                liH  = liW*1;
                $li.css({width:liW, height:liH});
                // 이미지 너비높이가 소수점으로 끝날때 이미지가 꿈틀?거리는 현상이 발생하는것을 발견함
                // 강제로 이미지의 너비를 반올림하여 해당버그를 수정하였음
                imgW = Math.ceil(liW)-30;
                imgH = imgW*1;
                $galleryImg.css({width:imgW,height:imgH});

                if(btnNum === 0){
                    n=8;
                    rows = Math.ceil(n/cols);
                    $content.css({height:liH*rows});
                    $ul.css({width:$contentW, height:liH});
                    $li.css({width:liW, height:liH});
                    $galleryImg.css({width:imgW,height:imgH});


                    if(cols === 4){
                        $li.eq(0).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(1).stop().show(300).animate({left:liW*1,top:liH*0}, 600);
                        $li.eq(2).stop().show(300).animate({left:liW*2,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*3,top:liH*0}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*0,top:liH*1}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*1,top:liH*1}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*2,top:liH*1}, 600);
                        $li.eq(7).stop().show(300).animate({left:liW*3,top:liH*1}, 600);
                    }
                    if(cols === 3){
                        $li.eq(0).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(1).stop().show(300).animate({left:liW*1,top:liH*0}, 600);
                        $li.eq(2).stop().show(300).animate({left:liW*2,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*0,top:liH*1}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*1,top:liH*1}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*2,top:liH*1}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*0,top:liH*2}, 600);
                        $li.eq(7).stop().show(300).animate({left:liW*1,top:liH*2}, 600);
                    }
                    if(cols === 2){
                        $li.eq(0).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(1).stop().show(300).animate({left:liW*1,top:liH*0}, 600);
                        $li.eq(2).stop().show(300).animate({left:liW*0,top:liH*1}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*1,top:liH*1}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*0,top:liH*2}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*1,top:liH*2}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*0,top:liH*3}, 600);
                        $li.eq(7).stop().show(300).animate({left:liW*1,top:liH*3}, 600);
                    }

                }
                else if(btnNum === 1){
                    n=3;
                    rows = Math.ceil(n/cols);
                    $content.css({height:liH*rows});
                    $ul.css({width:$contentW, height:liH});
                    $li.css({width:liW, height:liH});
                    $galleryImg.css({width:imgW,height:imgH});
                    
                    
                    $li.eq(1).stop().hide(300);
                    $li.eq(2).stop().hide(300);
                    $li.eq(3).stop().hide(300);
                    $li.eq(4).stop().hide(300);
                    $li.eq(5).stop().hide(300);
                    if(cols === 4){
                        $li.eq(7).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                        $li.eq(0).stop().show(300).animate({left:liW*2 ,top:liH*0}, 600);
                    }
                    if(cols === 3){
                        $li.eq(7).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                        $li.eq(0).stop().show(300).animate({left:liW*2 ,top:liH*0}, 600);
                    }
                    if(cols === 2){
                        $li.eq(7).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                        $li.eq(0).stop().show(300).animate({left:liW*0 ,top:liH*1}, 600);
                    }
                }
                else if(btnNum === 2){
                    n=3;
                    rows = Math.ceil(n/cols);
                    $content.css({height:liH*rows});
                    $ul.css({width:$contentW, height:liH});
                    $li.css({width:liW, height:liH});
                    $galleryImg.css({width:imgW,height:imgH});

                    $li.eq(0).stop().hide(300);
                    $li.eq(2).stop().hide(300);
                    $li.eq(4).stop().hide(300);
                    $li.eq(6).stop().hide(300);
                    $li.eq(7).stop().hide(300);
                    if(cols === 4){
                        $li.eq(1).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*2 ,top:liH*0}, 600);
                    }
                    if(cols === 3){
                        $li.eq(1).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*2 ,top:liH*0}, 600);
                    }
                    if(cols === 2){
                        $li.eq(1).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*0 ,top:liH*1}, 600);
                    }
                }
                else if(btnNum === 3){
                    n=2;
                    rows = Math.ceil(n/cols);
                    $content.css({height:liH*rows});
                    $ul.css({width:$contentW, height:liH});
                    $li.css({width:liW, height:liH});
                    $galleryImg.css({width:imgW,height:imgH});

                    $li.eq(0).stop().hide(300);
                    $li.eq(1).stop().hide(300);
                    $li.eq(3).stop().hide(300);
                    $li.eq(5).stop().hide(300);
                    $li.eq(6).stop().hide(300);
                    $li.eq(7).stop().hide(300);
                    if(cols === 4){
                        $li.eq(2).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                    }
                    if(cols === 3){
                        $li.eq(2).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                    }
                    if(cols === 2){
                        $li.eq(2).stop().show(300).animate({left:liW*0 ,top:liH*0}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*1 ,top:liH*0}, 600);
                    }
                }

            }

            $(window).resize(function(){
                galleryResizeFn();
            });
            setTimeout(galleryResizeFn, 100);

            $galleryBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        if(!$li.is(':animated')){
                            btnNum = idx;
                            galleryResizeFn();
                            $galleryBtn.removeClass('addNav');
                            $(this).addClass('addNav');
                        }
                    }
                });
            });

        },
        section5Fn:function(){
            var $prevBtn  = $('#section5 .prev-btn');
            var $nextBtn  = $('#section5 .next-btn');
            var $stopBtn  = $('#section5 .stop-btn');
            var $playBtn  = $('#section5 .play-btn');
            var $stopPlay = $('#section5 .stop-play');
            var $ul       = $('#section5 ul');
            var $li       = $('#section5 li');
            var cnt       = 0;
            var n         = $('#section5 li').length;
            var slideW    = $('#section5').innerWidth();
            var angle     = 360/n;
            var tZ        = Math.round((slideW/2) / Math.tan(Math.PI/n));

            var setId     = null;
            var setId2    = null;
            var timercnt  = 0;

            var touchS    = 0;
            var touchE    = 0;
            var touchD    = false;

            var $content  = $('#section5 .content');
            var t = 0;

            function resizeFn(){
                $ul.css({transform: 'transform: perspective('+ 1647 +'px) translateZ('+ -549 +'px) rotateY(0)'});
            }
            $(window).resize(function(){
                resizeFn();
            });

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section4').offset().top+300){
                    if(t === 0){
                        t = 1;
                        $content.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $content.removeClass('addScroll');
                }
            });

            function slide3dFn(){
                $ul.css({transform: 'perspective('+ 1647 +'px) translateZ('+ -549 +'px) rotateY('+ (-angle*cnt) +'deg)'});
            }
            function prevSlideFn(){
                $li.css({zIndex:1}).stop().animate({opacity:1}, 0);
                $li.eq(cnt).css({zIndex:2});
                $li.eq(cnt===2?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0}, 600);
            }
            function nextSlideFn(){
                $li.css({zIndex:1});
                $li.eq(cnt-1).css({zIndex:2});
                $li.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1}, 600);
            }

            function prevCountFn(){
                if($(window).innerWidth() > 963){
                    cnt--;
                    slide3dFn()
                }
                else{
                    cnt--;
                    if(cnt<0){cnt=2;}
                    prevSlideFn()
                }
            }
            function nextCountFn(){
                if($(window).innerWidth() > 963){
                    cnt++;
                    slide3dFn()
                }
                else{
                    cnt++;
                    if(cnt>2){cnt=0;}
                    nextSlideFn()
                }
            }

            $prevBtn.on({
                click:function(){
                    if(!$li.is(':animated')){
                        prevCountFn();
                        timerFn();
                        $playBtn.removeClass('addBtn');
                        $stopBtn.removeClass('addBtn');
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$li.is(':animated')){
                        nextCountFn();
                        timerFn();
                        $playBtn.removeClass('addBtn');
                        $stopBtn.removeClass('addBtn');
                    }
                }
            });

            $stopBtn.on({
                click:function(){
                    $stopBtn.addClass('addBtn');
                    $playBtn.addClass('addBtn');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });
            $playBtn.on({
                click:function(){
                    $playBtn.removeClass('addBtn');
                    $stopBtn.removeClass('addBtn');
                    timerFn();
                }
            });

            function autoPlayFn(){
                setId = setInterval(nextCountFn, 5000);
            }
            autoPlayFn();

            function timerFn(){
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

            $ul.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.clientX;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.clientX;
                    touchSwipeFn();
                },
                mouseleave:function(e){
                    if(touchD === true){
                        touchE = e.clientX;
                        touchSwipeFn();
                        touchD = false;
                    }
                },

                touchstart:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.originalEvent.changedTouches[0].clientX;
                },
                touchend:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.originalEvent.changedTouches[0].clientX;
                    touchSwipeFn();
                }
            });

            function touchSwipeFn(){
                if(touchS-touchE > 30){
                    if(!$li.is(':animated')){
                        nextCountFn();
                        timerFn();
                        $playBtn.removeClass('addBtn');
                        $stopBtn.removeClass('addBtn');
                    }
                }
                if(touchS-touchE < -30){
                    if(!$li.is(':animated')){
                        prevCountFn();
                        timerFn();
                        $playBtn.removeClass('addBtn');
                        $stopBtn.removeClass('addBtn');
                    }
                }
            }            


        },
        section6Fn:function(){
            var $title = $('#section6 .title');
            var $li = $('#section6 li');
            var $bottomBtn = $('#section6 .bottom-btn');
            var t = 0;

            var $h2    = $('#section6 h2');
            var $h2W   = $('#section6 h2').innerWidth();
            var h2Size = $h2W*0.055042735;

            // function resizeFn(){
            //     $h2W   = $('#section6 h2').innerWidth();
            //     h2Size = $h2W*0.055042735;

            //     if($(window).innerWidth() > 980){
            //         $h2.css({fontSize:h2Size});
            //     }
            //     else if($(window).innerWidth() > 600){
            //         $h2.css({fontSize:h2Size*1.25});
            //     }
            //     else{
            //         $h2.css({fontSize:h2Size*1.5});
            //     }
            // }

            // $(window).resize(function(){
            //     resizeFn();
            // });
            // setTimeout(resizeFn, 100);


            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section5').offset().top){
                    if(t === 0){
                        t = 1;
                        $title.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section5').offset().top+150){
                    if(t === 1){
                        t = 2;
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section5').offset().top+600){
                    if(t === 2){
                        t = 3;
                        $bottomBtn.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $title.removeClass('addScroll');
                    $li.removeClass('addScroll');
                    $bottomBtn.removeClass('addScroll');
                }
            });
        },
        section7Fn:function(){
            var $slideContainerW = $('#section7 .slide-container').innerWidth();
            var $slideView       = $('#section7 .slide-view');
            var $slideWrap       = $('#section7 .slide-wrap');
            var $slide           = $('#section7 .slide');
            var $slideW          = $slideContainerW/4;
            var $prevBtn         = $('#section7 .prev-btn');
            var $nextBtn         = $('#section7 .next-btn');
            var cnt              = 0;
            var touchS           = 0;
            var touchE           = 0;
            var touchD           = false;
            var setId            = null;
            var setId2           = null;
            var timercnt         = 0;
            

            var $title = $('#section7 .title');
            var $slideContainer = $('#section7 .slide-container');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section6').offset().top+100){
                    if(t === 0){
                        t = 1;
                        $title.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section6').offset().top+250){
                    if(t === 1){
                        t = 2;
                        $slideContainer.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $title.removeClass('addScroll');
                    $slideContainer.removeClass('addScroll');
                }
            });


            function resizeFn(){
                if($(window).innerWidth() > 980){
                    $slideContainerW = $('#section7 .slide-container').innerWidth();
                    $slideW = $slideContainerW/4;
                    $slideView.css({width:$slideW*4})
                    $slideWrap.css({width:$slideW*15,marginLeft: -$slideW*5});
                    $slide.css({width:$slideW});
                }
                else if($(window).innerWidth() > 850){
                    $slideContainerW = $('#section7 .slide-container').innerWidth();
                    $slideW = $slideContainerW/3;
                    $slideView.css({width:$slideW*3})
                    $slideWrap.css({width:$slideW*15,marginLeft: -$slideW*5});
                    $slide.css({width:$slideW});
                }
                else if($(window).innerWidth() > 600){
                    $slideContainerW = $('#section7 .slide-container').innerWidth();
                    $slideW = $slideContainerW/2;
                    $slideView.css({width:$slideW*2})
                    $slideWrap.css({width:$slideW*15,marginLeft: -$slideW*5});
                    $slide.css({width:$slideW});
                }
                else{
                    $slideContainerW = $('#section7 .slide-container').innerWidth();
                    $slideW = $slideContainerW/1;
                    $slideView.css({width:$slideW*1})
                    $slideWrap.css({width:$slideW*15,marginLeft: -$slideW*5});
                    $slide.css({width:$slideW});
                }
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);



            function slideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt}, 400, function(){
                    if(cnt>4){cnt=0;}
                    if(cnt<0){cnt=4;}
                    $slideWrap.stop().animate({left:-$slideW*cnt},0)
                })
            }
            function prevCountFn(){
                cnt--;
                slideFn();
            }
            function nextCountFn(){
                cnt++;
                slideFn();
            }
            $prevBtn.on({
                click:function(){
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                        timerFn();
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                        timerFn();
                    }
                }
            });
            
            $slideView.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.clientX;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.clientX;
                    touchSwipeFn();
                },
                mouseleave:function(e){
                    if(touchD === true){
                        touchE = e.clientX;
                        touchSwipeFn();
                        touchD = false;
                    }
                },

                touchstart:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.originalEvent.changedTouches[0].clientX;
                },
                touchend:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.originalEvent.changedTouches[0].clientX;
                    touchSwipeFn();
                }
            });

            function touchSwipeFn(){
                if(touchS-touchE > 30){
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                        timerFn();
                    }
                }
                if(touchS-touchE < -30){
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                        timerFn();
                    }
                }
            }            

            function autoPlayFn(){
                setId = setInterval(nextCountFn, 5000);
            }
            autoPlayFn();

            function timerFn(){
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

        },
        section8Fn:function(){
            var $li = $('#section8 li');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section7').offset().top+100){
                    if(t === 0){
                        t = 1;
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $li.removeClass('addScroll');
                }
            });

        },
        section9Fn:function(){
            var $slideContainerW = $('#section9 .slide-container').innerWidth();
            var $slideView       = $('#section9 .slide-view');
            var $slideWrap       = $('#section9 .slide-wrap');
            var $slide           = $('#section9 .slide');
            var $slideW          = $slideContainerW/3;
            var $slideH          = $slideW*0.763888889;
            var cnt              = 0;
            var touchS           = 0;
            var touchE           = 0;
            var touchD           = false;
            var setId            = null;
            var setId2           = null;
            var timercnt         = 0;

            var $title = $('#section9 .title');
            var $slideContainer = $('#section9 .slide-container');
            var $img = $('#section9 img');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section8').offset().top-100){
                    if(t === 0){
                        t = 1;
                        $title.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section8').offset().top){
                    if(t === 1){
                        t = 2;
                        $slideContainer.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section8').offset().top+500){
                    if(t === 2){
                        t = 3;
                        $img.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $title.removeClass('addScroll');
                    $slideContainer.removeClass('addScroll');
                    $img.removeClass('addScroll');
                }
            });

            function resizeFn(){
                if($(window).innerWidth() > 980){
                    $slideContainerW = $('#section9 .slide-container').innerWidth();
                    $slideW = $slideContainerW/3;
                    $slideView.css({width:$slideW*3})
                    $slideWrap.css({width:$slideW*12,marginLeft: -$slideW*4});
                    $slide.css({width:$slideW});
                }
                else if($(window).innerWidth() > 750){
                    $slideContainerW = $('#section9 .slide-container').innerWidth();
                    $slideW = $slideContainerW/2;
                    $slideView.css({width:$slideW*2})
                    $slideWrap.css({width:$slideW*12,marginLeft: -$slideW*4});
                    $slide.css({width:$slideW});
                }
                else{
                    $slideContainerW = $('#section9 .slide-container').innerWidth();
                    $slideW = $slideContainerW/1;
                    $slideView.css({width:$slideW*1})
                    $slideWrap.css({width:$slideW*12,marginLeft: -$slideW*4});
                    $slide.css({width:$slideW});
                }
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            
            function slideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt}, 400, function(){
                    if(cnt>3){cnt=0;}
                    if(cnt<0){cnt=3;}
                    $slideWrap.stop().animate({left:-$slideW*cnt},0)
                })
            }
            function prevCountFn(){
                cnt--;
                slideFn();
            }
            function nextCountFn(){
                cnt++;
                slideFn();
            }

            $slideView.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.clientX;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.clientX;
                    touchSwipeFn();
                },
                mouseleave:function(e){
                    if(touchD === true){
                        touchE = e.clientX;
                        touchSwipeFn();
                        touchD = false;
                    }
                },

                touchstart:function(e){
                    touchD = true;
                    e.preventDefault();
                    touchS = e.originalEvent.changedTouches[0].clientX;
                },
                touchend:function(e){
                    touchD = false;
                    e.preventDefault();
                    touchE = e.originalEvent.changedTouches[0].clientX;
                    touchSwipeFn();
                }
            });

            function touchSwipeFn(){
                if(touchS-touchE > 30){
                    if(!$slideWrap.is(':animated')){
                        nextCountFn();
                        timerFn();
                    }
                }
                if(touchS-touchE < -30){
                    if(!$slideWrap.is(':animated')){
                        prevCountFn();
                        timerFn();
                    }
                }
            }

            function autoPlayFn(){
                setId = setInterval(nextCountFn, 5000);
            }
            autoPlayFn();

            function timerFn(){
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

        },
        section10Fn:function(){
            var $title = $('#section10 .title');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section9').offset().top+200){
                    if(t === 0){
                        t = 1;
                        $title.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $title.removeClass('addScroll');
                }
            });

        },
        section11Fn:function(){
            var $mailBox = $('#section11 .mail-box');
            var $title = $('#section11 .title');
            var $li = $('#section11 li');
            var t = 0;

            var $submitBtn =  $('#submitBtn');
            var $response =  $('.response h3');
            var $formEmail = $('#formEmail');

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section10').offset().top-200){
                    if(t === 0){
                        t = 1;
                        $mailBox.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section10').offset().top-100){
                    if(t === 1){
                        t = 2;
                        $title.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section10').offset().top){
                    if(t === 2){
                        t = 3;
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $mailBox.removeClass('addScroll');
                }
            });

            $submitBtn.on({
                click:function(event){
                    event.preventDefault();
                    var formEmailValue  =  $('#formEmail').val();

                    if(formEmailValue===''){
                        alert('Please enter your email address');
                        $formEmail.focus();
                        return false;
                    }
                    else{
                        $.ajax({
                            url: './response.php',
                            type: 'POST',
                            data: {
                                email:formEmailValue
                            },
                            success: function(result){
                                $formEmail.val('');
                                $response.html( result );

                                $response.fadeIn(0);
                                setTimeout(function(){
                                    $response.fadeOut(1000);
                                })
                            },
                            error: function(msg){
                                alert('Please check your email address');
                                console.log(msg);
                                $formEmail.focus();
                            }
                        });
                    }

                }
            })
            
        },
        footerFn:function(){

        },
        goTopFn:function(){
            var $goTop = $('.go-top');
            var $goTopBtn = $('.gotop-Btn');
            var t = 0;

            $goTopBtn.on({
                click:function(e){
                    e.preventDefault();
                    var url = $(this).attr('href');
                    if(!$('html,body').is(':animated')){
                        $('html,body').stop().animate({scrollTop:$(url).offset().top}, 600);
                    }
                }
            });


            $(window).scroll(function(){
                if($(this).scrollTop()>=100){
                    if(t===0){
                        t=1;
                        $goTop.stop().fadeIn(400);
                    }
                }
                else{
                    t=0;
                    $goTop.stop().fadeOut(400);
                }
            });

        },
        modalFn:function(){
            var $modal        = $('#modal');
            var $modalBtnWrap = $('#modal .modal-btn-wrap');
            var $demoBtn      = $('#modal .demo-btn');
            var $closeBtn     = $('#modal .close-btn');
            var $html         = $('html');
            var $modalBlind   = $('#wrap .modal-blind');
            var t = 0;

            $demoBtn.on({
                click:function(){
                    $html.addClass('addModal');
                    $modal.addClass('addModal');
                    $modalBtnWrap.addClass('addModal');
                    $modalBlind.addClass('addModal');
                    $demoBtn.addClass('addModal');
                    $closeBtn.addClass('addModal');
                }
            });

            $closeBtn.on({
                click:function(){
                    $html.removeClass('addModal');
                    $modal.removeClass('addModal');
                    $modalBtnWrap.removeClass('addModal');
                    $modalBlind.removeClass('addModal');
                    $demoBtn.removeClass('addModal');
                    $closeBtn.removeClass('addModal');
                }
            });

            $modalBlind.on({
                click:function(){
                    $html.removeClass('addModal');
                    $modal.removeClass('addModal');
                    $modalBtnWrap.removeClass('addModal');
                    $demoBtn.removeClass('addModal');
                    $closeBtn.removeClass('addModal');
                    $modalBlind.removeClass('addModal');
                }
            });
            
            $(window).scroll(function(){
                if($(this).scrollTop()>=100){
                    if(t===0){
                        t=1;
                        $modalBtnWrap.stop().fadeIn(400);
                    }
                }
                else{
                    t=0;
                    $modalBtnWrap.stop().fadeOut(400);
                }
            });

        }
    }

    litho.init();

})(jQuery);