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
    console.log(`${this.name} rolled a ${result}.`)
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
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
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
    constructor (name, role) {
      super(name);
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
        super.roll(5); // Roll with a +2 modifier for attack
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
        super.roll(2); // Roll with a +1 modifier for assistance
    }
}

const robin = new Adventurer("Robin", "Warrior");
robin.inventory.push("sword", "potion", "artifact");

const leo = new Companion("Leo", "Cat");
const frank = new Companion("Frank", "Flea");
frank.inventory.push["small hat", "sunglasses"];

robin.companion = leo;
leo.companion = frank;

console.log(robin);

robin.scout();
robin.attack();
leo.assist();