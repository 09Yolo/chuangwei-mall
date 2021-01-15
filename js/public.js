//获取特定class元素的节点
function elementsByClassName(nodes, classStr) {
	var oDivAll = nodes.getElementsByTagName('*');
	var res = [];
	for (var i = 0; i < oDivAll.length; i++) {
		if (oDivAll[i].className == classStr) {
			// console.log(oDivAll[i]);
			res.push(oDivAll[i]);
		}
	}
	return res;
};

//封装$方法
function $(str) {
	switch (str.charAt(0)) {
		case '#':
			return document.getElementById(str.slice(1));
			break;
		case '.':
			return elementsByClassName(document, str.slice(1));
			break;
		case '[':
			return document.getElementsByName(str.slice(6, str.length - 1));
			break;
		default:
			return document.getElementsByTagName(str);
	}
};
//写一个方法可以获取范围内的随机数
function randomNum(start, end) {
	// var nums = end - start + 1;
	// var tar = parseInt( Math.random() * nums) + start;
	// console.log(tar);
	return parseInt(Math.random() * (end - start + 1) + start);
};

// 删除，id下的一个元素
//str:需要元素的父元素，re：被删除的元素只适合id下的元素
function repbianqian(str, re) {
	var repl = biaoqian(str).getElementsByTagName(re)[0]
	console.log(repl)
	biaoqian(str).removeChild(repl)
}

function biaoqian(str) {
	switch (str.charAt(0)) {
		case '#':
			return document.getElementById(str.slice(1));
			break;
		case '.':
			return classname1(document, str.slice(1));
			break;
		default:
			return document.getElementsByTagName(str);
			break;

	}
}


// 在元素后添加标签
//需要添加的标签，str添加标签的位置，num不是id标签时添加在第几个元素下（可省略）
function addbianqian(bq, str, num) {
	var bianqianx = document.createElement(bq)
	if (str.charAt(0) == '#') {
		biaoqian(str).appendChild(bianqianx)
	} else {
		biaoqian(str)[num].appendChild(bianqianx)
	}
}

function biaoqian(str) {
	switch (str.charAt(0)) {
		case '#':
			return document.getElementById(str.slice(1));
			break;
		case '.':
			return classname1(document, str.slice(1));
			break;
		default:
			return document.getElementsByTagName(str);
			break;

	}
}
//时间格式
function sty(n) {
	return n < 10 ? '0' + n : n;
}
//时间格式
function getTime() {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var hour = d.getHours();
	var min = d.getMinutes();
	var sec = d.getSeconds();
	var day = d.getDay()
	var week = ['日', '一', '二', '三', '四', '五', '六']

	return year + '年' + sty(month) + '月' + sty(date) + '日 ' + sty(hour) + ':' + sty(min) + ':' + sty(sec) + '星期' + week[
		day]
}
//封装一个处理单位数字的函数
		            function showNum(num) {
		                if (num < 10) {
		                    return '0' + num
		                }
		                return num
		            }