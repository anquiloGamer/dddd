canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg"];


random_number = Math.floor(Math.random() * 3);
console.log(random_number);
rover_width = 100;
rover_heigh = 90;

background_image = nasa_mars_images_array[random_number];
console.log("background_image =" + background_image);
rover_image = "rover.png";

background_image = "mars.jpg";



rover_x = 10;
rover_y = 10;

function add(){ 

background_imgTag = new image ();
background_imgTag.onload= uploadBackground;
 background_imgTag.src = background_image
 rover_imgTag = new image();
rover_imgTag.onload = uploaddrover;
rover_imgTag.src = rover_image;
}



function uploadBackground(){
ctx.drawImage(background_imgTag, 0,0,canvas._width, canvas.rover_heigh);
}

function uploaddrover(){
    ctx.drawImage(background_imgTag, rover_x, rover_y, rover_width, rover_heigh);
}


window.addEventListener( "keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if(keyPressed == "38"){
        up();
        console.log("arriba")
    }
    if(keyPressed == "40"){
        up();
        console.log("abajo")
    }
    if(keyPressed == "37"){
        up();
        console.log("izquierda")
    }
    if(keyPressed == "39"){
        up();
        console.log("derecha") 
    }

  }

function up(){
if (rover_y >=0)
{
   rover_y =rover_y - 10;
   console.log("Cuando se presione la flecha arriba, x=" + rover_x + " | y =" +rover_y);
   uploadBackground();
   uploaddrover();
}
}
function down(){
	if (rover_y >=500)
    {
       rover_y =rover_y + 10;
        console.log("Cuando se presione la flecha abajo, x=" + rover_x + " | y =" +rover_y);
        uploadBackground();
        uploaddrover();
     } 
}
function right(){
	if (rover_y >=700)
    {
        rover_y =rover_y + 10;
         console.log("Cuando se presione la flecha derecha, x=" + rover_x + " | y =" +rover_y);
         uploadBackground(); 
      } 
}
function left(){
	if (rover_y >=0)
    {
        rover_y =rover_y - 10;
        console.log("Cuando se presione la flecha izquierda, x=" + rover_x + " | y =" +rover_y);
        uploadBackground();
        uploaddrover();
     }
}



