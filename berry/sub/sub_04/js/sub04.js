;(function($){
    var sub04_berry = {
        init:function(){
            var that = this;

            that.sub04Fn();
        },
        sub04Fn:function(){

            var $tBody = $('#section1 .inquiry-board tbody');
            var $pageBox = $('#section1 .inquiry-board .page-box ul');
            var $prevBtn = $('#section1 .inquiry-board .prev-btn');
            var $nextBtn = $('#section1 .inquiry-board .next-btn');
            var $firstpageBtn = $('#section1 .inquiry-board .firstpage-btn');
            var $lastpageBtn  = $('#section1 .inquiry-board .lastpage-btn');

            var a = [];
            var txt = '';
            var list = 5;
            var total = null;
            var totalPageNum = Math.ceil(total / list);  // 전체 페이지 수
            var pageNumList = 5;
            var pageGroup = Math.ceil(totalPageNum/pageNumList);
            var gruopStartNum = null;
            var groupEndNum = null;

            var startNum = 0;
            var endNum = list;
            var cnt = 0;
            var btn = true;


            function ajaxRunFn(){
                $.ajax({
                    url:'./data/inquiryboard.json',
                    dataType:'json',
                    success:function(result){
                        $.each(result.notice, function(idx, obj){
                            a[idx] = [];

                            a[idx][0] = obj.no;
                            a[idx][1] = obj.title;
                            a[idx][2] = obj.name;
                            a[idx][3] = obj.date;

                        });

                        total = a.length;

                        function listOutputFn(){
                            txt = '';
                            $tBody.html(txt);
                            for (var i=startNum; i<endNum; i++) {
                                txt += '<tr>';
                                for (var j=0; j<4; j++) {
                                    txt += '<td>' + a[i][j] + '</td>';
                                }
                                txt += '</tr>';
                            }
                            $tBody.html(txt);
                            totalPageNum = Math.ceil(total / list);
                            pageGroup = Math.ceil(totalPageNum/pageNumList);
                        }
                        setTimeout(listOutputFn, 100);

                        $prevBtn.on({
                            click:function(){
                                btn = true;
                                cnt--;
                                if(cnt<0){
                                    cnt=0;
                                }
                                pageNationFn();
                            }
                        });
                        $nextBtn.on({
                            click:function(){
                                btn = true;
                                cnt++;
                                if (cnt>pageGroup-1) {
                                    cnt=pageGroup-1;
                                    return;
                                }
                                pageNationFn();
                            }
                        });

                        $firstpageBtn.on({
                            click:function(){
                                btn = true;
                                cnt=0;
                                pageNationFn();
                            }
                        });

                        $lastpageBtn.on({
                            click:function(){
                                btn = false;
                                cnt=pageGroup-1;
                                pageNationFn();
                            }
                        });

                        function pageNationFn(){
                            txt='';
                            $pageBox.html(txt);

                            gruopStartNum = cnt * pageNumList;
                            groupEndNum = gruopStartNum + pageNumList;


                            if (btn == true) {
                                if (groupEndNum > totalPageNum) {
                                    groupEndNum = totalPageNum;
                                }
                                
                                for (var i=gruopStartNum; i<groupEndNum; i++) {
                                    if (i%pageNumList===0) {
                                        txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                                    } else {
                                        txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                                    }
                                }
                                $pageBox.html(txt);
                                $pageBtn = $('.page-box li .page-btn');
    
                                startNum = parseInt($pageBtn.eq(0).text()-1)*list;
                                endNum = startNum+list;
                                
                                if (endNum > total) {
                                    endNum = total;
                                }                                
                            } else {
                                if (groupEndNum > totalPageNum) {
                                    groupEndNum = totalPageNum;
                                }
                                for (var i=gruopStartNum; i<groupEndNum; i++) {
                                    if (i%pageNumList===2) {
                                        txt += '<li><a href="#" class="page-btn addPage">'+ (i+1) +'</a></li>'
                                    } else {
                                        txt += '<li><a href="#" class="page-btn">'+ (i+1) +'</a></li>'
                                    }
                                }
                                $pageBox.html(txt);
                                $pageBtn = $('.page-box li .page-btn');
    
                                startNum = parseInt($pageBtn.eq(2).text()-1)*list;
                                endNum = startNum+list;
                            
                                if(endNum > total){
                                    endNum = total;
                                }
                            }
                            listOutputFn();
                        }
                        setTimeout(pageNationFn, 100);

                        
                        $pageBox.on('click', '.page-btn', function(event){
                            event.preventDefault();
                            $('.page-btn').removeClass('addPage');
                            $(this).addClass('addPage');

                            startNum = (parseInt($(this).text())-1)*list;
                            endNum = startNum + list;
                            if(endNum > total){
                                endNum = total;
                            }
                            listOutputFn();
                        })
                        

                    },
                    error:function(){
                        alert('FAILED');
                    }
                });
            }
            setTimeout(ajaxRunFn, 100);

        }
        
    }
    sub04_berry.init();

})(jQuery);