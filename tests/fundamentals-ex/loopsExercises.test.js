import { describe, it } from "vitest";
import { addSpanishInternationalPrefixes, countdown, createNumberList, makePizza } from "../../src/fundamentals-ex/loopsExercises.js";


describe('Loops', () => {
    it.skip('while loop, should return GO when count arrive to 0', () => {
        expect(countdown()).toEqual('GO');
    });

    it.skip('do ... while', () => {
        expect(createNumberList()[0]).toEqual(1); // comprueba que el primer número sea el uno
        expect(createNumberList()).toContain(10); // comprueba que el array contiene el número 10
        expect(createNumberList()).toHaveLength(10); // comprueba que la longitud del array es de 10
    });

    it.skip('for loop', () => {

        let pizza = {
            ingredient1: 'masa',
            ingredient2: 'tomate',
            ingredient3: 'mozzarella',
            ingredient4: 'cheddar',
            ingredient5: 'gorgonzola',
            ingredient6: 'parmesano'
        }

        expect(makePizza()).toEqual(pizza);
    });

    it.skip('foreach loop', () => {
        let phoneNumberList = ['+34-054060719', '+34-029830776', '+34-159949736', '+34-663170151', '+34-513407584'];

        expect(addSpanishInternationalPrefixes()).toContain('+34-159949736');
        expect(addSpanishInternationalPrefixes()).toEqual(expect.arrayContaining(phoneNumberList));;

    });
});