var singleton2 = (function(){
    var instance2
    function ProductController(){
        const products = [
            {name : "IPhone11"},
            {name : "IPhone12"},
            {name : "IPhone13"}
        ]
        const addProduct = function(item){
            products.push(item)
        }
        const getProduct = function(){
            return products
        }
        return {
            addProduct,getProduct
        }
    }    

    return {
        getInstance : function(){
            if(!instance2){
                instance2 = new ProductController()
            }
            return instance2
        }
    }
})()


const product1 = singleton2.getInstance()
console.log(product1.getProduct())