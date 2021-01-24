
var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.debug = true;
  fixedRect.shapeColor='red';

  movingRect = createSprite(400,200,80,100);
  movingRect.debug = true;

  movingRect.shapeColor= 'red';
  //movingRect1 = createSprite(100,200,50,100);
  //movingRect1.debug = true;
   gameObject1= createSprite(100,100,50,50);
   gameObject1.shapeColor='red';
   gameObject1.debug = true;
   
   gameObject2= createSprite(200,100,50,50);
   gameObject2.shapeColor='red';
   gameObject2.debug = true;

   gameObject3= createSprite(300,100,50,50);
   gameObject3.shapeColor='red';
   gameObject3.debug = true;

   gameObject4= createSprite(400,100,50,50);
   gameObject4.shapeColor='red';
   gameObject4.debug = true;


}

function draw() {
  background(255,255,255);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

 
 if(isTouching(movingRect, gameObject3))
 {
  movingRect.shapeColor= 'blue';
    gameObject3.shapeColor= 'blue';
 }
 else
 {
   movingRect.shapeColor= 'red';
    gameObject3.shapeColor= 'red';
 }
  console.log(movingRect.x - fixedRect.x);
  drawSprites();
}

function isTouching(object1, object2)
{
  if( object1.x - object2.x < object1.width/2 + object2.width/2 &&
   object2.x - object1.x < object1.width/2 + object2.width/2&&
   object1.y - object2.y < object1.height/2 + object2.height/2 &&
   object2.y - object1.y < object1.height/2 + object2.height/2) {
    return true;
    
  }
   else{
   return false;
  }
  
}
