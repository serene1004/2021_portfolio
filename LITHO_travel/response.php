<?

    $servername = 'localhost';
    $username   = 'serene';
    $password   = 'vcb464658!';
    $dbname     = 'serene';

    $connect = mysqli_connect($servername, $username, $password, $dbname);
    mysqli_set_charset($connect, 'utf8');

    if(!$connect){
        die('Connection failed');
    }

    $email = $_POST['email'];

    $sql = "insert into email_table (email) values ('$email')";
    $result = mysqli_Query($connect, $sql);

    echo 'You have successfully sent your email address';

    mysqli_close($connect);

?>