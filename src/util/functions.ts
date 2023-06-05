export function range (minInclusive: number, maxExclusive: number): number[] {
    const res: number[] = [];
    for (let i = minInclusive; i < maxExclusive; i++) {
        res.push(i);
    }
    return res;
}