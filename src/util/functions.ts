import { RouteTypes } from "../models/RouteTypes";

export function range (minInclusive: number, maxExclusive: number): number[] {
    const res: number[] = [];
    for (let i = minInclusive; i < maxExclusive; i++) {
        res.push(i);
    }
    return res;
}

export function getRouteIndex(items: RouteTypes[], pathname: string): number {
    let index =  items.findIndex(item => item.path === pathname);
    if (index < 0) {
        index = 0;
    }
    return index;
}