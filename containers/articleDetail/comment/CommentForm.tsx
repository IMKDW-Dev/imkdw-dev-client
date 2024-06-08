'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { postCreateArticleComment } from '../../../services/article-comment';
import useArticleComment from '../../../stores/use-article-comment';
import useCommentReply from '../../../stores/use-comment-reply';

interface Props {
  articleId: string;
}

export default function ArticleCommentForm({ articleId }: Props) {
  const [comment, setComment] = useState('');
  const { setNewArticleComment } = useArticleComment((state) => state);
  const { replyCommentId, setReplyCommendId } = useCommentReply((state) => state);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const createdComment = await postCreateArticleComment(articleId, { content: comment, parentId: replyCommentId });
    setNewArticleComment(createdComment);
    setComment('');
    setReplyCommendId(null);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleCancelReply = () => {
    setReplyCommendId(null);
  };

  return (
    <form className="mobile:px-3 flex w-full flex-col items-start gap-3 pt-10" onSubmit={handleSubmit} id="commentForm">
      <div className="flex gap-3">
        <h3 className="font-bold">Leave a Reply</h3>
        {replyCommentId && (
          <button type="button" onClick={handleCancelReply} className="font-bold text-red-400">
            Click to Cancel reply
          </button>
        )}
      </div>

      <div className="w-full">
        <textarea
          className="box-shadow min-h-[150px] w-full resize-none rounded-md  border border-box p-5 outline-accent"
          placeholder="Comment"
          value={comment}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="rounded-md bg-[#FF6481] p-2 pl-5 pr-5 text-white hover:bg-black">
        Post Comment
      </button>
    </form>
  );
}
