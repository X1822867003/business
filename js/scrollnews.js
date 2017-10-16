$(function() {
	var $this = $(".scrollNews");
	var scrollTimer;
	$this.hover(function() {
		clearInterval(scrollTimer);
	}, function() {
		scrollTimer = setInterval(function() {
			scrollNews($this);
		}, 3000);
	}).trigger("mouseleave");
});

function scrollNews(obj) {
	var $self = obj.find("ul:first");
	var lineHeight = $self.find("li:first").height(); //获取行高
	$self.animate({ "marginTop": -lineHeight + "px" }, 600, function() {
		$self.css({ marginTop: 0 }).find("li:first").appendTo($self); //appendTo能直接移动元素
	})
}

$(function() {
	$(".module_up_down").toggle(function() {
		var $self = $(this);
		$self.siblings(".scrollNews").slideToggle(600, function() {
			$("img", $self).attr("src", "images/img_down.png");
		});
	}, function() {
		var $self = $(this);
		$self.siblings(".scrollNews").slideToggle(600, function() {
			$("img", $self).attr("src", "images/img_up.png");
		});
	})
})

$(function() {
	$(".module_up_down").toggle(function() {
		var $self = $(this);
		$self.siblings(".scrollproduct").slideToggle(600, function() {
			$("img", $self).attr("src", "images/img_down.png");
		});
	}, function() {
		var $self = $(this);
		$self.siblings(".scrollproduct").slideToggle(600, function() {
			$("img", $self).attr("src", "images/img_up.png");
		});
	})
})

$(function() {
	$(".modal-up").toggle(function() {
		var $self = $(this);
		$self.siblings(".modal").slideToggle(600, function() {
			$("img", $self).attr("src", "images/img_11.png");
		});
	}, function() {
		var $self = $(this);
		$self.siblings(".modal").slideToggle(600, function() {
			$("img", $self).attr("src", "images/img_12.png");
		});
	})
})