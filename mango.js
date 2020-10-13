class Mango{
    constructor(x,y){
        var options ={
            isStatic : true,
            restitution : 0,
            friction : 1
        }
        this.body = Bodies.circle(x,y,25,options);
        World.add(world,this.body);
        this.image = loadImage("sprites/mango.png");
    }
    display(){
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
}