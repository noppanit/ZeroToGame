$(document).ready(function() {
	var canvas = $("#main-canvas");
	var ctx = canvas[0].getContext("2d");
	
	var player = new Player("mozilla.jpeg", 0, 0, ctx);
	
	var output = $("#output");
	$(document).bind("keydown", function(event) {
		ctx.clearRect(0,0,600,400);
		switch(event.which) {
			case 37: 
				player.move(-50, 0, ctx);
				break;
			case 38:
				player.move(0, -10, ctx);
				break;
			case 39:
				player.move(50, 0, ctx);
				break;
			case 40:
				player.move(0, 10, ctx);
				break;
		}

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