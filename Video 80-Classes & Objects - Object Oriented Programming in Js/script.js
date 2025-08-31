// let obj = {
//   a: 1,
//   b: "Harry",
// };
// console.log(obj);

// let animal = {
//   eats: true,
// };
// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal; //sets rabbit.[[prototype]] = animal


class Animal {
  constructor(name) {
    this.name = name
    console.log("Object is created...");
  }
  eats(){
    console.log("Kha raha hu")
  }
  jumps(){
    console.log("kud raha hu")
  }
}

class Lion extends Animal{
    constructor(name) {
        super(name)
    this.name = name
    console.log("Object is created...");
  }
  eats(){
      super.eats()
    console.log("roar kar raha hu")
  }
}

let a=new Animal("Bunny");
console.log(a)

let l = new Lion("Shera")
console.log(l)