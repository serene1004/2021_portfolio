;(function($){

    var litho = {
        btn:0,  // 헤더영역에서 모바일버튼 클릭시 값 변경 - 스크롤이벤트에서 변경된 btn멤버변수 사용
        init:function(){
            this.scrollEventFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
            this.smoothScrollFn();
            this.demoModalFn();
        },
        scrollEventFn:function(){

            var $win = $(window);
            var scrollOld = 0;
            var scrollNew = 0;
            var result = null;
            var $header = $('#header')

            var that = this;
            

            function scrollEventFn(){
                scrollNew = $win.scrollTop();
                var scroll = function(){    // 리터럴함수(익명함수)
                    
                    result = scrollOld-scrollNew > 0 ? 'Up' : 'Down';
                    // // 삼학연산자도 연습할것
                    // if( scrollOld - scrollNew > 0 ){
                    //     result = 'Up';
                    // }
                    // else{
                    //     result = 'Down';
                    // }
                }
                scroll();
                
                // 스크롤이벤트 조건문
                if( scrollNew <= 20 ){  // 스크롤의 top값이 20보다 작거나 같을때(화면 최상단) // 부여됬던 클래스 모두삭제.
                    $header.removeClass('addUp');
                    $header.removeClass('addDown');
                    $header.removeClass('addWhite');
                }
                else{
                    if( result === 'Up' ){  // 화면 스크롤을 위로 올릴때
                        if( that.btn === 1){    // 모바일 버튼이 클릭된 상태 // 헤더탑-80을 없애고 검정색으로 변경하고 흰색 추가
                            $header.removeClass('addUp');
                            $header.addClass('addDown');
                            $header.addClass('addWhite');
                        }
                        else{   // 모바일 버튼이 클릭되지 않았을때 // 헤더 탑-80을 없애고 검정색으로 변경. 흰색 삭제
                            $header.removeClass('addUp');
                            $header.addClass('addDown');
                            $header.removeClass('addWhite');
                        }
                    }
                    if( result === 'Down' ){    // 화면 스크롤을 아래로 내릴때
                        if( that.btn === 1){    // 모바일 버튼이 클릭된 상태 // 헤더탑-80 없애고 검정색으로 변경. 흰색 삭제
                            $header.removeClass('addUp');
                            $header.addClass('addDown');
                            $header.removeClass('addWhite');
                        }
                        else{   // 모바일 버튼이 클릭되지 않았을때 // 헤더 탑-80 추가하고 검정색, 흰색 삭제
                            $header.addClass('addUp');
                            $header.removeClass('addDown');
                            $header.removeClass('addWhite');
                        }
                    }
                } 

                // console.log( result );
                scrollOld = scrollNew;
            }

            $win.scroll(function(){
                scrollEventFn();
            });

            // var scrollPrev = 0;
            // var scrollCurrent = 0;
            // var $window = $(window);
            // result = null;

            // function wheelPositionFn(){
            //     result = scrollPrev - scrollCurrent > 0 ? 'Up' :'Down'
            //     return{
            //         scrollPrev,
            //         scrollCurrent,
            //         result
            //     }
            // }

            // $window.scroll(function(){
            //     scrollCurrent = $(this).scrollTop();
            //     if(scrollCurrent <= 50 ){
            //         $('#header').removeClass('addDown');
            //         $('#header').removeClass('addUp');
            //     }
            //     else{
            //         wheelPositionFn();
            //         if( result == 'Down' ){
            //             $('#header').removeClass('addDown'); // 헤더가 내려오는걸 삭제
            //             $('#header').addClass('addUp');      // 헤더가 위로 올라감
            //         }
    
            //         if( result == 'Up' ){
            //             $('#header').removeClass('addUp');   // 헤더가 올라가는걸 삭제
            //             $('#header').addClass('addDown');    // 헤더가 아래로 내려감
            //         }
            //     }
            //     scrollPrev = scrollCurrent;
            // });


        },
        headerFn:function(){

            // 메인메뉴, 서브메뉴 객체와 배열
            var lithoNav = {
                sub1:[
                    {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
                    {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                    {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                    {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                ],
                sub2:[
                    {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
                    {sub:"Services", subsub:["Our services","What we offer","Our process"]},
                    {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
                    {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
                ],
                sub3:[
                    {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                    {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                    {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                    {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                    {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                    {sub:"Portfolio switch image", subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                    {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                    {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
                ],
                sub4:[
                    {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                    {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                    {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                    {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
                ],
                sub5:[
                    {
                        sub:"Header and menu",
                        subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                        subsubsub:{
                            subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu half"],
                            subsubsub2:["Left menu classic","Left menu modern"],
                            subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                            subsubsub4:["Classic","Modern","Full screen"]
                        }
                    }, 
                    {sub:"Footer",subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]},
                    {sub:"Page title",subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]},
                    {sub:"Modal popup",subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]},
                    {sub:"Icon packs",subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line",]},
                    {sub:"Animations"}
                ],
                sub6:[
                    {sub:"Blog grid"},
                    {sub:"Blog masonry"},
                    {sub:"Blog classic"},
                    {sub:"Blog simple"},
                    {sub:"Blog side image"},
                    {sub:"Blog metro"},
                    {sub:"Blog overlay image"},
                    {sub:"Blog modern"},
                    {sub:"Blog clean"},
                    {sub:"Blog widget"},
                    {sub:"Blog standard"},
                    {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},
                    {sub:"Post types", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width post"]}
                ],
                sub7:[
                    {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                    {sub:["menu-banner-01.jpg"]},
                    {sub:["menu-banner-02.jpg"]},
                ],
            };  // litho 객체 배열 메뉴

            
            // 변수설정
            var txt = '';
            var $col = $('#header #nav .col')
            var $sub2Btn = $('#header .sub2 .sub-btn')
            var $sub2Sub = $('#header .sub2 .subsub')
            var $sub3Btn = $('#header .sub3 .sub-btn')
            var $sub3sub = $('#header .sub3 .subsub')
            var icon = '';
            var $col4 = $('#header .sub4 .col')
            var $sub5Btn = $('#header .sub5 .sub-btn');
            var $sub5Sub = $('#header .sub5 .subsub');
            var $sub6Btn = $('#header .sub6 .sub-btn')
            var $sub6Sub = $('#header .sub6 .subsub')
            var $sub7Dl1 = $('#header .sub7 dl').eq(0);
            var $sub7Img = $('#header .sub7 dl img');    // 이미지2개
         
            // litho 객체 배열 서브메뉴를 컴포넌트요소에 넣기
            function subObjectarrayFn(){
            // 서브1
                // 서브1 : 1~4열까지 반복

                // if문 사용 자동화
                for(var i in lithoNav.sub1){
                    for(var j in lithoNav.sub1[i].sub){
                        if(j==0){
                            txt = '<dt>' + lithoNav.sub1[i].sub[0] + '</dt>';
                        }
                        else{
                            txt += '<dd><a href="#">' + lithoNav.sub1[i].sub[j] + '</a></dd>';
                        }
                    }
                    $col.eq(i).html(txt);
                    txt = '';
                    }

                // 서브2
                    
                for(var i in lithoNav.sub2){
                    txt = lithoNav.sub2[i].sub;
                    icon=$sub2Btn.eq(i).html();
                    txt+=icon;
                    $sub2Btn.eq(i).html(txt);
                    txt='';
                }

                for(var i in lithoNav.sub2){
                    for(var j in lithoNav.sub2[i].subsub){
                        txt += '<li><a href="#">'+ lithoNav.sub2[i].subsub[j] +'</a></li>';
                    }
                    $sub2Sub.eq(i).html(txt);
                    txt = '';
                }

                // 서브2 서브 반복
                for(var j in lithoNav.sub2[0].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub2[0].subsub[j] +'</a></li>';
                }
                $sub2Sub.eq(0).html(txt);
                txt = '';

                for(var j in lithoNav.sub2[1].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub2[1].subsub[j] +'</a></li>';
                }
                $sub2Sub.eq(1).html(txt);
                txt = '';

                for(var j in lithoNav.sub2[2].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub2[2].subsub[j] +'</a></li>';
                }
                $sub2Sub.eq(2).html(txt);
                txt = '';

                for(var j in lithoNav.sub2[3].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub2[3].subsub[j] +'</a></li>';
                }
                $sub2Sub.eq(3).html(txt);
                txt = '';                

                // 서브3

                for(var i in lithoNav.sub3){
                    txt = lithoNav.sub3[i].sub;
                    icon=$sub3Btn.eq(i).html();
                    txt+=icon;
                    $sub3Btn.eq(i).html(txt);
                    txt='';
                }

                for(var i in lithoNav.sub3){
                    for(var j in lithoNav.sub3[i].subsub){
                        txt += '<li><a href="#">'+ lithoNav.sub3[i].subsub[j] +'</a></li>';
                    }
                    $sub3sub.eq(i).html(txt);
                    txt = '';
                }

                // 서브4

                for(var i in lithoNav.sub4){
                    for(var j in lithoNav.sub4[i].sub){
                        if(j==0){
                            txt = '<dt>'+lithoNav.sub4[i].sub[0]+'</dt>';
                        }
                        else{
                            txt += '<dd><a href="#">'+lithoNav.sub4[i].sub[j]+'</a></dd>';
                        }
                    }
                    $col4.eq(i).html(txt);
                    txt = '';
                }                

                //서브5

                for(var i in lithoNav.sub5){
                    txt = lithoNav.sub5[i].sub;
                    icon = $sub5Btn.eq(i).html();
                    txt += icon;
                    $sub5Btn.eq(i).html(txt);
                    txt = '';
                    
                    if(i==0){
                        for(j in lithoNav.sub5[i].subsub){
                            if(j < 9){
                                txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[i].subsub[j] +'</a></li>';
                            }
                            else{
                                txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[i].subsub[j] +'<i class="fas fa-angle-right"></i></a></li>';
                            }
                        }
                        $sub5Sub.eq(i).html(txt);
                        txt = '';
                    }
                    else if(i>0 && i<5){
                        for(j in lithoNav.sub5[i].subsub){
                            txt += '<li><a href="#" class="sub-sub-btn">'+ lithoNav.sub5[i].subsub[j] +'</a></li>';
                        }
                        $sub5Sub.eq(i).html(txt);
                        txt = '';
                    }
                    
                }

                // 서브5 서브서브
                txt = $('.sub5-sub1 > div > ul > li').eq(9).html();
                txt += '<div class="sub-sub-sub sub5-sub1-sub10">';
                txt += '<div class="sub-sub-sub-gap">';
                txt += '<ul>';
                txt += '<li><a href="#">Hamburger menu</a></li>';
                txt += '<li><a href="#">Hamburger menu modern</a></li>';
                txt += '<li><a href="#">Hamburger menu half</a></li>';
                txt += '</ul>';
                txt += '</div>';
                txt += '</div>';
                $('.sub5-sub1 > div > ul > li').eq(9).html(txt);
                txt = '';

                txt = $('.sub5-sub1 > div > ul > li').eq(10).html();
                txt += '<div class="sub-sub-sub sub5-sub1-sub11">';
                txt += '<div class="sub-sub-sub-gap">';
                txt += '<ul>';
                txt += '<li><a href="#">Left menu classic</a></li>';
                txt += '<li><a href="#">Left menu modern</a></li>';
                txt += '</ul>';
                txt += '</div>';
                txt += '</div>';
                $('.sub5-sub1 > div > ul > li').eq(10).html(txt);
                txt = '';

                txt = $('.sub5-sub1 > div > ul > li').eq(11).html();
                txt += '<div class="sub-sub-sub sub5-sub1-sub12">';
                txt += '<div class="sub-sub-sub-gap">';
                txt += '<ul>';
                txt += '<li><a href="#">Always fixed</a></li>';
                txt += '<li><a href="#">Disable fixed</a></li>';
                txt += '<li><a href="#">Reverse scroll</a></li>';
                txt += '<li><a href="#">Responsive sticky</a></li>';
                txt += '</ul>';
                txt += '</div>';
                txt += '</div>';
                $('.sub5-sub1 > div > ul > li').eq(11).html(txt);
                txt = '';

                txt = $('.sub5-sub1 > div > ul > li').eq(12).html();
                txt += '<div class="sub-sub-sub sub5-sub1-sub13">';
                txt += '<div class="sub-sub-sub-gap">';
                txt += '<ul>';
                txt += '<li><a href="#">Classic</a></li>';
                txt += '<li><a href="#">Modern</a></li>';
                txt += '<li><a href="#">Full screen</a></li>';
                txt += '</ul>';
                txt += '</div>';
                txt += '</div>';
                $('.sub5-sub1 > div > ul > li').eq(12).html(txt);
                txt = '';   // 서브 5-1 끝


                // 서브6

                for(var i in lithoNav.sub6){
                    if(i<11){
                        txt = lithoNav.sub6[i].sub;
                        $sub6Btn.eq(i).html(txt);
                    }
                    else{
                        txt = lithoNav.sub6[i].sub+'<i class="fas fa-angle-right"></i>';
                        $sub6Btn.eq(i).html(txt);
                    }
                }
                txt = '';

                for(var j in lithoNav.sub6[11].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub6[11].subsub[j] +'</a></li>';
                }
                $sub6Sub.eq(0).html(txt);
                txt = '';

                for(var j in lithoNav.sub6[12].subsub){
                    txt += '<li><a href="#">'+ lithoNav.sub6[12].subsub[j] +'</a></li>';
                }
                $sub6Sub.eq(1).html(txt);
                txt = '';

                // 서브7
        
                for(var i in lithoNav.sub7[0].sub){
                    if(i==0 || i==6){   // || = or(또는)
                        txt += '<dt>'+ lithoNav.sub7[0].sub[i] + '</dt>';
                    }
                    else{
                        txt += '<dd><a href="#">'+ lithoNav.sub7[0].sub[i] + '</a></dd>';
                    }
                }
                $sub7Dl1.html(txt);
                txt = '';

                // 이미지 경로정보 가져와서 객체 배열 이미지 추가

                for(var i=0; i<$sub7Img.length; i++){
                    txt = $sub7Img.eq(i).attr('src');
                    txt += lithoNav.sub7[i+1].sub[0];
                    $sub7Img.eq(i).attr('src', txt);
                    txt = '';
                }
            }    
            subObjectarrayFn();


            // 화면 크기를 확인해서 width가 980이하일때 버튼이벤트가 마우스엔터에서 클릭으로 변경
            // 리사이즈를 할때마다 버튼의 이벤트를 분기해서 넣는방법
            // 버튼의 이벤트에서 분기를하는방법
            var $window = $(window);
            var $winW = $(window).width();
            var $winH = $(window).height();

            // function resizeFn(){
            //     $winW = $(window).width();
            //     $winH = $(window).height();
            //     // console.log('리사이즈'+$winW);
            // }
            // resizeFn();
            
            // $window.resize(function(){
            //     resizeFn();
            //     // console.log('윈도우.리사이즈'+$winW);
            // });

            
            // 네비게이션 메인버튼(메뉴)
            var $mainBtn = $('#header .main-btn');
            var $sub = $('#header .sub');

            var $navUlLi = $('#header #nav > ul > li')  // 마우스가 떠나면 sub를 숨겨지게끔 하기위한 영역설정(메인버튼과 서브메뉴들을 감싸주는 li)
            var $subBtn = $('#header .sub-btn')
            var $subSub = $('#header .sub-sub')

            var $subSubBtn = $('#header .sub-sub-btn')
            var $subSubSub = $('#header .sub-sub-sub')
            
            var $nav = $('#header #nav')
            var $mobileBtn = $('#header .mobile-btn');
            var $bar = $('#header .mobile-btn .bar')
            var pc         = 0;
            var mobile     = 0;
            var $logoImg   = $('#header #logo a img');

            var that = this;   // litho 객체

            // pcFn
            function pcFn(){
                $nav.stop().show();
                $sub.stop().hide();
                $subSub.stop().hide();
                $subSubSub.stop().hide();
                $nav.css({display:'inline-block'});

                $logoImg.attr('src','./img/logo-yellow-ochre-light-alt.png');

                $mainBtn.on({
                    mouseenter:function(event){
                        event.preventDefault();
                        $(this).next().stop().show();
                    }   
                });
               
                $navUlLi.on({
                    mouseleave:function(event){
                        event.preventDefault();
                        $sub.stop().hide();
                    }
                });
    
                $subBtn.on({
                    mouseenter:function(event){
                        event.preventDefault();
                        $subSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
    
                $navUlLi.on({
                    mouseleave:function(event){
                        event.preventDefault();
                        $subSub.stop().hide();
                    }
                });
    
                $subSubBtn.on({
                    mouseenter:function(event){
                        event.preventDefault();
                        $subSubSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
    
                $subSub.on({
                    mouseleave:function(event){
                        event.preventDefault();
                        $subSubSub.stop().hide();
                    }
                });
            }   // pcFn 끝

            // mobileFn
            function mobileFn(){
                $sub.stop().hide();

                $subSub.stop().show();
                $subSubSub.stop().show();

                $bar.removeClass('addMobile');
                $nav.stop().slideUp(0);

                $logoImg.attr('src','./img/logo-yellow-ochre-alt.png');

                // 기존 이벤트 삭제하기
                $mainBtn.off('mouseenter');
                $navUlLi.off('mouseleave');
                
                $subBtn.off('mouseenter');
                $subSubBtn.off('mouseenter');
                $subSub.off('mouseleave');
                             
            }   // mobileFn 끝

            // pc모드 / mobile모드
            function pcMobileFn(){
                if($window.innerWidth() > 980 ){
                    
                    pc = 1;
                    mobile = 0;
                    pcFn();
                    that.btn = 0;   // pc 화면에서 0으로 초기화를 해놔야 다시 모바일로갔을때 모바일버튼스크롤기능이 정상적으로 작동함
                }
                else{
                    pc = 0;
                    mobile = 1;
                    mobileFn();
                }
            };
            setTimeout(pcMobileFn,100); //로딩시
            
            $window.resize(function(){
              pcMobileFn();                  
            });

            mobileFn();
        
            // 모바일 메뉴
            $mainBtn.on({
                click:function(){
                    if(mobile == 1){
                        $sub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }   
            }); 
              
            // 3선 모바일메뉴
            $mobileBtn.on({
                click:function(event){
                    event.preventDefault();
                    $bar.toggleClass('addMobile');
                    $nav.stop().slideToggle(300);
                    
                    return that.btn === 0 ? that.btn = 1 : that.btn = 0;    // 전역변수 (전역 멤버 변수)
                    // that.btn === 0 ? that.btn = 1 : that.btn = 0;    // 0이면 1로, 1이면 0으로
                    // console.log(that.btn);
                }
            });




        },
        section1Fn:function(){
            // 슬라이드의 너비와 높이를 창높이 창너비로 설정한다.(반응형)
            var $slide = $('#section1 .slide')  // 로딩시 변수설정
            var $window = $(window);            // 창
            var $winW = $(window).width();      // 창너비 즉시반환
            var $winH = $(window).height();     // 창높이 즉시반환

            var $section1 = $('#section1');
            
            var $slideWrap = $('#section1 .slide-wrap');
            var $nextBtn = $('#section1 .next-btn')
            var $prevBtn = $('#section1 .prev-btn')
            var $pageBtn = $('#section1 .page-btn');
            var $slideView = $('#section1 .slide-view');    // 터치선택자(Touch Selector)
            var cnt = 0;
            var n = $('#section1 .slide').length;  // 슬라이드 총갯수

            var setId = null;


            // 슬라이드의 너비 높이 설정 완료  // 로딩시 설정
            function resizeFn(){
                $winW = $(window).width();
                // $winH = $(window).height(); // 높이설정을 가로, 세로모드 반응형으로 하기위해 아래로 내림.
                $slide.css({width:$winW});
                
                // 가로형모드 반응형
                if(window.orientation == 0 || window.orientation == 180){
                    $winH = $(window).height();
                }
                // 세로형모드 반응형
                else if (window.orientation == 90 || window.orientation == -90){
                    if($winW > 980 ){
                        $winH = $(window).height();
                    }
                    else{
                        $winH = 600;
                    }
                };

                    $section1.css({width:$winW,height:$winH}); // 즉시 변환 너비 높이 적용 실행
                    $slideWrap.stop().animate({left:-$winW*cnt}, 0);    // 즉시실행 0의 속도
                    // mainSlideFn();   // 메인슬라이드함수 전체를 가져오기때문에 300의 속도가 있음
                }
                resizeFn(); // 로딩시 실행
                setTimeout(resizeFn, 10);  // 0.1초 뒤에 강제실행 (반응형 너비설정 resizeFn 이 즉각 실행되도록)

            // 화면의 크기가(너비와높이) 1픽셀만 변경되어도 동작되는 반응형메서드
            // $window.resize();
            $window.resize(function(){
                setTimeout(resizeFn, 100);
            });
                

            // 페이드인 아웃 슬라이드
            // 메인슬라이드 - 이전슬라이드 함수
            function mainPrevSlideFn(){
                $slide.css({ zIndex:1 }).stop().animate({opacity:1},0); // 애니메이트를 초기화시켜줘야 보임
                $slide.eq(cnt).css({ zIndex:2 });
                $slide.eq(cnt===2?0:cnt+1).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},1000);
                pageBtnColorEventFn();
            }


            // 메인슬라이드 - 다음슬라이드 함수
            function mainNextSlideFn(){
                $slide.css({ zIndex:1 });
                $slide.eq(cnt===0?2:cnt-1).css({ zIndex:2 });
                $slide.eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},1000);
                pageBtnColorEventFn();
            }



            // 슬라이드함수
            function prevSlideCountFn(){
                cnt --;
                if(cnt<0){
                    cnt=2;
                }
                mainPrevSlideFn();  // 메인 이전슬라이드 호출
            }

            function nextSlideCountFn(){
                cnt ++;
                if(cnt>2){
                    cnt=0;
                }
                mainNextSlideFn();  // 메인 다음슬라이드 호출
            }

            // 화살버튼
            $prevBtn.on({
                click:function(e){
                    e.preventDefault();
                    puaseTimerFn();
                    if (!$slide.is(':animated')) {
                        prevSlideCountFn();
                    }
                }
            })

            $nextBtn.on({
                click:function(e){
                    e.preventDefault();
                    puaseTimerFn();
                    if (!$slide.is(':animated')) {
                        nextSlideCountFn();
                    }
                }
            })


            // 페이지 버튼 색상변경 이벤트 함수
            function pageBtnColorEventFn(){
                $pageBtn.removeClass('addPage');
                $pageBtn.eq(cnt > n-1 ? 0 : cnt).addClass('addPage'); //0 1 2 0 1 2
            }
            pageBtnColorEventFn(); //로딩시 페이지함수 실행
  
              // 페이지버튼 클릭시 해당 페이지로 이동
              $pageBtn.each(function(idx){                  
                  $(this).on({  //첫번째 슬라이드 호출
                      click:  function(){
                      puaseTimerFn();
  
                          if( cnt < idx ){
                            cnt = idx;
                            mainNextSlideFn() // 슬라이드 메인 다음 함수 호출
                          }
                          if( cnt > idx ){
                            cnt = idx;
                            mainPrevSlideFn() // 슬라이드 메인 이전 함수 호출
                          }
                      }
                  });
              });   


            // 터치 스와이프
            // 슬라이드를 오른쪽에서 왼쪽으로 터치시 다음슬라이드 카운트 함수호출
            // 슬라이드를 왼쪽에서 오른쪽으로 터치시 이전슬라이드 카운트 함수호출
            // $slideView.swipe({
            //     swipeLeft:function(e){
            //         e.preventDefault();
            //         puaseTimerFn();
            //         if (!$slide.is(':animated')) {
            //             nextSlideCountFn()
            //         }
            //     },
            //     swipeRight:function(e){
            //         e.preventDefault();
            //         puaseTimerFn();
            //         if (!$slide.is(':animated')) {
            //             prevSlideCountFn()
            //         }
            //     }
            // });

            // 터치 스와이프 제작
            var touchStart = 0;
            var touchEnd = 0;
            var touchD = false;
            var touchYstart = 0;    // 
            var touchYend = 0;

            $slideView.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    puaseTimerFn();

                    touchStart = e.clientX; // = e.clientX;
                    touchYstart = e.clientY;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    puaseTimerFn();

                    touchEnd = e.clientX;
                    touchYend = e.clientY;
                    touchSwipeFn();

                    if(touchYstart-touchYend < -50){    // 위에서 아래로 터치하면
                        $('html,body').stop().animate({scrollTop:0}, 1000);
                    }
                    if(touchYstart-touchYend > 50){    // 아래에서 위로 터치하면
                        $('html,body').stop().animate({scrollTop:$('#section2').offset().top}, 1000);
                    }
                },
                mouseleave:function(e){
                    if(touchD === true){
                        puaseTimerFn();
                        touchEnd = e.clientX;
                        touchSwipeFn();
                        touchD = false;
                    }
                },

                touchstart:function(e){
                    e.preventDefault();
                    puaseTimerFn();

                    touchStart = e.originalEvent.changedTouches[0].clientX;
                    touchYstart = e.originalEvent.changedTouches[0].clientY;
                },
                touchend:function(e){
                    e.preventDefault();
                    puaseTimerFn();
                    touchSwipeFn();

                    touchEnd = e.originalEvent.changedTouches[0].clientX;
                    touchYend = e.originalEvent.changedTouches[0].clientY;
                    
                    if(touchYstart-touchYend < -50){    // 위에서 아래로 터치하면
                        $('html,body').stop().animate({scrollTop:0}, 1000);
                    }
                    if(touchYstart-touchYend > 50){    // 아래에서 위로 터치하면
                        $('html,body').stop().animate({scrollTop:$('#section2').offset().top}, 1000);
                    }
                },
            });
            
            function touchSwipeFn(){
                // console.log('시작',touchStart);
                // console.log('끝',touchEnd);

                if((touchStart-touchEnd) > 0){
                    if (!$slide.is(':animated')) {
                        nextSlideCountFn();
                    }
                }
                if((touchStart-touchEnd) < 0){
                    if (!$slide.is(':animated')) {
                        prevSlideCountFn();
                    }
                }
            };

            // 자동타이머 함수 4초에 한번씩 반복
            function autoTimerFn(){
                setId = setInterval(nextSlideCountFn, 4000);
            }
            autoTimerFn();

            // 슬라이드에서 이벤트 발생시 자동 타이머를 일시중지
            var setId2 = null;
            function puaseTimerFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                // 5초동안 아무이벤트가 없으면 다시 자동타이머 실행
                setId2 = setInterval(function(){
                    t ++;
                    if(t >= 4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoTimerFn();
                    }
                }, 1000)
            };

            // // 휠로 슬라이드 넘기기
            // var wheel = 0;
            // $slideWrap.on('mousewheel DOMMouseScroll', function(event){
            //     event.preventDefault();
            //     if(event.originalEvent.wheelDelta){
            //         wheel = event.originalEvent.wheelDelta;
            //     }
            //     else{
            //         wheel = event.detail*-1;
            //     };

            //     if(wheel < 0){
            //         puaseTimerFn();
            //         if(!$slideWrap.is(':animated')){
            //             nextSlideCountFn();
            //             if(cnt>2){
            //                 $('html,body').stop().animate({scrollTop:$('#section2').offset().top}, 600);
            //             }
            //         }
            //     }
            //     else{
            //         puaseTimerFn();
            //         if(!$slideWrap.is(':animated')){
            //             prevSlideCountFn();
            //         }
            //     }
            // });
        
        },
        section2Fn:function(){
            var $li = $('#section2 li');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section1').offset().top+500){
                    if(t === 0){
                        t = 1;
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === 0){
                    t = 0;
                    $li.removeClass('addScroll');
                }
            });

        },
        section3Fn:function(){
            var $slideWrap = $('#section3 .slide-wrap');
            var $nextBtn = $('#section3 .next-btn')
            var $prevBtn = $('#section3 .prev-btn')
            var $slideView = $('#section3 .slide-view');
            var $slideViewEnter = $('#section3 .slide-view');
           
            var $slideW = $('#section3 .slide').innerWidth();   // 반응형 슬라이드 너비
            var $window = $(window);
            
            var cnt = 0;
            var setId = null;
            var n = $('#section3 .slide').length-(4+4)-1;

            var $section3 = $('#section3');
            var $decoTitle = $('#section3 .deco-title');
            var x = 0;
            var y = 0;

            var $decoTitle = $('#section3 .deco-title');
            var $h5 = $('#section3 .content > h5');
            var $h3 = $('#section3 .content > h3');
            var $leftBox = $('#section3 .left-box');
            var $rightBox = $('#section3 .right-box');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section2').offset().top-150){
                    if(t === 0){
                        t = 1;
                        $decoTitle.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section2').offset().top){
                    if(t === 1){
                        t = 2;
                        $h5.addClass('addScroll');
                        $h3.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section2').offset().top+300){
                    if(t === 2){
                        t = 3;
                        $leftBox.addClass('addScroll');
                        $rightBox.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === 0){
                    t = 0;
                    $decoTitle.removeClass('addScroll');
                    $h5.removeClass('addScroll');
                    $h3.removeClass('addScroll');
                    $leftBox.removeClass('addScroll');
                    $rightBox.removeClass('addScroll');
                }
            });

            
            // 반응형 슬라이드
            // 1. 반응형함수
            function reponseFn(){
                $slideW = $('#section3 .slide').innerWidth();
                $slideWrap.css({marginLeft:-$slideW*4})
                section3SlideFn();
            }
            reponseFn();    // <<< 로딩시 실행
            setTimeout(reponseFn, 100);  // 0.1초 뒤에 강제실행 (반응형 너비설정 reponseFn 이 즉각 실행되도록)

            // 2. 윈도우(window) 리사이즈(resize()) 메서드
            $window.resize(function(){
                reponseFn();    // <<< 반응형 (크기가 조절이될때)
            });


            function section3SlideFn(){
                $slideWrap.stop().animate({left:-$slideW*cnt}, 300, 'easeInOutCubic',function(){
                    if(cnt>n){cnt=0;}
                    if(cnt<0){cnt=n;}
                    $slideWrap.stop().animate({left:-$slideW*cnt}, 0);
                });
            }

            function prevSlideCountFn(){
                cnt --;
                section3SlideFn();
            }
            function nextSlideCountFn(){
                cnt ++;
                section3SlideFn();
            }

            $prevBtn.on({
                click:function(){
                    // clearInterval(setId);   // 자동 실행을 일시중지
                    timerFn();
                    if (!$slideWrap.is(':animated')) {
                        prevSlideCountFn();
                    }
                }
            })
            $nextBtn.on({
                click:function(){
                    timerFn();
                    if (!$slideWrap.is(':animated')) {
                        nextSlideCountFn();
                    }
                }
            })

            var touchS = 0;
            var touchE = 0;
            var touchD = false;
            $slideView.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    timerFn();
                    touchS = e.clientX;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    timerFn();
                    touchE = e.clientX;
                    touchSwipeFn();
                },
                mouseleave:function(e){
                    if(touchD === true){
                        timerFn();
                        touchE = e.clientX;
                        touchSwipeFn();
                        touchD = false;
                    }
                },

                touchstart:function(e){
                    touchD = true;
                    e.preventDefault();
                    timerFn();
                    touchS = e.originalEvent.changedTouches[0].clientX;
                },
                touchend:function(e){
                    touchD = false;
                    e.preventDefault();
                    timerFn();
                    touchE = e.originalEvent.changedTouches[0].clientX;
                    touchSwipeFn();
                }
            });

            function touchSwipeFn(){
                if(touchS-touchE > 0){
                    if (!$slideWrap.is(':animated')) {
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE < 0){
                    if (!$slideWrap.is(':animated')) {
                        prevSlideCountFn();
                    }
                }
            };

            // $slideView.swipe({
            //     swipeLeft:function(){
            //         timerFn();
            //         if (!$slideWrap.is(':animated')) {
            //             nextSlideCountFn()
            //         }
            //     },
            //     swipeRight:function(){
            //         timerFn();
            //         if (!$slideWrap.is(':animated')) {
            //             prevSlideCountFn()
            //         }
            //     },
            // });

            // 마우스가 슬라이드 박스 안에있을때는 이벤트 x
            // 마우스가 슬라이드 박스 밖으로 나가면 이벤트 실행
            // $slideViewEnter.on({
            //     mouseenter:function(){
            //         clearInterval(setId);
            //     },
            //     mouseleave:function(){
            //         autoPlay();
            //     }
            // });

            function autoPlay(){
                // console.log('할당된 메모리 번지 번호 ',setId); // 할당 전
                setId = setInterval(nextSlideCountFn, 4000);
                // console.log('할당된 메모리 번지 번호 ',setId); // 할당 후
            }
            // autoPlay(); // 로딩시 4초후 4초간격으로 실행

            // 타이머함수 만들기
            // 이벤트(클릭, 터치) 발생 시 애니메이션 일시정지
            // 사용자에의한 이벤트(클릭, 터치)가 없을경우 자동타이머 재샐행
            // 다음 슬라이드 함수 즉시실행 이후 자동타이머 실행
            var t = 0;
            var setId2 = null;
            function timerFn(){
                t=0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    if(t>=4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        nextSlideCountFn();
                        autoPlay();
                    }
                }, 1000);
            }


            // function pauseFn(){
            //     // clearInterval(setId);   // 자동 실행을 일시중지
            //     var t = 0;
            //     clearInterval(setId);   // 일시정지
            //     clearInterval(setId2);   // 일시정지
            //     var setId2 = setInterval(function(){ // 카운터
            //         t++;
            //         console.log(t);
            //         if(t>=3){
            //             clearInterval(setId);  // 일시정지
            //             clearInterval(setId2);  // 일시정지
            //             t = 0;
            //             $nextBtn.trigger('click');  // 다음 버튼을 강제로 클릭하는 메서드
            //             // nextSlideCountFn();     // 타이머 카운팅 후 즉시 함수실행
            //             autoPlay(); // setInterval 값을 3000을 주었기때문에 3초 후 해당함수 실행
            //         }
            //     }, 1000);
            // }


            $section3.on({
                mousemove:function(event){
                    x = event.clientX*0.1;
                    y = -event.clientY*0.1;
                    $decoTitle.css({top:y,left:x/2-50});
                }
            });



        },
        section4Fn:function(){
            var $section4 = $('#section4')
            var $smallImg = $('#section4 .small-img');
            var $largeImg = $('#section4 .large-img');
            var bottom = 40;
            var left = 0;
            var x = 0;
            var y = 0;

            var $li = $('#section4 li');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section3').offset().top+500){
                    if(t === 0){
                        t = 1;
                        $li.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === 0){
                    t = 0;
                    $li.removeClass('addScroll');
                }
            });

            // 마우스 무브(mousemove) 이벤트
            // 이미지를 마우스의 움직임에 의해서 상하좌우로 좌표이동을 이용한 애니메이션 효과
            // 상하(수직이동) : Y좌표
            // 좌우(수평이동) : Z좌표

            // 1. 마우스무브 이벤트
            // 2. 타겟의 좌표를 가져와서 거기에서부터 움직임을 준다.
            $section4.on({
                mousemove:function(event){
                    // console.log(event);     // 이벤트를 확인(좌표 client, page, screen)
                    // console.log('X값',event.clientX);
                    // console.log('Y값',event.clientY);

                    // 포지션 좌표값이나 margin-좌표 값으로 이동시킬수있음
                    // 마진값으로 줄때 대상이 앱솔루트가 아닌경우 높이를 변화시켜 틀전체가 움직일수있으므로 주의.
                    bottom = -event.clientX*0.1+40;
                    left = event.clientY*0.1;
                    
                    $smallImg.css({bottom:left,left:bottom})

                    x = -event.clientX*0.1+40;
                    y = event.clientY*0.1;
                    // x = -event.screenX*0.1+40;
                    // y = event.screenY*0.1;
                    // x = ($smallImg.offset().left-event.pageX)*0.1;
                    // y = ($smallImg.offset().top-event.pageY)*0.1;
                    $largeImg.css({top:y,left:-x})
                }
            });

        },
        section5Fn:function(){
            var $s5SlideWrap = $('#section5 .slide-wrap');
            var $s5SlideView = $('#section5 .slide-view');
            var $s5Slide = $('#section5 .slide');
            var $s5Cnt = 0;
            var a = 0;  // 슬라이드 길이에 더해줄 임의의 변수
            var $s5SlideL = $('#section5 .slide').length-8-1;
            var setId = null;
            var setId2 = null;
            
            var $slideContainer = $('#section5 .slide-container');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section4').offset().top+500){
                    if(t === 0){
                        t = 1;
                        $slideContainer.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === 0){
                    t = 0;
                    $slideContainer.removeClass('addScroll');
                }
            });
            
            function s5SlideFn(){
                if ($s5Cnt>1){  // 2번째 이상 슬라이드는 -235를 더해준다.
                    a = -235;
                }
                else{
                    a = 0;
                }
                $s5SlideWrap.stop().animate({left:(-445*$s5Cnt)+a}, 500, 'easeInOutCubic', function(){
                    if ( $s5Cnt > 3 ) { $s5Cnt = 0;a=0; }
                    if ( $s5Cnt < 0 ) { $s5Cnt = 3;a=-235; }
                    $s5SlideWrap.stop().animate({left:(-445*$s5Cnt)+a}, 0)
                })
            }

            function s5PrevSlideCountFn(){
                $s5Cnt--;
                s5SlideFn();
            }
            function s5NextSlideCountFn(){
                $s5Cnt++;
                s5SlideFn();
            }
            
            var touchS = 0;
            var touchE = 0;
            var touchD = false;
            $s5SlideView.on({
                mousedown:function(e){
                    touchD = true;
                    e.preventDefault();
                    s5SlideTimerFn();
                    touchS = e.clientX;
                },
                mouseup:function(e){
                    touchD = false;
                    e.preventDefault();
                    s5SlideTimerFn();
                    touchE = e.clientX;
                    touchSwipeFn();
                },
                mouseleave:function(e){
                    if(touchD === true){
                        s5SlideTimerFn();
                        touchE = e.clientX;
                        touchSwipeFn();
                        touchD = false;
                    }
                },

                touchstart:function(e){
                    touchD = true;
                    e.preventDefault();
                    s5SlideTimerFn();
                    touchS = e.originalEvent.changedTouches[0].clientX;
                },
                touchend:function(e){
                    touchD = false;
                    e.preventDefault();
                    s5SlideTimerFn();
                    touchE = e.originalEvent.changedTouches[0].clientX;
                    touchSwipeFn();
                }
            });
            function touchSwipeFn(){
                if(touchS-touchE > 0){
                    if(!$s5SlideWrap.is(':animated')){
                        s5NextSlideCountFn();
                    }
                }
                if(touchS-touchE < 0){
                    if(!$s5SlideWrap.is(':animated')){
                        s5PrevSlideCountFn();
                    }
                }
            };

            // $s5SlideView.swipe({
            //     swipeLeft:function(){
            //         if(!$s5SlideWrap.is(':animated')){
            //             s5SlideTimerFn();
            //             s5NextSlideCountFn();
            //         }
            //     },
            //     swipeRight:function(){
            //         if(!$s5SlideWrap.is(':animated')){
            //             s5SlideTimerFn();
            //             s5PrevSlideCountFn();
            //         }
            //     }
            // });
            
            function s5SlideAutoPlay(){
                setId = setInterval(s5NextSlideCountFn, 4000)
            }
            s5SlideAutoPlay();

            function s5SlideTimerFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    t++;
                    // console.log('타이머끝',t);
                    if( t >= 1 ){
                        clearInterval(setId);
                        clearInterval(setId2);
                        s5NextSlideCountFn();
                        s5SlideAutoPlay();
                    }
                }, 4000);
            };


        },
        section6Fn:function(){
            var $ul = $('#section6 .container > ul > li ul');
            var column0 = $('#section6 .container > ul > li').eq(0);
            var column1 = $('#section6 .container > ul > li').eq(1);
            var column2 = $('#section6 .container > ul > li').eq(2);
            var column3 = $('#section6 .container > ul > li').eq(3);
            var Cnt0 = [0,0,0,0];
            var Cnt1 = [0,0,0,0];
            var Cnt2 = [0,0,0,0];
            var Cnt3 = [0,0,0,0];
            var setIdCol0 = [null,null,null,null];
            var setIdCol1 = [null,null,null,null];
            var setIdCol2 = [null,null,null,null];
            var setIdCol3 = [null,null,null,null];
            var timer = 1;
            var num0 = [];
            var num1 = [];
            var num2 = [];
            var num3 = [];
            var t = 0;

            // 객체 요소 내에 data-? 속성을 가져오기
            // column0.find('.col').data('number');
            column0.find('.col').each(function(idx){
                num0[idx] = $(this).data('number');
            });
            column1.find('.col').each(function(idx){
                num1[idx] = $(this).data('number');
            });
            column2.find('.col').each(function(idx){
                num2[idx] = $(this).data('number');
            });
            column3.find('.col').each(function(idx){
                num3[idx] = $(this).data('number');
            });

            
            // 패럴럭스
            $(window).scroll(function(){
                if( $(window).scrollTop() >= $('#section5').offset().top ){
                    // console.log($(window).scrollTop() >= $('#section5').offset().top);
                    if( t === 0 ){
                        t = 1;
                        $('#section6 .wrap .gap .container > ul').addClass('addCounter');
                        setTimeout(countFn, 1000);
                    }
                }
                if( $(window).scrollTop() === 0 ){
                    t = 0;
                    Cnt0 = [0,0,0,0];
                    Cnt1 = [0,0,0,0];
                    Cnt2 = [0,0,0,0];
                    Cnt3 = [0,0,0,0];
                    formatFn();
                    $('#section6 .wrap .gap .container > ul').removeClass('addCounter');
                }
            });



            // 초기화함수
            function formatFn(){
                $ul.css({top:0});
            }
            // setTimeout(formatFn, 100);
            // setTimeout(countFn, 1000);


            // countFn();
            function countFn(){   // 제이쿼리가 없으면 자바스크립트로 만들어야함. 이런식으로 타이머를 활용
                // 1열
                setIdCol0.forEach(function(el, idx){
                    setIdCol0[idx] = setInterval(function(){
                        Cnt0[idx]+=2;
                        if( Cnt0[idx] > 60*num0[idx] ){
                            clearInterval(setIdCol0[idx]);
                        }
                        else{
                            column0.find('ul').eq(idx).css({top:-Cnt0[idx]});
                        }
                    }, timer);
                });

                // 2열
                setIdCol1.forEach(function(el, idx){
                    setIdCol1[idx] = setInterval(function(){
                        Cnt1[idx]+=2;
                        if( Cnt1[idx] > 60*num1[idx] ){
                            clearInterval(setIdCol1[idx]);
                        }
                        else{
                            column1.find('ul').eq(idx).css({top:-Cnt1[idx]});
                        }
                    }, timer);
                });

                // 3열
                setIdCol2.forEach(function(el, idx){
                    setIdCol2[idx] = setInterval(function(){
                        Cnt2[idx]+=2;
                        if( Cnt2[idx] > 60*num2[idx] ){
                            clearInterval(setIdCol2[idx]);
                        }
                        else{
                            column2.find('ul').eq(idx).css({top:-Cnt2[idx]});
                        }
                    }, timer);
                });

                // 4열
                setIdCol3.forEach(function(el, idx){
                    setIdCol3[idx] = setInterval(function(){
                        Cnt3[idx]+=2;
                        if( Cnt3[idx] > 60*num3[idx] ){
                            clearInterval(setIdCol3[idx]);
                        }
                        else{
                            column3.find('ul').eq(idx).css({top:-Cnt3[idx]});
                        }
                    }, timer);
                });
            }
                
                

            // 1열
            // setIdCol0[0] = setInterval(function(){
            //     Cnt0[0]++;
            //     if( Cnt0[0] > 60*num0[0] ){
            //         clearInterval(setIdCol0[0]);
            //     }
            //     else{
            //         column0.find('ul').eq(0).css({top:-Cnt0[0]});
            //     }
            // }, timer);
            // setIdCol0[1] = setInterval(function(){
            //     Cnt0[1]++;
            //     if( Cnt0[1] > 60*num0[1] ){
            //         clearInterval(setIdCol0[1]);
            //     }
            //     else{
            //         column0.find('ul').eq(1).css({top:-Cnt0[1]});
            //     }
            // }, timer);
            // setIdCol0[2] = setInterval(function(){
            //     Cnt0[2]++;
            //     if( Cnt0[2] > 60*num0[2] ){
            //         clearInterval(setIdCol0[2]);
            //     }
            //     else{
            //         column0.find('ul').eq(2).css({top:-Cnt0[2]});
            //     }
            // }, timer);
            // setIdCol0[3] = setInterval(function(){
            //     Cnt0[3]++;
            //     if( Cnt0[3] > 60*num0[3] ){
            //         clearInterval(setIdCol0[3]);
            //     }
            //     else{
            //         column0.find('ul').eq(3).css({top:-Cnt0[3]});
            //     }
            // }, timer);

            // 2열
            // setIdCol1[0] = setInterval(function(){
            //     Cnt1[0]++;
            //     if( Cnt1[0] > 60*num1[0] ){
            //         clearInterval(setIdCol1[0]);
            //     }
            //     else{
            //         column1.find('ul').eq(0).css({top:-Cnt1[0]});
            //     }
            // }, timer);
            // setIdCol1[1] = setInterval(function(){
            //     Cnt1[1]++;
            //     if( Cnt1[1] > 60*num1[1] ){
            //         clearInterval(setIdCol1[1]);
            //     }
            //     else{
            //         column1.find('ul').eq(1).css({top:-Cnt1[1]});
            //     }
            // }, timer);
            // setIdCol1[2] = setInterval(function(){
            //     Cnt1[2]++;
            //     if( Cnt1[2] > 60*num1[2] ){
            //         clearInterval(setIdCol1[2]);
            //     }
            //     else{
            //         column1.find('ul').eq(2).css({top:-Cnt1[2]});
            //     }
            // }, timer);
            // setIdCol1[3] = setInterval(function(){
            //     Cnt1[3]++;
            //     if( Cnt1[3] > 60*num1[3] ){
            //         clearInterval(setIdCol1[3]);
            //     }
            //     else{
            //         column1.find('ul').eq(3).css({top:-Cnt1[3]});
            //     }
            // }, timer);

            // 3열
            // setIdCol2[0] = setInterval(function(){
            //     Cnt2[0]++;
            //     if( Cnt2[0] > 60*num2[0] ){
            //         clearInterval(setIdCol2[0]);
            //     }
            //     else{
            //         column2.find('ul').eq(0).css({top:-Cnt2[0]});
            //     }
            // }, timer);            
            // setIdCol2[1] = setInterval(function(){
            //     Cnt2[1]++;
            //     if( Cnt2[1] > 60*num2[1] ){
            //         clearInterval(setIdCol2[1]);
            //     }
            //     else{
            //         column2.find('ul').eq(1).css({top:-Cnt2[1]});
            //     }
            // }, timer);            
            // setIdCol2[2] = setInterval(function(){
            //     Cnt2[2]++;
            //     if( Cnt2[2] > 60*num2[2] ){
            //         clearInterval(setIdCol2[2]);
            //     }
            //     else{
            //         column2.find('ul').eq(2).css({top:-Cnt2[2]});
            //     }
            // }, timer);            
            // setIdCol2[3] = setInterval(function(){
            //     Cnt2[3]++;
            //     if( Cnt2[3] > 60*num2[3] ){
            //         clearInterval(setIdCol2[3]);
            //     }
            //     else{
            //         column2.find('ul').eq(3).css({top:-Cnt2[3]});
            //     }
            // }, timer);

            // 4열
            // setIdCol3[0] = setInterval(function(){
            //     Cnt3[0]++;
            //     if( Cnt3[0] > 60*num3[0] ){
            //         clearInterval(setIdCol3[0]);
            //     }
            //     else{
            //         column3.find('ul').eq(0).css({top:-Cnt3[0]});
            //     }
            // }, timer); 
            // setIdCol3[1] = setInterval(function(){
            //     Cnt3[1]++;
            //     if( Cnt3[1] > 60*num3[1] ){
            //         clearInterval(setIdCol3[1]);
            //     }
            //     else{
            //         column3.find('ul').eq(1).css({top:-Cnt3[1]});
            //     }
            // }, timer); 
            // setIdCol3[2] = setInterval(function(){
            //     Cnt3[2]++;
            //     if( Cnt3[2] > 60*num3[2] ){
            //         clearInterval(setIdCol3[2]);
            //     }
            //     else{
            //         column3.find('ul').eq(2).css({top:-Cnt3[2]});
            //     }
            // }, timer); 
            // setIdCol3[3] = setInterval(function(){
            //     Cnt3[3]++;
            //     if( Cnt3[3] > 60*num3[3] ){
            //         clearInterval(setIdCol3[3]);
            //     }
            //     else{
            //         column3.find('ul').eq(3).css({top:-Cnt3[3]});
            //     }
            // }, timer);


            // columnAutoFn();  // 제이쿼리로 쉽게 만드는법
            function columnAutoFn(){
                column0.find('ul').eq(0).stop().animate({top:-60*2}, 2000, 'easeInOutQuad');
                column0.find('ul').eq(1).stop().animate({top:-60*5}, 2000, 'easeInOutQuad');
                column0.find('ul').eq(2).stop().animate({top:-60*3}, 2000, 'easeInOutQuad');
                column0.find('ul').eq(3).stop().animate({top:-60*0}, 2000, 'easeInOutQuad');
                
                column1.find('ul').eq(0).stop().animate({top:-60*3}, 2000, 'easeInOutQuad');
                column1.find('ul').eq(1).stop().animate({top:-60*2}, 2000, 'easeInOutQuad');
                column1.find('ul').eq(2).stop().animate({top:-60*0}, 2000, 'easeInOutQuad');
                column1.find('ul').eq(3).stop().animate({top:-60*0}, 2000, 'easeInOutQuad');

                column2.find('ul').eq(0).stop().animate({top:-60*2}, 2000, 'easeInOutQuad');
                column2.find('ul').eq(1).stop().animate({top:-60*8}, 2000, 'easeInOutQuad');
                column2.find('ul').eq(2).stop().animate({top:-60*3}, 2000, 'easeInOutQuad');
                column2.find('ul').eq(3).stop().animate({top:-60*0}, 2000, 'easeInOutQuad');

                column3.find('ul').eq(0).stop().animate({top:-60*2}, 2000, 'easeInOutQuad');
                column3.find('ul').eq(1).stop().animate({top:-60*0}, 2000, 'easeInOutQuad');
                column3.find('ul').eq(2).stop().animate({top:-60*6}, 2000, 'easeInOutQuad');
                column3.find('ul').eq(3).stop().animate({top:-60*0}, 2000, 'easeInOutQuad');
            }
                

        },
        section7Fn:function(){
            var $bg = $('#section7 .bg');
            var $ul = $('#section7 ul');
            var $li = $('#section7 li');

            
            $li.each(function(idx){
                $(this).on({
                    mouseenter:function(){
                        $bg.stop().animate({opacity:0});
                        $bg.eq(idx).stop().animate({opacity:1});

                        $li.removeClass('addEvent');
                        $li.eq(idx).addClass('addEvent');
                    }
                })
            });
            $ul.on({
                mouseleave:function(){
                    $li.removeClass('addEvent');
                }
            });


        },
        section8Fn:function(){
            var $slideWrap = $('#section8 .slide-wrap');
            var $slideView = $('#section8 .slide-view');
            var $slide = $('#section8 .slide');
            var n = $('#section8 .slide').length;
            var cnt = 0;
            var slideW = $('#section8 .slide').innerWidth();
            var touchS = 0;
            var touchE = 0;
            var mouseDown = 0;
            var next = [0,1,2];
            var prev = [0,2,1];

            // s8NextSlideFn();    // 초기실행
            // 배열슬라이드 만들기
            function s8PrevSlideFn(){
                // 1. 슬라이드 총 갯수만큼 반복 배열값 삽입
                var j = n;
                for(var i=0; i<n; i++){
                    j--;
                    prev[i] = j;    // prev[0]=2, prev[1]=1, prev[2]=0
                }
                // 결과 : prev = [2,1,0] 역순으로 기억
                // 2. 맨 뒤 배열값 삭제 후 임시 기억변수에 저장
                var imsi = prev.pop();
                           prev.unshift(imsi);


                // cnt = 2 0회, cnt=1 1회, cnt=0 2회
                for(var i=n-1; i>cnt; i--){
                    var imsi = prev.shift();
                               prev.push(imsi); // prev = [0,2,1] 기준값 반드시 설정
                }

                for(var i=0; i<n; i++){
                    $slide.eq(prev[i]).stop().animate({left:(100*(i*-1))+'%'}, 0).animate({left:(100*((i*-1)+1))+'%'}, 300);
                }

                // $slide.eq(prev[0]).stop().animate({left:(100*0)+'%'}, 0).animate({left:(100*1)+'%'}, 300);
                // $slide.eq(prev[1]).stop().animate({left:(100*-1)+'%'}, 0).animate({left:(100*0)+'%'}, 300);
                // $slide.eq(prev[2]).stop().animate({left:(100*-2)+'%'}, 0).animate({left:(100*-1)+'%'}, 300);
            }
            function s8NextSlideFn(){
                // next 배열의 초기값 설정 방법
                // 1. 슬라이드 전체 개수만큼 반복문 처리설정
                for(var i=0; i<n; i++){
                    next[i] = i;    // next[0]=0, next[1]=1, next[2]=2
                }
                // popping
                // 2. next = [0,1,2] 기억된 마지막 배열값을 삭제(pop())한 후 임시 기억시킴
                // 3. next 배열 맨 처음 위치에 삽입(unshift())한다.
                var imsi = next.pop();          // next = [0,1]
                           next.unshift(imsi);  // next = [2,0,1]; // 초기설정(기준값 반드시 사용)
                
                // 배열 메서드
                // 1. 맨처음 배열값 삭제(shift)
                // 2. 삭제된 배열값 임시변수에 기억(저장)
                // 3. 임시에 기억된 배열값 맨마지막 위치에 배열삽입(push)
                for(var i=0; i<cnt; i++){
                    var imsi = next.shift();
                               next.push(imsi);
                }

                for(var i=0; i<n; i++){
                    $slide.eq(next[i]).stop().animate({left:(100*i)+'%'}, 0).animate({left:(100*(i-1))+'%'}, 300);
                }
                // $slide.eq(next[0]).stop().animate({left:(100*0)+'%'}, 0).animate({left:(100*-1)+'%'}, 300);
                // $slide.eq(next[1]).stop().animate({left:(100*1)+'%'}, 0).animate({left:(100*0)+'%'}, 300);
                // $slide.eq(next[2]).stop().animate({left:(100*2)+'%'}, 0).animate({left:(100*1)+'%'}, 300);
            }
            function prevSlideCntFn(){
                cnt--;
                if(cnt<0){cnt=2;}
                s8PrevSlideFn();
            }
            function nextSlideCntFn(){
                cnt++;
                if(cnt>2){cnt=0;}
                s8NextSlideFn();
            }

            $slideView.on({
                mousedown:function(e){
                    mouseDown = 1;
                    e.preventDefault();
                    touchS = e.pageX;
                },
                mouseup:function(e){
                    mouseDown = 0;
                    e.preventDefault();
                    touchE = e.pageX;
                    touchSwipeFn();
                },
                mouseleave:function(e){
                    if(mouseDown === 1){
                        touchE = e.pageX;
                        touchSwipeFn();
                        mouseDown = 0;
                    }
                },

                touchstart:function(e){
                    mouseDown = 1;
                    e.preventDefault();
                    touchS = e.originalEvent.changedTouches[0].pageX;
                },
                touchend:function(e){
                    mouseDown = 0;
                    e.preventDefault();
                    touchE = e.originalEvent.changedTouches[0].pageX;
                    touchSwipeFn();
                },
                // // 터치무브는 사용안해도 큰 지장은 없음
                // touchmove:function(e){
                //     if(mouseDown === 1){
                //         touchE = e.originalEvent.changedTouches[0].pageX;
                //         touchSwipeFn();
                //         mouseDown = 0;
                //     }
                // }
            });
  
            function touchSwipeFn(){
                if(touchS-touchE > 30){ // 위에서 아래, 아래에서 위로 스크롤할때 의도치않게 스와이프가 되는현상을 방지하기 위해 30으로
                    if(!$slideWrap.is(':animated')){
                        nextSlideCntFn();
                    }
                }
                if(touchS-touchE < -30){
                    if(!$slideWrap.is(':animated')){
                    prevSlideCntFn();
                    }
                }
            };

            var $leftWrap = $('#section8 .left-wrap');
            var $rightWrap = $('#section8 .right-wrap');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section7').offset().top+300){
                    if(t === 0){
                        t = 1;
                        $leftWrap.addClass('addScroll');
                        $rightWrap.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === 0){
                    t = 0;
                    $leftWrap.removeClass('addScroll');
                    $rightWrap.removeClass('addScroll');
                }
            });

        },
        section9Fn:function(){
            var $contentGap  = $('#section9 .content-gap');
            var $contentWrap  = $('#section9 .content-wrap');
            var $imgWrapW     = $('#section9 .content-wrap .img-wrap').innerWidth();  // 왼쪽 이미지박스
            var $h3           = $('#section9 .content-wrap .caption-wrap h3 > a');
            var $p            = $('#section9 .content-wrap .caption-wrap p');
            var $h5           = $('#section9 .content-wrap .caption-wrap h5 > a');

            var $contentWrapH = $imgWrapW*1.334106297;  // $contentWrap 높이 = $imgWrap 너비값 * 1.334106297
            var h3Size        = $imgWrapW*0.066914498;
            var pSize         = $imgWrapW*0.055762082;
            var h5Size        = $imgWrapW*0.048327138;


            function resizeFn(){
                $imgWrapW = $('#section9 .content-wrap .img-wrap').innerWidth();
                $contentWrapH = $imgWrapW*1.334106297;
                $contentWrap.css({height:$contentWrapH});
                
                h3Size        = $imgWrapW*0.066914498;
                pSize         = $imgWrapW*0.055762082;
                h5Size        = $imgWrapW*0.048327138;
                $h3.css({fontSize:h3Size});
                $p.css({fontSize:pSize});
                $h5.css({fontSize:h5Size});
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            var $h4 = $('#section9 .title h4');
            var $h2 = $('#section9 .title h2');
            var $li = $('#section9 li');
            var t = 0;

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section8').offset().top-250){
                    if(t === 0){
                        t = 1;
                        $h4.addClass('addScroll');
                        $h2.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() >= $('#section8').offset().top){
                    if(t === 1){
                        t = 2;
                        $contentGap.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === 0){
                    t = 0;
                    $h4.removeClass('addScroll');
                    $h2.removeClass('addScroll');
                    $contentGap.removeClass('addScroll');
                }
            });



        },
        section10Fn:function(){
            
        },
        footerFn:function(){
            // 폼을 이용한 메일주소를 PHP(서버사이드스크립트언어) 비동기전송 AJAX
            var $submitBtn = $('#submitBtn');
            var $responseH3 = $('.response h3');

            
            $submitBtn.on({
                click:function(event){
                    event.preventDefault(); // 전송(submit)버튼기능을 삭제해버림
                    var $frmEmail = $('#frmEmail').val();   // 폼 입력상자 value
                    var $frmCode = $('#frmCode').val();     // 폼 입력상자 value

                    // 유효성 검사
                    if($frmEmail===''){
                        alert('메일주소를 입력하세요');
                        $('#frmEmail').focus();  // 포커스를 이동
                        return false;   // 리턴(취소) 해버림
                    }
                    else{
                        // AJAX 전송
                        $.ajax({
                            url: './response.php',
                            type: 'POST',
                            data:{
                                email:$frmEmail,
                                code:$frmCode
                            },
                            success:function(result){
                                $('#frmEmail').val('');
                                $responseH3.html(result);
                                $responseH3.fadeIn(0);
                                setTimeout(function(){
                                    $responseH3.fadeOut(1000);
                                })
                            },
                            error:function(msg){
                                // alert('전송실패. 확인바람');
                                console.log(msg);
                                $('#frmEmail').focus(); //다음입력대기
                            }
                        });

                    }
                }
            });

        },
        smoothScrollFn:function(){
            var $goTop = $('.go-top');
            var $smoothBtn = $('.soothBtn');
            var $modalBtnwrap = $('.modal-btn-wrap');
            var t = 0;

            $smoothBtn.on({
                click:function(e){
                    e.preventDefault();
                    var url = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop:$(url).offset().top}, 1000);
                }
            });

            // 최상단에서 100픽셀이상 스크롤할경우 to-top버튼이 나타나도록, 맨위에선 안보이게
            $(window).scroll(function(){
                if($(this).scrollTop()>=100){
                    if(t===0){
                        t=1;
                        $goTop.stop().fadeIn(1000);
                        $modalBtnwrap.stop().fadeIn(1000);
                    }
                }
                else{
                    t=0;
                    $goTop.stop().fadeOut(1000);
                    $modalBtnwrap.stop().fadeOut(1000);
                }
            });

        },
        demoModalFn:function(){
            // 모달창 사용 HTML overflow 감추기
            // 데모사이트를 부드럽게 슬라이딩 애니메이션 제작
            var $document = $(document);
            var $html = $('html');
            var $modalDemo = $('#modalDemo');
            var $modalBtnwrap = $('.modal-btn-wrap');
            var $modalBtn = $('.modal-btn');
            var t = 0;


            $modalBtnwrap.on({
                click:function(event){
                    event.stopPropagation();
                    $html.toggleClass('addModal');
                    $modalDemo.toggleClass('addModal');
                    $modalBtnwrap.toggleClass('addModal');
                }
            });
            $modalDemo.on({
                click:function(event){
                    event.stopPropagation();
                    return false;
                }
            });

            $document.on({
                click:function(event){
                    event.stopPropagation();
                    if(event.target !== event.currnetTarget){
                        $html.removeClass('addModal');
                        $modalDemo.removeClass('addModal');
                        $modalBtnwrap.removeClass('addModal');
                    }
                }
            });

        }
    }   //객체 끝

    litho.init();   // litho 실행

})(jQuery);