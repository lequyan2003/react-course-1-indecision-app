const user = {
    name: 'Abel',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlaceLived() {
        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
        // return this.cities.map((city) => this.name + " has lived in " + city);
    }
};

user.printPlaceLived();
// console.log(user.printPlaceLived())

const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
} 

console.log(multiplier.multiply());