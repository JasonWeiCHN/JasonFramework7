//进入登陆页面时 将 滑动禁用
if(page.name === 'loginpage') { //登录
	myApp.getCurrentView().params.swipeBackPage = false;
}else{//进入其他页面时 将 滑动启用
	myApp.getCurrentView().params.swipeBackPage = true;
}