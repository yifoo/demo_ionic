<?php
header('Content-Type: application/json;charset=UTF-8');
require_once("init.php");
$sql = "SELECT pi.pid,p.title,p.price,pi.img FROM ji_product p,ji_product_img pi GROUP by p.pid";
echo json_encode(sql_execute($sql));
?>