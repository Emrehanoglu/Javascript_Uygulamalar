var Taxi = /** @class */ (function () {
    function Taxi(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi ".concat(this._location.x, " ").concat(this._location.y, " konumundan ").concat(point.x, " ").concat(point.y, " konumuna gidiyor."));
    };
    Object.defineProperty(Taxi.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('Koordinat bilgileri negatif olamaz.');
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return Taxi;
}());
var taxi_1 = new Taxi({ x: 2, y: 3 }, 'red');
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.location = { x: 4, y: 3 };
console.log(taxi_1.location);
