const {generateRectangle} = require("./src/patterns_lib.js");

const main = function(){
  let typeOfRectangle = process.argv[2];
  let rows = +process.argv[3];
  let columns = +process.argv[4];
  let output = generateRectangle(typeOfRectangle,rows,columns);
  console.log(output);
}

main();
