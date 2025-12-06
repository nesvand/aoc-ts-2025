// Advent of Code - Day 1
import { expect, test } from 'bun:test';
import { part1, part2 } from '../src/day01';

let input = '';
try {
    input = await Bun.file('src/day01/resources/input.txt').text();
} catch (e) {
    // ignore
}

test('part one test', () => {
    // biome-ignore lint/style/noUnusedTemplateLiteral: Empty by design
    expect(part1(`L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`)).toBe(3);
});

if (input !== '') {
    test('part one answer', () => {
        expect(part1(input)).toBe(1100);
    });
}

test('part two test', () => {
    // biome-ignore lint/style/noUnusedTemplateLiteral: Empty by design
    expect(part2(`L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`)).toBe(6);
});

if (input !== '') {
    test('part two answer', () => {
        expect(part2(input)).toBe(6358);
    });
}
