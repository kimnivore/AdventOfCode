const fs = require("fs");

const array = fs
  .readFileSync("day02.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => {
    const [direction, n] = x.split(" ");
    return {
      direction,
      x: parseInt(n),
    };
  });

let horizontal = 0;
let depth = 0;
for(let item of array) {
    if(item.direction === 'forward') horizontal+=item.x;
    else if(item.direction === 'down') depth+=item.x;
    else if(item.direction === 'up') depth-=item.x;
}

let final = horizontal * depth;
console.log(final)

let horizontal2 = 0;
let depth2 = 0;
let aim = 0;
for(let item of array) {
    if(item.direction === 'forward') {
        horizontal2+=item.x;
        depth2+=item.x * aim;
    }
    else if(item.direction === 'down') aim+=item.x;
    else if(item.direction === 'up') aim-=item.x;
}
let final2 = horizontal2 * depth2;
console.log(final2)