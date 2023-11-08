import { describe, it } from "vitest";
import { compareNumbers, isGreaterThan10, isGreaterThan10AndEqualTo20, isJane } from "../../src/fundamentals-ex/comparisonExercises.js";

describe('Comparison Exercises', () => {
    it.skip('using == should be equal to Jane', () => {
        const name = 'Jane';
        expect(isJane(name)).toEqual('Jane');
    });

    it.skip('using === should return 10', () => {
        let number1 = '10';
        let number2 = '10';
        expect(compareNumbers(number1,number2)).toEqual(10);
    });

    it.skip('quantity are greater than 10', () => {
        const quantity = 15;
        expect(isGreaterThan10(quantity)).toBeGreaterThan(10);
    });
});

describe('Logical comparison', () => {
    it.skip('should be greater than 10 and equal to 20', () => {
        const numb = 20;
        expect(isGreaterThan10(numb)).toBeGreaterThan(10);
        expect(isGreaterThan10AndEqualTo20(numb)).toEqual(20);
    });
});