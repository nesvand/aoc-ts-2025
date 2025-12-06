// Advent of Code - Day 2 - Part One

export function part1(input: string): number {
    const ranges: Array<[number, number]> = input.trim().split(',').map((line) => line.split('-').map((v) => parseInt(v, 10)) as [number, number]);

    return ranges.reduce((acc, [start, end]) => {
        let total = 0;
        for (let curr = start; curr <= end; curr++) {
            total += (/^(\d+)\1$/.test(curr.toString())) ? curr : 0;
        }
        return acc + total;
    }, 0);
}
