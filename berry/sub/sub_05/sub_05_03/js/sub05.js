;(function($){
    var sub05_berry = {
        init:function(){
            var that = this;

            that.sub05Fn();
        },
        sub05Fn:function(){
            var $villageGap = $('#section1 .village-gap');
            var t = 0;
        

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section1').offset().top+300){
                    if(t === 0){
                        t = 1;
                        $villageGap.addClass('addScroll');
                    }
                }
                if($(window).scrollTop() === $('#section1').offset().top){
                    t = 0;
                    $villageGap.removeClass('addScroll');
                }
            });

          
        }
        
    }
    sub05_berry.init();

})(jQuery);