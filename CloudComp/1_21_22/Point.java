public class Point {
    private int x;
    private int y;
    public Point(int x, int y){
        this.x = x;
        this.y = y;
    }
    public Point(){
        this(0,0);
    }
    @Override
    public String toString(){
        return String.format("(%s, %s)", x, y);
    }
    public double distanceTo(Point q){
        return Math.hypot(x - q.x, y - q.y);
    }
    public static void main(String[] args) {
        Point p = new Point(3,4);
        Point q = new Point(0,0);
        System.out.println(p.distanceTo(q));
    }
}