;(function($){
    var sub06_berry = {
        init:function(){
            var that = this;

            that.sub06Fn();
        },
        sub06Fn:function(){
            var $galleryBtn = $('#section1 .gallery-btn');
            var $galleryGap = $('#section1 .gallery-gap');
            var t = 0;

            var $winW       = $(window).width();
            var $galBoardW  = $('#section1 .gallery-board').innerWidth();
            var $ul         = $('#section1 .gallery-board .gallery > ul');      // 갤러리 ul
            var $li         = $('#section1 .gallery-board .gallery > ul > li'); // 갤러리 li
            var $galContent = $('#section1 .gallery-content');
            var liW         = $galBoardW/cols;
            var liH         = liW*1;
            var imgW        = Math.ceil(liW)-30;
            var imgH        = imgW*.8;
            var n           = $li.length;
            var cols        = 3;
            var rows        = Math.ceil(n/cols);
            var btnNum      = 0;
        

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section1').offset().top+300){
                    if(t === 0){
                        t = 1;
                        $galleryGap.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $galleryGap.removeClass('addScroll');
                }
            });

            function galleryResizeFn(){
                $winW = $(window).innerWidth();
                $galBoardW  = $('#section1 .gallery-board').innerWidth();
                
                if($winW > 963){
                    cols = 3;
                }
                else if($winW > 683){
                    cols = 2;
                }
                else{
                    cols = 1;
                }

                liW  = $galBoardW/cols;
                liH  = liW*.8;
                $li.css({width:liW, height:liH});

                imgW = Math.ceil(liW)-30;
                imgH = imgW*.8;
                $galContent.css({width:imgW,height:imgH});

                if(btnNum === 0){
                    n=8;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:$galBoardW, height:liH*rows});
                    $li.css({width:liW, height:liH});
                    $galContent.css({width:imgW,height:imgH});

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
                    if(cols === 1){
                        $li.eq(0).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(1).stop().show(300).animate({left:liW*0,top:liH*1}, 600);
                        $li.eq(2).stop().show(300).animate({left:liW*0,top:liH*2}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*0,top:liH*3}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*0,top:liH*4}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*0,top:liH*5}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*0,top:liH*6}, 600);
                        $li.eq(7).stop().show(300).animate({left:liW*0,top:liH*7}, 600);
                    }
                }

                if(btnNum === 1){
                    n=3;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:$galBoardW, height:liH*rows});
                    $li.css({width:liW, height:liH});
                    $galContent.css({width:imgW,height:imgH});
                    
                    $li.eq(0).stop().hide(300);
                    $li.eq(1).stop().hide(300);
                    $li.eq(4).stop().hide(300);
                    $li.eq(5).stop().hide(300);
                    $li.eq(6).stop().hide(300);

                    if(cols === 3){
                        $li.eq(2).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*1,top:liH*0}, 600);
                        $li.eq(7).stop().show(300).animate({left:liW*2,top:liH*0}, 600);
                        
                    }
                    if(cols === 2){
                        $li.eq(2).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*1,top:liH*0}, 600);
                        $li.eq(7).stop().show(300).animate({left:liW*0,top:liH*1}, 600);
                    }
                    if(cols === 1){
                        $li.eq(2).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(3).stop().show(300).animate({left:liW*0,top:liH*1}, 600);
                        $li.eq(7).stop().show(300).animate({left:liW*0,top:liH*2}, 600);
                    }
                }

                if(btnNum === 2){
                    n=5;
                    rows = Math.ceil(n/cols);
                    $ul.css({width:$galBoardW, height:liH*rows});
                    $li.css({width:liW, height:liH});
                    $galContent.css({width:imgW,height:imgH});

                    $li.eq(2).stop().hide(300);
                    $li.eq(3).stop().hide(300);
                    $li.eq(7).stop().hide(300);
                    if(cols === 3){
                        $li.eq(0).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(1).stop().show(300).animate({left:liW*1,top:liH*0}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*2,top:liH*0}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*0,top:liH*1}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*1,top:liH*1}, 600);
                    }
                    if(cols === 2){
                        $li.eq(0).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(1).stop().show(300).animate({left:liW*1,top:liH*0}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*0,top:liH*1}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*1,top:liH*1}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*0,top:liH*2}, 600);
                    }
                    if(cols === 1){
                        $li.eq(0).stop().show(300).animate({left:liW*0,top:liH*0}, 600);
                        $li.eq(1).stop().show(300).animate({left:liW*0,top:liH*1}, 600);
                        $li.eq(4).stop().show(300).animate({left:liW*0,top:liH*2}, 600);
                        $li.eq(5).stop().show(300).animate({left:liW*0,top:liH*3}, 600);
                        $li.eq(6).stop().show(300).animate({left:liW*0,top:liH*4}, 600);
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
                            $galleryBtn.removeClass('addClick');
                            $(this).addClass('addClick');
                            console.log(btnNum);
                        }
                    }
                });
            });

        }
        
    }
    sub06_berry.init();

})(jQuery);