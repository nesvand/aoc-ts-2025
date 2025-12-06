// Advent of Code - Day 2 - Part Two

import { sumRepeatedInRange } from "./part1";

export function part2(input: string): number {
    const ranges: Array<[number, number]> = input.trim().split(',').map((line) => line.split('-').map((v) => parseInt(v, 10)) as [number, number]);

    let answer = 0;
    for (const [upper, lower] of ranges) {
        answer += sumRepeatedInRange(upper, lower);
    }

    return answer;

    // return ranges.reduce((acc, [start, end]) => {
    //     let total = 0;
    //     for (let curr = start; curr <= end; curr++) {
    //         total += (/^(\d+)\1+$/.test(curr.toString())) ? curr : 0;
    //     }
    //     return acc + total;
    // }, 0);
}
