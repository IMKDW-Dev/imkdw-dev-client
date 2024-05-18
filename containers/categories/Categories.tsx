import CategoryItem from './CategoryItem';

export default function Categories() {
  return (
    <div className="w-full pl-10 pr-10">
      <ul className="box-shadow flex flex-wrap rounded-xl border border-box bg-white pb-10 pt-10">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </ul>
    </div>
  );
}
