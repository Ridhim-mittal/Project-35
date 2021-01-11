//Create variables here
var dog, foodS;
var foodStock, database;
var dogImg, happyDogImg;
function preload()
{
dogImg = loadImage("dogImg.png");
happyDogImg = loadImage("dogImg1.png");	
}

function setup() {

  database = firebase.database();
  createCanvas(500, 500);


  foodStock = database.ref('Food')
  foodStock.on("value", readStock);
  
dog = createSprite(230,350);
dog.addImage(dogImg);
dog.scale = 0.35;

  
}




function draw() {  
    background(48,139,87)
  

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

  drawSprites();

 fill("lightgreen");
 stroke("white")
 textSize(30);
 textFont("georgia")
text("Press Up to Feed Brownie Milk",60,50);
textSize(20);
text("FOOD REMAINING" + foodS, 160,200);

  
  
  //add styles here

}

function readStock(data){

  foodS = data.val()
  
  }

function writeStock(x){

if(x<=0){
  x=0;
}else{
  x=x-1;
}
database.ref('/').update({

  Food:x
})

}

