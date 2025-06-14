// 获取模态框的所有input框
var inputs = document.querySelector(".modal").querySelectorAll('input');
// 为每个input框添加失去焦点事件
for (var i = 0; i < inputs.length; i++) {
	inputs[i].onblur = inputBlur;
}

function inputBlur() {
	var name = this.name; // 获取输入框的name值
	var val = this.value; // 获取输入框的value值
	if(name=="username"){
		var tips = "账号格式错误"; 
	}
	if(name=="password"){
		var tips = "密码格式错误"; 
	}
	var tips_obj = this.nextElementSibling; // 获取提示信息显示的div元素对象
	// 1. 去掉两端的空白字符
	val = val.trim();
	// 2. 文本框内容为空，给出提示信息
	if (!val) {
		error(tips_obj, '输入框不能为空');
		return false;
	}
	// 3. 获取正则匹配规则和提示信息
	var reg_msg = getRegMsg(name, tips);
	// 4. 检测是否否he正则匹配
	if (reg_msg['reg'].test(val)) {
		// 匹配成功，显示成功的提示信息
		success(tips_obj, reg_msg['msg']['success']);
	} else {
		// 匹配失败，显示失败的提示信息
		error(tips_obj, reg_msg['msg']['error']);
	}
}
// 根据input的name值，设置正则规则及提示信息
function getRegMsg(name, tips) {
	var reg = msg = '';
	switch (name) {
		case 'username':
			reg = /^[0-9]{4,11}$/;;
			msg = {
				'success': '账号格式正确',
				'error': tips
			};
			break;
		case 'password':
			reg = /^\w{6,20}$/;
			msg = {
				'success': '密码格式正确',
				'error': tips
			};
			break;
	}
	return {
		'reg': reg,
		'msg': msg
	};
}
// 成功
function success(obj, msg) {
	obj.className = 'success';
	obj.innerHTML = msg;
}
// 失败
function error(obj, msg) {
	obj.className = 'error';
	obj.innerHTML = msg + '，请重新输入';
}
// 判断所有输入框是否为空，为空不能提交并显示提示信息
function valid() {
	var flag = true;
	var inputs = document.querySelector(".modal").getElementsByTagName('input');
	// 为每个input框添加失去焦点事件
	for (var i = 0; i < inputs.length; i++) {
		if (!inputs[i].value.trim()) {
			//alert("信息不完整")
			let tips_obj = inputs[i].nextElementSibling;
			error(tips_obj, "输入框不能为空")
			flag = false;
		}
	}
	return flag;
}
