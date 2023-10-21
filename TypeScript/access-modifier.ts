interface Point{
    x: number
    y: number
}

interface Vehicle {
    travelTo(point:Point):void
}

class Taxi implements Vehicle{
    constructor(private location : Point, private color?: string){}
    travelTo(point:Point):void{
        console.log(`Taksi ${this.location.x} ${this.location.y} konumundan ${point.x} ${point.y} konumuna gidiyor.`)
    }
}

let taxi_1 : Taxi = new Taxi({x:2,y:3},'red')
taxi_1.travelTo({x:1,y:2})