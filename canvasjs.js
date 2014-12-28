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
		draw();
	}
}

function draw() {
	//drawCircle();
	//drawPath();
	//drawLinearGradient();
	drawRadialGradient();
	//mozdraw();
}

function handleMouseMov(pos) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	mouseX = pos.clientX;
	mouseY = pos.clientY;
	draw();
	console.log(canvas.width + ", " + canvas.height);
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

function drawRadialGradient() {
	ctx.rect(0, 0, canvas.width, canvas.height);


	var grd = ctx.createRadialGradient(mouseX + 30, mouseY + 30, 40, mouseX+70, mouseY+40, 320);
	grd.addColorStop(0, '#013208');
	grd.addColorStop(0.25, '#ff5500');	
	grd.addColorStop(0.5, '#ff0000');
	grd.addColorStop(1, '#060f1e');
	ctx.fillStyle = grd;
	ctx.fill();

	var grd2 = ctx.createRadialGradient(55,55,10,52,50,30);
    grd2.addColorStop(0, '#A7D30C');
    grd2.addColorStop(0.9, '#019F62');
    grd2.addColorStop(1, 'rgba(1,159,98,0)');
    ctx.fillStyle = grd2;
    ctx.fill();

    var grd3 = ctx.createRadialGradient(canvas.width - 560, canvas.width - 560, 10, canvas.width - 555, canvas.width - 555, 30);
    grd3.addColorStop(0, '#A7D30C');
    grd3.addColorStop(0.9, '#019F62');
    grd3.addColorStop(1, 'rgba(1,159,98,0)');
    ctx.fillStyle = grd3;
    ctx.fill();

}

function mozdraw() {
    var radgrad = ctx.createRadialGradient(0,0,1,0,0,150);
    radgrad.addColorStop(0, '#A7D30C');
    radgrad.addColorStop(1, 'rgba(1,159,98,0)');

    var radgrad2 = ctx.createRadialGradient(0,150,1,0,150,150);
    radgrad2.addColorStop(0, '#FF5F98');
    radgrad2.addColorStop(1, 'rgba(255,1,136,0)');

    var radgrad3 = ctx.createRadialGradient(150,0,1,150,0,150);
    radgrad3.addColorStop(0, '#00C9FF');
    radgrad3.addColorStop(1, 'rgba(0,201,255,0)');

    var radgrad4 = ctx.createRadialGradient(150,150,1,150,150,150);
    radgrad4.addColorStop(0, '#F4F201');
    radgrad4.addColorStop(1, 'rgba(228,199,0,0)');

    ctx.fillStyle = radgrad4;
    ctx.fillRect(0,0,550,550);
    ctx.fillStyle = radgrad3;
    ctx.fillRect(0,0,550,550);
    ctx.fillStyle = radgrad2;
    ctx.fillRect(0,0,550,550);
    ctx.fillStyle = radgrad;
    ctx.fillRect(0,0,550,550);
}