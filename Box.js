class Box {

    constructor(x,y,width,height){

        var box_options = {
            restitution : 1 , friction : 0.8
        }

        this.body = Bodies.rectangle(x,y,width, height, box_options);
        this.width = width;
        this.height = height;
        World.add(myworld,this.body);

    }

    

    display(){

        var position = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(position.x,position.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill(255); 
        rect(0, 0,this.width,this.height);
        pop();
    }



}


