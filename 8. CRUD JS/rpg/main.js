// STEP 1:

// First, create a Monster class
// Add properties for Health, Strength and Gold
// Add a constructor to initialize our values
// Add a method to print out the Monster's health, strength, name and gold
// Create a Monster and print out that Monster's stats
class Monster {
    constructor(name, health, strength, gold) {  //builds the class
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.gold = gold;
       
            // return this.health + '' + this.model;
    } 
            getHealth(){
             //the second speed is in the method
            console.log(`${this.name} has ${this.health} health and has ${this.strength} strength and ${this.gold} dollar's`);
            }
        
    }

    vegeta = new Monster("vegeta", 100, 500, 1000); //assigning values to the constructor
    vegeta.getHealth(); //building a new method, displays back all the values in the constructor

    
    
    
    
    



    







// STEP 2:

// Next, create a Boss class that inherits from the Monster class
class Boss extends Monster{
    constructor(name, health, strength, gold, exp){
        super(name, health, strength, gold)
        this.exp = exp; 
        this.health = health 

    }
    health() {
        this.health = health 
    }
    print()
}

buu = new Boss('Majin Buu', 100, 200, 500, 5000);

buu.getHealth();


// Add a property to the Boss class called ExperiencePoints
// Add a method to the Boss class called Heal that heals the Boss to full health
// Create a Boss and print out that Boss's stats
// Set the health of the Boss to 0.
// Next call the Heal method on our Boss and then print out the stats again





// STEP 3:

// Create a Player class that has properties of Name, Health, Strength and Gold
// Create a method on the player class that prints out the player's stats
// Create a player
// Call the Print method on the instantiated player class


// STEP 4:

// Create a Game class
// Create a Player property of that Game class
// Create a collection of Monsters in the Game class
// Create a constructor in the Game class to initialize our initial values
// Create a method in the Game class that prints our the game status, which will include all monster status
// and the player status
class Game {
    constructor(player, monsters) {
        
    }
}