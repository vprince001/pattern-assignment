const util_lib = require("./util_lib");
const {generateFilledRectangle} = util_lib;
const {generateEmptyRectangle} = util_lib;
const {generateAlternateRectangle} = util_lib;
const {generateLeftTriangle} = util_lib;
const {generateRightTriangle} = util_lib;
const {generateFilledDiamond} = util_lib;
const {generateHollowDiamond} = util_lib;
const {generateAngledDiamond} = util_lib;

const generateRectangle = function(typeOfRectangle,rows,columns){
  const rectangleTypes = {};
  rectangleTypes["filled"] = generateFilledRectangle(rows, columns);
  rectangleTypes["empty"] = generateEmptyRectangle(rows, columns);
  rectangleTypes["alternate"] = generateAlternateRectangle(rows, columns)
  return rectangleTypes[typeOfRectangle];
}

const generateTriangle = function(triangleAlignment,numOfLines){
  const alignmentTypes = {};
  alignmentTypes["left"] = generateLeftTriangle(numOfLines);
  alignmentTypes["right"] = generateRightTriangle(numOfLines);
  return alignmentTypes[triangleAlignment];
}

const generateDiamond = function(typeOfDiamond,numOfLines){
  let numOfLinesIsEven = (numOfLines%2 == 0);
  if(numOfLinesIsEven){
    numOfLines--;
  }

  const diamondTypes = {};
  diamondTypes["filled"] = generateFilledDiamond(numOfLines);
  diamondTypes["hollow"] = generateHollowDiamond(numOfLines);
  diamondTypes["angled"] = generateAngledDiamond(numOfLines);
  return diamondTypes[typeOfDiamond];
}

//--------------------(exports)--------------------//

exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
