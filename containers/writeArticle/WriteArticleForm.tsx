'use client';

import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import CategorySelector from './categorySelector/CategorySelector';
import ArticleContentEditor from './contentEditor/ArticleContentEditor';
import ArticleCategoryFormItemWrapper from './wrapper/ItemWrapper';
import WriteArticleMetadata from './nextMetadata/WriteArticleMetadata';
import ArticleModal from '../../components/common/modals/ArticleModal';
import useCreateArticle from '../../stores/use-create-article';
import TagEditor from './tagEditor/TagEditor';
import TagList from './tagEditor/TagList';
import { postCreateArticle } from '../../services/article';

export default function WriteArticleForm() {
  const [isNext, setIsNext] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { data, setContent, setTitle, reset, setImages } = useCreateArticle((state) => state);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { id } = await postCreateArticle({
      ...data,
      visible: data.isPublic,
      categoryId: data.categoryId!,
      thumbnail: data.thumbnail!,
    });

    reset();
    router.push(`/articles/${id}`);
  };

  const handleClickSubmitButton = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  const handleUploadImage = (imageUrl: string) => {
    setImages(imageUrl);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="flex w-full flex-col gap-5">
      {/* 제목 작성 */}
      <ArticleCategoryFormItemWrapper title="Article Title">
        <input
          type="text"
          placeholder="Input Article's Title"
          className="box-shadow w-full rounded-lg border border-box p-5 text-xl"
          value={data.title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </ArticleCategoryFormItemWrapper>

      {/* 카테고리 선택 */}
      <ArticleCategoryFormItemWrapper title="Article Category">
        <CategorySelector />
      </ArticleCategoryFormItemWrapper>

      {/* 내용 작성 */}
      <ArticleCategoryFormItemWrapper title="Article Content">
        <ArticleContentEditor content={data.content} onChangeContent={setContent} onUploadImage={handleUploadImage} />
      </ArticleCategoryFormItemWrapper>

      {/* 태그 입력 */}
      <ArticleCategoryFormItemWrapper title="Article Tags">
        <TagEditor />
        <TagList />
      </ArticleCategoryFormItemWrapper>

      {/* 버튼 */}
      <ArticleCategoryFormItemWrapper title="">
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-lg bg-[#FF6481] p-3 pl-6 pr-6 text-xl text-white"
            onClick={() => setIsNext(true)}
          >
            Next
          </button>
        </div>
      </ArticleCategoryFormItemWrapper>
      {isNext && (
        <ArticleModal onClose={() => setIsNext(false)} title="Create Article Metadata">
          <WriteArticleMetadata onClickSubmitButton={handleClickSubmitButton} onClose={() => setIsNext(false)} />
        </ArticleModal>
      )}
    </form>
  );
}
