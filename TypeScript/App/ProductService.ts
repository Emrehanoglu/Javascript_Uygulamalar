import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

class ProductService implements IProductService{

    private dataSource : SimpleDataSource //dataSource : cSimpleDataSource imzası taşıyacak
    private products : Array<Product> //products : dizi olacak

    constructor(){
        this.dataSource = new SimpleDataSource() //dataSource içerisinde 4 eleman tanımlanmış oldu
        this.products =  new Array<Product> //önce boş bir product dizisi olusturdum
        this.dataSource.getProducts().forEach(p => this.products.push(p)) //dataSource içerisinde 4 elemanın her birini tek tek products dizisine ekledim.
    }

    getById(id: number): Product {
        return this.products.filter(x => x.id === id)[0] //Buradaki [0] ın anlamı bana dönebilecek verilerden ilkini return et. Aynı id ye ait birden fazla ürün olabilir.
    }
    getProduct(): Product[] {
        return this.products
    }
    saveProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }
    deleteProduct(product: Product): void {
        throw new Error("Method not implemented.");
    }

}