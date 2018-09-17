abstract class Media{
    private _id : number;
    private _title : string;
    private _price : number;
    private _publisher : string;
    private _author : Array<string> = [];

    constructor(id:number, title:string){
        this._id = id;
        this._title = title;
    }

    getId(){return this._id;}
    setId(id:number){this._id = id;}

    getTitle(){return this._title;}
    setTitle(title:string){this._title = title;}

    getPrice(){return this._price;}
    setPrice(price:number){this._price = price;}

    getPublisher(){return this._publisher;}
    setPublisher(publisher: string){this._publisher = publisher;}

    getAuthor(){return this._author;}
    setAuthor(author:Array<string>){this._author = author;}

    public abstract getNetPrice():number;

}

class Book extends Media{

    getNetPrice():number{
        return (this.getPrice()* 1.05 * 0.95 + 0.01);
    }
}

class Cd extends Media{

    getNetPrice():number{
        return (this.getPrice()* 1.2);
    }

}

class Dvd extends Media{

    getNetPrice():number{
        return (this.getPrice()* 1.2*0.8);
    }

}

class Cart{
    private _articles : Array<Media> = [];

    addMedia(m:Media): void {
        this._articles.push(m);
    }

    removeMedia(m:Media): void {
        this._articles.slice(this._articles.indexOf(m));
    }

    removeLastMedia(): void {
        this._articles.pop();
    }

    getTotalNetPrice(){
        let total:number = 0;
            for(let m of this._articles) {
                total += m.getNetPrice();
            }
            return total;
    }

    showCart(){
        console.log('Su carro de compras contiene');
        for(let m of this._articles) {
               console.log(m.getTitle()+ " " + m.getNetPrice());
            }
        
    }

    
}

let book1 = new Book(1,'Los divinos');
var a = book1.getId(); 
var b = book1.getTitle();
book1.setPrice(10);
book1.setPublisher('Susaeta');
console.log('book1' + ' Id : ' + a + ' Title : ' + b + ' Publisher : ' + book1.getPublisher());

let book2 = new Book(2,'Windstorm');
book2.setPrice(15);
console.log(book2.getNetPrice());

let dvd1 = new Dvd(3,'El cuarto gris');
console.log(dvd1.getTitle());
dvd1.setPrice(12);

let cart1 = new Cart;
cart1.addMedia(book1);
cart1.addMedia(book2);
cart1.addMedia(dvd1);
//console.log(cart1);
cart1.removeLastMedia();
//console.log(cart1);
cart1.addMedia(dvd1);
cart1.removeMedia(book1);
console.log(cart1);
cart1.showCart();
console.log('Total Net Price : '+ cart1.getTotalNetPrice());