const assert = require("assert");
const {generateRectangle} = require("../src/patterns_lib.js");

//===============(RECTANGLE TESTS)===============//

//------------(Filled Rectangle Tests)-----------//
let line = new Array(5).fill("*").join("");
let filledRectangle_2_5 = new Array(2).fill(line).join("\n");
assert.equal(generateRectangle('filled',2,5),filledRectangle_2_5);

line = new Array(2).fill("*").join("");
let filledRectangle_2_2 = new Array(2).fill(line).join("\n");
assert.equal(generateRectangle('filled',2,2),filledRectangle_2_2);

//------------(Empty Rectangle Tests)------------//
let topLine = new Array(8).fill("*").join("");
let middleLine = "*" + new Array(6).fill(" ").join("");
middleLines = new Array(3).fill(middleLine).join("\n");
let emptyRectangle_5_8 = topLine +"\n"+ middleLines +"\n"+ topLine;

topLine = new Array(5).fill("*").join("");
middleLine = "*" + new Array(3).fill(" ").join("");
middleLines = new Array(10).fill(middleLine).join("\n");
let emptyRectangle_12_5 = topLine +"\n"+ middleLine +"\n"+ topLine;

//----------(Alternate Rectangle Tests)----------//
let starLine = new Array(8).fill("*").join("");
let dashLine = new Array(8).fill("-").join("");
let alternateRectangle_2_8 = starLine +"\n"+ dashLine;
assert.equal(generateRectangle('alternate',2,8),alternateRectangle_2_8);

starLine = new Array(2).fill("*").join("");
dashLine = new Array(2).fill("-").join("");
let alternateRectangle_5_2 = starLine +"\n"+ dashLine +"\n"+ starLine;
alternateRectangle_5_2 += "\n"+ dashLine +"\n"+ starLine;
assert.equal(generateRectangle('alternate',5,2),alternateRectangle_5_2);
