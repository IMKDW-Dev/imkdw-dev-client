'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { postCreateArticleComment } from '../../../services/article-comment';
import useArticleComment from '../../../stores/use-article-comment';

interface Props {
  articleId: string;
}

export default function ArticleCommentForm({ articleId }: Props) {
  const [comment, setComment] = useState('');
  const { setNewArticleComment } = useArticleComment((state) => state);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const createdComment = await postCreateArticleComment(articleId, { content: comment, parentId: null });
    setNewArticleComment(createdComment);
    setComment('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  return (
    <form className="flex w-full flex-col items-start gap-3 pt-10" onSubmit={handleSubmit}>
      <h3>
        <b>Leave a Reply</b>
      </h3>
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
