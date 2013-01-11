// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel

( function () {
	var lastTime = 0;
	var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
	for ( var x = 0; x < vendors.length && !window.requestAnimationFrame; ++ x ) {
		window.requestAnimationFrame = window[ vendors[ x ] + 'RequestAnimationFrame' ];
		window.cancelAnimationFrame = window[ vendors[ x ] + 'CancelAnimationFrame' ] || window[ vendors[ x ] + 'CancelRequestAnimationFrame' ];
	}

	if ( !window.requestAnimationFrame ) {
		window.requestAnimationFrame = function ( callback, element ) {
			var currTime = Date.now(), timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
			var id = window.setTimeout( function() { callback( currTime + timeToCall ); }, timeToCall );
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if ( !window.cancelAnimationFrame ) {
		window.cancelAnimationFrame = function ( id ) { clearTimeout( id ); };
	}
}() );


// Keyboard handler
$(window).keypress(function(e) {
});

$(document).ready(function() {
	app = {};
	app.w = 800
	app.h = 450
	app.canvas = $("canvas")[0]
	app.canvas.width = app.w
	app.canvas.height = app.h
	app.ctx = app.canvas.getContext("2d");

	// TODO: init...

	requestAnimationFrame(frame);
});

function frame() {
	requestAnimationFrame(frame);
	
	// clear...
	//app.ctx.clearRect(0,0,app.w,app.h);

	// TODO: animate...

	app.ctx.fillStyle = "rgba(39, 43, 48, 0.025)";
	app.ctx.fillRect(0,0,app.w,app.h);

	var gray = 256*Math.random()|0;
	var gray2 = 256*Math.random()|0;
	var lineWidth = 10+10*Math.random()|0;
	app.ctx.fillStyle = "rgb("+gray+","+gray+","+gray+")";
	app.ctx.strokeStyle = "rgb("+gray2+","+gray2+","+gray2+")";
	app.ctx.lineWidth = lineWidth;

	var x = app.w*Math.random()|0;
	var y = app.h*Math.random()|0;
	var r = 20 + 40*Math.random();
	
	app.ctx.beginPath();
	app.ctx.arc(x, y, r, 0 , 2*Math.PI);
	app.ctx.fill();
	app.ctx.stroke();
}
