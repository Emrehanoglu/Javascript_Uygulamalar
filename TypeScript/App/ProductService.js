"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource(); //dataSource içerisinde 4 eleman tanımlanmış oldu
        this.products = new Array; //önce boş bir product dizisi olusturdum
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); }); //dataSource içerisinde 4 elemanın her birini tek tek products dizisine ekledim.
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (x) { return x.id === id; })[0]; //Buradaki [0] ın anlamı bana dönebilecek verilerden ilkini return et. Aynı id ye ait birden fazla ürün olabilir.
    };
    ProductService.prototype.getProduct = function () {
        return this.products;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = void 0;
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id == product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product); //bulduğum index ' deki product ' ı silip bir index sonrasına yeni gönderdiğim product ı ekliyorum
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product); //gönderdiğim product' ın index bilgisini buluyorum
        if (index > 0) {
            this.products.splice(index, 1); //bulduğum index ' deki product ' ı siliyorum...burada 3. parametreyi göndermedim çünkü ekleme yapma ihtiyacım yok
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) !== null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
