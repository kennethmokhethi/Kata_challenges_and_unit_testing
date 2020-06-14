let hello_world = require("../src/hello_world");

/*
describe("UniqueIntegerForTheKataChallengeSuite={Initials_KC_UniqueInteger eg GK_KC13"}, () => {
 
  it("Short descriptive deatils, , () => {
   
      TEST IMPLEMENTATION


  });
});
*/

describe("KMM_KC00", () => {
  it("Return Test successful", () => {
    expect(hello_world()).toBe("Test successful");
  });
});
