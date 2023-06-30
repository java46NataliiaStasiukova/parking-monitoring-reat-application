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
        index = items.slice(1).findIndex(item => pathname.includes(item.path)) + 1;
    }
    return index < 0 ? 0 : index;
}