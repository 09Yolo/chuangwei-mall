// 放大镜
$(function() {
	$('.boxshow_box').hover(function() {
		$('.smallbox').css('display', 'block');
		$('.boxshow_box_p').css('display', 'block');
		$('.boxshow_box').mousemove(function(ev) {
			var e = ev || window.event;
			//小框距离左边的距离为鼠标位置减掉小框的一半，减掉大框离左边的距离
			var left = e.pageX - $('.smallbox').width() / 2 - $('.boxshow_box').offset().left;
			var top = e.pageY - $('.smallbox').height() / 2 - $('.boxshow_box').offset().top;
			//left值小于0时小框停止小框移动
			//left值大于大框减去小框宽度时停止小框移动
			if (left <= 0) {
				left = 0;
			};
			if (left >= 250) {
				left = 250;
			};
			if (top <= 0) {
				top = 0
			};
			if (top >= 250) {
				top = 250;
			};
			$('.smallbox').css({
				left: left,
				top: top
			});
			//小方块的左距离 / 图片的宽度  =  大框的左距离 / 右边图片的宽度
			var w = left / (250);
			var h = top / (250);
			$('.boxshow_box_p').find('img').css({
				left: -left * 1000 / 500,
				top: -top * 1000 / 500,
			})
		})
	}, function() {
		$('.smallbox').css('display', 'none');
		$('.boxshow_box_p').css('display', 'none');
	})
	
	$('.smallshow_ul li img').mousemove(function () {
            $('.boxshow_box img').attr('src',this.src);
            $('.boxshow_box_p img').attr('src',$('.boxshow_box img')[0].src);
        });
});

 

// + - 件数
var Add = function(i){
	var ii = parseInt($("#pronumber").val())+i;
	if(ii > 0){
		$("#pronumber").val(ii);
	}
}