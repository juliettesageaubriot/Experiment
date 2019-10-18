class Circle {

    constructor(position, velocity, size, color) {
        this.position = new Vector(position.x, position.y);
        this.velocity = new Vector(velocity.x, velocity.y);
        this.size = size;
        this.color = color;
        this.dtVelocity = new Vector(1, 1);
    }

    update(deltaTime) {
        // this.dtVelocity.x = this.velocity.x * deltaTime;
        // this.dtVelocity.y = this.velocity.y * deltaTime;

        this.dtVelocity = deltaTime;
        Vector.add(this.position, this.dtVelocity, this.position);
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size, 0, 360);
        ctx.strokeStyle = this.color;
        ctx.globalAlpha = 1;
        ctx.stroke();
        ctx.closePath();
        ctx.restore();
    }


}
