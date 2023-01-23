const {Product, ProductProperties, User, UserProperties} = require('./product.js');

//about PaymentSystem
class PaymentSystem {
    constructor(by_card, by_terminal) {
        this.by_card = {
            affilation: ["Acba", "Ardshin", "Ineco"],
            status: ["Premium", "Biznes"],
        };
        this.by_terminal = ["TelcellWalet", "Idram"];
        //this.by_bonus = by_bonus; -?mtacel
    }
}
class PaymentSystemProperties extends UserProperties{
    constructor() {
        let payment = new PaymentSystem();
        payment.by_card.affilation = "Ardshin";
        payment.by_card.status = "Biznes";
    }
}

//about Warehouse
class Warehouse {
    constructor(entities) {
        this.entities = entities;
    }
}
