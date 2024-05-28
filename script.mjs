/* PART 1 ----------------------------------------- */
const adventurer = {
    name: "Robin",
    health: 100,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            belongings: ["sunglasses", "small-hat"]
        }
    },

    roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
    }
}

/* Create a loop that logs each item in Robin’s inventory */
// for ( let i = 0; i < adventurer.inventory.length; i++) {
//     console.log(adventurer.inventory[i]);
// }

/* Prints out Franke the Flea */
//console.log(adventurer.companion.companion);

/* Rolling 1-20 for Robin */
//adventurer.roll(); 

/* PART 2 --------------------------------------- */
class Character {
    static MAX_HEALTH = 100; // PART 4 

    constructor (name) {
        this.name = name;
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small-hat", "sunglasses"];

/* Prints everything but inventory for Flea */
//console.log(robin);

/* Rolls dice even for companions */
//robin.companion.companion.roll();

/* PART 3 --------------------------------------- */
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"]; // PART 4

    constructor (name, role) {
        super(name);
      
      // PART 4
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(", ")}`);
        }

        // Adventurers have specialized roles.
        this.role = role;
        // Every adventurer starts with a bed and 50 gold coins.
        this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
        console.log(`\n${this.name} is scouting ahead...`);
        super.roll();
    }

    // Only the adventurer can sttack
    attack() {
        console.log(`${this.name} is attacking!`);
        super.roll(5); // Roll with a +5 modifier for attack
    }

    // PART 6
    duel(opponent) {

        console.log(`\nDuel between ${this.name} and ${opponent.name}!`);

        while (this.health > 50 && opponent.health > 50) {
            const roll1 = this.roll();
            const roll2 = opponent.roll();

            if (roll1 > roll2) {
                opponent.health -= 10;
                console.log(`${this.name} wins this round! ${opponent.name} loses 10 health.`);
            } else if (roll2 > roll1) {
                this.health -= 10;
                console.log(`${opponent.name} wins this round! ${this.name} loses 10 health.`);
            } else {
                console.log("It's a tie! No health lost this round.");
            }
            console.log(`${this.name} Health: ${this.health}, ${opponent.name} Health: ${opponent.health}`);
        }

        if (this.health > 50) {
            console.log(`${this.name} wins the duel!`);
        } else {
            console.log(`${opponent.name} wins the duel!`);
        }
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name);
        this.type = type;
    }

    // Only companioans can assist for the adventurer
    // Companioans can assist companioans
    assist() {
        console.log(`${this.name} is assisting their adventurer!`);
        super.roll(2); // Roll with a +2 modifier for assistance
    }
}

// PART 5
class AdventurerFactory {  
    constructor (role) {
        this.role = role;
        this.adventurers = [];
    }
    
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }

    findByIndex (index) {
        return this.adventurers[index];
    }
    
    findByName (name) {
        return this.adventurers.find(a => a.name === name);
    }
}
  

const robin = new Adventurer("Robin", "Fighter");
robin.inventory.push("sword", "potion", "artifact");

const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
frank.inventory.push("small-hat", "sunglasses");

robin.companion = leo;
leo.companion = frank;

console.log(robin);

robin.scout();
robin.attack();
leo.assist();

/* PART 4 --------------------------------------- */

/* 
~ Implemented the following: 
Add a static MAX_HEALTH property to the Character class, equal to 100.
Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.
*/

/* PART 5 --------------------------------------- */

// Implemented the AdventureFactory

console.log("")

const healers = new AdventurerFactory("Healer");
const said = healers.generate("Said");
const masih = healers.generate("Masih");

said.companion = new Companion("Garfielf", "Cat");
masih.companion = new Companion("Snoopy", "Dog");

console.log(healers)

said.scout();
said.attack();
said.companion.assist();
masih.scout();
masih.companion.assist();

/* PART 6 --------------------------------------- */

said.duel(masih);