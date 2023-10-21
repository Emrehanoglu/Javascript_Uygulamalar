interface Point{
    x: number
    y: number
}

interface Vehicle {
    travelTo(point:Point):void
}

class Taxi implements Vehicle{
    constructor(private _location : Point, private _color?: string){}
    travelTo(point:Point):void{
        console.log(`Taksi ${this._location.x} ${this._location.y} konumundan ${point.x} ${point.y} konumuna gidiyor.`)
    }

    get location(){
        return this._location
    }

    set location(value:Point){
        if(value.x < 0 || value.y < 0){
            throw new Error('Koordinat bilgileri negatif olamaz.')
        }
        this._location = value
    }
}

let taxi_1 : Taxi = new Taxi({x:2,y:3},'red')
taxi_1.travelTo({x:1,y:2})
taxi_1.location = {x:4,y:3}
console.log(taxi_1.location)