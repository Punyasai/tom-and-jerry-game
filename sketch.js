var bacgr,bacgrImage;
var cat,catImg1,catImg2,catImg3,catLastImage;


function preload() {
    //load the images here
    bacgrImage=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png");
    catLastImage=loadAnimation("images/cat3.png");
    catImg3=loadAnimation("images/cat4.png");
    
    


}

function setup(){
    createCanvas(2000,900);
    //create tom and jerry sprites here

    bacgr=createSprite(0,0,2000,900);
    bacgr.addImage(bacgrImage);

    cat=createSprite(250,190,20.5);
    cat.addAnimation(catImg1,catImg2,catImg3,catLastImage);
    //cat.scale=0.5;
    mouse=createSprite(100,200.20,5);
    

    


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2)
    {
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");

        cat.velocityX=0;
    }

    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImg2);
      cat.changeAnimation("catRunning");

  }


}
