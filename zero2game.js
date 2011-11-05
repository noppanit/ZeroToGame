$(document).ready(function() {
	var canvas = $("#main-canvas");
	var ctx = canvas[0].getContext("2d");
	var img = new Image();
	img.onload = function() {
		ctx.drawImage(img,0,0);
	};
	img.src = "wave.png";
	
	var output = $("#output");

	output.html("Hi, I'm Toy and Cesar");
  	
});