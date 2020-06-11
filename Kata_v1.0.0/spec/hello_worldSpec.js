let hello_world = require("../src/hello_world");

describe("Testing", () => {
  it("Return Test successful", () => {
    expect(hello_world()).toBe("Test successful");
  });
});
