# Class basic syntax

In practice, we often need to create many objects of the same kind, like users, or products or whatever.

We already know that we can write constructor functions and use the `new` operator to do that.

But in ES6, there’s a more advanced `class` construct, that introduces great new features that are useful for object-oriented programming.

## The `class` syntax

The basic syntax is:

```js
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

Then `new MyClass()` creates a new object with all the listed methods.

The `constructor()` method is called automatically by `new`, so we can initialize the object there.

For example:

```js
 class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// Usage:
let user = new User("John");
user.sayHi();
```

When `new User("John")` is called:

1. A new object is created.
1. The constructor runs with the given argument and assigns `this.name` to it.

Then we can call methods, such as `user.sayHi`.

## Class properties

In the example above, `User` only had methods. Let’s add a property:

```js
class User {
  name = "Anonymous";

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi();
```

## Class inheritance

Let’s say we have two classes.

`Animal`:

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }
}

let animal = new Animal("My animal");
```

And `Rabbit`:

```js
class Rabbit {
  constructor(name) {
    this.name = name;
  }
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("My rabbit");
```

Right now they are fully independent.

But we’d want `Rabbit` to extend `Animal`. In other words, rabbits should be based on animals, have access to methods of `Animal` and extend them with its own methods.

To inherit from another class, we specify `extends` and the parent class before the braces `{..}`.

Here `Rabbit` inherits from `Animal`:

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }
}


// Inherit from Animal by specifying "extends Animal"
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.hide(); // White Rabbit hides!
```

Now the `Rabbit` code became a bit shorter, as it uses `Animal` constructor by default, and it also can run, as animals do.

## Overriding a method

Now let’s move forward and override a method. As of now, `Rabbit` inherits the `stop` method that sets `this.speed = 0` from `Animal`.

If we specify our own `stop` in `Rabbit`, then it will be used instead:

```js
class Rabbit extends Animal {
  stop() {
    // ...this will be used for rabbit.stop()
  }
}
```

But usually we don’t want to totally replace a parent method, but rather to build on top of it, tweak or extend its functionality. We do something in our method, but call the parent method before/after it or in the process.

Classes provide the `super` keyword for that.

- `super.method(...)` to call a parent method.
- `super(...)` to call a parent constructor (inside our constructor only).

For instance, let our rabbit autohide when stopped:

```js
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stopped.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop
    this.hide(); // and then hide
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stopped. White rabbit hides!
```

Now `Rabbit` has the `stop` method that calls the parent `super.stop()` in the process.

## Overriding constructor

With constructors it gets a little bit tricky.

Till now, `Rabbit` did not have its own constructor.

According to the specification, if a class extends another class and has no constructor, then the following “empty” constructor is generated:

```js
class Rabbit extends Animal {
  // generated for extending classes without own constructors
  constructor(...args) {
    super(...args);
  }
}
```

As we can see, it basically calls the parent constructor passing it all the arguments. That happens if we don’t write a constructor of our own.

Now let’s add a custom constructor to `Rabbit`. It will specify the `earLength` in addition to `name`:

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

  // ...
}

// Doesn't work!
let rabbit = new Rabbit("White Rabbit", 10); // Error: this is not defined.
```

Whoops! We’ve got an error. Now we can’t create rabbits. What went wrong?

The short answer is: constructors in inheriting classes must call `super(...)`, and (!) do it before using `this`.

But why? What’s going on here? Indeed, the requirement seems strange.

In JavaScript, there’s a distinction between a “constructor function of an inheriting class” and all others.

The difference is:

When a normal constructor runs, it creates an empty object as t`his and continues with it.
But when a derived constructor runs, it doesn’t do it. It expects the parent constructor to do this job.

So if we’re making a constructor of our own, then we must call `super`, because otherwise the object with `this` reference to it won’t be created. And we’ll get an error.

For `Rabbit` to work, we need to call super() before using this, like here:

```js
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {

  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }

  // ...
}

// now fine
let rabbit = new Rabbit("White Rabbit", 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10
```

## Summary

1. To extend a class:
   - class `Child` extends `Parent`:
1. When overriding a constructor:
   - We must call parent constructor as `super()` in `Child` constructor before using `this`.
1. When overriding another method:
   - We can use `super.method()` in a `Child` method to call `Parent` method.
