const generateFilledRectangle = function(rows,columns){
  let rectangle = "";
  let newLine = "";
  let starLine = generateLine("*",columns);
  
  for(let rowNum = 1; rowNum <= rows; rowNum++){
    rectangle += newLine;
    rectangle += starLine;
    newLine = "\n";
  }
  return rectangle;
}

const generateEmptyRectangle = function(rows,columns){
  let rectangle = "";
  let starLine = generateLine("*",columns);
  let spaceLine = generateLine(" ",columns-2);

  rectangle += starLine+"\n";
  for(let rowNum = 2; rowNum < rows; rowNum++){
    rectangle += "*" + spaceLine + "*\n";
  }
  rectangle += starLine;
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

    rectangle += newLine + generateLine(character,columns);
    newLine = "\n";
  }
  return rectangle;
}

const generateLine = function(symbol,number){
  let line = "";
  for(let num = 1; num <= number; num++){
    line += symbol;
  }
  return line;
}

const generateRectangle = function(typeOfRectangle,rows,columns){
  if(typeOfRectangle == "filled"){
    console.log(generateFilledRectangle(rows,columns));
  }
  if(typeOfRectangle == "empty"){
    console.log(generateEmptyRectangle(rows,columns));
  }
  if(typeOfRectangle == "alternate"){
    console.log(generateAlternateRectangle(rows,columns));
  }
}

const main = function(){
  let typeOfRectangle = process.argv[2];
  let rows = +process.argv[3];
  let columns = +process.argv[4];
  generateRectangle(typeOfRectangle,rows,columns);
}

main();
