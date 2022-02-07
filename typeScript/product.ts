class Product{
    productId:number;
    productName:string;
    productDescription:string;
    productCost:number;
    constructor(id:number,name:string,description:string,cost:number){
        this.productId=id;
        this.productName=name;
        this.productDescription=description;
        this.productCost=cost;
    }
    display(){
        console.log("product id :"+this.productId);
        console.log("product name :"+this.productName);
        console.log("product description :"+this.productDescription);
        console.log("product cost :"+this.productCost);
    }
}
let p=new Product(123,"watch","shows time",200);
p.display();