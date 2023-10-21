interface Point{
    x: number
    y: number
}

interface Vehicle {
    currentLocation : Point
    travelTo(point:Point):void
}

class Taxi implements Vehicle{
    color : string
    currentLocation : Point
    constructor(location : Point,color: string){
        this.currentLocation = location, 
        this.color = color
    }
    travelTo(point:Point):void{
        console.log(`Taksi ${point.x} konumundan ${point.y} konumuna gidiyor.`)
    }
}

let taxi_1 : Taxi = new Taxi({x:2,y:3},'red')
taxi_1.travelTo({x:1,y:2})
console.log(taxi_1.currentLocation)