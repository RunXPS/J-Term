class Curve {
    constructor(color, width){
        this.points = [];
        this.color = color;
        this.width = width;
    }
    push(point) {
        this.points.push(point);
    }
    draw(pen) {
        pen.strokeStyle = this.color;
        pen.lineWidth = this.width;
        pen.beginPath();
        pen.moveTo(this.points[0].x, this.points[0].y);
        for(let k = 0; k < this.points.length - 1; k++){
            pen.lineTo(this.points[k].x, this.points[k].y);
        }
        pen.stroke();
    }
}