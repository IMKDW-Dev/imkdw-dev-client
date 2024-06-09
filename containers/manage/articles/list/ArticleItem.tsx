import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Article } from '../../../../services/@types/article';
import { formatDate } from '../../../../utils/data';
import ManageArticleItemAction from './ArticleAction';

export interface Props {
  article: Article;
}

export default function ManageArticleItem({ article }: Props) {
  return (
    <li className="flex w-full items-center border-b border-gray-300 p-3 pb-5 pt-5 last:border-none hover:bg-gray-100">
      <a href={`/articles/${article.id}`} className="line-clamp-1 w-[12%] overflow-hidden text-ellipsis">
        {article.id}
      </a>
      <div className="w-[17%]">{article.title}</div>
      <div className="w-[11%]">
        <a href={`/categories/${article.category.name}`} className="rounded-md bg-[#c6eee6] p-1 pl-3 pr-3 font-bold">
          {article.category.name}
        </a>
      </div>
      <ul className="flex w-[15%] items-start gap-2">
        {article.tags.map((tag) => (
          <li key={tag.id} className="rounded-md bg-gray-200 p-1 pl-3 pr-3">
            {tag.name}
          </li>
        ))}
      </ul>
      <button className="flex w-[11%] items-start" type="button">
        {article.visible ? <Visibility /> : <VisibilityOff />}
      </button>
      <div className="w-[6%]">{article.viewCount}</div>
      <div className="w-[6%]">{article.commentCount}</div>
      <div className="w-[11%]">{formatDate(article.createdAt)}</div>
      <div className="w-[11%]">
        <ManageArticleItemAction article={article} />
      </div>
    </li>
  );
}
