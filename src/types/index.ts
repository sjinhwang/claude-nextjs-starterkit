export interface ApiResponse<T> {
  data: T;
  error: string | null;
  status: number;
}

// Next.js v15: params/searchParams가 Promise 타입으로 변경됨
export interface PageProps {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
