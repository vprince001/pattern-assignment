const assert = require("assert");
const util_lib = require("../src/util_lib.js");

const {repeatCharacter,            
       generateFilledRectangle,    
       generateEmptyRectangle,     
       generateAlternateRectangle, 
       generateLeftTriangle,       
       generateRightTriangle,      
       generateFilledDiamond,      
       filledFirstHalf,            
       filledSecondHalf,           
       generateHollowDiamond,      
       hollowFirstHalf,            
       hollowSecondHalf,           
       generateAngledDiamond,      
       angledFirstHalf,            
       angledSecondHalf} = util_lib;

//-----------------repeatCharacter-----------------//
assert.equal(repeatCharacter("*", 0),"");
assert.equal(repeatCharacter("*", 1),"*");
assert.equal(repeatCharacter("-", 2),"--");

//-------------generateFilledRectangle-------------//
let generateFilledRectangle_2_5 = "*****" + "\n";
generateFilledRectangle_2_5 +=    "*****";
assert.equal(generateFilledRectangle(2,5), generateFilledRectangle_2_5);

let generateFilledRectangle_2_2 = "**" + "\n";
generateFilledRectangle_2_2 +=    "**";
assert.equal(generateFilledRectangle(2,2), generateFilledRectangle_2_2);

//--------------generateEmptyRectangle-------------//
let generateEmptyRectangle_5_8 = "********" + "\n";
generateEmptyRectangle_5_8 +=    "*      *" + "\n";
generateEmptyRectangle_5_8 +=    "*      *" + "\n";
generateEmptyRectangle_5_8 +=    "*      *" + "\n";
generateEmptyRectangle_5_8 +=    "********";
assert.equal(generateEmptyRectangle(5,8), generateEmptyRectangle_5_8);

let generateEmptyRectangle_12_5 = "*****" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*   *" + "\n";
generateEmptyRectangle_12_5 +=    "*****";
assert.equal(generateEmptyRectangle(12,5), generateEmptyRectangle_12_5);

//------------generateAlternateRectangle-----------//
let generateAlternateRectangle_2_8 = "********" + "\n";
generateAlternateRectangle_2_8 +=    "--------";
assert.equal(generateAlternateRectangle(2,8), generateAlternateRectangle_2_8);

let generateAlternateRectangle_5_2 = "**" + "\n";
generateAlternateRectangle_5_2 +=    "--" + "\n";
generateAlternateRectangle_5_2 +=    "**" + "\n";
generateAlternateRectangle_5_2 +=    "--" + "\n";
generateAlternateRectangle_5_2 +=    "**";
assert.equal(generateAlternateRectangle(5,2), generateAlternateRectangle_5_2);

//---------------generateLeftTriangle--------------//
let generateLeftTriangle_5 = "*"    +"\n";
generateLeftTriangle_5 +=    "**"   +"\n";
generateLeftTriangle_5 +=    "***"  +"\n";
generateLeftTriangle_5 +=    "****" +"\n";
generateLeftTriangle_5 +=    "*****";
assert.equal(generateLeftTriangle(5),generateLeftTriangle_5);

let generateLeftTriangle_7 = generateLeftTriangle_5 + "\n";
generateLeftTriangle_7 += "******" + "\n";
generateLeftTriangle_7 += "*******";
assert.equal(generateLeftTriangle(7),generateLeftTriangle_7);

//--------------generateRightTriangle--------------//
let generateRightTriangle_2 = " *" + "\n";
generateRightTriangle_2 +=    "**";
assert.equal(generateRightTriangle(2),generateRightTriangle_2);

let generateRightTriangle_6 = "     *" + "\n";
generateRightTriangle_6 +=    "    **" + "\n";
generateRightTriangle_6 +=    "   ***" + "\n";
generateRightTriangle_6 +=    "  ****" + "\n";
generateRightTriangle_6 +=    " *****" + "\n";
generateRightTriangle_6 +=    "******";
assert.equal(generateRightTriangle(6),generateRightTriangle_6);

//--------------generateFilledDiamond--------------//
let generateFilledDiamond_3 = " *"  +"\n";
generateFilledDiamond_3 +=    "***" +"\n";
generateFilledDiamond_3 +=    " *";
assert.equal(generateFilledDiamond(3),generateFilledDiamond_3);

let generateFilledDiamond_5 = "  *"   + "\n";
generateFilledDiamond_5 +=    " ***"  + "\n";
generateFilledDiamond_5 +=    "*****" + "\n";
generateFilledDiamond_5 +=    " ***"  + "\n";
generateFilledDiamond_5 +=    "  *";
assert.equal(generateFilledDiamond(5),generateFilledDiamond_5);

//-------------------filledHalves------------------//
let filledFirstHalf_3 = " *";
assert.equal(filledFirstHalf(3), filledFirstHalf_3);

let filledFirstHalf_5 = "  *" + "\n";
filledFirstHalf_5 +=    " ***";
assert.equal(filledFirstHalf(5), filledFirstHalf_5);

let filledSecondHalf_3 = "\n" + "***";
filledSecondHalf_3 +=    "\n" + " *";
assert.equal(filledSecondHalf(3), filledSecondHalf_3);

let filledSecondHalf_5 = "\n" + "*****";
filledSecondHalf_5 +=    "\n" + " ***";
filledSecondHalf_5 +=    "\n" + "  *";
assert.equal(filledSecondHalf(5), filledSecondHalf_5);

//--------------generateHollowDiamond--------------//
let generateHollowDiamond_3 = " *"  + "\n";
generateHollowDiamond_3 +=    "* *" + "\n";
generateHollowDiamond_3 +=    " *";
assert.equal(generateHollowDiamond(3), generateHollowDiamond_3);

let generateHollowDiamond_5 = "  *"   + "\n";
generateHollowDiamond_5 +=    " * *"  + "\n";
generateHollowDiamond_5 +=    "*   *" + "\n";
generateHollowDiamond_5 +=    " * *"  + "\n";
generateHollowDiamond_5 +=    "  *";
assert.equal(generateHollowDiamond(5),generateHollowDiamond_5);

//-------------------hollowHalves------------------//
let hollowFirstHalf_3 = " *";
assert.equal(hollowFirstHalf(3), hollowFirstHalf_3);

let hollowFirstHalf_5 = "  *" + "\n";
hollowFirstHalf_5 +=    " * *";
assert.equal(hollowFirstHalf(5), hollowFirstHalf_5);

let hollowSecondHalf_3 = "\n" + "* *";
hollowSecondHalf_3 +=    "\n" + " *";
assert.equal(hollowSecondHalf(3), hollowSecondHalf_3);

let hollowSecondHalf_5 = "\n" + "*   *";
hollowSecondHalf_5 +=    "\n" + " * *";
hollowSecondHalf_5 +=    "\n" + "  *";
assert.equal(hollowSecondHalf(5), hollowSecondHalf_5);

//--------------generateAngledDiamond--------------//
let generateAngledDiamond_3 = " *"  + "\n";
generateAngledDiamond_3 +=    "* *" + "\n";
generateAngledDiamond_3 +=    " *";
assert.equal(generateAngledDiamond(3),generateAngledDiamond_3);

let generateAngledDiamond_5 = "  *"   + "\n";
generateAngledDiamond_5 +=    " / \\" + "\n";
generateAngledDiamond_5 +=    "*   *" + "\n";
generateAngledDiamond_5 +=    " \\ /" + "\n";
generateAngledDiamond_5 +=    "  *";
assert.equal(generateAngledDiamond(5),generateAngledDiamond_5);

//-------------------angledHalves------------------//
let angledFirstHalf_3 = " *";
assert.equal(angledFirstHalf(3), angledFirstHalf_3);

let angledFirstHalf_5 = "  *"   + "\n";
angledFirstHalf_5 +=    " / \\";
assert.equal(angledFirstHalf(5), angledFirstHalf_5);

let angledSecondHalf_3 = "\n" + "* *";
angledSecondHalf_3 +=    "\n" + " *";
assert.equal(angledSecondHalf(3), angledSecondHalf_3);

let angledSecondHalf_5 = "\n" + "*   *";
angledSecondHalf_5 +=    "\n" + " \\ /";
angledSecondHalf_5 +=    "\n" + "  *";
assert.equal(angledSecondHalf(5), angledSecondHalf_5);
