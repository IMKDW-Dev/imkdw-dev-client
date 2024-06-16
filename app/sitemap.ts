import { MetadataRoute } from 'next';

function generateSitemapItem(url: string) {
  return {
    url,
    lastModified: new Date().toISOString(),
  };
}

async function getArticleIds(): Promise<string[]> {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/sitemap/articles`;
  const response = await fetch(url, {
    method: 'GET',
  });
  const responseBody = await response.json();
  return responseBody.data;
}

async function getCategoryNames(): Promise<string[]> {
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/v1/sitemap/categories`;
  const response = await fetch(url, {
    method: 'GET',
  });
  const responseBody = await response.json();
  return responseBody.data;
}

export default async function Sitemap(): Promise<MetadataRoute.Sitemap> {
  const [articleIds, categoryNames] = await Promise.all([getArticleIds(), getCategoryNames()]);

  const BASIC_URL = process.env.NEXT_PUBLIC_CLIENT_URL!;

  const commonPages = [
    generateSitemapItem(BASIC_URL),
    generateSitemapItem(`${BASIC_URL}/categories`),
    generateSitemapItem(`${BASIC_URL}/manage`),
    generateSitemapItem(`${BASIC_URL}/contact`),
  ];

  const articlePages = articleIds.map((id) => generateSitemapItem(`${BASIC_URL}/articles/${id}`));
  const categoryPages = categoryNames.map((name) => generateSitemapItem(`${BASIC_URL}/categories/${name}`));

  return [...commonPages, ...articlePages, ...categoryPages];
  return [];
}
