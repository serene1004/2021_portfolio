;(function($){
    var sub02_berry = {
        init:function(){
            var that = this;
            that.sub02Fn();
        },
        sub02Fn:function(){
            var $conNavBtn = $('#section1 .content-nav > ul > li > a ');

            $conNavBtn.on({
                click:function(){
                    $conNavBtn.removeClass('addClick');
                    $(this).addClass('addClick');
                }
            });


            // calender
            var today = null;
            var year  = null;
            var month = null;
            var date  = null;

            var firstDay = null;
            var lastDate = null;
            var col = null;
            var prevLastDate = null;
            var nextMonthCnt = null;

            var $thisMonth = $('#section1 .calender-wrap .this-month > span');
            var $scheduleH3 = $('#section1 .calender-wrap .schedule h3');
            var $td = $('#section1 .calender > table td');
            var $calPrevBtn = $('#section1 .calender-wrap .prev-btn');
            var $calNextBtn = $('#section1 .calender-wrap .next-btn');

            function nowFn(){
                today = new Date();
                year  = today.getFullYear();
                month = today.getMonth()+1;
                date  = today.getDate();
            }
            nowFn();

            function calenderFn(y, m){

                nextMonthCnt = null;

                firstDay = new Date(y +'-'+ m + '-' +1).getDay();
                col = firstDay;
                lastDate = new Date(y, m, 0).getDate();
                prevLastDate = new Date(y, m-1, 0).getDate();

                function thisMonthFn(){
                    if (m < 10) {m = '0' + m;}
                    $thisMonth.html(y +'.'+ m);
                    $scheduleH3.html(y +'-'+ m + '-' + date);
                }
                thisMonthFn();

                if (m == month && y == year) {
                    $td.eq(firstDay-1+date).addClass('today');
                }

                for (var i=1; i<=lastDate; i++) {
                    if (col!==null) {
                        $td.eq(col).html(i);
                        col++;
                    }
                }

                for (var i=firstDay-1; i>=0; i--) {
                    $td.eq(i).html(prevLastDate).addClass('prev-month');
                    prevLastDate--;
                }
                
                for (var i=col; i<=$td.length; i++) {
                    nextMonthCnt++;
                    $td.eq(i).html(nextMonthCnt).addClass('next-month');
                }

                for (var i=0; i<=$td.length; i+=7) {
                    $td.eq(i).addClass('sun');
                }
                for (var i=6; i<=$td.length; i+=7) {
                    $td.eq(i).addClass('sat');
                }

            }
            calenderFn(year, month);

            y = year;
            m = month;

            $calPrevBtn.on({
                click:function(){
                    m--;
                    if (m<1) {m=12;y--;}
                    $('td').removeClass('prev-month');
                    $('td').removeClass('next-month');
                    $('td').removeClass('today');
                    calenderFn(y, m);
                    $td.removeClass('addClick');
                }
            });
            $calNextBtn.on({
                click:function(){
                    m++;
                    if (m>12) {m=1;y++;}
                    $('td').removeClass('prev-month');
                    $('td').removeClass('next-month');
                    $('td').removeClass('today');
                    calenderFn(y, m);
                    $td.removeClass('addClick');
                }
            });

            $td.on({
                click:function(){
                    if ($(this).hasClass('prev-month') || $(this).hasClass('next-month')) {

                    } else {
                        $td.removeClass('addClick');
                        $(this).addClass('addClick');
    
                        var clickM = '';
                        var txt = '';
                        txt = $(this).text();
    
                        // 날짜를 클릭시 오른쪽의 현재날짜가 클릭한 날짜로 바뀌면서
                        // 해당 날짜의 예약리스트?가 표시가되도록 데이터를 변경
                        // 이전, 다음달의 날짜에는 클릭 안되게 or 이전 ,다음달 날짜 클릭시 해당월로 이동하여 클릭한 날짜에 이벤트추가도 괜찮을듯
                        if (m < 10){
                            clickM = '0' + m;
                        } else {
                            clickM = m;
                        }
                        if (txt < 10) {
                            txt = '0' + txt;
                        }
                        $scheduleH3.html(y +'-'+ clickM + '-' + txt);
                        txt = '';
                    }

                }
            });

        }
        
    }
    sub02_berry.init();

})(jQuery);