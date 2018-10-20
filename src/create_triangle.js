const generateLine = function(symbol,numOfChararacters){
  let line = "";
  for(num = 1; num <= numOfChararacters; num++){
    line += symbol;
  }
  return line;
}

const generateLeftTriangle = function(numOfLines){
  let result = "";
  let nextLine = "";
  for(let lineNum = 1; lineNum <= numOfLines; lineNum++){
    result += nextLine + generateLine("*",lineNum);
    nextLine = "\n";
  }
  return result;
}

const generateRightTriangle = function(numOfLines){
  let result = "";
  let nextLine = "";
  let numOfSpaces = numOfLines-1;

  for(let lineNum = 1; lineNum <= numOfLines; lineNum++, numOfSpaces--){
    result += nextLine + generateLine(" ",numOfSpaces) + generateLine("*",lineNum);
    nextLine = "\n";
  }
  return result;
}

const generateTriangle = function(triangleAlignment,numOfLines){
  let isAlignmentLeft = (triangleAlignment == "left");
  let isAlignmentRight = (triangleAlignment == "right"); 
  
  if(isAlignmentLeft){
    return generateLeftTriangle(numOfLines);
  }
  if(isAlignmentRight){
    return generateRightTriangle(numOfLines);
  }
}

const main = function(){
  let triangleAlignment = process.argv[2];
  let numOfLines = +process.argv[3];
  console.log(generateTriangle(triangleAlignment,numOfLines));
}

main();
