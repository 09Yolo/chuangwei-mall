window.onload = function(){
	var yanzCode2 = document.querySelector('.sept_input_code3');
	
	yanzCode2.onblur = function() {
		if (yanzCode2.value.length >= 6 && yanzCode2.value.length <= 16) {
			
		} else {
			console.log(alert('请输入6の16位'));
		};
	};
	var yanzCode3 = document.querySelector('.sept_input_code4');
	yanzCode3.onblur = function() {
		var isyes = true;
		if (yanzCode2.value.length != yanzCode3.value.length) {
			isyes = false;
		};
		for (i = 0; i < yanzCode3.value.length; i++) {
			if (yanzCode2.value[i] != yanzCode3.value[i]) {
				isyes = false;
				break;
			};
		};
		if (isyes) {
	
		} else {
			console.log(alert('密码不一致'));
		};
	};
	
}