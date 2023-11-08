import { describe, expect, it } from 'vitest';
import { example } from "../src/js/example.js";

describe.skip('Example test', () => {
    
    it.skip('should return Hello World', () => {
        const result = example()
        expect(result).toBe("Hello World")
    });

});