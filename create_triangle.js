const {generateTriangle} = require("./src/patterns_lib.js")

const main = function(){
  let triangleAlignment = process.argv[2];
  let numOfLines = +process.argv[3];
  let output = generateTriangle(triangleAlignment,numOfLines);
  console.log(output);
}

main();
