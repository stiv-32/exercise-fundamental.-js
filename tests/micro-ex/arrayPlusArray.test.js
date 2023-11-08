import { describe, it } from "vitest";
import { arrSum } from '../../src/micro-ex/arrayPlusArray.js';

describe('Fundamentals level 1 - Array Plus Array', () => {
    it.skip('should return 21', () => {
        let firstArr = [1, 2, 3];
        let secondArr = [4, 5, 6];
        let result = arrSum(firstArr, secondArr);
        expect(result).toEqual(21);
    });

    it.skip('should return -21', () => {
        let firstArr = [-1, -2, -3];
        let secondArr = [-4, -5, -6];
        let result = arrSum(firstArr, secondArr);
        expect(result).toEqual(-21);
    });

    it.skip('should return 15', () => {
        let firstArr = [0, 0, 0];
        let secondArr = [4, 5, 6];
        let result = arrSum(firstArr, secondArr);
        expect(result).toEqual(15);
    });

    it.skip('should return 2100', () => {
        let firstArr = [100, 200, 300];
        let secondArr = [400, 500, 600];
        let result = arrSum(firstArr, secondArr);
        expect(result).toEqual(2100);
    });
});