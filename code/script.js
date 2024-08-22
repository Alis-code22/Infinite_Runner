const canvas = document.getElementById("canvas");          //creazione variabili
var ctx = canvas.getContext("2d");
var y = 0;
var speed = 2;
var paused = false;
var img = new Image();
var run1 = new Image();
var run2 = new Image();
var posX = 262 - (92 / 2);                                  //92 = larghezza singoli frame all'interno dello sprite
var posY = 350 - (133 / 2);                                 //133 = altezza degli sprite di animazione
var frameX = 0;
var frameCount = 0;
var frameStop = 8;
var speedDir = 1;

img.src = "images/background.png";                             //immagini
run1.src = "images/front.png";
run2.src = "images/back.png";

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
		if (frameX >= 92 * 8) {                              //8 frame dell'immagine
			frameX = 0;
		}
	}
	frameCount++;

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

function start() {
	var buttonS = document.getElementById("startino");
	buttonS.disabled = true;
	move();
}

document.body.addEventListener('keyup', function (event) {
	console.log("Pressed %d", event.keyCode);

	if (event.keyCode == 83) {                  //S cambio direzione
		speedDir = -speedDir;
	}
	else if (event.keyCode == 80) {             //P aumento velocità
		speed += 2;
	}
	else if (event.keyCode == 77) {             //M diminuzione velocità
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