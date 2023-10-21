"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService_1 = require("./ProductService");
var Product_1 = require("./Product");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getProduct();
console.log(result);
var result2;
result2 = _productService.getById(2);
console.log(result2);
var p = new Product_1.Product();
p.category = 'Telefon';
p.name = 'IPhone 14';
p.price = 14000;
/* p.id = 4 */ //güncelleme yapmak için id gönderdim
_productService.saveProduct(p);
/* _productService.deleteProduct(result2) */
var result3 = _productService.getProduct();
console.log(result3);
