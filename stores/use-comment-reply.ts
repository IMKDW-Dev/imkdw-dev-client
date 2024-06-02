import { create } from 'zustand';

interface CommentReplyStore {
  replyCommentId: number | null;
  setReplyCommendId(data: number | null): void;
}

const useCommentReply = create<CommentReplyStore>((set) => ({
  replyCommentId: null,
  setReplyCommendId: (replyCommentId) => set({ replyCommentId }),
}));

export default useCommentReply;
