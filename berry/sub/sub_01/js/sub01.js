;(function($){
    var sub01_berry = {
        init:function(){
            var that = this;
            that.sub01Fn();
        },
        sub01Fn:function(){
            var $conNavBtn = $('#section1 .content-nav > ul > li > a ');

            $conNavBtn.on({
                click:function(){
                    $conNavBtn.removeClass('addClick');
                    $(this).addClass('addClick');
                }
            });

        }
        
    }
    sub01_berry.init();

})(jQuery);