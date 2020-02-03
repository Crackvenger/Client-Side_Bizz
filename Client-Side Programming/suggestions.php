<?php
  $existingNames = array("Bag", "Shirt", "Jacket", "Watch", "Daniel", "Dennis");

  if (isset($_POST['suggestion'])) {
    $suggestion = $_POST['suggestion'];

    foreach ($existingNames as $existingName) {
        if (strpos($existingName, $name) !== false) {
          echo $existingName;
          echo "<br>";
        }
    }
  }

 ?>
