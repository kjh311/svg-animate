$( document ).ready(function() {
    // alert("works");

    var tl = new TimelineMax();
    tl.from('.stand', 0.5, {scaleY: 0, transformOrigin: "bottom", ease: Power2.easeOut, delay: 0.4})
    	.from('.stand-connector', 0.5, {scaleY: 0, transformOrigin: "bottom", ease: Bounce.easeOut})
    	.from('.monitor-bottom', 0.7, {scaleX: 0, transformOrigin: "center", ease: Bounce.easeOut})
    	.from('.black-monitor', 0.6, {scaleY: 0, transformOrigin: "bottom", ease: Circ.easeOut, delay: 0.4})
    	.from('.orange-square', 0.5, {scale: 0})
    	.staggerFrom('#Layer_1 > g:nth-child(1) > g path', 0.2, {scaleX: 0}, -0.1)
});