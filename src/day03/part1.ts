// Advent of Code - Day 3 - Part One

import { Grid } from "@lib/grid";

export function part1(input: string): number {
    const items = input
        .replaceAll('\r', '')
        .split('\n').filter(Boolean).map((line) => line.split('').map((v) => Number.parseInt(v, 10)));

    // Naive
    let answer = 0;
    for (const bank of items) {
        let highest = 0;
        for (let i = 0; i < bank.length - 1; i++) {
            for (let j = i + 1; j < bank.length; j++) {
                highest = Math.max(bank[i] * 10 + bank[j], highest);
            }
        }
        answer += highest;
    }

    return answer;
}
