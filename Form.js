class Form {
  
  constructor(){
    this.input=createInput("").attribute("placeholder","Enter your Name");
    this.storyButton=createButton("Game Story");
  }

  setElementsPosition(){
    this.input.position(width/2-100,height/2);
    this.storyButton.position(width/2-75,height/2+75);
  }

  setElementsStyle(){
    this.input.class("customInput");
    this.storyButton.class("customButton");
  }

  hide(){
    this.input.hide();
    this.storyButton.hide();
  }

  handlemousePressed(){
    this.storyButton.mousePressed(()=>{
      this.input.hide();
      this.storyButton.hide();
      gameState=1;
    })
  }

  display() {
    this.setElementsPosition();
    this.setElementsStyle();
    this.handlemousePressed();
  }
}
