const assert = require("assert");
const util_lib = require("../src/util_lib.js");

const {repeatCharacter} = util_lib;
const {generateFilledRectangle} = util_lib;

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
