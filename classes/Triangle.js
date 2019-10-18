class Triangle {

    constructor (position) {
        this.position = new Vector(position.x, position.y);
        this.velocity = new Vector(0,0,0)
        this.angle = 0;
    }

    seek(target) {
         let easing = 0.04;

        this.position.x += (target.x - this.position.x) * easing;
        this.position.y += (target.y - this.position.y) * easing;

        Vector.subtract(target, this.position, this.velocity);

        // this.velocity.x *= 0.05;
        // this.velocity.y *= 0.05;

        // this.vx = target.x - this.px
        // this.vy = target.y - this.py
        // this.vx *= 0.05
        // this.vy *= 0.05


        let dx = target.x - this.position.x;
        let dy = target.y - this.position.y;

        this.angle = Math.atan2(dy, dx);
    }

    update() {
        Vector.add(this.position, this.velocity, this.position)

        // this.px = this.px + this.vx
        // this.py = this.py + this.vy
    }

    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.position.x, this.position.y);
        ctx.rotate(this.angle + Math.PI/2);
        ctx.fillStyle = '#FFFFFF';
        ctx.moveTo(-30, 80);
        ctx.lineTo(0, 0);
        ctx.lineTo(30, 80);
        // ctx.lineTo(WIDTH / 2 - 50, HEIGHT / 2);
        ctx.fill();
        ctx.closePath();
        ctx.restore();
    }
}
