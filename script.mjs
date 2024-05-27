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

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small-hat", "sunglasses"];

/* Prints everything but inventory for Flea */
//console.log(robin);

/* Rolls dice even for companions */
//robin.companion.companion.roll();