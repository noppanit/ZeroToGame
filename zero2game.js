$(document).ready(function() {
	var canvas = $("#main-canvas");
	var ctx = canvas[0].getContext("2d");
	var img = new Image();
	img.onload = function() {
		ctx.drawImage(img, 0, 0);
	};
	img.src = "mozilla.jpeg";
	
	var output = $("#output");

	output.html("Hi, I'm Toy and Cesar. I'm learning ");
  	
});