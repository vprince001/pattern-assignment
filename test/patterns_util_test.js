const assert = require("assert");
const util_lib = require("../src/util_lib.js");

const {repeatCharacter} = util_lib;
assert.equal(repeatCharacter("*", 0),"");
assert.equal(repeatCharacter("*", 1),"*");
assert.equal(repeatCharacter("-", 2),"--");
