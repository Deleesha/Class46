class Player {

    constructor(x,y){

        var bird_options = {
            restitution : 0.5 , density : 1.5
        }

        this.body = Bodies.rectangle(x,y,50, 50 , bird_options);
        this.width = 50;
        this.height = 50;
        this.anim = loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png")
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
        stroke("blue");
        fill("red"); 
        animation(this.anim,0,0,this.width,this.height);
        pop();
    }



}