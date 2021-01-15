$(window).scroll(function() {
		// 1.显示隐藏电梯导航(消失的地方)
		var toolTop = $(".content").offset().top;
		toggleTool();

		function toggleTool() {
			if ($(document).scrollTop() >= toolTop) {
				$(".clBackTop").fadeIn();
			} else {
				$(".clBackTop").fadeOut();
			};
		}

		//scrollTop
		var scrollTop = $(document).scrollTop();
		// console.log(scrollTop);
	});

	var flag = true;
	//回到顶部
	$('.clBackTop').click(function() {
		$('html,body').stop(true).animate({ scrollTop: 0 });
	});
	
	
	