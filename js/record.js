window.onload = function() {
	var yanzBor = document.querySelector('.main_input_border2');
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
	yanzBor.onblur = function() {
		if (yanzBor.value.length != Pyz.innerHTML.length) {
			console.log(alert('验证码错误'));
		} else {
			for (i = 0; i < Pyz.innerHTML.length; i++) {
				if (yanzBor.value[i] != Pyz.innerHTML[i]) {
					console.log(alert('请输入正确验证码'));
					break;
				}
			}
		}
	}
	}