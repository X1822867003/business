/*最终购买输出*/
$(function(){
    var $product = $(".sec-mid-right");
	$(".cart a").click(function(){
        var pro_name = $product.parents(".sec-mid").siblings(".sec-top").find("h3:first").text();
		var pro_size = $product.find(".T-size span").text();
		var pro_color =  $(".T-color span").text();
		var pro_num = $product.find("#num-sort").val();
	    var pro_price = $product.find(".T-price span").text();
		var dialog = " 感谢您的购买。\n您购买的\n"+
		        "产品是："+pro_name+"；\n"+
		        "颜色是："+pro_color+"；\n"+
				"尺寸是："+pro_size+"；\n"+
				"数量是："+pro_num+"；\n"+
				"总价是："+pro_price +"元。";
		if( confirm(dialog) ){
			alert("您已经下单!");
		}
		return false;//避免页面跳转
	})
})