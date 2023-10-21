var Taxi = /** @class */ (function () {
    function Taxi(location, color) {
        this.currentLocation = location,
            this.color = color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi ".concat(point.x, " konumundan ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 3 }, 'red');
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);
