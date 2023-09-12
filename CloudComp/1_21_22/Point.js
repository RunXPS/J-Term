class Point {
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }
    show() {
        return `(${this.x},${this.y})`;
    }
    distanceTo(q){
        return Math.hypot(this.x - q.x, this.y - q.y);
    }
}
let p = new Point(3,4)
let q = new Point()
console.log();