import { Product } from "./Product";

/* interface içerisinde metot gövdesi olmayacak sadece metot imzalarını taşıyacak.  */
export interface IProductService{
    getById(id: number) : Product //id parametresi alacaksın ve bana Product türünde değer döndüreceksin
    getProduct() : Array<Product> //Array<Product> yerine Product[] şeklinde bir kullanımda olur 
    saveProduct(product : Product) : void
    deleteProduct(product : Product): void
}