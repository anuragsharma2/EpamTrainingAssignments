export class Product{
    id!:number;
    productTitle!:string;
    productCost!:number;
    productCategory!:string;
    productImages!:string[];
    productDescription!:string;
    rating!:number;

    constructor(id:number,productTitle:string,productCost:number,productCategory:string, productImages:string[],productDescription:string,rating:number){
        this.productCategory=productCategory;
        this.id=id;
        this.productTitle=productTitle;
        this.productCost=productCost;
        this.productImages=productImages
        this.productDescription=productDescription;
        this.rating=rating;
    }
}