<?php
/**
* 修改购物车条目中的是否勾选
*/
header('Content-Type: application/json;charset=UTF-8');

@$iid = $_REQUEST['iid'] or die('{"code":401,"msg":"iid required"}');
@$checked = $_REQUEST['checked'];
if($checked!=='0' && !$checked){
  die('{"code":402,"msg":"checked required"}');
}

session_start();
if(! @$_SESSION['loginUid']){
  die('{"code":300, "msg":"login required"}');
}

require_once('../init.php');
$sql = "UPDATE xz_shoppingcart_item SET is_checked=$checked WHERE iid=$iid";
$result = mysqli_query($conn, $sql);
if($result){
  echo '{"code":200, "msg":"update succ"}';
}else {
  echo '{"code":500, "msg":"update err"}';
}
