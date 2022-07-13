class Animal {
    constructor(){
        this.brain = true;
        this.legs = 0
    }
}

class Human extends Animal{
    constructor(){
        super().legs = 2;
    }
    tieneCerebro(){
        return this.brain;
    }
}


class Pet extends  Animal {
    constructor(){
        super().legs = 4;
        this.fleas = 0;
    }
    bañar(){
        return this.fleas = 0;
    }
    ensuciar(){
        return this.fleas += 1;
    }
}

class Cat extends Pet {
    constructor(){
        super().fleas = 4;
    }
}

// let manuel = new Human ();
// console.log(manuel.tieneCerebro());

// let spartan = new Cat ();
// spartan.ensuciar();
// spartan.ensuciar();
// // spartan.bañar();
// console.log(spartan.fleas);

