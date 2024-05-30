'use client';

import { useEffect, useState } from 'react';

import { ArticleCommentDetail } from '../../../../services/@types/article-comment';
import useArticleComment from '../../../../stores/use-article-comment';
import ArticleCommentItem from './ArticleCommentItem';

interface Props {
  comments: ArticleCommentDetail[];
}
export default function ArticleCommentList({ comments }: Props) {
  const [articleComments, setArticleComments] = useState<ArticleCommentDetail[]>(comments);
  const { newArticleComment } = useArticleComment((state) => state);

  useEffect(() => {
    if (newArticleComment) {
      if (newArticleComment.parentId) {
        setArticleComments((prevComments) =>
          prevComments.map((comment) => {
            if (comment.id === newArticleComment.parentId) {
              return {
                ...comment,
                replies: [...comment.replies, newArticleComment],
              };
            }

            return comment;
          }),
        );
      } else {
        setArticleComments((prevComments) => [...prevComments, newArticleComment]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newArticleComment]);

  return (
    <section className="flex w-full flex-col gap-5 pt-10">
      <h3 className="text-xl">
        ✨ <b>Comments</b>
      </h3>
      <ul className="flex flex-col gap-10">
        {articleComments.map((comment) => (
          <ArticleCommentItem key={comment.id} comment={comment} isReply={false} />
        ))}
      </ul>
    </section>
  );
}
