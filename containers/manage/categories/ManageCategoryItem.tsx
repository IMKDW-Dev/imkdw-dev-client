/* eslint-disable react/jsx-props-no-spreading */

import Image from 'next/image';
import { forwardRef } from 'react';
import { DraggableProvidedDragHandleProps, DraggableProvidedDraggableProps } from 'react-beautiful-dnd';
import clsx from 'clsx';

import CategoryImage from '../../../components/category/CategoryImage';
import { Category } from '../../../services/@types/category';

interface Props extends Category {
  draggableProps: DraggableProvidedDraggableProps;
  dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
  isDragging: boolean;
}

const ManageCategoryItem = forwardRef<HTMLLIElement, Props>(
  ({ articleCount, desc, image, name, dragHandleProps, draggableProps, isDragging }, ref) => (
    <li
      className={clsx('flex w-full gap-5 rounded-sm p-3 hover:bg-[#f3f7f9]', isDragging && 'shadow-lg')}
      ref={ref}
      {...dragHandleProps}
      {...draggableProps}
    >
      <Image src="/images/icon/drag-indicator.svg" alt={name} width={30} height={30} />
      <div className="flex w-full">
        <div className="flex-2 flex w-1/4 min-w-[200px] gap-4">
          <CategoryImage image={image} name={name} />
          <div className="flex flex-col justify-center pr-10">
            <h3 className="text-xl">
              <b>{name}</b>
            </h3>
            <p className="text-sm">{articleCount} Articles</p>
          </div>
        </div>
        <div className="flex flex-1 items-center">{desc}</div>
      </div>
    </li>
  ),
);

export default ManageCategoryItem;
