import { transform } from "../src/romanizer";

describe('convert arabic numbers to roman numerals', () => {
    it('should return X when get 10', () => {
        const result = transform(10);

        expect(result).toEqual("X");
    });
});