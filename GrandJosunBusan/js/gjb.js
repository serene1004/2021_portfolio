// GJB = GrandJosunBusan
;(function($){

    var gjb = {
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
            that.indicatorFn();
            that.footerFn();
            that.offersFn();
            that.galleryFn();
            that.wheelEventFn();
        },

        scrollEventFn:function(){
            var $win = $(window);
            var scrollOld = 0;
            var scrollNew = 0;
            var result = null;
            var $header = $('#header')
            var $headerBox = $('#header .header-box')
            var $nav = $('#header #nav');
            var $logo = $('#header #logo');
            var $logoColor = $('#header #logo .logo-wrap');
            var $mobileBtn = $('#header .mobile-btn');
            var $mobileWrap = $('#header .mobile-btn-wrap');
            var $bar = $('#header .bar');

            var that = this;

            var t = 0;
            var $footer = $('#footer');
            var $section7 = $('#section7');

            $win.resize(function(){
                scrollEventFn();
            });

            function scrollEventFn(){
                scrollNew = $win.scrollTop();
                var scroll = function(){
                    if(scrollOld - scrollNew > 0){ result = 'Up'; }
                    else{ result = 'Down'; }
                    // result = scrollOld-scrollNew > 0 ? 'Up' : 'Down';
                }
                scroll();
                // console.log(result);

                // pc화면일때 작동
                if($win.innerWidth() > 1200){

                    if(scrollNew <= 0){  // 스크롤의 top=0 // 클래스 모두삭제.
                        if(that.btn === 1){
                            $header.removeClass('addHide');
                            $nav.removeClass('mouseon');
                            $logoColor.removeClass('addBlack');
                        }
                        else{
                            $header.removeClass('addHide');
                            $nav.removeClass('mouseon');
                            $logoColor.removeClass('addBlack');
                        }
                    }
                    else{
                        if(result === 'Up'){  // 화면 스크롤을 위로 올릴때
                            if(that.btn === 1){    // 모바일 버튼이 클릭된 상태 // 
                                $nav.addClass('mouseon');
                                $nav.removeClass('addHide');
                                $logo.removeClass('addHide');
                                $logoColor.addClass('addBlack');
                                t = 0;
                            }
                            else{   // 모바일 버튼이 클릭되지 않았을때 // 
                                $nav.addClass('mouseon');
                                $nav.removeClass('addHide');
                                $logo.removeClass('addHide');
                                $logoColor.addClass('addBlack');
                                t = 0;
                            }
                        }
                        if(result === 'Down'){    // 화면 스크롤을 아래로 내릴때
                            if(that.btn === 1){    // 모바일 버튼이 클릭된 상태 // 
                                $header.addClass('addHide');
                                $nav.removeClass('mouseon');
                                $nav.addClass('addHide');
                                $logo.addClass('addHide');
                                $logoColor.removeClass('addBlack');
                            }
                            else{   // 모바일 버튼이 클릭되지 않았을때 // 
                                $header.addClass('addHide');
                                $nav.removeClass('mouseon');
                                $nav.addClass('addHide');
                                $logo.addClass('addHide');
                                $logoColor.removeClass('addBlack');
                            }
                        }
                    }
                }
                // 모바일화면일때 작동
                else{
                    if(scrollNew <= 0){  // 스크롤의 top=0 // 클래스 모두삭제.
                        if(that.btn === 1){   // 
                            console.log('지금 버튼의 번호',that.btn);
                            $header.removeClass('addMobile');
                            $logoColor.removeClass('addBlack');
                            $bar.removeClass('addBlack');
                        }
                        else{   // 모바일 버튼이 클릭되지 않았을때
                            $header.removeClass('addMobile');
                            $logoColor.removeClass('addBlack');
                            $bar.removeClass('addBlack');
                        }
                    }
                    else{
                        if(result === 'Up'){  // 화면 스크롤을 위로 올릴때
                            if(that.btn === 1){    // 모바일 버튼이 클릭된 상태 // 
                                $logo.removeClass('addHide');
                                $mobileWrap.removeClass('addHide');
                                
                                $header.addClass('addMobile');
                                $bar.addClass('addBlack');
                                $logoColor.addClass('addBlack');
                                t = 0;
                            }
                            else{   // 모바일 버튼이 클릭되지 않았을때 // 로고, 모바일버튼, 헤더 나타남
                                // 스크롤을 내렸다가 올렸을때(최상단이 아닐경우) 로고,모바일버튼이 검정색으로 바뀌었던것이
                                // 모바일버튼 토글효과로인해 흰색으로 변경되어 보지않음. << 해당 문제는 토글버튼에서 if문으로 해결함.
                                $logo.removeClass('addHide');
                                $mobileWrap.removeClass('addHide');
                                
                                $header.addClass('addMobile');
                                $bar.addClass('addBlack');
                                $logoColor.addClass('addBlack');
                                t = 0;
                            }
                        }
                        if(result === 'Down'){    // 화면 스크롤을 아래로 내릴때
                            if( that.btn === 1 ){    // 모바일 버튼이 클릭된 상태 // 로고, 모바일버튼, 헤더, 헤더박스 사라지고, 네비 슬라이드업, 로고랑 모바일버튼 검정색 제거
                                // 버튼이 눌려진 상태에서 스크롤내리면 네비가 닫히는데, 모바일버튼의 토글이 남아있는데 초기화되야함.
                                $nav.stop().slideUp(0);

                                $logo.addClass('addHide');
                                $mobileWrap.addClass('addHide');

                                if($bar.hasClass('addMobile') === true,
                                   $bar.hasClass('addBlack') === true,
                                   $header.hasClass('addMobile') === true,
                                   $headerBox.hasClass('addView') === true,
                                   $logoColor.hasClass('addBlack') === true
                                ){
                                    $bar.removeClass('addMobile');
                                    $bar.removeClass('addBlack');
                                    $header.removeClass('addMobile');
                                    $headerBox.removeClass('addView');
                                    $logoColor.removeClass('addBlack');
                                }
                            }
                            else{   // 모바일 버튼이 클릭되지 않았을때 // 로고, 모바일버튼, 헤더 사라짐
                                // 스크롤을 내리면 
                                $header.removeClass('addMobile');
                                $logo.addClass('addHide');
                                $mobileWrap.addClass('addHide');

                                $nav.stop().slideUp(0);
                                if($bar.hasClass('addMobile') === true){
                                    $bar.removeClass('addMobile');
                                }
                                $headerBox.removeClass('addView');
                            }
                        }
                    }
                }
                scrollOld = scrollNew;
            }

            // 푸터 슬라이드 업다운효과
            $win.scroll(function(){
                if ( $(window).scrollTop() >= $('#section7').offset().top ) {
                    if (t === 0) {
                        t = 1;
                        $footer.addClass('addView');
                    }
                }
                if ( $(window).scrollTop() <= $('#section7').offset().top ) {
                    if (t === 0) {
                        t = 0;
                        // $footer.removeClass('addView');


                        // 패밀리사이트 버튼 초기화
                        var $familyList = $('#footer .family-list');
                        var $familysiteBtnI = $('#footer .familysite-btn i');

                        if($familyList.hasClass('addView') === true,
                           $familysiteBtnI.hasClass('addView') === true
                        ){
                            $familyList.removeClass('addView');
                            $familysiteBtnI.removeClass('addView');
                        }

                    }
                }
            })
            

            $win.scroll(function(){
                scrollEventFn();
            });


        },
        headerFn:function(){
            var $header = $('#header');
            var $headerBox = $('#header .header-box');
            var $nav = $('#header #nav');
            var $logo = $('#header #logo');
            var $logoColor = $('#header #logo .logo-wrap');
            var $gnbWrap = $('#header #nav .gnb-wrap');
            var $gnbBtn = $('#header #nav .gnb-wrap .gnb-btn');
            var $lnbWrap = $('#header #nav .gnb-wrap .lnb-wrap');
            var $lnbBtn = $('#header #nav .gnb-wrap .lnb-wrap .lnb-btn');
            var $lnbSub = $('#header #nav .gnb-wrap .lnb-wrap ul > li > ul');

            var $main = $('#main');

            var $langKR = $('#header .lang-KR');
            var $langEN = $('#header .lang-EN');

            var $mobileBtn = $('#header .mobile-btn');
            var $bar = $('#header .bar');

            var $sideBtnBox = $('#header .side-btn-box');
            var $sideBtn = $('#header .side-btn-box .side-btn')
            var $sideWrap = $('#header .side-btn-box .side-btn .side-wrap');

            var pc = 0;
            var mobile = 0;
            var $win = $(window);
            var $winW = $(window).width();

            var that = this;


            function pcFn(){
                $nav.stop().show();
                // 모바일화면에서 pc화면으로 넘어왔을떄 lnbSub가 사라지는 현상을 없애야함.
                $lnbSub.stop().show();
                $lnbSub.stop().slideDown(0);
                $lnbSub.css({display:'block'});
                // $lnbBtn.next().slideDown(0); // lnb버튼에 넥스트 슬라이드다운으로 넣었어서 이렇게도 해봤는데 안돌아와짐
                // $lnbBtn.next().show();
                // $lnbBtn.next().css({display:'block'});
                


                $nav.on({
                    mouseleave:function(){
                        $nav.removeClass('mouseon');
                        $lnbWrap.stop().slideUp(0);
                        $logoColor.removeClass('addBlack');
                        $main.css({filter:'brightness(100%)'})
                    }
                });
                $gnbWrap.on({
                    mouseenter:function(){
                        $nav.addClass('mouseon');
                        $logoColor.addClass('addBlack');
                        $main.css({filter:'brightness(30%)'})
                    }
                });
                
                $gnbBtn.on({
                    mouseenter:function(){
                        if( $(window).innerWidth() > 1200 ){
                            $lnbSub.stop().show(0);
                            $lnbSub.stop().slideDown(0);
                            $nav.addClass('mouseon');
                            $lnbWrap.stop().slideUp(100);
                            $(this).next().stop().slideDown(300);                        
                            $sideBtnBox.hide();    
                        }
                    }
                });
                $gnbWrap.on({
                    mouseleave:function(){
                        $logoColor.removeClass('addBlack');
                        $lnbWrap.stop().slideUp(100);
                        $sideBtnBox.show();
                    }
                });
    
                $langKR.on({
                    click:function(){
                        $langEN.toggle();
                    }
                });
    
                $sideBtn.on({
                    mouseenter:function(){
                        $sideWrap.stop().slideDown(200);
                    },
                    mouseleave:function(){
                        $sideWrap.stop().slideUp(200);
                    }
                });
            };
            // pcFn끝!!!

            // 버튼들에 마우스엔터 이벤트 전부제거
            // 스크롤이벤트도 모바일메뉴에선 제거해야함
            function mobileFn(){
                $sideBtnBox.hide();
                if(that.btn = 1){
                    $nav.stop().hide();
                    if($bar.hasClass('addMobile') === true,
                       $headerBox.hasClass('addView') === true
                    ){
                        $bar.removeClass('addMobile');
                        $headerBox.removeClass('addView');
                    }
                }

                $nav.on({
                    mouseleave:function(){
                        $nav.removeClass('mouseon');
                        $lnbWrap.stop().hide();
                        $logoColor.addClass('addBlack');
                        $main.css({filter:'brightness(100%)'})
                    }
                });
                $gnbWrap.on({
                    mouseenter:function(){
                        $nav.removeClass('mouseon');
                        $logoColor.addClass('addBlack');
                        $main.css({filter:'brightness(100%)'})
                    }
                });
                
                $gnbBtn.on({
                    mouseenter:function(){
                        if( $(window).innerWidth() <= 1200 ){
                            $lnbWrap.stop().slideUp(0);
                            $(this).next().stop().show();
                            $sideBtnBox.hide();
                            $lnbBtn.next().slideUp(300);
                        }
                    }
                });
                $gnbWrap.on({
                    mouseleave:function(){
                        if( $(window).innerWidth() <= 1200 ){
                            $logoColor.addClass('addBlack');
                            $lnbWrap.stop().hide();
                            $sideBtnBox.hide();
                            $lnbBtn.next().slideUp(300);
                        }
                    }
                });
            };
            // mobileFn끝!!!

            setTimeout(pcMobileFn,100);
            $win.resize(function(){
                pcMobileFn();
            });
            
            function pcMobileFn(){
                if($win.innerWidth() > 1200 ){
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
            // // 이건 이렇게 안하고 밑에처럼 쉽게하면됨..
            // $lnbBtn.each(function(idx){
            //     $(this).on({
            //         click:function(){
            //             if($(window).innerWidth() <= 1200){
            //                 if($lnbBtn.next().eq(idx).hasClass('addView') === false){
            //                     $lnbBtn.next().removeClass('addView');
            //                 }
            //                 // $(this).next().toggleClass('addView');
            //                 $lnbBtn.next().slideUp(300);
            //                 $(this).next().stop().slideToggle(300);
            //             }
            //         }
            //     });
            // });

            $lnbBtn.on({
                click:function(){
                    if($(window).innerWidth() <= 1200){
                        // $(this).next().toggleClass('addView');
                        $lnbBtn.next().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }
            });

            $mobileBtn.on({
                click:function(){
                    // 스크롤탑값이 0이아닐때는 아래 이프문적용, 스크롤탑이 0일경우 else만이 되게끔 만들어야함.
                    if($win.scrollTop() === 0){
                        $bar.toggleClass('addBlack');
                        $logoColor.toggleClass('addBlack');
                    }
                    else{
                        if($bar.hasClass('addBlack') === true,
                           $logoColor.hasClass('addBlack') === true
                        ){
    
                        }
                        else{
                            $bar.toggleClass('addBlack');
                            $logoColor.toggleClass('addBlack');
                        }
                    }
                    $bar.toggleClass('addMobile');
                    $nav.stop().slideToggle(0);
                    $header.toggleClass('addMobile');
                    $headerBox.toggleClass('addView');
                    return that.btn === 0 ? that.btn = 1 : that.btn = 0;
                }
            });
        
            // gnb에 마우스오버시 lnb보이게
            // lnb영역으로 마우스들어가도 영역이 닫히지않도록
            // gnb버튼에서 다른 gnb버튼으로 마우스 이동시 기존 lnb는 닫고 새로운 lnb가 보이게
            // gnb에 마우스오버시 nav 배경 흰색+lnb슬라이드다운
            // 배경이 흰색이면 글자색은 검정으로, 배경이 투명이면 글자색은 흰색으로
            // 네비에 마우스 오버시 로고 검정, 네비가 닫힐시 흰색으로
            
            
        },

        section1Fn:function(){
            var $window = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $mainBgSlide = $('#section1 .mainBg-slide');
            var $mainBgSlideWrap = $('#section1 .mainBg-slide-wrap');
            var $mainBgSlideView = $('#section1 .mainBg-slide-view');
            var $prevBtn = $('#section1 .mainBg-Btn-wrap .prev-btn');
            var $nextBtn = $('#section1 .mainBg-Btn-wrap .next-btn');
            var $startBtn = $('#section1 .mainBg-Btn-wrap .start-btn');
            var $stopBtn = $('#section1 .mainBg-Btn-wrap .stop-btn');
            var $mainBgBtnWrap = $('#section1 .mainBg-Btn-wrap');
            var slideCnt = 0;
            var setId = null;
            var setId2 = null;
            var timercnt = 0;
            

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $mainBgSlide.css({width:$winW,height:$winH});
            }

            $window.resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);


            // Main Background slide event
            function mainPrevSlideFn(){
                $mainBgSlide.css({zIndex:1}).stop().animate({opacity:1},0);
                $mainBgSlide.eq(slideCnt).css({zIndex:2});
                $mainBgSlide.eq(slideCnt===2?0:slideCnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000);
            }
            function mainNextSlideFn(){
                $mainBgSlide.css({zIndex:1});
                $mainBgSlide.eq(slideCnt-1).css({zIndex:2});
                $mainBgSlide.eq(slideCnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1000);
            }

            function bgPrevCountFn(){
                slideCnt--;
                if(slideCnt<0){
                    slideCnt=2;
                }
                mainPrevSlideFn();
            }
            function bgNextCountFn(){
                slideCnt++;
                if(slideCnt>2){
                    slideCnt=0;
                }
                mainNextSlideFn();
            }

            $prevBtn.on({
                click:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlide.is(':animated')) {
                        bgPrevCountFn();
                        $startBtn.removeClass('addClick');
                        $stopBtn.removeClass('addClick');
                    }
                }
            });
            $nextBtn.on({
                click:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlide.is(':animated')) {
                        bgNextCountFn();
                        $startBtn.removeClass('addClick');
                        $stopBtn.removeClass('addClick');
                    }
                }
            });

            $mainBgSlideView.swipe({
                swipeLeft:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlide.is(':animated')) {
                        bgNextCountFn();
                        $startBtn.removeClass('addClick');
                        $stopBtn.removeClass('addClick');
                    }
                },
                swipeRight:function(){
                    bgSlideTimerFn();
                    if (!$mainBgSlide.is(':animated')) {
                        bgPrevCountFn();
                        $startBtn.removeClass('addClick');
                        $stopBtn.removeClass('addClick');
                    }
                }
            });

            function bgSlideAutoPlayFn(){
                setId = setInterval(bgNextCountFn, 5000);
            }
            bgSlideAutoPlayFn();

            function bgSlideTimerFn(){
                timercnt = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    timercnt++;
                    if (timercnt >= 5) {
                        clearInterval(setId2);
                        bgNextCountFn();
                        bgSlideAutoPlayFn();
                    }
                }, 1000);
            }
            // stop 버튼클릭시 stopBtn에 클래스 부여 display:none;
            // stop 버튼클릭시 startBtn에 클래스 부여 display:inline-block;
            // start 버튼클릭시 startBtn에 클래스 제거 display:none;
            // start 버튼클릭시 stopBtn에 클래스 제거 display:inline-block;
            $stopBtn.on({
                click:function(){
                    $stopBtn.addClass('addClick');
                    $startBtn.addClass('addClick');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });
            $startBtn.on({
                click:function(){
                    $startBtn.removeClass('addClick');
                    $stopBtn.removeClass('addClick');
                    bgSlideTimerFn();
                }
            });

            // // calender
            // var today = null;
            // var year  = null;
            // var month = null;
            // var date  = null;
            // var day   = null;

            // var firstDay = null;
            // var lastDate = null;
            // var col = null;
            // var prevLastDate = null;
            // var nextMonthCnt = null;

            // var $caption = $('#section1 .calender table caption');
            // var $td = $('#section1 .calender table td');
            // var $calPrevBtn = $('#section1 .calender .prev-btn');
            // var $calNextBtn = $('#section1 .calender .next-btn');

            // function nowFn(){
            //     today = new Date();
            //     year  = today.getFullYear();
            //     month = today.getMonth()+1;
            //     date  = today.getDate();
            // }
            // nowFn();

            // function calenderFn(y, m){

            //     nextMonthCnt = null;

            //     firstDay = new Date(y +'-'+ m + '-' +1).getDay();
            //     col = firstDay;
            //     lastDate = new Date(y, m, 0).getDate();
            //     prevLastDate = new Date(y, m-1, 0).getDate();

            //     $caption.html(y +'년 '+ m +'월');

            //     if(m == month && y == year){
            //         $td.eq(firstDay-1+date).addClass('today');
            //     }

            //     for(var i=1; i<=lastDate; i++){
            //         if(col!==null){
            //             $td.eq(col).html(i);
            //             col++;
            //         }
            //     }

            //     for(var i=firstDay-1; i>=0; i--){
            //         $td.eq(i).html(prevLastDate).addClass('prev-month');
            //         prevLastDate--;
            //     }
                
            //     for(var i=col; i<=$td.length; i++){
            //         nextMonthCnt++;
            //         $td.eq(i).html(nextMonthCnt).addClass('next-month');
            //     }

            //     // 주말 색변경
            //     for(var i=0; i<=$td.length; i+=7){
            //         $td.eq(i).addClass('sun');
            //     }
            //     for(var i=6; i<=$td.length; i+=7){
            //         $td.eq(i).addClass('sat');
            //     }

            // }
            // calenderFn(year, month);

            // y = year;
            // m = month;


            // $calPrevBtn.on({
            //     click:function(){
            //         m--;
            //         if(m<1){m=12;y--;}
            //         $('td').removeClass('prev-month');
            //         $('td').removeClass('next-month');
            //         $('td').removeClass('today');
            //         calenderFn(y, m);
            //     }
            // });
            // $calNextBtn.on({
            //     click:function(){
            //         m++;
            //         if(m>12){m=1;y++;}
            //         $('td').removeClass('prev-month');
            //         $('td').removeClass('next-month');
            //         $('td').removeClass('today');
            //         calenderFn(y, m);
            //     }
            // });


            

        },

        section2Fn:function(){
            var $section2SlideView = $('#section2 .slide-view');
            var $section2SlideWrap = $('#section2 .slide-wrap');
            var $section2Slide = $('#section2 .slide');
            var $s2SlideCnt = 0;
            var $prevBtn = $('#section2 .prev-btn');
            var $nextBtn = $('#section2 .next-btn');
            var $s2StopBtn = $('#section2 .stop-btn');
            var $s2startBtn = $('#section2 .start-btn');

            var $roomWhiteBtn = $('#section2 .room-whitebtn');
            var $roomBlackBtn = $('#section2 .room-blackbtn');

            var $window = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section2 = $('#section2');
            var $slideW = $('#section2 .slide').innerWidth();

            var setId = null;
            var setId2 = null;
            var timercnt = 0;

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section2.css({width:$winW,height:$winH});
            }
            resizeFn();

            $window.resize(function(){
                resizeFn();
                s2SlideReponseFn();
            });

            function s2SlideReponseFn(){
                $slideW = $('#section2 .slide').innerWidth();
                section2SlideFn();
            }
            s2SlideReponseFn();
            setTimeout(s2SlideReponseFn, 100);

            function section2SlideFn(){
                $section2SlideWrap.stop().animate({left:-$slideW*$s2SlideCnt}, 300, 'easeOutCubic', function(){
                    if ($s2SlideCnt > 4) {$s2SlideCnt = 0;}
                    if ($s2SlideCnt < 0) {$s2SlideCnt = 4;}
                    $section2SlideWrap.stop().animate({left:-$slideW*$s2SlideCnt}, 0)
                })
            }

            function section2PrevCountFn(){
                $s2SlideCnt--;
                section2SlideFn();
            }

            function section2NextCountFn(){
                $s2SlideCnt++;
                section2SlideFn();
            }
            $prevBtn.on({
                click:function(){
                    section2SlideTimerFn();
                    if (!$section2SlideWrap.is(':animated')) {
                        section2PrevCountFn();
                        $s2startBtn.removeClass('addClick');
                        $s2StopBtn.removeClass('addClick');
                    }
                }
            });

            $nextBtn.on({
                click:function(){
                    section2SlideTimerFn();
                    if (!$section2SlideWrap.is(':animated')) {
                        section2NextCountFn();
                        $s2startBtn.removeClass('addClick');
                        $s2StopBtn.removeClass('addClick');
                    }
                }
            });

            $s2StopBtn.on({
                click:function(){
                    $s2StopBtn.addClass('addClick');
                    $s2startBtn.addClass('addClick');
                    clearInterval(setId);
                    clearInterval(setId2);
                }
            });
            $s2startBtn.on({
                click:function(){
                    $s2startBtn.removeClass('addClick');
                    $s2StopBtn.removeClass('addClick');
                    section2SlideTimerFn();
                }
            });


            $section2SlideView.swipe({
                swipeLeft:function(){
                    section2SlideTimerFn();
                    if (!$section2SlideWrap.is(':animated')) {
                        section2NextCountFn();
                        $s2startBtn.removeClass('addClick');
                        $s2StopBtn.removeClass('addClick');
                    }
                },
                swipeRight:function(){
                    section2SlideTimerFn();
                    if (!$section2SlideWrap.is(':animated')) {
                        section2PrevCountFn();
                        $s2startBtn.removeClass('addClick');
                        $s2StopBtn.removeClass('addClick');
                    }
                }
            });            

            function section2SlideAutoPlayFn(){
                setId = setInterval(section2NextCountFn, 4000)
            }
            section2SlideAutoPlayFn();

            function section2SlideTimerFn(){
                timercnt = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    timercnt++;
                    // console.log(timercnt);
                    if (timercnt >= 4) {
                        clearInterval(setId2);
                        section2NextCountFn();
                        section2SlideAutoPlayFn();
                    }
                }, 1000);
            }

            $roomWhiteBtn.on({
                mouseenter:function(){
                    $roomBlackBtn.addClass('mouseon');
                }
            });
            $roomBlackBtn.on({
                mouseleave:function(){
                    $roomBlackBtn.removeClass('mouseon');
                }
            });

        },

        section3Fn:function(){
            var $dinningWhiteBtn = $('#section3 .dinning-whitebtn');
            var $dinningBlackBtn = $('#section3 .dinning-blackbtn');

            var $window = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section3 = $('#section3');

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section3.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });

            $dinningWhiteBtn.on({
                mouseenter:function(){
                    $dinningBlackBtn.addClass('mouseon');
                }
            });
            $dinningBlackBtn.on({
                mouseleave:function(){
                    $dinningBlackBtn.removeClass('mouseon');
                }
            });

        },

        section4Fn:function(){
            var $slide = $('#section4 .slide');
            var $slide0 = $('#section4 .slide0');
            var $slide1 = $('#section4 .slide1');
            var $slide2 = $('#section4 .slide2');

            var $facilityWhiteBtn = $('#section4 .facility-whitebtn');
            var $facilityBlackBtn = $('#section4 .facility-blackbtn');

            var $window = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section4 = $('#section4');

            // var s4ImgW = $winW;
            // var s4ImgH = s4ImgW*0.785;
            // $slide.css({width:s4ImgW, height:s4ImgH})
            

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section4.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });

            $facilityWhiteBtn.on({
                mouseenter:function(){
                    $facilityBlackBtn.addClass('mouseon');
                }
            });
            $facilityBlackBtn.on({
                mouseleave:function(){
                    $facilityBlackBtn.removeClass('mouseon');
                }
            });

            $slide0.on({
                mouseenter:function(){
                    $slide0.addClass('mouseon');
                    $slide1.removeClass('mouseon');
                    $slide2.removeClass('mouseon');
                }
            });

            $slide1.on({
                mouseenter:function(){
                    $slide1.addClass('mouseon');
                    $slide0.removeClass('mouseon');
                    $slide2.removeClass('mouseon');
                }
            });

            $slide2.on({
                mouseenter:function(){
                    $slide2.addClass('mouseon');
                    $slide0.removeClass('mouseon');
                    $slide1.removeClass('mouseon');
                }
            });


        },

        section5Fn:function(){
            var $activityCleanbtn = $('#section5 .activity-cleanbtn');
            var $activityWhiteBtn = $('#section5 .activity-whitebtn');

            var $window = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section5 = $('#section5');

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section5.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });

            $activityCleanbtn.on({
                mouseenter:function(){
                    $activityWhiteBtn.addClass('mouseon');
                }
            });
            $activityWhiteBtn.on({
                mouseleave:function(){
                    $activityWhiteBtn.removeClass('mouseon');
                }
            });
        },

        section6Fn:function(){
            var $window = $(window);
            var $winW = $(window).width;
            var $winH = $(window).height;
            var $section6 = $('#section6');

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section6.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });

        },

        section7Fn:function(){
            var $window = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();
            var $section7 = $('#section7');

            function resizeFn(){
                $winW = $(window).width();
                $winH = $(window).height();
                $section7.css({width:$winW,height:$winH});
            }
            resizeFn();
            $window.resize(function(){
                resizeFn();
            });
        },

        indicatorFn:function(){

        },

        footerFn:function(){
            var $familysiteBtn = $('#footer .familysite-btn');
            var $familyList = $('#footer .family-list');
            var $familysiteBtnI = $('#footer .familysite-btn i');


            $familysiteBtn.on({
                click:function(){
                    $familyList.toggleClass('addView');
                    $familysiteBtnI.toggleClass('addView');
                }
            });

        },

        offersFn:function(){
            var $html = $('html');
            var $sideBtn = $('#header .side-btn');
            var $offers = $('#offers');
            var $closeOffersWrap = $('#offers .close-offers-wrap');
            var $closeBtn = $('#offers .close-btn');
            var $offersBlind = $('.offers-blind');
            var $packagePrevBtn = $('#offers .package-prev-btn');
            var $packageNextBtn = $('#offers .package-next-btn');
            var $offerSlideWrap = $('#offers .slide-wrap');
            var $offerSlideView = $('#offers .slide-view');
            var offerCnt = 0;


            
            $sideBtn.on({
                click:function(){
                    $html.addClass('addModal');
                    $offers.animate({right:0},700, 'easeInOutQuad')
                    $closeOffersWrap.show(500);
                    $offersBlind.show(0);
                }
            });
            $closeBtn.on({
                click:function(){
                    $html.removeClass('addModal');
                    $offers.animate({right:-1340},700, 'easeInOutQuad')
                    $closeOffersWrap.hide();
                    $offersBlind.hide();
                }
            });
            $closeOffersWrap.on({
                click:function(){
                    $html.removeClass('addModal');
                    $offers.animate({right:-1340},700, 'easeInOutQuad')
                    $closeOffersWrap.hide();
                    $offersBlind.hide();
                }
            });
            $offersBlind.on({
                click:function(){
                    $html.removeClass('addModal');
                    $offers.animate({right:-1340},700, 'easeInOutQuad')
                    $closeOffersWrap.hide();
                    $offersBlind.hide();
                }
            });

            function offerSlideFn(){
                $offerSlideWrap.stop().animate({left:-680*offerCnt}, 500, 'easeOutCubic',function(){
                    if (offerCnt > 2) {offerCnt = 0;}
                    if (offerCnt < 0) {offerCnt = 2;}
                    $offerSlideWrap.stop().animate({left:-680*offerCnt}, 0)
                })
            }
            function offerSlidePrevCountFn(){
                offerCnt --;
                offerSlideFn();
            }
            function offerSlideNextCountFn(){
                offerCnt ++;
                offerSlideFn();
            }

            $packagePrevBtn.on({
                click:function(){
                    if(!$offerSlideWrap.is(':animated')){
                        offerSlidePrevCountFn();
                    }
                }
            });
            $packageNextBtn.on({
                click:function(){
                    if(!$offerSlideWrap.is(':animated')){
                        offerSlideNextCountFn();
                    }
                }
            });

        },

        galleryFn:function(){
            var $galleryBtn = $('#gallery .gallery-btn');
            var $galleryUl = $('#gallery .gallery-wrap ul');
            var $galleryLi = $('#gallery .gallery-wrap li');
            var $galleryContent = $('#gallery .gallery-wrap .gallery-content');
            var n = $('#gallery gallery-wrap li').length;

            var $winW = $(window).innerWidth()+6;
            var cols = 5;
            var rows = Math.ceil(n/cols);
            var imgW = $winW/cols;
            var imgH = imgW * 0.692708333;
            var btnNum = 0;

            $galleryContent.addClass('addZoom');    // 처음 강제 1회 실행

            function galleryResizeFn(){
                $winW = $(window).innerWidth()+6;

                if($winW > 1200){
                    cols = 5;
                }
                else if($winW > 980){
                    cols = 4;
                }
                else if($winW > 680){
                    cols = 3;
                }
                else{
                    cols = 2;
                }

                imgW = $winW/cols;
                imgH = imgW * 0.692708333;

                $galleryLi.css({width:imgW, height:imgH});

                if(btnNum === 0){     // all
                    n = 15;
                    rows = Math.ceil(n/cols);
                    $galleryUl.css({width:$winW, height:imgH*rows});
                    $galleryLi.css({width:imgW, height:imgH});
                    $galleryContent.removeClass('addZoom');

                    if(cols === 5){
                        $galleryLi.eq(0).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(1).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(2).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                        $galleryLi.eq(3).stop().show().animate({left:imgW*3 ,top:imgH*0}, 500);
                        $galleryLi.eq(4).stop().show().animate({left:imgW*4 ,top:imgH*0}, 500);
                        $galleryLi.eq(5).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                        $galleryLi.eq(6).stop().show().animate({left:imgW*1 ,top:imgH*1}, 500);
                        $galleryLi.eq(7).stop().show().animate({left:imgW*2 ,top:imgH*1}, 500);
                        $galleryLi.eq(8).stop().show().animate({left:imgW*3 ,top:imgH*1}, 500);
                        $galleryLi.eq(9).stop().show().animate({left:imgW*4 ,top:imgH*1}, 500);
                        $galleryLi.eq(10).stop().show().animate({left:imgW*0 ,top:imgH*2}, 500);
                        $galleryLi.eq(11).stop().show().animate({left:imgW*1 ,top:imgH*2}, 500);
                        $galleryLi.eq(12).stop().show().animate({left:imgW*2 ,top:imgH*2}, 500);
                        $galleryLi.eq(13).stop().show().animate({left:imgW*3 ,top:imgH*2}, 500);
                        $galleryLi.eq(14).stop().show().animate({left:imgW*4 ,top:imgH*2}, 500);
                    }
                    else if(cols === 4){
                        $galleryLi.eq(0).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(1).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(2).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                        $galleryLi.eq(3).stop().show().animate({left:imgW*3 ,top:imgH*0}, 500);
                        $galleryLi.eq(4).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                        $galleryLi.eq(5).stop().show().animate({left:imgW*1 ,top:imgH*1}, 500);
                        $galleryLi.eq(6).stop().show().animate({left:imgW*2 ,top:imgH*1}, 500);
                        $galleryLi.eq(7).stop().show().animate({left:imgW*3 ,top:imgH*1}, 500);
                        $galleryLi.eq(8).stop().show().animate({left:imgW*0 ,top:imgH*2}, 500);
                        $galleryLi.eq(9).stop().show().animate({left:imgW*1 ,top:imgH*2}, 500);
                        $galleryLi.eq(10).stop().show().animate({left:imgW*2 ,top:imgH*2}, 500);
                        $galleryLi.eq(11).stop().show().animate({left:imgW*3 ,top:imgH*2}, 500);
                        $galleryLi.eq(12).stop().show().animate({left:imgW*0 ,top:imgH*3}, 500);
                        $galleryLi.eq(13).stop().show().animate({left:imgW*1 ,top:imgH*3}, 500);
                        $galleryLi.eq(14).stop().show().animate({left:imgW*2 ,top:imgH*3}, 500);
                    }
                    else if(cols === 3){
                        $galleryLi.eq(0).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(1).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(2).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                        $galleryLi.eq(3).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                        $galleryLi.eq(4).stop().show().animate({left:imgW*1 ,top:imgH*1}, 500);
                        $galleryLi.eq(5).stop().show().animate({left:imgW*2 ,top:imgH*1}, 500);
                        $galleryLi.eq(6).stop().show().animate({left:imgW*0 ,top:imgH*2}, 500);
                        $galleryLi.eq(7).stop().show().animate({left:imgW*1 ,top:imgH*2}, 500);
                        $galleryLi.eq(8).stop().show().animate({left:imgW*2 ,top:imgH*2}, 500);
                        $galleryLi.eq(9).stop().show().animate({left:imgW*0 ,top:imgH*3}, 500);
                        $galleryLi.eq(10).stop().show().animate({left:imgW*1 ,top:imgH*3}, 500);
                        $galleryLi.eq(11).stop().show().animate({left:imgW*2 ,top:imgH*3}, 500);
                        $galleryLi.eq(12).stop().show().animate({left:imgW*0 ,top:imgH*4}, 500);
                        $galleryLi.eq(13).stop().show().animate({left:imgW*1 ,top:imgH*4}, 500);
                        $galleryLi.eq(14).stop().show().animate({left:imgW*2 ,top:imgH*4}, 500);
                    }
                    else{
                        $galleryLi.eq(0).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(1).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(2).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                        $galleryLi.eq(3).stop().show().animate({left:imgW*1 ,top:imgH*1}, 500);
                        $galleryLi.eq(4).stop().show().animate({left:imgW*0 ,top:imgH*2}, 500);
                        $galleryLi.eq(5).stop().show().animate({left:imgW*1 ,top:imgH*2}, 500);
                        $galleryLi.eq(6).stop().show().animate({left:imgW*0 ,top:imgH*3}, 500);
                        $galleryLi.eq(7).stop().show().animate({left:imgW*1 ,top:imgH*3}, 500);
                        $galleryLi.eq(8).stop().show().animate({left:imgW*0 ,top:imgH*4}, 500);
                        $galleryLi.eq(9).stop().show().animate({left:imgW*1 ,top:imgH*4}, 500);
                        $galleryLi.eq(10).stop().show().animate({left:imgW*0 ,top:imgH*5}, 500);
                        $galleryLi.eq(11).stop().show().animate({left:imgW*1 ,top:imgH*5}, 500);
                        $galleryLi.eq(12).stop().show().animate({left:imgW*0 ,top:imgH*6}, 500);
                        $galleryLi.eq(13).stop().show().animate({left:imgW*1 ,top:imgH*6}, 500);
                        $galleryLi.eq(14).stop().show().animate({left:imgW*0 ,top:imgH*7}, 500);
                    }

                    $galleryContent.eq(0).addClass('addZoom');
                    $galleryContent.eq(1).addClass('addZoom');
                    $galleryContent.eq(2).addClass('addZoom');
                    $galleryContent.eq(3).addClass('addZoom');
                    $galleryContent.eq(4).addClass('addZoom');
                    $galleryContent.eq(5).addClass('addZoom');
                    $galleryContent.eq(6).addClass('addZoom');
                    $galleryContent.eq(7).addClass('addZoom');
                    $galleryContent.eq(8).addClass('addZoom');
                    $galleryContent.eq(9).addClass('addZoom');
                    $galleryContent.eq(10).addClass('addZoom');
                    $galleryContent.eq(11).addClass('addZoom');
                    $galleryContent.eq(12).addClass('addZoom');
                    $galleryContent.eq(13).addClass('addZoom');
                    $galleryContent.eq(14).addClass('addZoom');
                }
                else if(btnNum === 1){    // 0 5 6 10 11
                    n = 5;
                    rows = Math.ceil(n/cols);
                    $galleryUl.css({width:$winW, height:imgH*rows});
                    $galleryLi.css({width:imgW, height:imgH});
                    $galleryContent.removeClass('addZoom');
                    $galleryLi.eq(1).stop().hide();
                    $galleryLi.eq(2).stop().hide();
                    $galleryLi.eq(3).stop().hide();
                    $galleryLi.eq(4).stop().hide();
                    $galleryLi.eq(7).stop().hide();
                    $galleryLi.eq(8).stop().hide();
                    $galleryLi.eq(9).stop().hide();
                    $galleryLi.eq(12).stop().hide();
                    $galleryLi.eq(13).stop().hide();
                    $galleryLi.eq(14).stop().hide();

                    if(cols === 5){
                        $galleryLi.eq(0).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(5).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(6).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                        $galleryLi.eq(10).stop().show().animate({left:imgW*3 ,top:imgH*0}, 500);
                        $galleryLi.eq(11).stop().show().animate({left:imgW*4 ,top:imgH*0}, 500);
                    }
                    else if(cols === 4){
                        $galleryLi.eq(0).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(5).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(6).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                        $galleryLi.eq(10).stop().show().animate({left:imgW*3 ,top:imgH*0}, 500);
                        $galleryLi.eq(11).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                    }
                    else if(cols === 3){
                        $galleryLi.eq(0).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(5).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(6).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                        $galleryLi.eq(10).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                        $galleryLi.eq(11).stop().show().animate({left:imgW*1 ,top:imgH*1}, 500);
                    }
                    else{
                        $galleryLi.eq(0).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(5).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(6).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                        $galleryLi.eq(10).stop().show().animate({left:imgW*1 ,top:imgH*1}, 500);
                        $galleryLi.eq(11).stop().show().animate({left:imgW*0 ,top:imgH*2}, 500);
                    }

                    $galleryContent.eq(0).addClass('addZoom');
                    $galleryContent.eq(5).addClass('addZoom');
                    $galleryContent.eq(6).addClass('addZoom');
                    $galleryContent.eq(10).addClass('addZoom');
                    $galleryContent.eq(11).addClass('addZoom');
                }
                else if(btnNum === 2){    // 2 3 7
                    n = 3;
                    rows = Math.ceil(n/cols);
                    $galleryUl.css({width:$winW, height:imgH*rows});
                    $galleryLi.css({width:imgW, height:imgH});
                    $galleryContent.removeClass('addZoom');
                    $galleryLi.eq(0).stop().hide();
                    $galleryLi.eq(1).stop().hide();
                    $galleryLi.eq(4).stop().hide();
                    $galleryLi.eq(5).stop().hide();
                    $galleryLi.eq(6).stop().hide();
                    $galleryLi.eq(8).stop().hide();
                    $galleryLi.eq(9).stop().hide();
                    $galleryLi.eq(10).stop().hide();
                    $galleryLi.eq(11).stop().hide();
                    $galleryLi.eq(12).stop().hide();
                    $galleryLi.eq(13).stop().hide();
                    $galleryLi.eq(14).stop().hide();

                    if(cols === 5){
                        $galleryLi.eq(2).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(3).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(7).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                    }
                    else if(cols === 4){
                        $galleryLi.eq(2).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(3).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(7).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                    }
                    else if(cols === 3){
                        $galleryLi.eq(2).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(3).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(7).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                    }
                    else{
                        $galleryLi.eq(2).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(3).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(7).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                    }
                                        
                    $galleryContent.eq(2).addClass('addZoom');
                    $galleryContent.eq(3).addClass('addZoom');
                    $galleryContent.eq(7).addClass('addZoom');
                }
                else if(btnNum === 3){    // 4 8 9 13 14
                    n = 5;
                    rows = Math.ceil(n/cols);
                    $galleryUl.css({width:$winW, height:imgH*rows});
                    $galleryLi.css({width:imgW, height:imgH});
                    $galleryContent.removeClass('addZoom');
                    $galleryLi.eq(0).stop().hide();
                    $galleryLi.eq(1).stop().hide();
                    $galleryLi.eq(2).stop().hide();
                    $galleryLi.eq(3).stop().hide();
                    $galleryLi.eq(5).stop().hide();
                    $galleryLi.eq(6).stop().hide();
                    $galleryLi.eq(7).stop().hide();
                    $galleryLi.eq(10).stop().hide();
                    $galleryLi.eq(11).stop().hide();
                    $galleryLi.eq(12).stop().hide();
                    
                    if(cols === 5){
                        $galleryLi.eq(4).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(8).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(9).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                        $galleryLi.eq(13).stop().show().animate({left:imgW*3 ,top:imgH*0}, 500);
                        $galleryLi.eq(14).stop().show().animate({left:imgW*4 ,top:imgH*0}, 500);
                    }
                    else if(cols === 4){
                        $galleryLi.eq(4).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(8).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(9).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                        $galleryLi.eq(13).stop().show().animate({left:imgW*3 ,top:imgH*0}, 500);
                        $galleryLi.eq(14).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                    }
                    else if(cols === 3){
                        $galleryLi.eq(4).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(8).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(9).stop().show().animate({left:imgW*2 ,top:imgH*0}, 500);
                        $galleryLi.eq(13).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                        $galleryLi.eq(14).stop().show().animate({left:imgW*1 ,top:imgH*1}, 500);
                    }
                    else{
                        $galleryLi.eq(4).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(8).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                        $galleryLi.eq(9).stop().show().animate({left:imgW*0 ,top:imgH*1}, 500);
                        $galleryLi.eq(13).stop().show().animate({left:imgW*1 ,top:imgH*1}, 500);
                        $galleryLi.eq(14).stop().show().animate({left:imgW*0 ,top:imgH*2}, 500);
                    }
                    
                    $galleryContent.eq(4).addClass('addZoom');
                    $galleryContent.eq(8).addClass('addZoom');
                    $galleryContent.eq(9).addClass('addZoom');
                    $galleryContent.eq(13).addClass('addZoom');
                    $galleryContent.eq(14).addClass('addZoom');
                }
                else if( btnNum === 4 ){    // 1 12
                    n = 2;
                    rows = Math.ceil(n/cols);
                    $galleryUl.css({width:$winW, height:imgH*rows});
                    $galleryLi.css({width:imgW, height:imgH});
                    $galleryContent.removeClass('addZoom');
                    $galleryLi.eq(0).stop().hide();
                    $galleryLi.eq(2).stop().hide();
                    $galleryLi.eq(3).stop().hide();
                    $galleryLi.eq(4).stop().hide();
                    $galleryLi.eq(5).stop().hide();
                    $galleryLi.eq(6).stop().hide();
                    $galleryLi.eq(7).stop().hide();
                    $galleryLi.eq(8).stop().hide();
                    $galleryLi.eq(9).stop().hide();
                    $galleryLi.eq(10).stop().hide();
                    $galleryLi.eq(11).stop().hide();
                    $galleryLi.eq(13).stop().hide();
                    $galleryLi.eq(14).stop().hide();

                    if(cols === 5){
                        $galleryLi.eq(1).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(12).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                    }
                    else if(cols === 4){
                        $galleryLi.eq(1).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(12).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                    }
                    else if(cols === 3){
                        $galleryLi.eq(1).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(12).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                    }
                    else{
                        $galleryLi.eq(1).stop().show().animate({left:imgW*0 ,top:imgH*0}, 500);
                        $galleryLi.eq(12).stop().show().animate({left:imgW*1 ,top:imgH*0}, 500);
                    }
                    
                    $galleryContent.eq(1).addClass('addZoom');
                    $galleryContent.eq(12).addClass('addZoom');
                }
            }
            
            $(window).resize(function(){
                galleryResizeFn();
            });
            setTimeout(galleryResizeFn, 100);

            $galleryBtn.each(function(idx){
                $(this).on({
                    click:function(){
                        btnNum = idx;
                        galleryResizeFn();
                        $galleryBtn.removeClass('addNav');
                        $(this).addClass('addNav');
                    }
                });
            });


        },

        wheelEventFn:function(){
            var $wrap = $('#wrap');
            var $section = $('.section');
            var wheelDelta = 0;
            var cnt = 0;


            // 210529 휠이벤트 수정
            $wrap.on('mousewheel DOMMouseScroll', function(event){
                event.preventDefault();
                if(event.originalEvent.wheelDelta){
                    wheelDelta = event.originalEvent.wheelDelta;
                } else {
                    wheelDelta = event.detail*-1;
                }

                if (!$('html,body').is(':animated')) {
                    if (wheelDelta < 0) {
                        cnt++;
                        if (cnt < 8) {
                            $('html,body').stop().animate({scrollTop:$section.eq(cnt).offset().top}, 800, 'swing');
                        } else if (cnt>=8) {
                            cnt=8;
                            $('html,body').stop().animate({scrollTop:$('#footer').offset().top}, 800, 'swing');
                        }
                    } else {
                        cnt--;
                        $('#footer').removeClass('addView');
                        if (cnt < 0) {
                            cnt=0;
                        }
                        $('html,body').stop().animate({scrollTop:$section.eq(cnt).offset().top}, 800, 'swing');
                    }
                }
            });




        }

    }

    gjb.init();

})(jQuery);