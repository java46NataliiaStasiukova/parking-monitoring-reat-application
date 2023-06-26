import { NestedRouteTypes } from "../models/NestedRouteTypes";


export function range (minInclusive: number, maxExclusive: number): number[] {
    const res: number[] = [];
    for (let i = minInclusive; i < maxExclusive; i++) {
        res.push(i);
    }
    return res;
}

export function getRouteIndex(items: NestedRouteTypes[], pathname: string): number {
    let index = items.findIndex(item => item.path === pathname);

    if (index < 0) {
        index = items.findIndex(item => pathname.includes(item.path));
    }
    return index < 0 ? 0 : index;
}