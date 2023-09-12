class Square {
    constructor(centerX, centerY, size, color) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.size = size;
        this.color = color;
    }
    fill(pen) {
        pen.fillStyle = this.color;
        pen.fillRect(this.centerX - this.size/2, this.centerY - this.size/2, this.size, this.size);
    }
    stroke(pen) {
        pen.strokeStyle = this.color;
        pen.strokeRect(this.centerX - this.size/2, this.centerY - this.size/2, this.size, this.size);
    }
}