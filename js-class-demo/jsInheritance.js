

class Animal{

    introduce(){
        return "I am a animal";
    }

    getTotalLegs(){
        return 4;
    }
}

class Bird{
    introduce(){
        return "I am a bird";
    }

    getTotalLegs(){
        return 2;
    }
}

class Tiger extends Animal{

    getPlace(){
        return "I live in forest";
    }
}

class Pigeon extends Bird{

    getPlace(){
        return "I live in a nest";
    }

   
}

let tiger = new Tiger();
let pigeon = new Pigeon();

console.log(tiger.introduce());
console.log("I have "+tiger.getTotalLegs()+" legs.");
console.log(tiger.getPlace());

console.log(pigeon.introduce());
console.log("I have "+pigeon.getTotalLegs()+" legs.");
console.log(pigeon.getPlace());
