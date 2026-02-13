const fetchData = new Promise((resolve, reject) => {
    const success = true;
    if(success){
        resolve("Data fetched");
        console.log("Data fetched successfully");
    } else {
        console.log("Failed to fetch data");
        reject("Error fetching data");
    }
});

const sample = () => {
    console.log("Sample function");
}

fetchData.then((data) => {
    console.log(data);
    sample();
}).catch((error) => {
    console.error(error);
});

const login = () => {
    return Promise.resolve("Login successful");
};
const getUser = () => {
    return Promise.resolve("User data");
};
const getUserName = () => {
    return Promise.resolve("User name");
};

// login().then((err,response) => {
//     if(err){
//         console.error("Login failed");
//         return;
//     }
//     getUser().then(() => {
//         getUserName().then(() => {
//             console.log("All operations completed");
//         });
//     });
// });

login()
    .then(getUser)
    .then(getUserName)
    .then(console.log("All operations completed"))
    .catch((err) => console.error("Error: ", err));

Promise.resolve(10)
    .then((x) => x + 5)
    .then((x) => x+20)
    .then((x) => console.log(x));