// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。
// intervals[i].length == 2

export function mergeIntervals(intervals: number[][]): number[][] {
    intervals.sort((i1, i2) => {
        return i1[0] - i2[0];
    })
    return intervals.reduce((pre, cur, i) => {
        if (pre[0]) {
            if (pre[pre.length - 1][1] >= cur[0] && pre[pre.length - 1][1] <= cur[1]) {
                pre[pre.length - 1][1] = cur[1];
            } else if (pre[pre.length - 1][1] < cur[0]) {
                pre.push(cur)
            }
        } else {
            pre.push(cur);
        }
        return pre;
    }, <number[][]>[])
}