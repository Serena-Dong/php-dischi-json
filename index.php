<?php

// Recovering JSON file
$sourse_url = __DIR__ . '/data.json';

// Extracting the contents
$json_data = file_get_contents($source_url);

// From JSON to PHP
$discs = json_decode($json_data, true);

// Converting the writing style into a JSON style
header('Content-Type: application/json');

// Converting to JSON and returning to $disc
echo json_encode($discs)

