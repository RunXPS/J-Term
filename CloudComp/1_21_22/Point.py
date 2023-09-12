from math import hypot
class Point:
    def __init__(self, x = 0, y = 0):
        self.x = x
        self.y = y
    def __str__(self):
        return f"({self.x}, {self.y})"
    def distance_to(self, q):
        return hypot(self.x - q.x, self.y - q.y)
p = Point(3,4)
q = Point()
print(p.distance_to(q))