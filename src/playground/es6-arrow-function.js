function square(x) {
    return x*x;
};

console.log(square(9));

// const squareArrow = (x) => {
//     return x*x;
// };

const squareArrow = (x) => x*x;

console.log(squareArrow(8))

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));