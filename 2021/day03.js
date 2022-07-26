const fs = require("fs");

const array = fs
  .readFileSync("day03.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x));

 let length = array[0].length;

 function count(array) {
  const zeroes = Array(length).fill(0);
  const ones = Array(length).fill(0);

  for (const item of array) {
    const bits = [...item];
    bits.forEach((bit, index) => {
      if (bit === "0") {
        zeroes[index]++;
      } else {
        ones[index]++;
      }
    });
  }
  return { zeroes, ones};
 }

  function consumption() {
    const { zeroes, ones } = count(array);
    let gamma = '';
    let epsilon = '';

    for(let i = 0; i < length; i++) {
      let bit = 0;
      if(ones[i] > zeroes[i]) {
        bit = 1;
      }
      gamma+=bit;
      epsilon+=bit === 1 ? 0 : 1;
    }
    console.log(parseInt(gamma, 2) * parseInt(epsilon, 2));
  }
 consumption();

