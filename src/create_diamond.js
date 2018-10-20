const generateLine = function(symbol,numOfCharacters){
  let result = "";
  for(characterNum = 1; characterNum <= numOfCharacters; characterNum++){
    result += symbol;
  }
  return result;
}

const alternateSecondHalf = function(numOfLines){
  let numOfSpaces = 0;
  let secondHalf = "";
  let nextLine = "\n";
  let character = "*";
  let space = " ";
  let count = 1;
  let isCountEven;

  for(let lineNum = numOfLines; lineNum > 0; lineNum-=2){
    isCountEven = (count%2 == 0);
    if(isCountEven){
      character = "-";
    }
    secondHalf += nextLine + generateLine(space,numOfSpaces) + generateLine(character,lineNum);
    numOfSpaces++;
    character = "*";
    count++;
  }
  return secondHalf;
}

const alternateFirstHalf = function(numOfLines){
  let numOfSpaces = Math.floor(numOfLines/2);
  let firstHalf = "";
  let nextLine = "";
  let character = "*";
  let space = " ";
  let count = 1;
  let isCountEven;

  for(let lineNum = 1; lineNum < numOfLines; lineNum+=2){
    isCountEven = (count%2 == 0);
    if(isCountEven){
      character = "-";
    }
    firstHalf += nextLine + generateLine(space,numOfSpaces) + generateLine(character,lineNum);
    numOfSpaces--;
    nextLine = "\n";
    character = "*";
    count++;
  }
  return firstHalf;
} 

const generateAlternateDiamond = function(numOfLines){
  let firstHalf = alternateFirstHalf(numOfLines);
  let secondHalf = alternateSecondHalf(numOfLines);
  let diamond = firstHalf + secondHalf;
  return diamond;
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

  secondHalf += nextLine + star + generateLine(space,innerSpaces) + star;
  for(let lineNum = numOfLines; lineNum > 3; lineNum-=2){
    innerSpaces -= 2;
    secondHalf += nextLine + generateLine(space,outerSpaces) + backwardSlash;
    secondHalf += generateLine(space,innerSpaces) + forwardSlash;
    outerSpaces++;
  }
  secondHalf += "\n" + generateLine(space,outerSpaces) + star;
  return secondHalf;
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

  firstHalf += generateLine(space,outerSpaces) + star;
  for(let lineNum = 3; lineNum < numOfLines-1; lineNum+=2){
    outerSpaces--;
    firstHalf += nextLine + generateLine(space,outerSpaces) + forwardSlash;
    firstHalf += generateLine(space,innerSpaces) + backwardSlash;
    innerSpaces += 2;
  }
  return firstHalf;
} 

const generateAngledDiamond = function(numOfLines){
  let firstHalf = angledFirstHalf(numOfLines);
  let secondHalf = angledSecondHalf(numOfLines);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const hollowSecondHalf = function(numOfLines){
  let outerSpaces = 0;
  let innerSpaces = numOfLines - 2;
  let secondHalf = "";
  let star = "*";
  let space = " ";
  let nextLine = "\n";

  for(let lineNum = numOfLines; lineNum > 1; lineNum-=2){
    secondHalf += nextLine + generateLine(space,outerSpaces) + star;
    secondHalf += generateLine(space,innerSpaces) + star;
    outerSpaces++;
    innerSpaces -= 2;
  }
  secondHalf += nextLine + generateLine(space,outerSpaces) + star;
  return secondHalf;
}

const hollowFirstHalf = function(numOfLines){
  let outerSpaces = Math.floor(numOfLines/2);
  let innerSpaces = 1;
  let firstHalf = "";
  let star = "*";
  let space = " ";
  let nextLine = "\n";

  firstHalf += generateLine(space,outerSpaces) + star;
  for(let lineNum = 3; lineNum < numOfLines-1; lineNum+=2){
    outerSpaces--;
    firstHalf += nextLine + generateLine(space,outerSpaces) + star;
    firstHalf += generateLine(space,innerSpaces) + star;
    innerSpaces += 2;
  }
  return firstHalf;
} 

const generateHollowDiamond = function(numOfLines){
  let firstHalf = hollowFirstHalf(numOfLines);
  let secondHalf = hollowSecondHalf(numOfLines);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const filledSecondHalf = function(numOfLines){
  let numOfSpaces = 0;
  let secondHalf = "";
  let nextLine = "\n";
  let star = "*";
  let space = " ";

  for(let lineNum = numOfLines; lineNum > 0; lineNum-=2){
    secondHalf += nextLine + generateLine(space,numOfSpaces) + generateLine(star,lineNum);
    numOfSpaces++;
  }
  return secondHalf;
}

const filledFirstHalf = function(numOfLines){
  let numOfSpaces = Math.floor(numOfLines/2);
  let firstHalf = "";
  let nextLine = "";
  let star = "*";
  let space = " ";

  for(let lineNum = 1; lineNum < numOfLines; lineNum+=2){
    firstHalf += nextLine + generateLine(space,numOfSpaces) + generateLine(star,lineNum);
    nextLine = "\n";
    numOfSpaces--;
  }
  return firstHalf;
} 

const filledDiamond = function(numOfLines){
  let numOfSpaces = Math.floor(numOfLines/2);
  let firstHalf = "";
  let secondHalf = "";
  let nextLine = "";
  let star = "*";
  let space = " ";
  let currentLine = "";

  for(let lineNum = 1; lineNum < numOfLines; lineNum+=2){
    secondHalf = currentLine + nextLine + secondHalf;
    currentLine = generateLine(space,numOfSpaces) + generateLine(star,lineNum);
    firstHalf = firstHalf + nextLine + currentLine;
    nextLine = "\n";
    numOfSpaces--;
  }
  let diamond = firstHalf + "\n" + secondHalf
  return diamond;
}

const generateFilledDiamond = function(numOfLines){
  let firstHalf = filledFirstHalf(numOfLines);
  let secondHalf = filledSecondHalf(numOfLines);
  let diamond = firstHalf + secondHalf;
  return diamond;
}

const generateDiamond = function(typeOfDiamond,numOfLines){
  let numOfLinesIsEven = (numOfLines%2 == 0);
  if(numOfLinesIsEven){
    numOfLines--;
  }

  let message = "Diamond type not found";
  switch(typeOfDiamond){
    case "filled":
      return generateFilledDiamond(numOfLines);
      break;
    
    case "hollow":
      return generateHollowDiamond(numOfLines);
      break;

    case "angled":
      return generateAngledDiamond(numOfLines);
      break;

    case "alternate":
      return generateAlternateDiamond(numOfLines);
      break;

    default:
      return message;
  }
}

const main = function(){
  let typeOfDiamond = process.argv[2];
  let numOfLines = +process.argv[3];
  console.log(generateDiamond(typeOfDiamond,numOfLines));
}

main();
