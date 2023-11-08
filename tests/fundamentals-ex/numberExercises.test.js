import { describe, it } from "vitest";
import { checkIfIsInteger, checkIfNumbIsDivisibleByThree, checkIfNumberIsInfinite, checkVariable, divide, multiply, subtract, sum } from "../../src/fundamentals-ex/numberExercises.js";

describe('Numbers', () => {

    it.skip('should return "number"', () => {        
        expect(checkVariable(1)).toBe("number");
    });

    it.skip('should return false if is not an integer', () => {
        expect(checkIfIsInteger(2.3)).toBe(false);
    });

    it.skip('should return "Number is Infinite"', () => {
        const number = 5 * Infinity ;
        expect(checkIfNumberIsInfinite(number)).toBe("Number is Infinite");
    });

});

describe('Arithmetic operators', () => {
    it.skip('should return 25', () => {
        const numb1 = 10;
        const numb2 = 15;
        expect(sum(numb1,numb2)).toBe(25);
    });

    it.skip('should return 30 after subtract', () => {
        const numb1 = 55;
        expect(subtract(numb1)).toBe(30);
    });

    it.skip('should return 15 after multiply', () => {
        const numb1 = 3;
        expect(multiply(numb1)).toBe(15);
    });

    it.skip('should return 25 after divide', () => {
        const numbOne = 50;
        expect(divide(numbOne)).toBe(25);
    });

    it.skip('should return 0 after use modulus operator', () => {
        const numb1 = 3;
        expect(checkIfNumbIsDivisibleByThree(numb1)).toBe('Number is divisible by 3');
    });
});