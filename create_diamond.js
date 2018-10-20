const {generateDiamond} = require("./src/patterns_lib.js");

const main = function(){
  let typeOfDiamond = process.argv[2];
  let numOfLines = +process.argv[3];
  let output = generateDiamond(typeOfDiamond,numOfLines);
  console.log(output);
}

main();
