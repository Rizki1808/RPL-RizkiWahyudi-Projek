const Calculator = require("../helper/helper-RizkiWahyudi");
const expect = require("chai").expect;

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe("#add", () => {
    it("should return the sum of two numbers", () => {
      const result = calculator.add(2, 3);
      expect(result).to.equal(5);
    });
  });

  describe("#subtract", () => {
    it("should return the difference of two numbers", () => {
      const result = calculator.subtract(3, 2);
      expect(result).to.equal(1);
    });
  });

  describe("#multiply", () => {
    it("should return the product of two numbers", () => {
      const result = calculator.multiply(2, 3);
      expect(result).to.equal(6);
    });
  });

  describe("#divide", () => {
    it("should return the quotient of two numbers", () => {
      const result = calculator.divide(6, 3);
      expect(result).to.equal(2);
    });

    it("should throw an error when dividing by zero", () => {
      expect(() => {
        calculator.divide(6, 0);
      }).to.throw("Division by zero is not allowed");
    });
  });
});
