/**
 * Lesson 1: ES6 Classes
 * 
 *    Topics discussed today:
 *    -> What is ES6 and what are classes
 *    -> How to create an object class?
 *    -> How to inherit classes
 */


/**
 * (a) What is ES6 and what are classes?
 * 
 *    ES6 stands for ECMASCRIPT 6, which basically represents
 *    a modern version of JavaScript. In the ES6 version of JavaScript,
 *    they introduced many features, one of which is the ability to create
 *    classes.
 *    
 *    Classes belong to a style of programming known as Object
 *    Oriented Programming. It is a topic that we don't get into
 *    deeply until later on in the cohort, but we will learn at least
 *    shallowly now because it a basic understanding of it is required
 *    for libraries such as React. 
 *    
 *    Classes are essentially templates for objects. They are traditionally
 *    used to represent some idea of a thing, whether it'd be an animal or
 *    a person or a car. Another use for classes is to use inheritance. This
 *    is an idea that you can reduce the amount of code you write by using 
 *    related classes. So if you wanted to implement a lion class, you can do so 
 *    by inheriting from a cat class thus you wouldn't have to write code that is 
 *    shared between the cat and lion class.
 */

/**
 * Check-in Problems: Overview
 * 
 *    1. Give an example of a class that would make sense to be inherited from
 *       ex. Animal would make a lot of sense, because if I wanted to make a 
 *           Raccoon class, I can inherit from Animal.
 * 
 */
// -------------- ENTER ANSWERS BELOW --------------





// -------------------------------------------------


/**
 * (b) How to create an object class
 * 
 *    In order to create a class, you will need to follow
 *    a few main syntactical rules:
 *    - the 'class' keyword
 *    - Uppercase class name
 *    - 'constructor' function
 */
class Animal {
  /**
   * Here we declared a constructor function that takes in
   * four arguments: 'name', 'age', 'gender', 'weight'
   * 
   * This means that in order to create a new Animal, you must 
   * provide those 4 arguments.
   * 
   */
  constructor(name, age, gender, weight) {
    /**
     * Notice we are using the 'this' keyword.
     * This means that when we create an Animal object
     * it will look like this:
     * 
     *    {
     *      name: ...,
     *      age: ...,
     *      gender: ...,
     *      weight: ...
     *    }
     */
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.weight = weight;
  }

  /**
   * Here is a method called 'speak'.
   * A method is a function that belongs to 
   * an object. Notice that it doesn't have
   * any 'function' keyword before it. That's 
   * because of the different syntax for
   * JavaScript classes. 
   * 
   * By declaring this function 'speak', our
   * objects will now look like this:
   * 
   *    {
   *      name: ...,
   *      age: ...,
   *      gender: ...,
   *      weight: ...,
   *      speak: function () {
   *        return "Hello my name is " + this.name;
   *      }
   *    }
   * 
   */
  speak() {
    return "Hello my name is " + this.name;
  }
}

// Creating an Animal
var mouse = new Animal('jerry', 3, 'male', 1); 
// 'mouse' looks like this:
//    {
//      name: 'jerry',
//      age: 3,
//      gender: 'male',
//      weight: 1,
//      speak: function () {
//        return "Hello my name is " + this.name;
//      }
//    }

// Here's how to use '.speak'
console.log(mouse.speak());



/**
 *  Check-in Problems: ES6 Classes
 * 
 *    1. Create a class called 'Person'.
 *       Make a constructor that creates attributes for:
 *       - name
 *       - age
 *       - job
 *    
 *    2. Create a method in your class that returns the
 *       person's age. Call it 'getAge'
 * 
 *    3. Create a 'Person' variable
 * 
 *  Check your code: 
 * 
 *    -> Your 'Person' object should look like this if you
 *       were to create one:
 *       
 *       {
 *         name: ...,
 *         age: ...,
 *         job: ...,
 *         getAge: function () {}
 *       }
 * 
 */
// -------------- ENTER ANSWERS BELOW --------------

class Person {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  getAge = () => this.age
}

var lbj = new Person('lebron', 34, 'athlete'); 

console.log(lbj.getAge())


// -------------------------------------------------



/**
 * (c) How to inherit from other classes
 * 
 *    Now in order to create a 'Cat' class, we
 *    will want to extend the functionality from
 *    the 'Animal' class. To do this we need to
 *    use the 'extends' keyword.
 *    
 *    The second thing is that if you want to use
 *    the parent constructor, you'll want to use
 *    'super()'. In order to access a parent method
 *    you'll want to use 'super.'.
 * 
 */
class Cat extends Animal {
  /**
   *    A Cat must include all the same features as the Animal
   *    class, except it can include more. This can also be 
   *    described as being a superset of Animal. 
   *    
   *    So Cat will want to use the same features as Animal for
   *    constructor, but you also want to add an 'owner' attribute 
   *    too. Thus you'll pass in your arguments into the 'super'
   *    constructor.
   */
  constructor(name, age, gender, weight, owner) {
    super(name, age, gender, weight);
    this.owner = owner;
    /**
     *    With this constructor you'll create an object that looks like:
     *       {
     *         name: ...,
     *         age: ...,
     *         gender: ...,
     *         weight: ...,
     *         owner: ...,
     *         speak: function () {
     *           return "Hello my name is " + this.name;
     *         }
     *       }
     */
  }

  /**
   *    Notice how in the constructor above, we wrote that it creates an object 
   *    with a 'speak' function that returns "Hello my name is " + this.name;
   *    
   *    This is inherited from the Animal class. However, now we are overriding
   *    that function. So now our object will look like this:
   *      {
   *         ...
   *         owner: ...,
   *         speak: function () {
   *           return "Meowwwwwwwwwww";
   *         }
   *       }
   */
  speak() {
    return "Meowwwwwwwwwww";
  }

  /**
   *    So perhaps we also want to use some methods from our parent class,
   *    but add some special features. We can use 'super.speak()' which
   *    will invoke the 'speak' function from the Animal class and then
   *    modify it in our 'meow' function. 
   *    
   *    Now our object will look like this:
   *      {
   *          ...
   *          owner: ...,
   *          speak: function () {
   *            return "Meowwwwwwwwwww";
   *          },
   *          meow: function () {
   *            return super.speak() + " Meowwwww";
   *          }
   *      }
   * 
   */
  meow() {
    return super.speak() + " Meowwwww";
  }
}

var garfield = new Cat("Garfield", 4, "male", 20, "john");

console.log(garfield.speak());    // what does this do?
console.log(garfield.meow());     // what does this do?


/**
 *  Check-in Problems: Class Inheritance
 * 
 *    1. Create a class called 'Superhero' that inherits
 *       from 'Person'.
 *       Make a constructor that creates attributes for:
 *       - name
 *       - age
 *       - job
 *       - superpower
 *    
 *    2. Add a method to your Superhero class that lets
 *       you return the superpower of your superhero.
 *       Call it 'getPower'
 * 
 *    3. Create a 'Superhero' variable
 * 
 *    4. Can you use the function 'getAge'? If so, why?
 * 
 *  Check your code: 
 * 
 *    -> Your 'Superhero' object should look like this if you
 *       were to create one:
 *       
 *       {
 *         name: ...,
 *         age: ...,
 *         job: ...,
 *         superhero: ...,
 *         getAge: function () {},
 *         getPower: function () {}
 *       }
 * 
 */
// -------------- ENTER ANSWERS BELOW --------------

class Superhero extends Person {
  constructor(name, age, job, superpower) {
    super(name, age, job);
    this.superpower = superpower;
    }
    
  getPower() {
    return this.superpower;
  }
}

var superman = new Superhero('Clark Kent', 30, 'reporter', 'faster than a speeding bullet')

console.log(superman.getPower())
console.log(superman.getAge())


// -------------------------------------------------



