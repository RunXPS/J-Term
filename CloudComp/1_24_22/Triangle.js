class Triangle {
    constructor (centerX, centerY, length, color) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.length = length
        this.color = color;
    }
    fill(pen) {
        pen.fillStyle = this.color;
        pen.beginPath();
        pen.moveTo(this.centerX, this.centerY);
        pen.moveTo(this.centerX + this.length/2, this.centerY + this.length);
        pen.moveTo(this.centerX + this.length, this.centerY - this.length);
        pen.moveTo(this.centerX, this.centerY);
        pen.fill();
    }
    stroke(pen) {
        pen.strokeStyle = this.color;
        pen.moveTo(this.centerX, this.centerY);
        pen.moveTo(this.centerX + this.length/2, this.centerY + this.length );
        pen.moveTo(this.centerX + this.length, this.centerY - this.length);
        pen.moveTo(this.centerX, this.centerY);
        pen.stroke();
    }
}