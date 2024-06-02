import { NextRequest, NextResponse } from 'next/server';
import { X_PAGING_PAGE, X_PATHNAME, X_SEARCH_QUERY } from './constants/header.constants';

export default function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(X_PATHNAME, request.nextUrl.pathname);
  requestHeaders.set(X_SEARCH_QUERY, request.nextUrl.searchParams.get('query') || '');
  requestHeaders.set(X_PAGING_PAGE, request.nextUrl.searchParams.get('page') || '');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
