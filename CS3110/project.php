 <?php
$servername = "127.0.0.1";
$username = "test";
$password = "";

$conn = mysqli_connect($servername, $username, $password, "students", 3306);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

// Perform query
if ($result = mysqli_query($conn, "SELECT * FROM students.marks")) {
  echo "<br/> Total Students: " . mysqli_num_rows($result);
  if ($result) {
      while ($row = mysqli_fetch_row($result)) {
         print("<br/>". "Roll No: ".$row[0] . "\n");
         print("Name: ".$row[1] . "\n");
         print("Marks: ".$row[2] . "\n");
      }
   }

  mysqli_free_result($result);
}

mysqli_close($conn);
?>
