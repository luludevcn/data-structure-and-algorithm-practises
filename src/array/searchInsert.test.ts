import { searchInsert } from './searchInsert';

describe('searchInsert', () => {
    it('should return the correct index for [1, 3, 5, 6], 5', () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    });
    it('should return the correct index for [1, 2, 4], 5', () => {
        expect(searchInsert([1, 2, 4], 5)).toBe(3);
    });
    it('should return the correct index for [1, 3], 0', () => {
        expect(searchInsert([1, 3], 0)).toBe(0);
    });
    it('should return the correct index for [1, 2,3,4, 5, 6,7,8,9], 2', () => {
        expect(searchInsert([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toBe(1);
    });
});
