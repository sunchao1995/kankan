$(function(){
	function fun(){
		$(".jiao").animate({"bottom":"0.5rem"},1000);
		$(".jiao").animate({"bottom":"0.3rem"},1000);
		$(".xiaokuai").animate({"transform":"rotate(270deg)"},1000);
	}
	setInterval(fun,2000);
	
})