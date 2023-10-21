import { Point } from "./Point"
import { Vehicle } from "./Vehicle"

export class Taxi implements Vehicle{
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