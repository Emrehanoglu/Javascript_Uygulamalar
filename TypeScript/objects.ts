interface Point{
    x: number
    y: number
}

interface Vehicle {
    currentLocation : Point
    travelTo(point:Point):void
}

class Taxi implements Vehicle{
    currentLocation : Point
    travelTo(point:Point):void{
        console.log(`Taksi ${point.x} konumundan ${point.y} konumuna gidiyor.`)
    }
}

class Bus implements Vehicle{
    currentLocation : Point
    travelTo(point:Point):void{
        console.log(`Otobus ${point.x} konumundan ${point.y} konumuna gidiyor.`)
    }
}

let taxi_1 : Taxi = new Taxi()
taxi_1.travelTo({x:1,y:2})
taxi_1.currentLocation = {x:5,y:6}
console.log(taxi_1.currentLocation.x)
console.log(taxi_1.currentLocation.y)

let bus_1 = new Bus()
bus_1.travelTo({x:4,y:5})