// Advent of Code - Day 2
import { expect, test } from 'bun:test';
import { part1, part2 } from '../src/day02';

let input = '';
try {
    input = await Bun.file('src/day02/resources/input.txt').text();
} catch (e) {
    // ignore
}

test('part one test', () => {
    // biome-ignore lint/style/noUnusedTemplateLiteral: Empty by design
    expect(part1(`11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`)).toBe(1227775554);
});

if (input !== '') {
    test('part one answer', () => {
        expect(part1(input)).toBe(18893502033);
    });
}

test('part two test', () => {
    // biome-ignore lint/style/noUnusedTemplateLiteral: Empty by design
    expect(part2(`11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`)).toBe(4174379265);
});

if (input !== '') {
    test('part two answer', () => {
        expect(part2(input)).toBe(26202168557);
    });
}
