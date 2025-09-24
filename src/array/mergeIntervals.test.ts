import { mergeIntervals } from './mergeIntervals';

describe('mergeIntervals', () => {
    it('should return the correct intervals for [[1,3],[2,6],[8,10],[15,18]]', () => {
        expect(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])).toEqual([[1, 6], [8, 10], [15, 18]]);
    });
    it('should return the correct intervals for [[1,3],[1,3]]', () => {
        expect(mergeIntervals([[1, 3], [1, 3]])).toEqual([[1, 3]]);
    });
    it('should return the correct intervals for [[1,3],[8,10],[15,18]]', () => {
        expect(mergeIntervals([[1, 3], [8, 10], [15, 18]])).toEqual([[1, 3], [8, 10], [15, 18]]);
    });
});
