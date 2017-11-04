<?php
/**
* 删除购物车条目
*/
header('Content-Type: application/json;charset=UTF-8');

@$iid = $_REQUEST['iid'] or die('{"code":401,"msg":"iid required"}');

session_start();
if(! @$_SESSION['loginUid']){
  die('{"code":300, "msg":"login required"}');
}

require_once('../init.php');
$sql = "DELETE FROM xz_shoppingcart_item WHERE iid=$iid";
$result = mysqli_query($conn, $sql);
if($result){
  echo '{"code":200, "msg":"delete succ"}';
}else {
  echo '{"code":500, "msg":"delete err"}';
}
