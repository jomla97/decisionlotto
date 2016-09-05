<?php

	require "includes/model.php";
	require "templates/header.php";

	//for ease of use, declare a new page variable
	$page = filter_input(INPUT_GET, 'page', FILTER_SANITIZE_URL);

	if(!isset($page) || $page == ""){
		require "templates/home.php";
	}

	require "templates/footer.php";

?>
