function User(name, age) {
    
    this.name = name;
    
    this.age = age;
    
    this.sayHi = function(){
        
        console.log(this.name + " a " + this.age + " ans.");
    };
}

let user1 = new User("John", 25);

let user2 = new User("Kate", 32);

let user3 = new User("Younes", 19);

let user4 = new User("Nathan", 21);

//démo de la méthode "push"

let users = [];

users.push(user1);

users.push(user2);

users.push(user3);

users.push(user4);


//parcourir le tableau

for (let myUser of users) {
    
    myUser.sayHi();
}

/*  Alternative à la boucle ci-dessus:

for (let i = 0; i < users.length; i++) {

    users[i].sayHi();
}
*/
