const repeatCharacter = function(character,times){
  return new Array(times).fill(character).join("");
}

//-------------------(RECTANGLE)-------------------//

const generateFilledRectangle = function(rows,columns){
  let line = repeatCharacter("*",columns);
  return new Array(rows).fill(line).join("\n");
}

const generateEmptyRectangle = function(rows,columns){
  let topBottomLine = repeatCharacter("*",columns);
  let middleLine = "*" + repeatCharacter(" ",columns-2) + "*";
  let middleLines = new Array(rows-2).fill(middleLine).join("\n");
  let rectangle = topBottomLine +"\n"+ middleLines +"\n"+ topBottomLine;
  return rectangle;
}

const generateAlternateRectangle = function(rows,columns){
  let rectangle = "";
  let newLine = "";
  let character = "";

  for(let rowNum = 1; rowNum <= rows; rowNum++){
    character = "*";
    
    if(rowNum%2 == 0){
      character = "-";
    }

    rectangle += newLine + repeatCharacter(character,columns);
    newLine = "\n";
  }
  return rectangle;
}


//-------------------(TRIANGLE)-------------------//

const generateLeftTriangle = function(numOfLines){
  let result = "";
  let nextLine = "";
  for(let lineNum = 1; lineNum <= numOfLines; lineNum++){
    result += nextLine + repeatCharacter("*",lineNum);
    nextLine = "\n";
  }
  return result;
}

const generateRightTriangle = function(numOfLines){
  let result = "";
  let nextLine = "";
  let numOfSpaces = numOfLines-1;

  for(let lineNum = 1; lineNum <= numOfLines; lineNum++, numOfSpaces--){
    result += nextLine + repeatCharacter(" ",numOfSpaces) + repeatCharacter("*",lineNum);
    nextLine = "\n";
  }
  return result;
}


//--------------------(DIAMOND)--------------------//

const generateFilledDiamond = function(numOfLines){
  let firstHalf = filledFirstHalf(numOfLines);
  let secondHalf = filledSecondHalf(numOfLines);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const filledFirstHalf = function(numOfLines){
  let numOfSpaces = Math.floor(numOfLines/2);
  let firstHalf = "";
  let nextLine = "";
  let star = "*";
  let space = " ";

  for(let lineNum = 1; lineNum < numOfLines; lineNum+=2){
    firstHalf += nextLine + repeatCharacter(space,numOfSpaces) + repeatCharacter(star,lineNum);
    nextLine = "\n";
    numOfSpaces--;
  }
  return firstHalf;
}

const filledSecondHalf = function(numOfLines){
  let numOfSpaces = 0;
  let secondHalf = "";
  let nextLine = "\n";
  let star = "*";
  let space = " ";

  for(let lineNum = numOfLines; lineNum > 0; lineNum-=2){
    secondHalf += nextLine + repeatCharacter(space,numOfSpaces) + repeatCharacter(star,lineNum);
    numOfSpaces++;
  }
  return secondHalf;
}

const generateHollowDiamond = function(numOfLines){
  let firstHalf = hollowFirstHalf(numOfLines);
  let secondHalf = hollowSecondHalf(numOfLines);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const hollowFirstHalf = function(numOfLines){
  let outerSpaces = Math.floor(numOfLines/2);
  let innerSpaces = 1;
  let firstHalf = "";
  let star = "*";
  let space = " ";
  let nextLine = "\n";

  firstHalf += repeatCharacter(space,outerSpaces) + star;
  for(let lineNum = 3; lineNum < numOfLines-1; lineNum+=2){
    outerSpaces--;
    firstHalf += nextLine + repeatCharacter(space,outerSpaces) + star;
    firstHalf += repeatCharacter(space,innerSpaces) + star;
    innerSpaces += 2;
  }
  return firstHalf;
}

const hollowSecondHalf = function(numOfLines){
  let outerSpaces = 0;
  let innerSpaces = numOfLines - 2;
  let secondHalf = "";
  let star = "*";
  let space = " ";
  let nextLine = "\n";

  for(let lineNum = numOfLines; lineNum > 1; lineNum-=2){
    secondHalf += nextLine + repeatCharacter(space,outerSpaces) + star;
    secondHalf += repeatCharacter(space,innerSpaces) + star;
    outerSpaces++;
    innerSpaces -= 2;
  }
  secondHalf += nextLine + repeatCharacter(space,outerSpaces) + star;
  return secondHalf;
}

const generateAngledDiamond = function(numOfLines){
  let firstHalf = angledFirstHalf(numOfLines);
  let secondHalf = angledSecondHalf(numOfLines);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const angledFirstHalf = function(numOfLines){
  let outerSpaces = Math.floor(numOfLines/2);
  let innerSpaces = 1;
  let firstHalf = "";
  let star = "*";
  let space = " ";
  let forwardSlash = "/";
  let backwardSlash = "\\";
  let nextLine = "\n";

  firstHalf += repeatCharacter(space,outerSpaces) + star;
  for(let lineNum = 3; lineNum < numOfLines-1; lineNum+=2){
    outerSpaces--;
    firstHalf += nextLine + repeatCharacter(space,outerSpaces) + forwardSlash;
    firstHalf += repeatCharacter(space,innerSpaces) + backwardSlash;
    innerSpaces += 2;
  }
  return firstHalf;
}

const angledSecondHalf = function(numOfLines){
  let outerSpaces = 1;
  let innerSpaces = numOfLines-2;
  let secondHalf = "";
  let star = "*";
  let space = " ";
  let nextLine = "\n";
  let forwardSlash = "/";
  let backwardSlash = "\\";

  secondHalf += nextLine + star + repeatCharacter(space,innerSpaces) + star;
  for(let lineNum = numOfLines; lineNum > 3; lineNum-=2){
    innerSpaces -= 2;
    secondHalf += nextLine + repeatCharacter(space,outerSpaces) + backwardSlash;
    secondHalf += repeatCharacter(space,innerSpaces) + forwardSlash;
    outerSpaces++;
  }
  secondHalf += "\n" + repeatCharacter(space,outerSpaces) + star;
  return secondHalf;
}

exports.generateFilledRectangle = generateFilledRectangle;
exports.generateEmptyRectangle = generateEmptyRectangle;
exports.generateAlternateRectangle = generateAlternateRectangle;

exports.generateLeftTriangle = generateLeftTriangle;
exports.generateRightTriangle = generateRightTriangle;

exports.generateFilledDiamond = generateFilledDiamond;
exports.generateHollowDiamond = generateHollowDiamond;
exports.generateAngledDiamond = generateAngledDiamond;
