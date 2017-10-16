$(function() {
	$(".carousel-onclick .next").click(function() {
		var $carousel = $(this).parent().siblings(".carousel-img").children("ul");
		var $v_width = $carousel.find("li").width() + 30; //宽
		if(!$carousel.is(":animated")) {
			$carousel.animate({ left: "-=" + $v_width }, "slow", function() {
				$carousel.css("left", "0").find("li:first").appendTo($carousel)
			});
		}
	})
	$(".carousel-onclick .prev").click(function() {
		var $carousel = $(this).parent().siblings(".carousel-img").children("ul");
		var $v_width = $carousel.find("li").width() + 30; //宽
		if(!$carousel.is(":animated")) {
			$carousel.find("li:last").prependTo($carousel)
			$carousel.css("left", "-380px").animate({ left: "0" }, "slow")

		}
	})
})

$(function() {
	$(".img-left-right .next").click(function() {
		var $thumbnail = $(this).parent().siblings(".img-thumbnail").children("ul");
		var $v_width = $thumbnail.find("li").width() + 30; //宽
		if(!$thumbnail.is(":animated")) {
			$thumbnail.animate({ left: "-=" + $v_width }, "slow", function() {
				$thumbnail.css("left", "0").find("li:first").appendTo($thumbnail)
			});
		}
	})
	$(".img-left-right .prev").click(function() {
		var $thumbnail = $(this).parent().siblings(".img-thumbnail").children("ul");
		var $v_width = $thumbnail.find("li").width() + 30; //宽
		if(!$thumbnail.is(":animated")) {
			$thumbnail.find("li:last").prependTo($thumbnail)
			$thumbnail.css("left", "-380px").animate({ left: "0" }, "slow")

		}
	})
})
