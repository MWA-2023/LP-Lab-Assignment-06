<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Check if the username and password are correct
  // You can replace the condition with your own authentication logic

  if ($username === 'admin' && $password === 'password') {
    // Authentication successful, redirect to the dashboard or another page
    header('Location: dashboard.php');
    exit();
  } else {
    // Authentication failed, display an error message
    $error = 'Invalid username or password';
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div class="container">
    <h1>Login</h1>
    <?php if (isset($error)) { ?>
      <div class="error"><?php echo $error; ?></div>
    <?php } ?>
    <form action="login.php" method="POST">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
      </div>
      <div class="form-group">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>
</body>

</html>
