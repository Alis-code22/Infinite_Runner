var canvas;
var ctx;

var y = 0;
var speed = 2;
var paused = false;

var posX = 262 - (92 / 2);
var posY = 350 - (133 / 2);
var frameX = 0;
var frameCount = 0;
var frameStop = 8;
var speedDir = 1;

var img;
var run1;
var run2;

function init() {
	img = document.getElementById("background");
	run1 = document.getElementById("front_sprites");
	run2 = document.getElementById("back_sprites");

	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	move();
}

function draw(offsetY) {
	ctx.drawImage(img, 0, 0, canvas.width, canvas.height - offsetY, 0, offsetY, canvas.width, canvas.height - offsetY);
	ctx.drawImage(img, 0, canvas.height - offsetY, canvas.width, offsetY, 0, 0, canvas.width, offsetY);

	var sprite;
	if (speedDir > 0)
		sprite = run2;
	else
		sprite = run1;

	var frame;
	if (speed > 0)
		frame = frameX;
	else
		frame = 0;

	ctx.drawImage(sprite, frame, 0, 92, 133, posX, posY, 92, 133);

	if (frameCount >= frameStop) {
		frameCount = 0;
		frameX += 92;
		if (frameX >= 92 * 8) {
			frameX = 0;
		}
	}
	frameCount++;

	ctx.font = "1rem Verdana";
	ctx.fillStyle = "white";
	ctx.fillText( "Speed: " + speed, 10, 20 );
	ctx.fillText( "Direction: " + (speedDir > 0 ? "up" : "down"), 10, 40 );
}

function move() {
	y += speed * speedDir;

	if (y > canvas.height) {
		y -= canvas.height;
	}
	if (y < 0) {
		y += canvas.height;
	}
	draw(y);
	if (paused == false) {
		window.requestAnimationFrame(move);
	}
}



document.body.addEventListener('keyup', function (event) {
	// console.log("keyup key %s", event.key);
	var key = event.key.toLowerCase();


	if (key == "s" ) {                                          //S cambio direzione
		speedDir = -speedDir;
	}
	else if (key == "p" || key == "arrowup" ) {             //P aumento velocità
		speed += 2;
	}
	else if (key == "m" || key == "arrowdown" ) {              //M diminuzione velocità
		speed -= 2;
		if (speed < 0) {
			speed = 0;
		}
	}

	frameStop = 10 - Math.abs(speed);
	if (frameStop < 0) {
		frameStop = 0;
	}
});