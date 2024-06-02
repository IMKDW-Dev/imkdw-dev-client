/* eslint-disable react/jsx-props-no-spreading */

import Image from 'next/image';
import { forwardRef } from 'react';
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';
import clsx from 'clsx';

import CategoryImage from '../../../components/category/CategoryImage';
import { Category } from '../../../services/@types/category';
import ManageCategoryActions from './actionButton/ManagaCategoryActions';

interface Props {
  category: Category;
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
  isDragging: boolean;
}

const ManageCategoryItem = forwardRef<HTMLLIElement, Props>(
  ({ category, dragHandleProps, draggableProps, isDragging }, ref) => (
    <li
      className={clsx('flex w-full gap-5 rounded-sm p-3 hover:bg-[#f3f7f9]', isDragging && 'shadow-lg')}
      ref={ref}
      {...dragHandleProps}
      {...draggableProps}
    >
      <Image src="/images/icon/drag-indicator.svg" alt={category.name} width={30} height={30} />
      <div className="relative flex w-full">
        <div className="flex-2 flex w-1/4 min-w-[200px] gap-4">
          <CategoryImage image={category.image} name={category.name} />
          <div className="flex flex-col justify-center pr-10">
            <h3 className="text-xl">
              <b>{category.name}</b>
            </h3>
            <p className="text-sm">{category.articleCount} Articles</p>
          </div>
        </div>
        <div className="flex w-2/4 items-center">{category.desc}</div>
        <ManageCategoryActions category={category} />
      </div>
    </li>
  ),
);

export default ManageCategoryItem;
