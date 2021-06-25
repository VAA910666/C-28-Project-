class launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            // length: 10
        }

        this.pointB = pointB

        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null;
    }
    attach(body){
        this.body.bodyA = body;
    }

    display(){
        if(this.body.bodyA){
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;

            push();

            if(pointA.x < 255){
                strokeWeight(4);
                
                line(pointA.x-10, pointA.y, pointB.x-10, pointB.y);
             
            }

            else{
                strokeWeight(4);

                line(pointA.x+15, pointA.y, pointB.x-10, pointB.y);

                pop();
            }
        }
    }
}