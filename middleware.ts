import { NextRequest, NextResponse } from 'next/server';
import { X_CATEGORY_ID, X_PAGING_PAGE, X_PATHNAME, X_REAL_IP, X_SEARCH_QUERY } from './constants/header.constants';

export default function middleware(request: NextRequest) {
  const ip = (request.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0];

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(X_PATHNAME, request.nextUrl.pathname);
  requestHeaders.set(X_PAGING_PAGE, request.nextUrl.searchParams.get('page') || '');
  requestHeaders.set(X_CATEGORY_ID, request.nextUrl.searchParams.get('categoryId') || '');
  requestHeaders.set(X_REAL_IP, ip);

  const searchQuery = request.nextUrl.searchParams.get('search') || '';
  const encodedSearchQuery = encodeURIComponent(searchQuery);
  requestHeaders.set(X_SEARCH_QUERY, encodedSearchQuery);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
