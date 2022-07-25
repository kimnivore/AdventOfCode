const fs = require("fs");

const array = fs
  .readFileSync("day03.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x));

  console.log(array)