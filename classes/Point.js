class Point {

    constructor(position, velocity) {
        this.position = new Vector(position.x, position.y);
        this.velocity = new Vector(velocity.x, velocity.y);
        this.dtVelocity = new Vector(1, 1);
    }

    update(deltaTime) {
        this.dtVelocity.x = this.velocity.x * deltaTime;
        this.dtVelocity.y = this.velocity.y * deltaTime;

        Vector.add(this.position, this.dtVelocity, this.position);
    }

    draw(ctx, size = 2) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, size, 0, 360);
        ctx.fillStyle = '#fff';
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}
