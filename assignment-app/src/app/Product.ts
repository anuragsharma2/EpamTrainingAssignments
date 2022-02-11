export class Product{
    productId!:number;
    productName!:string;
    productCost!:number;
    productDescription!:string;

    constructor(id:number,name:string,cost:number,description:string){
        this.productId=id;
        this.productCost=cost;
        this.productName=name;
        this.productDescription=description;
    }
}