function Factory(){
    this.createEmployee = function(type){
        var employee
        if(type == "fulltime"){
            employee = new FullTime()
        }else if(type == "parttime"){
            employee = new PartTime()
        }else if(type == "temporary"){
            employee = new Temporary()
        }
        employee.type = type
        employee.say = function(){
            console.log(this.type + ' : saatlik ücreti : ' + this.hourly)
        }
        return employee
    }
}

var FullTime = function(){
    this.hourly = '30₺'
}

var PartTime = function(){
    this.hourly = '20₺'
}

var Temporary = function(){
    this.hourly = '15₺'
}

var factory = new Factory()

var employees = []

employees.push(factory.createEmployee('fulltime'))
employees.push(factory.createEmployee('parttime'))
employees.push(factory.createEmployee('temporary'))
employees.push(factory.createEmployee('parttime'))
employees.push(factory.createEmployee('fulltime'))

employees.forEach(function(emp){
    emp.say()
})
