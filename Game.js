class Game {
  constructor() {
    this.playButton=createButton("Play");
    this.fireButton = createButton("Fire");
  }

  start(){
   form = new Form();
   form.display();

   stoneGroup = new Group();

      stone1=createSprite(48,525,10,10);
      stone1.addImage("s1",stoneImg);
      stone1.scale=0.4;
      stoneGroup.add(stone1);

      stone2=createSprite(575,450,10,10);
      stone2.addImage("s2",stoneImg);
      stone2.scale=0.4;
      stoneGroup.add(stone2);

      stone3=createSprite(1000,500,10,10);
      stone3.addImage("s3",stoneImg);
      stone3.scale=0.4;
      stoneGroup.add(stone3);

      stone4=createSprite(1400,400,10,10);
      stone4.addImage("s4",stoneImg);
      stone4.scale=0.4;
      stoneGroup.add(stone4);

      stone5=createSprite(1925,475,10,10);
      stone5.addImage("s5",stoneImg);
      stone5.scale=0.4;
      stoneGroup.add(stone5);

      stone6=createSprite(2425,525,10,10);
      stone6.addImage("s6",stoneImg);
      stone6.scale=0.4;
      stoneGroup.add(stone6);

      stone7=createSprite(2800,450,10,10);
      stone7.addImage("s7",stoneImg);
      stone7.scale=0.4;
      stoneGroup.add(stone7);

      stone8=createSprite(3200,475,10,10);
      stone8.addImage("s8",stoneImg);
      stone8.scale=0.4;
      stoneGroup.add(stone8);

      stone9=createSprite(3625,525,10,10);
      stone9.addImage("s9",stoneImg);
      stone9.scale=0.4;
      stoneGroup.add(stone9);

      stone10=createSprite(4000,425,10,10);
      stone10.addImage("s10",stoneImg);
      stone10.scale=0.4;
      stoneGroup.add(stone10);

      stone11=createSprite(4400,500,10,10);
      stone11.addImage("s11",stoneImg);
      stone11.scale=0.4;
      stoneGroup.add(stone11);

      stone12=createSprite(4825,450,10,10);
      stone12.addImage("s12",stoneImg);
      stone12.scale=0.4;
      stoneGroup.add(stone12);

      stone13=createSprite(5200,475,10,10);
      stone13.addImage("s13",stoneImg);
      stone13.scale=0.4;
      stoneGroup.add(stone13);

      stone14=createSprite(5600,425,10,10);
      stone14.addImage("s14",stoneImg);
      stone14.scale=0.4;
      stoneGroup.add(stone14);

      stone15=createSprite(6025,500,10,10);
      stone15.addImage("s15",stoneImg);
      stone15.scale=0.4;
      stoneGroup.add(stone15);

      stone16=createSprite(6400,525,10,10);
      stone16.addImage("s16",stoneImg);
      stone16.scale=0.4;
      stoneGroup.add(stone16);

      stone17=createSprite(6800,450,10,10);
      stone17.addImage("s17",stoneImg);
      stone17.scale=0.4;
      stoneGroup.add(stone17);

      stone18=createSprite(7225,475,10,10);
      stone18.addImage("s18",stoneImg);
      stone18.scale=0.4;
      stoneGroup.add(stone18);

      stone19=createSprite(7600,525,10,10);
      stone19.addImage("s19",stoneImg);
      stone19.scale=0.4;
      stoneGroup.add(stone19);

      stone20=createSprite(8050,450,10,10);
      stone20.addImage("s20",stoneImg);
      stone20.scale=0.4;
      stoneGroup.add(stone20);

      stone=createSprite(8485,525,500,35);//8485:x
      stoneGroup.add(stone);
      stone.shapeColor="#DE711F";

      treasure=createSprite(8485,500,10,10);
      treasure.addAnimation("closed",treasureImg1);
      treasure.addAnimation("open",treasureImg2);
      treasure.scale=0.08;

      player=createSprite(50,400,10,10);
      player.addImage("p",playerImg);
      player.scale=0.40;
      
      //Key logo
      kLogo=createSprite(width-100,28,10,10);
      kLogo.addImage("lo1",keyImg);
      kLogo.scale=0.15;
  
      //Spawning key sprites
      k=createSprite(975,410,10,10);
      k.addImage("1",keyImg);
      k.scale=0.20;
  
      //Spawning life sprites
      life=createSprite(1925,185,10,10);
      life.addImage("l2",lifeImg);
      life.scale=0.20;
  
      //Life logo
      lLogo=createSprite(width-200,20,10,10);
      lLogo.addImage("l2",lifeImg);
      lLogo.scale=0.15;

      thorns=createSprite(998,503,10,10);
      thorns.addImage("t1",thornsImg);
      thorns.scale=0.3;

      skull=createSprite(stone4.x,325,10,10);
      skull.addImage("s1",skullImg);
      skull.scale=0.30;

      gun=createSprite(player.x-13,player.y+10,10,10);
      gun.addImage("g1",gunImg);
      gun.scale=0.05;

      bullet=createSprite(-100,-100,10,10);
      bullet.addImage("b1",bulletImg);
      bullet.scale=0.02;

      bLogo=createSprite(width-300,15,10);
      bLogo.addImage("l3",bulletImg);
      bLogo.scale=0.08;

      lock2=createSprite(-10000,-10000,25,625);
      lock2.shapeColor="#DE711F";
      
      lock=createSprite(stone.x-237,treasure.y-250,10,10);
      lock.addImage("l1",lockImg);
      lock.scale=0.20;

  }

  setElementsPosition(){
    this.playButton.position(width/2-30,height/2+200);
    this.fireButton.position(100,50);
  }

  setElementsStyle(){
    this.playButton.class("customButton");
    this.fireButton.class("customButton2");
  }

  hide(){
    this.playButton.hide();
  }

  handlemousePressed(){

    this.playButton.mousePressed(()=>{

      this.playButton.hide();

      gameState=5;

        this.fireButton.position(100,50);

        this.fireButton.mousePressed(()=>{
          shootF();
        })
      
    })

    if(gameState===6){

      this.fireButton.hide();

    }

  }

  handleControl1(){

    if(keyDown(RIGHT_ARROW)){
      player.position.x+=14;
    }
    if(keyDown(UP_ARROW) ){
      player.velocityY=-5;
    }

    player.velocityY=player.velocityY+1;
    player.velocityX=-4;
    player.setCollider("rectangle",0,0,150,450);
    player.collide(stoneGroup);
    player.collide(lock2);

    gun.x=player.x-13;
    gun.y=player.y+10;
    gun.setCollider("rectangle",0,0,200,100);

    stone1.setCollider("rectangle",0,+20,470,150);
    stone1.velocityX=-4;
    stone2.setCollider("rectangle",0,+20,470,150);
    stone2.velocityX=-4;
    stone3.setCollider("rectangle",0,+20,470,150);
    stone3.velocityX=-4;
    stone4.setCollider("rectangle",0,+20,470,150);
    stone4.velocityX=-4;
    stone5.setCollider("rectangle",0,+20,470,150);
    stone5.velocityX=-4;
    stone6.setCollider("rectangle",0,+20,470,150);
    stone6.velocityX=-4;
    stone7.setCollider("rectangle",0,+20,470,150);
    stone7.velocityX=-4;
    stone8.setCollider("rectangle",0,+20,470,150);
    stone8.velocityX=-4;
    stone9.setCollider("rectangle",0,+20,470,150);
    stone9.velocityX=-4;
    stone10.setCollider("rectangle",0,+20,470,150);
    stone10.velocityX=-4;
    stone11.setCollider("rectangle",0,+20,470,150);
    stone11.velocityX=-4;
    stone12.setCollider("rectangle",0,+20,470,150);
    stone12.velocityX=-4;
    stone13.setCollider("rectangle",0,+20,470,150);
    stone13.velocityX=-4;
    stone14.setCollider("rectangle",0,+20,470,150);
    stone14.velocityX=-4;
    stone15.setCollider("rectangle",0,+20,470,150);
    stone15.velocityX=-4;
    stone16.setCollider("rectangle",0,+20,470,150);
    stone16.velocityX=-4;
    stone17.setCollider("rectangle",0,+20,470,150);
    stone17.velocityX=-4;
    stone18.setCollider("rectangle",0,+20,470,150);
    stone18.velocityX=-4;
    stone19.setCollider("rectangle",0,+20,470,150);
    stone19.velocityX=-4;
    stone20.setCollider("rectangle",0,+20,470,150);
    stone20.velocityX=-4;
    stone.setCollider("rectangle",0,0,500,35);
    stone.velocityX=-4;
    treasure.velocityX=-4;

    k.velocityX=-4;
    k.setCollider("circle",130,20,200);
    life.velocityX=-4;
    life.setCollider("circle",50,0,100);
    thorns.velocityX=-4;
    thorns.setCollider("rectangle",10,-10,700,200);
    skull.velocityX=-4;
    skull.setCollider("rectangle",0,0,200,600);

  }

  display() {
    //this.setElementsPosition();
    //this.setElementsStyle();
    //this.handlemousePressed();
    drawSprites();
  }
 
}
