class Paper{
    constructor(x,y,diameter){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,diameter,options)
        this.diameter=diameter
        this.x=x
        this.y=y
        this.image=loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
       push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()

        if(keyDown("up")){
            Matter.Bodies.applyForce(1200,1200,650)
          }
    }
}
