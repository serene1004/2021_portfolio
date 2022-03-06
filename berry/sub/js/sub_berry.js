;(function($){
    var sub_berry = {
        init:function(){
            var that = this;

            that.headerFn();
            that.section1Fn();
            that.footerFn();
        },
        headerFn:function(){
            
            var $mainLi = $('#section1 .menu-area > ul > li');
            var $mainBtn = $('#section1 .main-btn');
            var $sub = $('#section1 .sub');


            var $headerBox = $('#header .header-box');
            var $sideBtn = $('#header .side-btn');
            var $iconBox = $('#header .icon-box');
            
            var $leftMenuArea  = $('#section1 .left-box .menu-area');
            var $MenuAreaBg    = $('#section1 .left-box .menu-areaBg');
            var $rightMenuArea = $('#section1 .right-box .menu-area');

            var $headerBox = $('#header .header-box');




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
                        if ($mainLi.eq(idx).hasClass('addClick') === false){
                            $mainLi.removeClass('addClick')
                        }
                        $(this).parent().toggleClass('addClick');

                        if ($mainBtn.eq(idx).hasClass('addClick') === false){
                            $mainBtn.removeClass('addClick')
                        }
                        $sub.stop().slideUp(500);
                        $(this).next().stop().slideToggle(500);
    
                    },
                    mouseenter:function(){
                        if(idx === 0){
                            $MenuAreaBg.css({background:'url(../../img/img_subVisual01.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 1){
                            $MenuAreaBg.css({background:'url(../../img/img_subVisual02.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 2){
                            $MenuAreaBg.css({background:'url(../../img/img_subVisual03.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 3){
                            $MenuAreaBg.css({background:'url(../../img/img_subVisual04.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 4){
                            $MenuAreaBg.css({background:'url(../../img/img_subVisual05.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
                        }
                        else if(idx === 5){
                            $MenuAreaBg.css({background:'url(../../img/img_subVisual06.jpg) no-repeat 100% 50%',backgroundSize: 'cover'});
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
            var $leftMenu  = $('#section1 .left-box');
            var $rightMenu = $('#section1 .right-box');

            var $progressbar = $('#section1 .progress-bar');

            

            function resizeFn(){
                $winW = $(window).width();
                $winH  = $(window).height();

                $leftMenu.css({width:$winW*leftW,height:$winH});
                $rightMenu.css({width:$winW*rightW,height:$winH});
            }

            $(window).resize(function(){
                resizeFn();
            });
            setTimeout(resizeFn, 100);

            setTimeout(function(){
                $progressbar.addClass('addAni');
            }, 0);

            
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

            var $goTopBtn = $('#footer .gotop-btn');

            $goTopBtn.on({
                click:function(event){
                    event.preventDefault();
                    var url = $(this).attr('href');
                    $('html,body').stop().animate({scrollTop:$(url).offset().top}, 800);
                }
            });


        }
        
    }
    sub_berry.init();

})(jQuery);