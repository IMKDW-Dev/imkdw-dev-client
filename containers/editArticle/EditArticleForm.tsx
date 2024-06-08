'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import CategorySelector from './categorySelector/CategorySelector';
import ArticleContentEditor from './contentEditor/ArticleContentEditor';
import ArticleCategoryFormItemWrapper from './wrapper/ItemWrapper';
import ArticleModal from '../../components/common/modals/ArticleModal';
import TagEditor from './tagEditor/TagEditor';
import TagList from './tagEditor/TagList';
import { Article } from '../../services/@types/article';
import useEditArticle from '../../stores/use-edit-article';
import { patchUpdateArticle } from '../../services/article';
import UpdateArticleMetadata from './nextMetadata/UpdateArticleMetadata';

interface Props {
  article: Article;
}
export default function EditArticleForm({ article }: Props) {
  const [isNext, setIsNext] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const editArticleHooks = useEditArticle((state) => state);
  const router = useRouter();

  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    editArticleHooks.setTitle(event.target.value);
  };

  useEffect(() => {
    const { id, title, content, tags, category, thumbnail, visible } = article;
    editArticleHooks.setId(id);
    editArticleHooks.setTitle(title);
    editArticleHooks.setContent(content);
    editArticleHooks.setTags(tags.map((tag) => tag.name));
    editArticleHooks.setCategoryId(category.id);
    editArticleHooks.setThumbnailUrl(thumbnail);
    editArticleHooks.setIsPublic(visible);
    return () => editArticleHooks.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [article]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await patchUpdateArticle(article.id, {
      ...editArticleHooks.data,
      visible: editArticleHooks.data.isPublic,
      categoryId: editArticleHooks.data.categoryId!,
      thumbnail: editArticleHooks.data.thumbnail!,
    });

    editArticleHooks.reset();
    router.push(`/articles/${article.id}`);
  };

  const handleClickSubmitButton = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="flex w-full flex-col gap-5">
      {/* 제목 작성 */}
      <ArticleCategoryFormItemWrapper title="Article Title">
        <input
          type="text"
          placeholder="Input Article's Title"
          className="box-shadow w-full rounded-lg border border-box p-5 text-xl"
          value={editArticleHooks.data.title}
          onChange={handleChangeTitle}
        />
      </ArticleCategoryFormItemWrapper>

      {/* 카테고리 선택 */}
      <ArticleCategoryFormItemWrapper title="Article Category">
        <CategorySelector />
      </ArticleCategoryFormItemWrapper>

      {/* 내용 작성 */}
      <ArticleCategoryFormItemWrapper title="Article Content">
        <ArticleContentEditor content={editArticleHooks.data.content} onChangeContent={editArticleHooks.setContent} />
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
        <ArticleModal onClose={() => setIsNext(false)} title="Update Article Metadata">
          <UpdateArticleMetadata onClickSubmitButton={handleClickSubmitButton} onClose={() => setIsNext(false)} />
        </ArticleModal>
      )}
    </form>
  );
}
