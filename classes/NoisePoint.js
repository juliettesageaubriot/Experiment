class NoisePoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    DrawPoint() {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'white';
        // x, y, radius, startAngle, endAngle, clockwise
        ctx.arc(this.x, this.y, 4, 0, Math.PI * 2, true);
        ctx.fill();
        ctx.closePath();
        ctx.restore()
    }

    update() {

        this.DrawPoint()

    }
}