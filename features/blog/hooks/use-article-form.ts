'use client';

import { Article } from '@/services/@types/article';
import { patchUpdateArticle, postCreateArticle } from '@/services/article';
import { useState } from 'react';

interface IArticleData {
  title: string;
  categoryId: number | null;
  content: string;
  images: string[];
  tags: string[];
  id: string;
  thumbnail: File | null;
  thumbnailUrl: string;
  visible: boolean;
}

interface Props {
  article?: Article;
}

export default function useArticleForm({ article }: Props) {
  const [articleData, setArticleData] = useState<IArticleData>({
    title: article?.title ?? '',
    categoryId: article?.category.id ?? null,
    content: article?.content ? JSON.parse(article?.content) : '',
    images: [],
    tags: article?.tags.map((tag) => tag.name) ?? [],
    id: article?.id ?? '',
    thumbnail: null,
    thumbnailUrl: article?.thumbnail ?? '',
    visible: article?.visible ?? true,
  });

  const handleChangeTitle = (value: string) => {
    setArticleData((prev) => ({ ...prev, title: value }));
  };

  const handleChangeContent = (value: string) => {
    setArticleData((prev) => ({ ...prev, content: value }));
  };

  const handleChangeCategory = (value: number) => {
    setArticleData((prev) => ({ ...prev, categoryId: value }));
  };

  const handleUploadImage = (imageUrl: string) => {
    setArticleData((prev) => ({ ...prev, images: [...prev.images, imageUrl] }));
  };

  const handleChangeTags = (tags: string[]) => {
    setArticleData((prev) => ({ ...prev, tags }));
  };

  const handleChangeId = (id: string) => {
    setArticleData((prev) => ({ ...prev, id }));
  };

  const handleChangeThumbnail = (thumbnail: File) => {
    setArticleData((prev) => ({ ...prev, thumbnail }));
  };

  const handleChangeVisible = (visible: boolean) => {
    setArticleData((prev) => ({ ...prev, visible }));
  };

  const handleCreateArticle = async () => {
    const formData = new FormData();
    formData.append('id', articleData.id);
    formData.append('title', articleData.title);
    formData.append('categoryId', articleData.categoryId!.toString());
    formData.append('content', JSON.stringify(articleData.content));
    formData.append('visible', articleData.visible.toString());
    articleData.tags.forEach((tag) => formData.append('tags[]', tag));
    formData.append('thumbnail', articleData.thumbnail!);
    articleData.images.map((image) => formData.append('images[]', image));

    return postCreateArticle(formData);
  };

  const handleUpdateArticle = async () => {
    const formData = new FormData();
    if (articleData.title) formData.append('title', articleData.title);
    if (articleData.categoryId) formData.append('categoryId', articleData.categoryId.toString());
    if (articleData.content) formData.append('content', JSON.stringify(articleData.content));
    if (articleData.visible) formData.append('visible', articleData.visible.toString());
    if (articleData.tags && articleData.tags.length) articleData.tags.forEach((tag) => formData.append('tags[]', tag));
    if (articleData.thumbnail) formData.append('thumbnail', articleData.thumbnail);
    if (articleData.images && articleData.images.length)
      articleData.images.forEach((image) => formData.append('images[]', image));

    return patchUpdateArticle(articleData.id, formData);
  };

  return {
    articleData,
    handleChangeTitle,
    handleChangeContent,
    handleChangeCategory,
    handleUploadImage,
    handleChangeTags,
    handleChangeId,
    handleChangeThumbnail,
    handleChangeVisible,
    handleCreateArticle,
    handleUpdateArticle,
  };
}
