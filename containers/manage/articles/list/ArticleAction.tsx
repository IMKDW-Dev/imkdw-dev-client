'use client';

import { Delete, ModeEdit } from '@mui/icons-material';
import { Article } from '../../../../services/@types/article';
import { deleteArticle } from '../../../../services/article';
import useUser from '../../../../stores/use-user';
import { userRole } from '../../../../constants/user.constant';

interface Props {
  article: Article;
}

export default function ManageArticleItemAction({ article }: Props) {
  const { userInfo } = useUser((state) => state);
  const isAdmin = userInfo?.role === userRole.ADMIN;

  const handleDelete = async () => {
    // eslint-disable-next-line no-alert
    const isConfirm = window.confirm('정말 삭제할껀가요?');
    if (!isConfirm) return;

    await deleteArticle(article.id);
    window.location.reload();
  };

  return (
    <ul className="flex gap-1">
      <li>
        <a href={`/articles/${article.id}/edit`} aria-label="article update link">
          <ModeEdit sx={{ color: 'lightgray' }} />
        </a>
      </li>
      <li>
        <button type="button" aria-label="delete article" onClick={handleDelete} disabled={!isAdmin}>
          <Delete sx={{ color: 'lightgray' }} />
        </button>
      </li>
    </ul>
  );
}
