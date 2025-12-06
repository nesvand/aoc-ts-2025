// Advent of Code - Day 2 - Part One

import { math } from "lib";

// Performant solution as described by https://www.reddit.com/r/adventofcode/comments/1pbzqcx/comment/nrwn5ta/

export function sumRepeatedInRange(lower: number, upper: number, repeatingLimit?: number): number {
    const maxTotalDigits = upper.toString().length;
    const candidates: number[] = [];

    for (let d = 1; d <= maxTotalDigits; d++) {
        const thisRepeatingLimit = repeatingLimit ? repeatingLimit : Math.trunc(maxTotalDigits / d);
        for (let r = 2; r <= thisRepeatingLimit; r++) {
            // 10^d and 10^(d*r)
            const pow10_d = Math.pow(10, d);
            const pow10_dr = Math.pow(10, d * r);

            const f = Math.trunc((pow10_dr - 1) / (pow10_d - 1));

            if (f > upper) continue; // even k = 1 would be too big

            const min_k = Math.pow(10, d - 1);
            const max_k = pow10_d - 1;

            const k_lo = Math.max(Math.trunc((lower + f - 1) / f), min_k);
            const k_hi = Math.min(Math.trunc(upper / f), max_k);

            if (k_lo > k_hi) continue;

            for (let k = k_lo; k <= k_hi; k++) {
                const n = k * f;
                if (n >= lower && n <= upper) candidates.push(n);
            }
        }
    }

    return Array.from(new Set(candidates)).reduce((acc, v) => acc + v, 0);
}

export function part1(input: string): number {
    const ranges: Array<[number, number]> = input.trim().split(',').map((line) => line.split('-').map((v) => parseInt(v, 10)) as [number, number]);

    let answer = 0;
    for (const [upper, lower] of ranges) {
        answer += sumRepeatedInRange(upper, lower, 2);
    }

    return answer;

    // return ranges.reduce((acc, [start, end]) => {
    //     let total = 0;
    //     for (let curr = start; curr <= end; curr++) {
    //         total += (/^(\d+)\1$/.test(curr.toString())) ? curr : 0;
    //     }
    //     return acc + total;
    // }, 0);
}
