const assert = require("assert");
const util_lib = require("../src/util_lib.js");

const {repeatCharacter} = util_lib;
const {generateFilledRectangle} = util_lib;
const {generateEmptyRectangle} = util_lib;
const {generateAlternateRectangle} = util_lib;
const {generateLeftTriangle} = util_lib;
const {generateRightTriangle} = util_lib;
const {generateFilledDiamond} = util_lib;
const {generateHollowDiamond} = util_lib;
const {generateAngledDiamond} = util_lib;

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
