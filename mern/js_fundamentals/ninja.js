class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log("The ninja's name is " + this.name);
    }

    showStats(){
        this.sayName();
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("strength: " + this.strength);
    }

    drinkSake(){
        this.health += 10;
    }
}

const ninja1 = new Ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();