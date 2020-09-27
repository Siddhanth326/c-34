var dog

function preload()
{
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}

function setup() {
var canves =	createCanvas(500, 500);
  


}


function draw() {  

  drawSprites();
  //add styles here

}
//Function to read values from DB
function readStock(data){
  foodS=data.va();
}
//Function to write values in DB
function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.re('/').update({
    Food:x
  })
}


