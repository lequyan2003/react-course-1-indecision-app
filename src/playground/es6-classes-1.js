class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreetings() {
        return `Hi, I am ${this.name}!`;
    }

    getDescriptions() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescriptions() {
        let description = super.getDescriptions();
        if (this.major) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreetings() {
        let greeting = super.getGreetings();
        if (this.homeLocation) {
            greeting += `. I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveller("Abel", 26, 'Philadelphia');
console.log(me.getGreetings());

const other = new Traveller(undefined, undefined, 'Nowhere');
console.log(other.getGreetings());
