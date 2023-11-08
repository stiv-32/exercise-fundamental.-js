import { describe, it } from "vitest";
import { concatenateStrings, giveAllLettersInUppercase, giveOneLetter, giveTheIndexOfWord, removeWhiteSpaces, replaceFishWord, returnAString, returnHello } from "../../src/fundamentals-ex/stringExercises.js";

describe('String Exercises', () => {

    it('should say Hello', () => {
        expect(returnHello()).toBe('Hello');
    });

    it.skip('should return Hello World', () => {
        const helloWorld = "Hello World"
        const result = returnAString(helloWorld);
        expect(result).toBe('Hello World');
    });

    it.skip('should be return I Love JS', () => {
        expect(concatenateStrings()).toBe('I Love JS');
    });

    it.skip('should return letter g', () => {
        expect(giveOneLetter()).toBe('g');
    });

    it.skip('should return -1', () => {
        expect(giveTheIndexOfWord()).toEqual(-1);
    });

    it.skip('should return "Give a Man a Pussy Cat" ', () => {
        expect(replaceFishWord()).toBe('Give a Man a Pussy Cat');
    });

    it.skip('should return "RIDE HIM, COWBOY!"', () => {
        expect(giveAllLettersInUppercase()).toBe('RIDE HIM, COWBOY');
    });

    it.skip('should return "Hands Down"', () => {
        expect(removeWhiteSpaces()).toBe('Hands Down');
    });
});
