<?php
/**
* 返回当前登录用户的信息：
* 如：{"uid":10, "uname":"dingding"}
*/
header('Content-Type: application/json;charset=UTF-8');
header('Access-Control-Allow-Credentials:true');
header('Access-Control-Allow-Origin:http://localhost:3000');
session_start();
@$output['uid'] = $_SESSION['loginUid'];
@$output['uname'] = $_SESSION['loginUname'];

echo json_encode($output);