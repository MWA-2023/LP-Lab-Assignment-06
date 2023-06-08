<?php
// MySQL database credentials
$servername = "localhost";  // Change this if your database server is different
$username = "root";  // Change this to your MySQL username
$password = "";  // Change this to your MySQL password
$dbname = "mydatabase";  // Change this to the name of your database

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Example query
$sql = "SELECT * FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while ($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . ", Name: " . $row["name"] . "<br>";
    }
} else {
    echo "No results found";
}

// Close the connection
$conn->close();
?>
