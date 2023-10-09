var product = [
    {name : "IPhone11", price : 12000},
    {name : "IPhone12", price : 13000},
    {name : "IPhone13", price : 14000}
]

const ProductController = (function(data){
    var collections = data || []; 
    const addProduct = function(product){
        collections.push(product)
    }
    const removeProduct = function(product){
        var index = collections.indexOf(product)
        if(index >= 0){
            collections.splice(index,1)
        }
    }
    const getProduct = function(){
        return collections
    }

    return {
        addProduct,
        removeProduct,
        getProduct
    }
})(product)

console.log(ProductController.getProduct())

//Module Extenting

var extended = (function(m){
    m.sayHello = function(){
        console.log("Hello from extended module")
    }

    return m;
})(ProductController || "")

extended.sayHello()