// console.log("Start JS");
// setTimeout(() => {
//     console.log("Second");
// },2000);
// console.log("Third");


// console.log("Start JS");
// setTimeout(() => {
//     console.log("Second");
// },0);
// console.log("Third");

// console.log("Start JS");
// for(let i=0; i<5e9; i++){

// }
// console.log("Third");

let sec = 0;
for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
        for (let k = 0; k < 60; k++) {
            setTimeout(function() {
                console.log(`${i} : ${j} : ${k}`)
            }, sec * 1000);
            sec++;
        }
    }
}