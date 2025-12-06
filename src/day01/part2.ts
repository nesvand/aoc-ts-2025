// Advent of Code - Day 1 - Part Two

import { mod } from "@lib/math";

export function part2(input: string): number {
    const items = input
        .replaceAll('\r', '')
        .split('\n').filter(Boolean)
        .map<[string, number]>((combination) => [combination.slice(0, 1), parseInt(combination.slice(1), 10)])
        .map<[string, number, number]>(([direction, amount]) => {
            const fullRotations = Math.trunc(amount / 100);
            return [direction, mod(amount, 100), fullRotations];
        });

    let position = 50;
    let count = 0;

    for (const [direction, amount, fullRotations] of items) {
        count += fullRotations;

        switch (direction) {
            case 'L': {
                count += position !== 0 && position - amount < 0 ? 1 : 0;
                position -= amount;
                break;
            }
            case 'R': {
                count += position + amount > 100 ? 1 : 0;
                position += amount;
                break;
            }
        }
        position = mod(position, 100);
        if (position === 0) count++;
    }

    return count;
}
