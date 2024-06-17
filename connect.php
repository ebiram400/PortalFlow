<?php
$connect=mysqli_connect("localhost","root","","novinashian");
if (!$connect) {
    die("اتصال برقرار نشد");
}