//about Product
class Product {
    constructor(name, description, features, price, brand, articul) {
        this.name = name;
        this.description = description;
        this.features = features;
        this.price = price;
        this.brand = brand;
        this.articul = articul;
    }
}
class ProductProperties {
    constructor() {
        
        let phone1 = new Product(); //Phone1
        phone1.brand = "Iphone";
        phone1.name = "Iphone X";
        phone1.description = {
            width: 5 + " cm",
            height: 0.5 + " cm",
            length: 10 + " cm",
        };
        phone1.features = {
            color_in_front: "black",
            color_in_back: "black",
        };
        phone1.price = $800;
        phone1.articul = 5478652;
        
        let phone2 = new Product(); //Phone2
        phone2.brand = "Samsung";
        phone2.name = "Samsung galaxy a3";
        phone2.description = {
            width: 7 + " cm",
            height: 0.6 + " cm",
            length: 13 + " cm",
        };
        phone2.features = {
            color_in_front: "pinc",
            color_in_back: "orange",
        };
        phone2.price = $400;
        phone2.articul = 546651;
    }
}

module.exports = {Product, ProductProperties};