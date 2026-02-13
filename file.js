// import multiply, { add } from "./functions/function.js";

// const output = add(2, 4);
// console.log("Output : ", output);

// const mul = multiply(3, 5);
// console.log("Multiply : ", mul);

// // export const rootVar = 1234;

// // import { readFile } from './fileSys.js';
// // readFile();

// import os from 'os';

// console.log("Platform : ", os.platform());
// console.log("Architecture : ", os.arch());
// // console.log("CPU Info : ", os.cpus());
// console.log("Free Memory : ", os.freemem());
// const freeMemInfo = os.freemem()/1024/1024/1024;
// console.log("Free Memory in GB : " , freeMemInfo);

// // console.log("Total Memory : ", os.totalmem());
// // console.log("Home Directory : ", os.homedir());
// // console.log("Uptime : ", os.uptime());


///////////////////////

// const {add,multiply} = require("./functions/function.js");

// const output = add(2, 4);
// console.log("Output : ", output);

// const mul = multiply(3, 5);
// console.log("Multiply : ", mul);




// const a = () => {
//     b();
//     console.log("a");
//     Promise.resolve().then(() => {
//         console.log("promise - 2");
//     });

// }
// const b = () => {
//     console.log("b : init");
//     setTimeout(() =>{
//         console.log("b first");
//     },0);
//     setTimeout(() =>{
//         console.log("b second");
//     },0);

//     Promise.resolve().then(() => {
//         console.log("promise - b");
//     });
//     console.log("b ended");
// };

// a();
// console.log("ended");



const fetchData = (callBack) => {
    callBack("Data fetched", () =>{
        () => {
            () => {
                ()=> {};    
            }; 
        };
    });
};

const add = (data) => console.log(data);

fetchData(add);