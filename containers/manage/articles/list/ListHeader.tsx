export default function ManageArticleListHeader() {
  return (
    <ul className="flex w-full border-b border-gray-300 bg-[#f3f7f9] p-3">
      <li className="w-[12%] font-bold">ID</li>
      <li className="w-[18%] font-bold">Title</li>
      <li className="w-[12%] font-bold">Category</li>
      <li className="w-[16%] font-bold">Tags</li>
      <li className="w-[12%] font-bold">Visibility</li>
      <li className="w-[7%] font-bold">View</li>
      <li className="w-[12%] font-bold">CreatedAt</li>
      <li className="w-[11%] font-bold">Action</li>
    </ul>
  );
}
