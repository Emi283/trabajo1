//variables
var pelota;
 var paredes;
  var grupoDeParedes=[];
   var grupoT=[];
    var playerImg;
     var cofreImg; 
      var score=0;
       var enemigo1;
        var enemigo2;
         var enemigoImg;
          var gameState="inicio";
function preload(){
playerImg=loadImage("player..png");
cofreImg=loadImage("cofres.jpg");
enemigoImg=loadImage("enemigo.png");
}
      var tesoros=[{x:300,y:380,isCollected:false},
    {x:800,y:90,isCollected:false},
    {x:700,y:380,isCollected:false},
    {x:1380,y:130,isCollected:false},
    {x:1430,y:400,isCollected:false},
    {x:1800,y:80,isCollected:false}
];
   paredes=[{x:10,y:20,w:1700,h:40},
    {x:10,y:450,w:1700,h:40},
    {x:10,y:450,w:40,h:900},
    {x:600,y:50,w:250,h:40},
    {x:600,y:90,w:150,h:40},
    {x:600,y:130,w:80,h:40},
    {x:700,y:300,w:250,h:40},
    {x:800,y:370,w:50,h:120},
    {x:300,y:300,w:250,h:40},
    {x:200,y:370,w:50,h:120},

    {x:1000,y:20,w:2000,h:40},
    {x:1000,y:450,w:2000,h:40},
    {x:900,y:500,w:40,h:700},
    {x:1125,y:165,w:200,h:250},
    {x:1250,y:420,w:50,h:25},
    {x:1300,y:395,w:50,h:25},
    {x:1350,y:370,w:50,h:25},
    {x:1500,y:370,w:50,h:25},
    {x:1550,y:395,w:50,h:25},
    {x:1600,y:420,w:50,h:25},
    {x:1760,y:150,w:250,h:40},
    {x:1900,y:105,w:40,h:130},
    {x:1950,y:350,w:100,h:250},
    
];
function setup(){
createCanvas(2000,970);
enemigo1=createSprite(1500,100,50,50);
enemigo2=createSprite(1650,200,50,50);
pelota=createSprite(100,310,25,25);
pelota.addImage("jugador",playerImg);
pelota.scale=0.3
for(var a in paredes){
var pared=createSprite(paredes[a].x,paredes[a].y,paredes[a].w,paredes[a].h);
grupoDeParedes.push(pared);
}
for(var t in tesoros){
    var tesoro=createSprite(tesoros[t].x,tesoros[t].y);
    grupoT.push(tesoro);
    tesoro.addImage("cofre",cofreImg);
    tesoro.scale=0.2;

}

}
function draw(){
background("black");
textSize(30)
fill("red");
text("score=  "+score,35,70 )
enemigos();

if (gameState=="inicio"){
textSize (40)
text("w,s,d,a",300,70);

}
if (enemigo1.isTouching(pelota)||enemigo2.isTouching(pelota)){
gameState="end";
textSize (40)
text("GAME OVER",400,475);
pelota.x=310;
pelota.y=100;
}
if (keyDown("right")){
gameState="play"
pelota.x+=21
}
if (keyDown("left")){
    pelota.x+=-21
    }
    if (keyDown("up")){
        pelota.y+=-21
        }
        if (keyDown("down")){
            pelota.y+=21
            }
for(var q in grupoDeParedes){
pelota.collide(grupoDeParedes[q]);
}
for(var p in grupoT){
    if(pelota.collide(grupoT[p])){
        score+=1;
        grupoT[p].visible=false;
        grupoT[p].destroy();
    }

}
drawSprites();
}
function enemigos(){
var v1=-2
var v2=2
enemigo1.velocityY=v1;
enemigo2.velocityY=v2;
if (enemigo1.y<=80){
v1=2;

}
if (enemigo2.y<=80){
    v2=-2;
    
    }
    if (enemigo1.y>=400){
        v1=-2;
        
        }
        if (enemigo2.y>=400){
            v2=2;
            
            }
}