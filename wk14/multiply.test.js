const multiply = require('./multiply');

describe("Function multiplies odd integer by the last even number", () => {
  test("Array contains previously multiplied elements", () => {

    const input = [2, 33, 4, 41, 6, 9, 77, 11, 13, 27];
    const output = [66, 164, 54, 462, 66, 78, 162];

    expect(multiply(input)).toEqual(output);
  });
});