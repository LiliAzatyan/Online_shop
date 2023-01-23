//about User
class User {
    constructor(name, birthday, email, phone_number, shopping_cart, id) {
        this.name = name;
        this.birthday = birthday;
        this.email = email;
        this.phone_number = phone_number;
        this.shopping_cart = shopping_cart;
        this.id = id;
    }
}
class UserProperties {
    constructor() {
        
        let user1 = new User(); //User1
        user1.name = "Lili";
        user1.birthday = "20.07.2000";
        user1.email = "liliazatyan2000@gmail.com";
        user1.phone_number = 4579895;
        user1.shopping_cart = 455788995321;
        user1.id = 7788945;

        let user2 = new User(); //User2
        user2.name = "Anna";
        user2.birthday = "03.12.2003";
        user2.email = "hakobyan.anna@gmail.com";
        user2.phone_number = 879895;
        user2.shopping_cart = 484845665132;
        user2.id = 7788945;
    }
}

module.exports = {User, UserProperties};