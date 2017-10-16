/*衣服尺寸选择*/
$(function(){
	$(".T-size li").click(function(){
		$(this).parents("ul").siblings("span").text(  $(this).text() );
	})
})
/*数量和价格联动*/
$(function(){
    var $span = $("div.T-price span");
	var price = $span.text();	
	$("#num-sort").change(function(){
	    var num = $(this).val();
		var amount = num * price;
		$span.text( amount );
	}).change();
})
