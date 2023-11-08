import { describe, it } from "vitest";
import { countSheeps } from "../../src/micro-ex/countingSheep.js";


describe('Counting Sheep', () => {
    it.skip('should have 17 sheeps in total', () => {
        let list = [
            true,  true,  true,  false,
            true,  true,  true,  true ,
            true,  false, true,  false,
            true,  false, false, true ,
            true,  true,  true,  true ,
            false, false, true,  true
        ]

        let result = countSheeps(list);

        expect(result).toEqual('There are 17 sheep in total');
    });

    it.skip('should have only wolfs', () => {
        let list = [
            false, false, false
        ]

        let result = countSheeps(list);

        expect(result).toEqual('UPS!!! Wolfs eaten Sheeps');
    });
});