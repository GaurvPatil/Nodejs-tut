// const fs = require("fs");
// fs.readFileSync()

// OR
// using ES6

const {readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

console.log(first, second); //console the data inside the file

writeFileSync(
"./content/result-sync.txt", //if there is no file node will create 
`here is the result: ${first} , ${second}`, //second arg for write something in file
{flag: "a" } // if you already have file and you eant to override above text use this otherwise new text is created every time 
)
console.log("Done with the task");
console.log("starting the next task");
