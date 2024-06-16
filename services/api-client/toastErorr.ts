import { toast } from 'react-toastify';
import ERROR_MESSAGE from '../../constants/error.constant';

// eslint-disable-next-line import/prefer-default-export
export const toastErrorMessage = (errorCode: string) => {
  if (typeof window !== 'undefined') {
    const errorMessage = ERROR_MESSAGE[errorCode] ?? '일시적인 오류가 발생했습니다. 잠시후 다시 시도해주세요';
    toast.error(errorMessage);
  }
};
