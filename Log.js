class Log {

    constructor(x,y,height , angle){

        var log_options = {
            restitution : 1  , friction : 0.8
        }

        this.body = Bodies.rectangle(x,y,20, height, log_options);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
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


