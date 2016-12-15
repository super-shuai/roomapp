window.onload=function(){
	function resize(originSzie){
		var widths=document.documentElement.clientWidth;
		var scale=widths/originSzie*100;
		document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
		}
		resize(750);
}
	

	