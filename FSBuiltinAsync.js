// const fs = require("fs");
// fs.readFile()

// OR
// using ES6

const { readFile, writeFile } = require("fs");
console.log("start")

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    writeFile(
      "./content/result-async.txt",
      `here is the result: ${first}, ${second}`, //here i not added the flag. For flag check FSBuiltinSync.js file
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task");
      }
    );
  });
});
console.log("starting new Task");
