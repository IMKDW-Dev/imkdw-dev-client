type IErrorMessage = { [key: string]: string };

const BAD_REQUEST = {
  '401001': '인증이 만료되었습니다. 다시 로그인해주세요',
  '401002': '인증이 만료되었습니다. 다시 로그인해주세요',
} as const;

const FORBIDDEN = {
  '403001': '답글에는 답글을 작성할 수 없습니다',
  '403002': '게시글이 존재하는 카테고리는 삭제할 수 없습니다',
  '403003': '권한이 없습니다',
};

const NOT_FOUND = {
  '404001': '카테고리를 찾을 수 없습니다',
  '404002': '게시글을 찾을 수 없습니다',
  '403003': '댓글을 찾을 수 없습니다',
} as const;

const CONFLICT = {
  '409001': '중복된 이메일 입니다',
  '409002': '중복된 카테고리 이름 입니다',
  '409003': '중복된 게시글 ID 입니다',
  '409004': '중복된 닉네임 입니다',
} as const;

const ERROR_MESSAGE: IErrorMessage = {
  ...BAD_REQUEST,
  ...FORBIDDEN,
  ...NOT_FOUND,
  ...CONFLICT,
};

export default ERROR_MESSAGE;