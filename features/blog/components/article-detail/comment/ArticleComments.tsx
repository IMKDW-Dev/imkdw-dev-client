'use client';

import { useEffect, useState } from 'react';
import { ArticleComment } from '../../../../../services/@types/article-comment';
import useArticleComment from '../../../../../stores/use-article-comment';
import ArticleCommentItem from './ArticleCommentItem';

interface Props {
  comments: ArticleComment[];
}
export default function ArticleComments({ comments }: Props) {
  const [articleComments, setArticleComments] = useState<ArticleComment[]>(comments);
  const { newArticleComment } = useArticleComment((state) => state);

  /**
   * 댓글 작성시 낙관적 업데이트
   */
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
    <section className="flex w-full flex-col gap-5 pt-10 mobile:px-3">
      <h3 className="text-xl">
        ✨ <b>Comments</b>
      </h3>
      {articleComments.length ? (
        <ul className="flex w-full flex-col gap-10">
          {articleComments.map((comment) => (
            <ArticleCommentItem key={comment.id} comment={comment} isReply={false} />
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center p-10 text-2xl tracking-widest text-gray-400">
          Nothing Yet...😅
        </div>
      )}
    </section>
  );
}
