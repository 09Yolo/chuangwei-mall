// $(document).ready(function() {
// 	$('.xiaoliang').click(function() {
// 		let $all = $('.list_allcont .list_every .bottom_right').toArray();
// 		$all.sort(function(itemA, itemB) {
// 			var priceA = $(itemA).find('em').text();
// 			var priceB = $(itemB).find('em').text();
// 			console.log(priceA);
// 			console.log(priceB);
// 			return priceA - priceB;
// 		});
// 		$('.list_every').append($all);

// 	});	
// })
// 价格排序


// 导航栏滚动跟随
window.onload = function(){
	var pos = $('#topT').offset();
	$(window).scroll(function(){
		if($(this).scrollTop()>pos.top){
			$('#topT').css('top',$(this).scrollTop()-pos.top);
		}else if ($(this).scrollTop()<=pos.top){
			$('#topT').css('top',0).css({'position':'relative','z-index':'9999','border-bottom':'1px solid #eee'});
		}
	})
};




