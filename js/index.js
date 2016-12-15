function loaded(){
	var myScroll = new IScroll('#wrapper', {
		scrollbars: true,
		mouseWheel: true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'scale',
		fadeScrollbars: true
		});
	}
document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

