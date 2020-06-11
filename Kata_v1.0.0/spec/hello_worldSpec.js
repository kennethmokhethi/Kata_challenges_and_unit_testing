let hello_world = require("../src/hello_world");

describe("Testing", () => {
  it("Return Test successfu", () => {
    expect(hello_world()).toBe("Test successful");
  });
});
