import { notFound } from 'next/navigation';

import CategoryArticles from '../../../containers/categoryArticles/CategoryArticles';
import { getCategoryDetail } from '../../../services/category';
import generateCustomMetadata from '../../../utils/metadata';
import CategoryImage from '../../../components/category/CategoryImage';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const categoryName = params.slug;

  try {
    const categoryDetail = await getCategoryDetail(categoryName);

    return {
      ...generateCustomMetadata({
        title: categoryDetail.name,
        desc: `카테고리 ${categoryDetail.name}의 대한 소개페이지 입니다`,
        link: `/categories/${categoryName}`,
        image: categoryDetail.image,
      }),
    };
  } catch (error: any) {
    if (error.message?.includes('404')) {
      return notFound();
    }
  }

  return null;
}

export default async function CategoryDetailPage({ params }: { params: { slug: string } }) {
  const categoryName = params.slug;
  const category = await getCategoryDetail(categoryName);
  const { articleCount, desc, image, name } = category;

  return (
    <section className="flex w-full flex-col items-center pl-5 pr-5 pt-[80px]">
      <header className="flex max-w-[960px] pb-[20px] pl-[60px] pr-[60px]">
        <div className="flex items-center gap-3 border-r-2 border-box pr-10">
          <CategoryImage image={image} name={name} />
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl">
              <b>{name}</b>
            </h1>
            <p className="text-sm">
              A collection of <b>{articleCount} articles</b>
            </p>
          </div>
        </div>
        <p className="max-w-[480px] pl-10">{desc}</p>
      </header>
      <CategoryArticles category={category} />
      <div className="pt-5">Page 1 of 1</div>
    </section>
  );
}
