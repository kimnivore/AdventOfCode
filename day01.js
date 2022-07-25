const fs = require("fs");

const array = fs
  .readFileSync("day01.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));


let count = 0;
for(let i = 1; i < array.length; i++) {
    if(array[i] > array[i-1]) count++
}
console.log(count);

let count2 = 0;
for(let i = 0; i < array.length; i++) {
    let current = array[i] + array[i+1] + array[i+2];
    let next = array[i+1] + array[i+2] + array[i+3];
    if(next > current) count2++
}

console.log(count2);