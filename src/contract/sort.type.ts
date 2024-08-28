type SortOrder = 'asc' | 'desc';

interface Sort<T> {
  property: keyof T;
  order: SortOrder;
}