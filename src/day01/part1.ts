// Advent of Code - Day 1 - Part One

import { mod } from "@lib/math";

export function part1(input: string): number {
    const items = input
        .replaceAll('\r', '')
        .split('\n').filter(Boolean)
        .map<[string, number]>((combination) => [combination.slice(0, 1), parseInt(combination.slice(1), 10)]);

    let position = 50;
    let count = 0;

    for (const [direction, amount] of items) {
        switch (direction) {
            case 'L': {
                position = mod(position - amount, 100);
                break;
            }
            case 'R': {
                position = mod(position + amount, 100);
            }
        }
        if (position === 0) count++;
    }

    return count;
}
