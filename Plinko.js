class Plinko 
{
    constructor(x, y) 
    {
        var options = 
        {
            isStatic : true,
            friction : 0
        }
        this.body = Bodies.circle(x, y , 10, options);
        this.radius = 20;
        World.add(world, this.body);
    }

    display() 
    {
        push();

        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);

        pop();
    }

}