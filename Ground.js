class Ground{

  constructor(x,y,width,height){

    var ground_options = {

        isStatic : true
    }

    this.width = width;
    this.height = height;
   this.body = Bodies.rectangle(x,y,width,height , ground_options);
   World.add(myworld,this.body);



  }

  display(){

    var position = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(position.x , position.y , this.width , this.height);
    
  }

}