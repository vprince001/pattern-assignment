const assert = require("assert");

//================(RECTANGLE TESTS)================//
const {generateRectangle} = require("../src/patterns_lib.js");

//-------------(Filled Rectangle Tests)------------//
let filledRectangle_2_5 = "*****" + "\n";
filledRectangle_2_5 +=    "*****";
assert.equal(generateRectangle('filled',2,5),filledRectangle_2_5);

let filledRectangle_2_2 = "**" + "\n";
filledRectangle_2_2 +=    "**";
assert.equal(generateRectangle('filled',2,2),filledRectangle_2_2);

//-------------(Empty Rectangle Tests)-------------//

let emptyRectangle_5_8 = "********" + "\n";
emptyRectangle_5_8 +=    "*      *" + "\n";
emptyRectangle_5_8 +=    "*      *" + "\n";
emptyRectangle_5_8 +=    "*      *" + "\n";
emptyRectangle_5_8 +=    "********";
assert.equal(generateRectangle("empty",5,8),emptyRectangle_5_8);

let emptyRectangle_12_5 = "*****" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*   *" + "\n";
emptyRectangle_12_5 +=    "*****";
assert.equal(generateRectangle("empty",12,5),emptyRectangle_12_5);

//-----------(Alternate Rectangle Tests)-----------//

let alternateRectangle_2_8 = "********" + "\n";
alternateRectangle_2_8 +=    "--------";
assert.equal(generateRectangle('alternate',2,8),alternateRectangle_2_8);

let alternateRectangle_5_2 = "**" + "\n";
alternateRectangle_5_2 +=    "--" + "\n";
alternateRectangle_5_2 +=    "**" + "\n";
alternateRectangle_5_2 +=    "--" + "\n";
alternateRectangle_5_2 +=    "**";
assert.equal(generateRectangle('alternate',5,2),alternateRectangle_5_2);


//================(TRIANGLE TESTS)=================//
const {generateTriangle} = require("../src/patterns_lib.js");

//----------(Left Alignment Triangle Test)---------//
let leftTriangle_5 = "*"    +"\n";
leftTriangle_5 +=    "**"   +"\n";
leftTriangle_5 +=    "***"  +"\n";
leftTriangle_5 +=    "****" +"\n";
leftTriangle_5 +=    "*****";
assert.equal(generateTriangle("left",5),leftTriangle_5);

let leftTriangle_7 = leftTriangle_5 + "\n";
leftTriangle_7 += "******" + "\n";
leftTriangle_7 += "*******";
assert.equal(generateTriangle("left",7),leftTriangle_7);

//---------(Right Alignment Triangle Test)---------//

let rightTriangle_2 = " *" + "\n";
rightTriangle_2 +=    "**";
assert.equal(generateTriangle("right",2),rightTriangle_2);

let rightTriangle_6 = "     *" + "\n";
rightTriangle_6 +=    "    **" + "\n";
rightTriangle_6 +=    "   ***" + "\n";
rightTriangle_6 +=    "  ****" + "\n";
rightTriangle_6 +=    " *****" + "\n";
rightTriangle_6 +=    "******";
assert.equal(generateTriangle("right",6),rightTriangle_6);


//=================(DIAMOND TESTS)=================//
const {generateDiamond} = require("../src/patterns_lib.js");

//--------------(Filled Diamond Test)--------------//

let filledDiamond_3 = " *"  +"\n";
filledDiamond_3 +=    "***" +"\n";
filledDiamond_3 +=    " *";
assert.equal(generateDiamond("filled",3),filledDiamond_3);

let filledDiamond_5 = "  *"   + "\n";
filledDiamond_5 +=    " ***"  + "\n";
filledDiamond_5 +=    "*****" + "\n";
filledDiamond_5 +=    " ***"  + "\n";
filledDiamond_5 +=    "  *";
assert.equal(generateDiamond("filled",5),filledDiamond_5);

//--------------(Hollow Diamond Test)--------------//

let hollowDiamond_3 = " *"  + "\n";
hollowDiamond_3 +=    "* *" + "\n";
hollowDiamond_3 +=    " *";
assert.equal(generateDiamond("hollow",3),hollowDiamond_3);

let hollowDiamond_5 = "  *"   + "\n";
hollowDiamond_5 +=    " * *"  + "\n";
hollowDiamond_5 +=    "*   *" + "\n";
hollowDiamond_5 +=    " * *"  + "\n";
hollowDiamond_5 +=    "  *";
assert.equal(generateDiamond("hollow",5),hollowDiamond_5);

//--------------(Angled Diamond Test)--------------//

let angledDiamond_3 = " *"  + "\n";
angledDiamond_3 +=    "* *" + "\n";
angledDiamond_3 +=    " *";
assert.equal(generateDiamond("angled",3),angledDiamond_3);

let angledDiamond_5 = "  *"   + "\n";
angledDiamond_5 +=    " / \\" + "\n";
angledDiamond_5 +=    "*   *" + "\n";
angledDiamond_5 +=    " \\ /" + "\n";
angledDiamond_5 +=    "  *";
assert.equal(generateDiamond("angled",5),angledDiamond_5);

