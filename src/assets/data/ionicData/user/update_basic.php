<?php
/**
* 修改用户基本注册信息
*/
header('Content-Type: application/json;charset=UTF-8');

session_start();
@$uid = $_SESSION['loginUid'];
if(!$uid){
  die('{"code":401,"msg":"login required"}');
}
@$user_name = $_REQUEST['user_name'];
@$email = $_REQUEST['email'];
@$phone = $_REQUEST['phone'];
@$gender = $_REQUEST['gender'];

require_once('../init.php');
$sql = "UPDATE xz_user SET user_name='$user_name',email='$email',phone='$phone',gender='$gender' WHERE uid=$uid";
$result = mysqli_query($conn,$sql);

if(!$result){         //SQL执行失败
  echo('{"code":500, "msg":"db execute err"}');
}else {
  $count = mysqli_affected_rows($conn);
  if($count!==1){     //用户编号不存在
    echo('{"code":201, "msg":"nothing updated"}');
  }else {             //修改成功
    echo('{"code":200, "msg":"update succ"}');
  }
}
