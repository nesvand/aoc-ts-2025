// Advent of Code - Day 3
import { expect, test } from 'bun:test';
import { part1, part2 } from '../src/day03';

let input = '';
try {
    input = await Bun.file('src/day03/resources/input.txt').text();
} catch (e) {
    // ignore
}

test('part one test', () => {
    // biome-ignore lint/style/noUnusedTemplateLiteral: Empty by design
    expect(part1(`987654321111111
811111111111119
234234234234278
818181911112111
`)).toBe(357);
});

if (input !== '') {
    test('part one answer', () => {
        expect(part1(input)).toBe(0);
    });
}

test('part two test', () => {
    // biome-ignore lint/style/noUnusedTemplateLiteral: Empty by design
    expect(part2(``)).toBe(0);
});

if (input !== '') {
    test('part two answer', () => {
        expect(part2(input)).toBe(0);
    });
}
