const assert = require("assert");
const { add, mul, div, sub } = require("../calculator");

describe("add", function () {
  it("5 + 2 = 7", function () {
    assert.equal(add(5, 2), 7);
  });
  it("5 + 2 = 8", function () {
    assert.equal(add(5, 2), 8);
  });
});

describe("mul", function () {
  it("5 * 2 = 10", function () {
    assert.equal(mul(5, 2), 10);
  });
  it("5 * 2 = 12", function () {
    assert.equal(mul(5, 2), 12);
  });
});

describe("div", function () {
  it("10 / 2 = 5", function () {
    assert.equal(div(10, 2), 5);
  });
  it("10 / 2 = 2", function () {
    assert.equal(div(10, 2), 2);
  });
});

describe("sub", function () {
  it("5 - 2 = 3", function () {
    assert.equal(sub(5, 2), 3);
  });
  it("5 - 2 = 5", function () {
    assert.equal(sub(5, 2), 5);
  });
});
