const sample = async() => {
    console.log("Sample function");

    await fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((json) => console.log(json))

    console.log("done");
};

sample();
