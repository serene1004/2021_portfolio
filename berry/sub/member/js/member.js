;(function($){
    var member_berry = {
        init:function(){
            var that = this;
            that.memberFn();
        },
        memberFn:function(){
            var $idWrap = $('#section1 .login .id-wrap');
            var $passwordWrap = $('#section1 .password-wrap');

            $idWrap.on({
                click:function(){
                    $idWrap.addClass('addClick');
                    $passwordWrap.removeClass('addClick');
                }
            });

            $passwordWrap.on({
                click:function(){
                    $passwordWrap.addClass('addClick');
                    $idWrap.removeClass('addClick');
                }
            });

            // 아이디나 패스워드 입력칸 클릭 후 다른 영역을 클릭시 클래스제거
            $('#wrap').on({
                click:function(event){
                    if (!$(event.target).hasClass('')) {
                        $idWrap.removeClass('addClick');
                        $passwordWrap.removeClass('addClick');
                    }
                }
            });


        }
        
    }
    member_berry.init();

})(jQuery);