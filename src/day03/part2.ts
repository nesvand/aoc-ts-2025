// Advent of Code - Day 3 - Part Two

export function part2(input: string): number {
    const items = input
        .replaceAll('\r', '')
        .split('\n').filter(Boolean).map((line) => line.split('').map((v) => Number.parseInt(v, 10)));

    let answer = 0;
    for (const bank of items) {
        const maxes = Array.from({ length: 12 }, () => 0);
        for (let i = 0; i < bank.length; i++) {
            const joltage = bank[i];
            for (let j = 0; j < maxes.length; j++) {
                if (joltage > maxes[j] && i < bank.length - maxes.length + j + 1) {
                    maxes[j] = joltage;
                    for (let k = j + 1; k < maxes.length; k++) {
                        maxes[k] = 0;
                    }
                    break;
                }
            }
        }

        answer += Number.parseInt(maxes.map((v) => v.toString()).join(''), 10);
    }

    return answer;
}
