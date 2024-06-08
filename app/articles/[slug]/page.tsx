import { notFound } from 'next/navigation';

import generateCustomMetadata from '../../../utils/metadata';
import { getArticleDetail } from '../../../services/article';
import ArticleCommentList from '../../../containers/articleDetail/comment/commentList/ArticleCommentList';
import ArticleDetailHeader from '../../../containers/articleDetail/header/ArticleDetailHeader';
import ArticleDetailContent from '../../../containers/articleDetail/content/ArticleDetailContent';
import ArticleShare from '../../../containers/articleDetail/share/ArticleShare';
import ArticleCommentForm from '../../../containers/articleDetail/comment/CommentForm';
import { formatDate } from '../../../utils/data';
import RelationArticles from '../../../containers/articleDetail/relationArticles/RelationArticles';
import ArticleViewCount from '../../../containers/articleDetail/viewCount/ArticleViewCount';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const articleId = params.slug;

  try {
    const articleDetail = await getArticleDetail(articleId);
    return {
      ...generateCustomMetadata({
        title: articleDetail.title,
        desc: articleDetail.content,
        link: `/articles/${articleId}`,
        image: `/images/${articleDetail.thumbnail}`,
      }),
    };
  } catch (error: any) {
    if (error.message?.includes('404')) {
      return notFound();
    }
  }

  return null;
}

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const articleDetail = await getArticleDetail(params.slug);

  return (
    <article className="mobile:py-5 mobile:px-0 flex w-full flex-col items-center gap-12 px-[100px] py-[50px]">
      {/* 게시글 내용 */}
      <section className="box-shadow mobile:p-4 relative flex w-full flex-col gap-8 rounded-lg border border-box bg-white p-8">
        <ArticleDetailHeader title={articleDetail.title} createdAt={formatDate(articleDetail.createdAt)} />
        <section className="flex h-[150px] items-center justify-center rounded-xl bg-black text-center text-3xl text-white">
          Advertisement
        </section>
        <ArticleDetailContent content={articleDetail.content} />
        <ArticleShare article={articleDetail} />
      </section>

      {/* 이전/다음 게시글 */}
      {/* <section className="flex w-full items-center justify-between">
        <div className="w-[45%]">
          <Link href="/articles/0" className="w-full">
            <div className="box-shadow flex gap-5 rounded-lg bg-[#8665f0] p-7 pl-0">
              <div className="flex w-[55px] items-center justify-center rounded-r-[100px] bg-white">
                <Image src="/images/icon/left.svg" width={24} height={24} alt="Left" />
              </div>
              <div className="text-white">
                <p>Previous Article</p>
                <b className="text-sm">Welcome to IMKDW Dev</b>
              </div>
            </div>
          </Link>
        </div>
        <div className="h-[50px] w-[2px] bg-[#FEEAEC]" />
        <div className="w-[45%]">
          <Link href="/articles/2">
            <div className="box-shadow flex w-full justify-end gap-5 rounded-lg bg-[#8665f0] p-7 pr-0">
              <div className="text-right text-white">
                <p>Previous Article</p>
                <b className="text-sm">Welcome to IMKDW Dev</b>
              </div>
              <div className="flex w-[55px] items-center justify-center rounded-l-[100px] bg-white">
                <Image src="/images/icon/right.svg" width={24} height={24} alt="Left" />
              </div>
            </div>
          </Link>
        </div>
      </section> */}

      {/* 카테고리에 속한 다른 게시글들 */}
      <RelationArticles article={articleDetail} />

      {/* 댓글 목록 */}
      <ArticleCommentList comments={articleDetail.comments} />

      {/* 댓글 작성창 */}
      <ArticleCommentForm articleId={articleDetail.id} />

      {/* 조회수 추가용 컴포넌트 */}
      <ArticleViewCount article={articleDetail} />
    </article>
  );
}
