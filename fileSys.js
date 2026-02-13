import fs from 'fs';
import { promises as fsPromises } from 'fs';

const readFile = () => {
    console.log("Reading File Content");
    const content = fs.readFileSync('file.txt', 'utf-8');
    console.log(content);

    fs.appendFileSync('file.txt', '\nNew Line Added');
    const newAppendContent = fs.readFileSync('file.txt', 'utf-8');
    console.log(newAppendContent);
    console.log("File Read Complete");
}

const readFileAsync = async () => {

    console.log("Reading File Content (Async)");
    const content = await fsPromises.readFile('file.txt', 'utf-8');
    console.log(content);

    await fsPromises.appendFile('file.txt', '\nNew Line Added Async');
    const newAppendContent = await fsPromises.readFile('file.txt', 'utf-8');
    console.log(newAppendContent);
    console.log("File Read Complete (Async)");
}

export { readFile, readFileAsync };