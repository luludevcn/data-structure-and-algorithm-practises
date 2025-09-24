import { pivotIndex } from './pivotIndex';

describe('pivotIndex', () => {
    it('should return the correct pivot index for [1, 7, 3, 6, 5, 6]', () => {
        expect(pivotIndex([1, 7, 3, 6, 5, 6])).toBe(3);
    });

    it('should return -1 if no pivot index exists', () => {
        expect(pivotIndex([1, 2, 3])).toBe(-1);
    });

    it('should handle single element array', () => {
        expect(pivotIndex([2])).toBe(0);
    });

    it('should handle all 0 array', () => {
        expect(pivotIndex([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
    });
});
