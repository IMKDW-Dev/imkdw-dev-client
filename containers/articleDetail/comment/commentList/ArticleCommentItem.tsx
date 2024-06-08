import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '../../../../utils/data';
import useCommentReply from '../../../../stores/use-comment-reply';
import { ArticleComment } from '../../../../services/@types/article-comment';

interface Props {
  comment: ArticleComment;
  isReply: boolean;
}
export default function ArticleCommentItem({ comment, isReply }: Props) {
  const { setReplyCommendId } = useCommentReply((state) => state);

  const handleReply = (commentId: number) => {
    setReplyCommendId(commentId);
  };

  return (
    <li className="flex w-full flex-col items-end gap-5 break-words" key={comment.id}>
      <div className="flex w-full items-center gap-3">
        <div className="profile relative h-[52px] w-[52px] overflow-hidden rounded-[100px]">
          <Image src={comment.author.profile} alt="Server" className="object-cover" fill />
        </div>
        <div>
          <div className="flex gap-2">
            <p className="font-bold">{comment.author.nickname}</p>
            <p>on</p>
            <p>{formatDate(comment.createdAt)}</p>
          </div>
        </div>
      </div>
      <p className="w-full pl-[65px]">{comment.content}</p>
      {isReply ? null : (
        <div className="w-full pl-[65px]">
          <Link
            href="#commentForm"
            className=" rounded-md bg-[#FF6481] p-2 pl-3 pr-3 text-sm text-white hover:bg-black"
            onClick={() => handleReply(comment.id)}
          >
            Reply
          </Link>
        </div>
      )}

      <div className="mt-2 w-full pl-[65px]" hidden={!comment.replies?.length}>
        {comment.replies?.length ? (
          <ul className="flex w-full flex-col gap-5 border-t border-gray-200 pt-5">
            {comment.replies.map((reply) => (
              <ArticleCommentItem key={reply.id} comment={reply} isReply />
            ))}
          </ul>
        ) : null}
      </div>
    </li>
  );
}
