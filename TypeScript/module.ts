import {Taxi} from './Taxi'

let taxi_1 : Taxi = new Taxi({x:2,y:3},'red')
taxi_1.travelTo({x:1,y:2})
taxi_1.location = {x:4,y:3}
console.log(taxi_1.location)