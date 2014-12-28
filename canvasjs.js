var canvas;
var ctx;
var radius;
var mouseX = 0, mouseY = 0;

window.onload = function() {
	console.log("[message] Loaded.");
	initCanvas();
	console.log(mouseX + ", " + mouseY);
	window.addEventListener('mousemove', function(pos) {handleMouseMov(pos);}, false);
};

function initCanvas() {
	canvas = document.getElementById('myCanvasElement');
	if (canvas) {
		ctx = canvas.getContext('2d');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		//drawCircle();
		//drawPath();
		drawLinearGradient();
	}
}

function handleMouseMov(pos) {
	//ctx.clearRect(0, 0, canvas.width, canvas.height);
	mouseX = pos.clientX;
	mouseY = pos.clientY;
	drawLinearGradient();
}

function drawCircle() {
	ctx.arc(canvas.height / 2, canvas.width / 2, 300, 0, 2*Math.PI, false);
	ctx.strokeStyle = 'blue';
	ctx.stroke();
}

function drawPath() {
	ctx.beginPath();
	ctx.moveTo(20, 20);
	ctx.lineTo(100, 160);

	ctx.quadraticCurveTo(230, 200, 250, 120);
	ctx.bezierCurveTo(290, -30, 300, 210, 400, 150);

	ctx.lineWidth = 3;
	ctx.stroke();
}

function drawLinearGradient() {
	ctx.rect(0, 0, canvas.width, canvas.height);
	var grd = ctx.createLinearGradient(mouseX , mouseY, canvas.width, canvas.height);
	grd.addColorStop(0, '#013208');
	grd.addColorStop(0.25, '#ff5500');	
	grd.addColorStop(0.5, '#ff0000');
	grd.addColorStop(1, '#06e023');
	ctx.fillStyle = grd;
	ctx.fill();
}