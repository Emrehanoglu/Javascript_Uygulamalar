var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi ".concat(point.x, " konumundan ").concat(point.y, " konumuna gidiyor."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Otobus ".concat(point.x, " konumundan ").concat(point.y, " konumuna gidiyor."));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 5, y: 6 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
var bus_1 = new Bus();
bus_1.travelTo({ x: 4, y: 5 });
