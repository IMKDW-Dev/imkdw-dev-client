export interface GetUserInfoResponse {
  userId: string;
  nickname: string;
  profile: string;
  role: 'normal' | 'admin';
}
