import { Product } from "./Product"

export class SimpleDataSource{
    private products : Array<Product>

    constructor(){
        this.products = new Array<Product>(
            new Product(1,'IPhone 10','Telefon',10000),
            new Product(2,'IPhone 11','Telefon',11000),
            new Product(3,'IPhone 12','Telefon',12000),
            new Product(4,'IPhone 13','Telefon',13000)
        )
    }

    getProducts(): Product[]{
        return this.products
    }
}