export interface User {
  nickname: string;
  profile: string;
}

export interface GetUserInfoResponse {
  userId: string;
  nickname: string;
  profile: string;
  role: 'normal' | 'admin';
}
