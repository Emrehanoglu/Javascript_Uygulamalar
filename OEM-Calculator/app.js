// Storage Controller, kullanıcıdan aldığımız bilgileri tarayıcı belleğine attığım kısım
const StorageController = (function(){
    return {
        storeProduct : function(product){
            let products
            if(localStorage.getItem('products') === null){ //ilk defa products objesi oluşturuluyorsa
                products = []
                products.push(product)
            }else{ //mevcutta oluşturulmuş products objesi zaten varsa
                products = JSON.parse(localStorage.getItem('products')) //LS içerisinde aldığımız veriler ile kolayca işlem yapabilmek için parse ettim
                products.push(product)
            }
            localStorage.setItem('products',JSON.stringify(products)) //JSON string veri tipinde olmalı LS içerisindeki veriler
        },
        getProduct : function(){
            let products
            if(localStorage.getItem('products') === null){
                products = []
            }else{
                products = JSON.parse(localStorage.getItem('products'))
            }
            return products
        },
        updateProduct : function(product){
            let products = JSON.parse(localStorage.getItem('products'))
            products.forEach(function(prd,index){
                if(product.id == prd.id){
                    products.splice(index,1,product)
                }
            })
            localStorage.setItem('products',JSON.stringify(products))
        },
        deleteProduct : function(id){
            let products = JSON.parse(localStorage.getItem('products'))
            products.forEach(function(prd,index){
                if(id == prd.id){
                    products.splice(index,1)
                }
            })
            localStorage.setItem('products',JSON.stringify(products))
        }
    }
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
        products : StorageController.getProduct(),
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
        updateProduct : function(name,price){
            let product = null

            data.products.forEach(function(prd){
                if(prd.id == data.selectedProduct.id){
                    prd.name = name
                    prd.price = parseFloat(price)
                    product = prd
                }
            })

            return product

        },
        deleteProduct : function(product){
            data.products.forEach(function(prd,index){
                if(prd.id == product.id){
                    data.products.splice(index,1)
                }
            })
        },
        GetTotal : function(){
            let total = 0
            data.products.forEach(function(item){
                total += item.price
            })
            data.totalPrice = total
            return data.totalPrice
        },
        getProductById : function(id){
            let product = null

            data.products.forEach(function(prd){
                if(prd.id == id){
                    product = prd
                }
            })
            return product
        },
        setCurrentProduct : function(product){
            data.selectedProduct = product
        },
        getCurrentProduct : function(){
            return data.selectedProduct
        }
    }

})()

// UI Controller, arayüz üzerindeki html' ler ile çalıştığım kısım
const UIController = (function(){
    /* Selector ile html tarafında birden fazla yerde aynı html id si için düzenleme yapmışsam ve bu id bilgisi değişirse gelip
    Selector içerisinde karşılık geldiği kısmı değiştirmem ile gtml tarafında tüm kısımlar dinamik şekilde değişmiş olacak */
    const Selectors = {
        productList : "#item-list",
        productListItems : "#item-list tr",
        addButton : '.addBtn',
        updateButton : '.updateBtn',
        deleteButton : '.deleteBtn',
        cancelButton : '.cancelBtn',
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
                            <i class="far fa-edit edit-product"></i>
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
                        <i class="far fa-edit edit-product"></i>
                    </td>                  
                </tr>
            `

            document.querySelector(Selectors.productList).innerHTML += item
        },
        updateProduct : function(prd){

            let updatedItem =null

            let items = document.querySelectorAll(Selectors.productListItems)
            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.children[1].textContent = prd.name
                    item.children[2].textContent = prd.price + ' $'
                    updatedItem = item
                }
            })

            return updatedItem

        },
        deleteProduct : function(){
            let items = document.querySelectorAll(Selectors.productListItems)
            items.forEach(function(item){
                if(item.classList.contains('bg-warning')){
                    item.remove()
                }
            })
        },
        clearInputs : function(){
            document.querySelector(Selectors.productName).value = ""
            document.querySelector(Selectors.productPrice).value = ""
        },
        clearWarning : function(){
            const items =  document.querySelectorAll(Selectors.productListItems)
            items.forEach(function(item){
                item.classList.remove('bg-warning')
            }) 
        },
        hideCard : function(){
            document.querySelector(Selectors.productCard).style.display = 'none'
        },
        showTotal : function(total){
            document.querySelector(Selectors.totalDolar).textContent = total
            document.querySelector(Selectors.totalTl).textContent = total * 25
        },
        addProductToForm : function(){
            const selectedProduct = ProductController.getCurrentProduct()
            document.querySelector(Selectors.productName).value = selectedProduct.name
            document.querySelector(Selectors.productPrice).value = selectedProduct.price
        },
        addingState : function(){
            UIController.clearWarning()
            UIController.clearInputs()
            document.querySelector(Selectors.addButton).style.display = 'inline'
            document.querySelector(Selectors.updateButton).style.display = 'none'
            document.querySelector(Selectors.deleteButton).style.display = 'none'
            document.querySelector(Selectors.cancelButton).style.display = 'none'
        },
        editState : function(tr){
            UIController.clearWarning()
            tr.classList.add('bg-warning')
            document.querySelector(Selectors.addButton).style.display = 'none'
            document.querySelector(Selectors.updateButton).style.display = 'inline'
            document.querySelector(Selectors.deleteButton).style.display = 'inline'
            document.querySelector(Selectors.cancelButton).style.display = 'inline'
        }
    }

})()

// App Controller, ana modül işlemleri
const App = (function(ProductCtrl, UICtrl, StorageCtrl){

    const UISelectors = UICtrl.getSelectors()

    //Load Event Listeners
    const loadEventListeners = function(){
        //add product event
        document.querySelector(UISelectors.addButton).addEventListener('click',productAddSubmit)

        //edit product click
        document.querySelector(UISelectors.productList).addEventListener('click',productEditClick)

        //edit product submit
        document.querySelector(UISelectors.updateButton).addEventListener('click',productEditSubmit)

        //cancel buton click
        document.querySelector(UISelectors.cancelButton).addEventListener('click',cancelUpdate)

        //delete product submit
        document.querySelector(UISelectors.deleteButton).addEventListener('click',deleteProductSubmit)
    }
    const productAddSubmit = function(e){
        const productName = document.querySelector(UISelectors.productName).value
        const productPrice = document.querySelector(UISelectors.productPrice).value

        if(productName !== '' && productPrice !== ''){
            //Add Product
            const newProduct = ProductCtrl.addProduct(productName,productPrice)

            //add item to list
            UICtrl.addProduct(newProduct)

            //add product to Local Storage
            StorageCtrl.storeProduct(newProduct)

            //get total price
            const total = ProductCtrl.GetTotal()

            //show total price
            UICtrl.showTotal(total)

            //clear inputs
            UICtrl.clearInputs()
        }

        e.preventDefault()
    }

    const productEditClick = function(e){
        if(e.target.classList.contains('edit-product')){
            const id = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
        
            //get selected product
            const product = ProductCtrl.getProductById(id)

            //set current product
            ProductCtrl.setCurrentProduct(product)

            //add product to UI
            UICtrl.addProductToForm(),

            UICtrl.editState(e.target.parentElement.parentElement)
        }

        e.preventDefault()
    }

    const productEditSubmit = function(e){
        const productName = document.querySelector(UISelectors.productName).value
        const productPrice = document.querySelector(UISelectors.productPrice).value

        if(productName !== '' && productPrice !== ''){
            //update product
            const updatedProduct = ProductCtrl.updateProduct(productName,productPrice)

            //update uı 
            let item = UICtrl.updateProduct(updatedProduct)

            //get total price
            const total = ProductCtrl.GetTotal()

            //show total price
            UICtrl.showTotal(total)

            //update Local Storage
            StorageCtrl.updateProduct(updatedProduct)

            UICtrl.addingState()
        }
        e.preventDefault()
    }

    const deleteProductSubmit = function(e){
        //get selected product
        const selectedProduct = ProductCtrl.getCurrentProduct()

        //delete product from data
        ProductCtrl.deleteProduct(selectedProduct)

        //delete product from UI
        UICtrl.deleteProduct()

        //get total price
        const total = ProductCtrl.GetTotal()

        //show total price
        UICtrl.showTotal(total)

        //delete from Local Storage
        StorageCtrl.deleteProduct(selectedProduct.id)

        UICtrl.addingState()
        
        if(total == 0){
            UICtrl.hideCard()
        }

        e.preventDefault()
    }

    const cancelUpdate = function(e){
        UICtrl.addingState()

        e.preventDefault()
    }
    return {
        init : function(){
            console.log('starting app...')

            UICtrl.addingState()

            const products = ProductCtrl.getProducts()
            
            if(products.length > 0 ){
                UICtrl.createProductList(products)
            }else{
                UICtrl.hideCard()
            }

            // get total
            const total = ProductCtrl.GetTotal();

            // show total
            UICtrl.showTotal(total);

            loadEventListeners()
        }
    }

})(ProductController,UIController, StorageController)

App.init()