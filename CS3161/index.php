<?php
$host = 'localhost'; // MySQL host
$user = 'root'; // MySQL username
$password = '***123'; // MySQL password
$database = 'mydatabase'; // MySQL database name

// Create a new MySQLi object
$mysqli = new mysqli($host, $user, $password, $database);

// Check connection
if ($mysqli->connect_error) {
    die('Connection failed: ' . $mysqli->connect_error);
}

// Query the database
$query = 'SELECT * FROM mytable'; // Modify this query according to your table structure
$result = $mysqli->query($query);

// Process the query result
if ($result) {
    // Loop through the result and display the data
    while ($row = $result->fetch_assoc()) {
        echo 'Name: ' . $row['name'] . '<br>';
        echo 'Email: ' . $row['email'] . '<br>';
        // ... continue displaying other fields
    }
} else {
    echo 'Error executing the query: ' . $mysqli->error;
}

// Close the database connection
$mysqli->close();
?>
