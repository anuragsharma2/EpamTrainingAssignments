var Product = /** @class */ (function () {
    function Product(id, name, description, cost) {
        this.productId = id;
        this.productName = name;
        this.productDescription = description;
        this.productCost = cost;
    }
    Product.prototype.display = function () {
        console.log("product id :" + this.productId);
        console.log("product name :" + this.productName);
        console.log("product description :" + this.productDescription);
        console.log("product cost :" + this.productCost);
    };
    return Product;
}());
var p = new Product(123, "watch", "shows time", 200);
p.display();
