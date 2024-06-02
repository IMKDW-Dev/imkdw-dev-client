export interface OffsetPagingResponse<T> {
  items: T[];
  totalPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface OffsetPagingQuery {
  limit: number;
  page: number;
}
