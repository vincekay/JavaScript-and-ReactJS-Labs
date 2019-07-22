class Animal {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  run(speed) {
    console.log(`the dog ${this.name} is now  running at speed of ${speed}`)
  }
}

class Panda extends Animal{
  constructor(name, earLength) {
    super(name),
  this.earLength = earLength;
   }
 
  stop(){
    super.stop();
    this.hide();
  }
 
  hide() {
    console.log(`${this.name} hides!`);
  }
 }


 class MyClass {
  constructor() { }
  method1() { }
  method2() { }
 }
 
 class User {
  name = “Username”;
 
 
  sayHi() {
    alert(this.name);
  }
 }
 
 class Animal {
  constructor(name) {
    // this = {};
    this.name = name;
    this.speed = 0; //the initial speed is in the class
  }
 
  run(speed) {
    this.speed += speed; //the second speed is in the method
    console.log(`${this.name} has speed ${this.speed}`);
  }
 
  stop() {
    this.speed = 0;
    console.log(`${this.name} stopped`);
  }
 }
 
 // let animal = new Animal(“My animal”);
 
 class Panda extends Animal{ //Extending classes also inherits constructor from original class
  constructor(name, earLength) {
    super(name); //you have to call super because you have a custom constructor class but if you don’t
    //then you wouldnt need a super
    this.earLength = earLength;
  }
 
  stop(){
    super.stop();
    this.hide();
  }
 
  hide() {
    console.log(`${this.name} hides!`);
  }
 }
 //Message Input
 
 
 //Message Kim Vo