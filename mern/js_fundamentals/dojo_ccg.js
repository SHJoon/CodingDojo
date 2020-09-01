class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    attack(target){
        if( target instanceof Unit){
            target.resilience -= this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    play(target){
        if( target instanceof Unit){
            if(stat == "resilience"){
                target.resilience += this.magnitude;
            }
            else{
                target.power += this.magnitude;
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const unhandled = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
const pair = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);

// Summon "Red Belt Ninja"
const redBelt = new Unit("Red Belt Ninja", 3, 3, 4);
hardAlgo.play(redBelt);


// Summon "Black Belt Ninja"
const blackBelt = new Unit("Black Belt Ninja", 4, 5, 4);
unhandled.play(blackBelt);

pair.play(redBelt);
redBelt.attack(blackBelt);
