import { ReactNode } from "react";

export type NestedRouteTypes = {
  path: string;
  label: string;
  element: ReactNode;
  nestedItems?: NestedRouteTypes[];
}