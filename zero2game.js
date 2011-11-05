$(document).ready(function() {
	var canvas = $("#main-canvas");
	var ctx = canvas[0].getContext("2d");
	
	var player = new Player("mozilla.jpeg", 0, 0, ctx);
	
	var output = $("#output");
	$(document).bind("keydown", function(event) {
		output.html(event.which);
	});

	output.html("Hi, I'm Toy and Cesar. I'm learning");
  	
});

function Player(imgFile, x, y, ctx) {
	var that = this;
	this.x = x;
	this.y = y;
	this.ctx = ctx;
	this.imageLoaded = false;
	this.img = new Image();
	this.img.onload = function() {
		that.imageLoaded = true; 
		that.draw(ctx);
	};
	this.img.src = imgFile;
};

Player.prototype = {
	draw : function(ctx) {
		if(this.imageLoaded) {
			ctx.drawImage(this.img, this.x, this.y);
		}
	},
	
	move : function(dx, dy, ctx) {
		this.x += dx;
		this.y += dy;
		this.draw(ctx);
	}
};