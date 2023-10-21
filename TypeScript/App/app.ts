import { ProductService } from "./ProductService";
import { Product } from "./Product";

let _productService = new ProductService()

let result
result = _productService.getProduct()
console.log(result)

let result2
result2 = _productService.getById(2)
console.log(result2)

let p = new Product()
p.category = 'Telefon'
p.name = 'IPhone 14'
p.price = 14000
/* p.id = 4 */ //güncelleme yapmak için id gönderdim
_productService.saveProduct(p)
/* _productService.deleteProduct(result2) */
let result3 = _productService.getProduct()
console.log(result3)
