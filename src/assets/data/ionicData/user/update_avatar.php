<?php
/**
* 修改用户头像
*/
header('Content-Type: application/json;charset=UTF-8');

session_start();
@$uid = $_SESSION['loginUid'];
if(!$uid){
  die('{"code":401,"msg":"login required"}');
};

//TODO: 接收上传的用户头像

require_once('../init.php');
$sql = "UPDATE xz_user SET $condition WHERE uid=$uid";
$result = mysqli_query($conn,$sql);

if(!$result){         //SQL执行失败
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $count = mysqli_affected_rows($conn);
  if($count!==1){     //用户编号不存在
    echo('{"code":201, "msg":"uid non-exists"}');
  }else {             //修改成功
    echo('{"code":200, "msg":"update succ"}');
  }
}
