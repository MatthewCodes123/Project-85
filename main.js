var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var greenCar_x = 5;
var greenCar_y = 225;
var greenCar_width = 75;
var greenCar_height = 100; 

background_image = "parkingLot.jpg";
greenCar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_imageTag = new Image();
    background_imageTag.onload = addEventListener("load", uploadBackground());
    background_imageTag.src = background_image;

    greenCar_imgTag = new Image();
    greenCar_imgTag.onload = addEventListener("load", uploadgreenCar());
    greenCar_imgTag.src = greenCar_image;
}

function uploadBackground() {
    ctx.drawImage(background_imageTag, 0, 0, myCanvas.width, myCanvas.height);

}

function uploadgreenCar() {
    ctx.drawImage(greenCar_image, greenCar_x, greenCar_y, greenCar.width, greenCar.height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greenCar_y > 0){
		greenCar_y= greenCar_y - 10;
		uploadBackground();
		uploadgreenCar();
	}
}

function down()
{
    if (greenCar_x < 700){
        greenCar_x= greenCar_x + 10;
        uploadBackground();
        uploadgreenCar();
    }
}

function left()
{
    if (greenCar_x > 0){
		greenCar_x= greenCar_x - 10;
		uploadBackground();
		uploadgreenCar();
		}
}

function right()
{
	if (greenCar_x < 700){
        greenCar_x= greenCar_x + 10;
        uploadBackground();
        uploadgreenCar();
    }
}
