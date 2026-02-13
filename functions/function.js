// import { rootVar } from "../file.js";

const add = (a, b) => {
    return a + b;
};

const GLOBAL_VARIABLE = [];

const multiply = (a, b) => {
    return a * b;
};

module.exports = { add, multiply, GLOBAL_VARIABLE };

// console.log("Root Variable from file.js : ", rootVar);