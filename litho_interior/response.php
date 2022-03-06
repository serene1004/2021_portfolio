<?

    $servername = 'localhost';
    $username   = 'serene';
    $password   = 'vcb464658!';
    $dbname     = 'serene';

    $connect = mysqli_connect($servername, $username, $password, $dbname);
    mysqli_set_charset($connect, 'utf8');

    if(!$connect){
        die('접속실패');
    }

    // 폼 정보를 $변수에 설정 후 $변수에 기억(저장)
    $email = $_POST['email'];
    $code = $_POST['code'];


    // DB내에 TABLE(email)에 입력하는 SQL코딩
    $sql = "insert into email_table (email) values ('$email')";
    $result = mysqli_Query($connect, $sql);

    // 서버가 클라이언트에 응답
    echo '이메일주소를 저장하였습니다.';

    mysqli_close($connect);

?>