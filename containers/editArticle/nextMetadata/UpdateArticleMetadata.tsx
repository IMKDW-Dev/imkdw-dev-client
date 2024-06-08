import ArticleMetadataSection from './MetadataSection';
import ArticleThumbnailUploader from './ThumbnailUploader';

interface Props {
  onClickSubmitButton: () => void;
  onClose: () => void;
}
export default function UpdateArticleMetadata({ onClickSubmitButton, onClose }: Props) {
  const handleClick = () => {
    onClose();
    onClickSubmitButton();
  };

  return (
    <div className="flex w-full flex-col gap-10 p-5">
      <div className="flex justify-between">
        {/* 썸네일 업로드 */}
        <ArticleThumbnailUploader />

        <ArticleMetadataSection />
      </div>
      <div className="flex w-full justify-end">
        <button
          type="button"
          className="rounded-md bg-[#43BFE5] p-2 text-white hover:bg-[#39A2C3]"
          onClick={handleClick}
        >
          Update Article
        </button>
      </div>
    </div>
  );
}
