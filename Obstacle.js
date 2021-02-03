class Obstacle {

    constructor(x,y){

        var pig_options = {
            restitution : 1, friction : 0.5
        }

        this.body = Bodies.rectangle(x,y,50, 50, pig_options);
        
        this.width = 50;
        this.height = 50;
        this.image1 = loadImage("images/obstacle1.png");
        this.image2 = loadImage("images/obstacle2.png")
        World.add(myworld,this.body);


    }

    

    display(){
        var rand = Math.round(random(1,2));

        var position = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(position.x,position.y);
        rotate(angle);
        fill("red"); 

        if(rand === 1){
            image(this.image1,0,0,this.width,this.height);
        }
        else if(rand === 2){
            image(this.image2,0,0,this.width,this.height);
        }

        this.body.velocity.x = 5;

        pop();
    }



}

