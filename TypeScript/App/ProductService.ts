import { IProductService } from "./IProductService";
import { Product } from "./Product";
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{

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
        if(product.id == 0 || product.id == null){
            product.id = this.generateId()
            this.products.push(product)
        }else{
            let index
            for(let i=0; i<this.products.length;i++){
                if(this.products[i].id == product.id){
                    index = i
                }
            }
            this.products.splice(index,1,product) //bulduğum index ' deki product ' ı silip bir index sonrasına yeni gönderdiğim product ı ekliyorum
        }
    }
    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product) //gönderdiğim product' ın index bilgisini buluyorum
        if(index>0){
            this.products.splice(index,1) //bulduğum index ' deki product ' ı siliyorum...burada 3. parametreyi göndermedim çünkü ekleme yapma ihtiyacım yok
        }
    }

    private generateId():number{ //bu metot ile id üretmiş olucam
        let key = 1
        while(this.getById(key) !== null){
            key++
        }
        return key
    }
}