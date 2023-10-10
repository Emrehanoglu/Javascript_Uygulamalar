// Storage Controller, kullanıcıdan aldığımız bilgileri tarayıcı belleğine attığım kısım
const StorageController = (function(){
    
})()

// Product Controller
const ProductController = (function(){

    //private
    const Product = function(id,name,price){
        this.id = id
        this.name = name
        this.price = price
    }

    const data = {
        products : [
            {id:0, name:'Monitör',price:100},
            {id:1, name:'Ram',price:30},
            {id:2, name:'Klavye',price:10}
        ],
        selectedProduct : null,
        totalPrice : 0
    }

    return{
        //public
        getProducts : function(){
            return data.products
        },
        getData : function(){
            return data
        }
    }

})()

// UI Controller, arayüz üzerindeki html' ler ile çalıştığım kısım
const UIController = (function(){

})()

// App Controller, ana modül işlemleri
const App = (function(ProductCtrl, UICtrl){

    return {
        init : function(){
            console.log('starting app...')
            const products = ProductCtrl.getProducts()
            console.log(products)
        }
    }

})(ProductController,UIController)

App.init()