
//页面刷新会重置resource里面的数据
// var search = location.search.slice(1);
// function getLocationDate(search){
// 	var arr = search.split('&');
// 	var arr1 = arr[0].split('=');
// 	var arr2 = arr[1].split('=');
// 	var obj = {};
// 	obj[arr1[0]] = arr1[1];
// 	obj[arr2[0]] = arr2[1];
// 	return obj;
// }
// console.log(getLocationDate(search))

$(function() {
	cartList.map(function(item) {
		$(`<div class = 'cartListBody'>
			<div>
				<input type="checkbox" name="" class="cartListCheck" value="" />
			</div>
			<div class = 'cartListInfo'>
				<div>
					<img src="./imgs/${item.img}" alt="">
				</div>
				<div class = 'cartListInfoP'>
					<p>${item.msg}</p>
					<p>${item.msg}</p>
					<p>${item.msg}</p>
				</div>
			</div>
			<div class = 'cartListPrice'>${item.price}.00元</div>
				<div class = 'cartListCount'>
					<div class = 'cartListCountWid'>
						<button type="button" class = 'cartListCountRe'>-</button>
						<input type="" name="" class = 'cartListCountVal' value="${item.count}" />
						<button type="button"  class = 'cartListCountAdd'>+</button>
					</div>
				</div>
				<div>
					<span  class = 'cartListAllPrice'>${item.totalPrice}</span>.00元
				</div>
				<div class = 'cartListModify'>删除</div>
			</div>`
		).appendTo($('#cartList'));
	})
	
	
	//js改变checkbox的值
		// $('#cartListAllSel')[0].checked = true；
	//jq改变checkbox的值
	//prop方法与attr方法相同都是获取或更改元素属性
	// 对于html自带的属性,尤其是布尔属性, 要用prop方法操作.
		// $('#cartListAllSel').prop('checked', true)
	
	//var index = $('.cartListCheck').index(this);
	
	// 声明变量作为购物车选中的数组	
	var goodsSelect = []
	var count=0;
		//单个商品的复选框点击事件
	$('.cartListCheck').click(function(){
		//可以获取当前元素在class的index
		var index = $('.cartListCheck').index(this);
		// console.log(index);
		// console.log(this)
		
		if( this.checked ){
			count++;
			goodsSelect.push(cartList[index])
		}else{
			count--;
			var i = goodsSelect.indexOf(cartList[index]);
			goodsSelect.splice(i, 1); 
		}
			//当全选泽时，全选框的状态改为true
		if( count == cartList.length ){
			$('#cartListAllSel')[0].checked = true;
		}else {
			$('#cartListAllSel')[0].checked = false;
		}
		//改变总价结算的方法
		console.log()
		changeTotalPrice();
	});
		//全选的复选框点击事件
	$('#cartListAllSel').click(function(){
		console.log(this.checked)
		if( this.checked ){
			// $('.cartListCheck').attr('checked', true);
			$('.cartListCheck').prop('checked', true);
			goodsSelect = cartList;
		} else {
			// $('.cartListCheck').attr('checked', false);
			$('.cartListCheck').prop('checked', false);
			goodsSelect = [];
		}
		changeTotalPrice();
	})
		//- 的点击事件
	$('.cartListCountRe').click(function(){
		//通过index传this下标得到this为第几个class
		var index = $('.cartListCountRe').index(this);
		cartList[index].count--;
		//不操作数组，直接dom操作，从dom获取数据
		if( cartList[index].count <= 0 ){
			cartList[index].count = 0
		}
		$('.cartListCountVal').eq(index).val(cartList[index].count);
		OneGoodsPrice(index);
		changeTotalPrice();
	})
	
	//+ 的点击事件
	$('.cartListCountAdd').click(function(){
		//通过index传this下标得到this为第几个class
		var index = $('.cartListCountAdd').index(this);
		cartList[index].count++;
		//如果有最大库存就判断
		// if( cartList[index].count <= 0 ){
		// 	cartList[index].count = 0;
		// }
		$('.cartListCountVal').eq(index).val(cartList[index].count);
		OneGoodsPrice(index);
		changeTotalPrice();
	});
	
	
	//点击删除按键
	$('.cartListModify').click(function(){
		var index = $('.cartListModify').index(this);
		//js remove（）
		$('.cartListBody')[index].remove();
		var i = goodsSelect.indexOf(cartList[index]);
		goodsSelect.splice(i, 1);
		cartList.splice(index, 1);
		changeTotalPrice();
	})
	
	//单个商品的总价
	function OneGoodsPrice(index){
		cartList[index].totalPrice = cartList[index].count * cartList[index].price;
		$('.cartListAllPrice').eq(index).html(cartList[index].totalPrice);
	}
	
	//把选中的购物车里面的单价和数量算出总价
	function changeTotalPrice(){
		var total = 0;
		for(var i = 0; i < goodsSelect.length; i++ ){
			total += goodsSelect[i].totalPrice;
		}
		$('#cartTotalP').html(total);
	}
})
