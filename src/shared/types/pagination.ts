export type Pagination<T> = {
  count: number;
  next: null | string; // TODO: check type
  previous: null | string; // TODO: check type
  results: T[];
};
