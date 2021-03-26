var cat,cat_running,cat_sitting;
var garden;
var mouse,mouse_standing,mouse_finding,mouse_happy;


function preload(){ 
    cat_running=
 loadAnimation("cat1.png","cat2.png","cat3.png,cat4.png");
  
  mouse_running=
 loadAnimation("mouse1.png","mouse2.png","mouse3.png,mouse.png");
  
  groundImage=loadImage("ground.png")
}


function setup(){
  createcanvas(1200,800);
  cat=createsprite(500,200,50,80);
  cat.shapecolor="green";
  cat.debug=true;
  mouse=createsprite(400,300,50,30);
  mouse.shapecolor="green";
  mouse.debug=true;
}
function draw(){
    background(0,0,0);
    cat.x=world.cat.x;
     cat.y =world.cat.y;
     if(cat.x-mouse.x<mouse.width/2+cat.width/2
     &&  mouse.x-cat.x<mouse.width/2+cat.width/2
     &&  cat.y-mouse.y<mouse.width/2+cat.width/2
    && mouse.y-cat.y<mouse.width/2+cat.width/2){
      cat.shapecolor="red";
      mouse.shapecolour="red";
    }
    else{
   cat.shapecolor="green";
   mouse.shapecolor="green";
    }
     drawsprites();
}
















