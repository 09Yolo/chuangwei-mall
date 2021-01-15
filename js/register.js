// 随机验证码
window.onload = function() {
	var yanzCode = document.querySelector('.sept_input_code');
	var Pyz = document.getElementById('pyz');
	var Huan = document.getElementById('huan');

	function suiji(a, b) {
		var max = a > b ? a : b;
		var min = a < b ? a : b;
		var sui = parseInt(Math.random() * (max - min + 1) + min);
		// if(sui == min){
		// 	sui = sui + 1;
		// }
		return sui;
		// console.log(sui); //(包括两边)
	}

	function ma(n) {
		var sjs = "";
		// var x = suiji(48, 122);
		for (var i = 0; i < n; i) {
			var x = suiji(48, 122);
			// console.log(x);
			if ((48 <= x && x <= 57) || (97 <= x && x <= 122) || (65 <= x && x <= 90)) {
				i++
				var y = String.fromCharCode(x);
				sjs += y;
			}
		}
		return sjs;
	};

	Huan.onclick = function() {
		Pyz.innerHTML = ma(4);
	}
	yanzCode.onblur = function() {
		if (yanzCode.value.length != Pyz.innerHTML.length) {
			console.log(alert('验证码错误'));
		} else {
			for (i = 0; i < Pyz.innerHTML.length; i++) {
				if (yanzCode.value[i] != Pyz.innerHTML[i]) {
					console.log(alert('请输入正确验证码'));
					break;
				}
			}
		}
	}
	
	var yanzCode1 = document.querySelector('.sept_input_code2');
	yanzCode1.onblur = function() {
		if (yanzCode1.value.length != 11 || yanzCode1.value[0] != 1) {
			console.log(alert('请输入正确手机号'));
		}
	}
	
};
