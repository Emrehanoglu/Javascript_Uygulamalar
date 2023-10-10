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
        products : [],
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
        },
        addProduct : function(name,price){
            let id
            if(data.products.length > 0){
                id = data.products[data.products.length - 1].id + 1
            }else{
                id = 0
            }

            const newProduct = new Product(id,name,parseFloat(price))
            data.products.push(newProduct)
            return newProduct
        },
        GetTotal : function(){
            let total = 0
            data.products.forEach(function(item){
                total += item.price
            })
            data.totalPrice = total
            return data.totalPrice
        }
    }

})()

// UI Controller, arayüz üzerindeki html' ler ile çalıştığım kısım
const UIController = (function(){
    /* Selector ile html tarafında birden fazla yerde aynı html id si için düzenleme yapmışsam ve bu id bilgisi değişirse gelip
    Selector içerisinde karşılık geldiği kısmı değiştirmem ile gtml tarafında tüm kısımlar dinamik şekilde değişmiş olacak */
    const Selectors = {
        productList : "#item-list",
        addButton : '.addBtn',
        productName : '#productName',
        productPrice : '#productPrice ',
        productCard : '#productCard',
        totalTl : '#total-tl',
        totalDolar : '#total-dolar'
    }

    return {
        createProductList : function(products){
            let html = ''

            products.forEach(prd => {
                html += `
                    <tr>
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price} $</td>      
                        <td class="text-right">
                            <button type="submit" class="btn btn-warning btn-sm">
                                <i class="far fa-edit"></i>
                                Save Changes
                            </button>
                        </td>                  
                    </tr>
                `
            })

            document.querySelector(Selectors.productList).innerHTML = html
        },
        getSelectors : function(){
            return Selectors
        },
        addProduct : function(product){
            document.querySelector(Selectors.productCard).style.display = 'block'

            var item = `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>${product.price} $</td>      
                    <td class="text-right">
                        <button type="submit" class="btn btn-warning btn-sm">
                            <i class="far fa-edit"></i>
                            Save Changes
                        </button>
                    </td>                  
                </tr>
            `

            document.querySelector(Selectors.productList).innerHTML += item
        },
        clearInputs : function(){
            document.querySelector(Selectors.productName).value = ""
            document.querySelector(Selectors.productPrice).value = ""
        },
        hideCard : function(){
            document.querySelector(Selectors.productCard).style.display = 'none'
        },
        showTotal : function(total){
            document.querySelector(Selectors.totalDolar).textContent = total
            document.querySelector(Selectors.totalTl).textContent = total * 25
        }
    }

})()

// App Controller, ana modül işlemleri
const App = (function(ProductCtrl, UICtrl){

    const UISelectors = UICtrl.getSelectors()

    //Load Event Listeners
    const loadEventListeners = function(){
        document.querySelector(UISelectors.addButton).addEventListener('click',productAddSubmit)
    }
    const productAddSubmit = function(e){
        const productName = document.querySelector(UISelectors.productName).value
        const productPrice = document.querySelector(UISelectors.productPrice).value

        if(productName !== '' && productPrice !== ''){
            //Add Product
            const newProduct = ProductCtrl.addProduct(productName,productPrice)

            //add item to list
            UICtrl.addProduct(newProduct)

            //get total price
            const total = ProductCtrl.GetTotal()

            //show total price
            UICtrl.showTotal(total)

            //clear inputs
            UICtrl.clearInputs()
        }

        e.preventDefault()
    }

    return {
        init : function(){
            console.log('starting app...')
            const products = ProductCtrl.getProducts()
            console.log(products.length)
            if(products.length > 0 ){
                UICtrl.createProductList(products)
            }else{
                UICtrl.hideCard()
            }

            loadEventListeners()
        }
    }

})(ProductController,UIController)

App.init()