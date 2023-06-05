<?php

$rn = filter_input(INPUT_POST, 'frn');
$div = filter_input(INPUT_POST, 'fdiv');
$name = filter_input(INPUT_POST, 'fname');
$m = filter_input(INPUT_POST, 'fm');
$c = filter_input(INPUT_POST, 'fc');

$host = "127.0.0.1";
$dbusername = "root";
$dbname = "students";
$dbpassword = "";

// Create connection
$conn = new mysqli ($host, $dbusername, $dbpassword, $dbname);

if (mysqli_connect_error()){
    die('Connect Error('.mysqli_connect_errno().')'
    .mysqli_connect_error());
}
else {
    $sql = "INSERT INTO table_1 (Roll_No, Div_, Name_, Marks, City)
    values ('$rn', '$div', '$name', '$m', '$c')";
    if ($conn->query($sql)){
        echo "New record is inserted successfully";
    }
    else{
        echo "Error: ". $sql ."<br>". $conn->error;
    }
    $conn->close();
}

?>
