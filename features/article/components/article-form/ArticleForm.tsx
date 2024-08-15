'use client';

import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Article } from '../../../../services/@types/article';
import { Category } from '../../../../services/@types/category';
import useArticleForm from '../../hooks/use-article-form';
import ArticleFormWrapper from './ArticleFormWrapper';
import ArticleFormThumbnail from './ArticleFormThumbnail';
import ArticleFormToggle from './ArticleFormToggle';
import ArticleFormId from './ArticleFormId';
import ArticleFormTitle from './ArticleFormTitle';
import ArticleFormCategory from './ArticleFormCategory';
import ArticleFormContent from './ArticleFormContent';
import ArticleFormTag from './tag/ArticleFormTag';
import ArticleFormTagList from './tag/ArticleFormTagList';
import ArticleFormSubmitButton from './ArticleFormSubmitButton';

interface Props {
  article?: Article;
  categories: Category[];
  mode: 'new' | 'edit';
}

export default function ArticleForm({ categories, article, mode }: Props) {
  // 라우터
  const router = useRouter();

  // 게시글 데이터
  const {
    articleData,
    handleChangeCategory,
    handleChangeContent,
    handleChangeTitle,
    handleUploadImage,
    handleChangeTags,
    handleChangeId,
    handleChangeThumbnail,
    handleChangeVisible,
    handleCreateArticle,
    handleUpdateArticle,
  } = useArticleForm({ article });
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id } = await (mode === 'new' ? handleCreateArticle() : handleUpdateArticle());
    router.push(`/articles/${id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="pt-5">
      {/* 썸네일, 활성여부 버튼 */}
      <ArticleFormWrapper title="Thumbnail">
        <div className="flex">
          <ArticleFormThumbnail _thumbnailUrl={articleData.thumbnailUrl} changeThumbnail={handleChangeThumbnail} />
          <ArticleFormToggle visible={articleData.visible} changeVisible={handleChangeVisible} />
        </div>
      </ArticleFormWrapper>

      {/* 아이디 */}
      {mode === 'new' ? (
        <ArticleFormWrapper title="ID">
          <ArticleFormId id={articleData.id} changeId={handleChangeId} />
        </ArticleFormWrapper>
      ) : null}

      {/* 제목 */}
      <ArticleFormWrapper title="Title">
        <ArticleFormTitle title={articleData.title} changeTitle={handleChangeTitle} />
      </ArticleFormWrapper>

      {/* 카테고리 */}
      <ArticleFormWrapper title="Category">
        <ArticleFormCategory
          categories={categories}
          categoryId={articleData.categoryId}
          changeCategory={handleChangeCategory}
        />
      </ArticleFormWrapper>

      {/* 내용 */}
      <ArticleFormWrapper title="Content">
        <ArticleFormContent
          content={articleData.content}
          changeContent={handleChangeContent}
          uploadImage={handleUploadImage}
        />
      </ArticleFormWrapper>

      {/* 태그 */}
      {mode === 'new' ? (
        <ArticleFormWrapper title="Tags">
          <ArticleFormTag tags={articleData.tags} changeTags={handleChangeTags} />
          <ArticleFormTagList tags={articleData.tags} changeTags={handleChangeTags} />
        </ArticleFormWrapper>
      ) : null}

      {/* 버튼 */}
      <ArticleFormWrapper title="">
        <ArticleFormSubmitButton />
      </ArticleFormWrapper>
    </form>
  );
}
