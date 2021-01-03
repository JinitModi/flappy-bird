class stone{
    constructor(x,y){
        var options = {
            isStatic : true,
        restituion : 0,
    friction :1,
    density:5
}
    this.image = loadImage("Plucking mangoes/stone.png")
    this.body=Bodies.circle(this.x, this.y, this.r*2, options)
    World.add(world, this.body)
}
    display(){
   var stonepos=this.boody.position;
   push();
   pop();
   translate(stonepos.x, stonepos.y)
   rotate(this.body.angle);
   rectMode(CENTER)
   ellipseMode(RADIUS)
    }
}