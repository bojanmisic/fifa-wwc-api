export type SortOrder = 'asc' | 'desc';

export interface Sort<T> {
  property: keyof T;
  order: SortOrder;
}