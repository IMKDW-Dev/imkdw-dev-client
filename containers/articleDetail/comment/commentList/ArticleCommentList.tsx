'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import { ArticleCommentDetail } from '../../../../services/@types/article-comment';
import useArticleComment from '../../../../stores/use-article-comment';
import useCommentReply from '../../../../stores/use-comment-reply';
import { formatDate } from '../../../../utils/data';

interface Props {
  comments: ArticleCommentDetail[];
}
export default function ArticleCommentList({ comments }: Props) {
  const [articleComments, setArticleComments] = useState<ArticleCommentDetail[]>(comments);
  const { newArticleComment } = useArticleComment((state) => state);
  const { setReplyCommendId } = useCommentReply((state) => state);

  const handleReply = (commentId: number) => {
    setReplyCommendId(commentId);
  };

  useEffect(() => {
    if (newArticleComment) {
      setArticleComments((prev) => [...prev, newArticleComment]);
    }
  }, [newArticleComment]);

  return (
    <section className="flex w-full flex-col gap-5 pt-10">
      <h3 className="text-xl">
        ✨ <b>Comments</b>
      </h3>
      <ul className="flex flex-col gap-10">
        {articleComments.map((comment) => (
          <li className="flex flex-col items-start gap-3" key={comment.id}>
            <div className="flex items-center gap-3">
              <div className="profile relative h-[52px] w-[52px] overflow-hidden rounded-[100px]">
                <Image src={comment.author.profile} alt="Server" className="object-cover" />
              </div>
              <div>
                <div className="flex gap-2">
                  <p className="font-bold">{comment.author.nickname}</p>
                  <p>on</p>
                  <p>{formatDate(comment.createdAt)}</p>
                </div>
              </div>
            </div>
            <p className="pl-[63px]">{comment.content}</p>
            <Link
              href="#commentForm"
              className="ml-[63px] mt-4 rounded-md bg-[#FF6481] p-1 pl-4 pr-4 text-white hover:bg-black"
              onClick={() => handleReply(comment.id)}
            >
              Reply
            </Link>
          </li>
        ))}

        {/* <li className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <div className="profile relative h-[52px] w-[52px] overflow-hidden rounded-[100px]">
              <Image src="/images/pepe-hacker.png" layout="fill" alt="Server" objectFit="cover" />
            </div>
            <div>
              <div>
                <b>imkdw</b> on 2024. 05. 18
              </div>
            </div>
          </div>
          <p className="pl-[63px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button
            type="button"
            className="ml-[63px] mt-4 rounded-md bg-[#FF6481] p-1 pl-4 pr-4 text-white hover:bg-black"
          >
            Reply
          </button>
        </li> */}
      </ul>
    </section>
  );
}
