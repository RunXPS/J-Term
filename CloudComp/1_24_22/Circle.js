class Circle {
    constructor(centerX, centerY, size, color) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.size = size;
        this.color = color;
    }
    prep(pen){
        pen.fillStyle = this.color;
        pen.beginPath();
        pen.arc(this.centerX, this.centerY, this.size/2, 0, 2*Math.PI);
    }
    fill(pen) {
        this.prep(pen)
        pen.fill();
    }
    stroke(pen) {
        pthis.prep(pen)
        pen.fill();
    }
}