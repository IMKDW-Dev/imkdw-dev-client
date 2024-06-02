export interface User {
  nickname: string;
  profile: string;
}

export interface GetUserInfoResponse {
  id: string;
  nickname: string;
  profile: string;
  role: 'normal' | 'admin';
}

export interface PatchUpdateUserInfoBody extends Partial<Pick<User, 'nickname'>> {
  profileImage?: File | null;
}
