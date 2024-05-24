/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import ManageCategoryItem from './ManageCategoryItem';
import { Category } from '../../../services/@types/category';
import { getCategories } from '../../../services/category';
import useCategory from '../../../stores/use-category';

export default function ManageCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [enabled, setEnabled] = useState(false);
  const { newCategory, updatedCategory } = useCategory((state) => state);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.items);
    };

    fetchCategories();
  }, []);

  /**
   * 새로운 카테고리가 생성되면 해당 카테고리를 추가
   */
  useEffect(() => {
    if (newCategory) {
      setCategories((prev) => [newCategory, ...prev]);
    }
  }, [newCategory]);

  /**
   * DND 애니메이션 최적화
   */
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  /**
   * 업데이트된 카테고리가 있으면 해당 카테고리를 업데이트
   */
  useEffect(() => {
    if (updatedCategory) {
      setCategories((prev) =>
        prev.map((category) => (category.id === updatedCategory.id ? updatedCategory : category)),
      );
    }
  }, [updatedCategory]);

  if (!enabled) {
    return null;
  }

  if (!enabled) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={() => {}}>
      <Droppable droppableId="droppable" direction="vertical">
        {(parentProvided) => (
          <ul className="flex w-full flex-col gap-5" ref={parentProvided.innerRef} {...parentProvided.droppableProps}>
            {categories.map((category) => (
              <Draggable key={category.name} draggableId={category.name} index={category.id}>
                {(childProvided, snapshot) => (
                  <ManageCategoryItem
                    category={category}
                    ref={childProvided.innerRef}
                    dragHandleProps={childProvided.dragHandleProps}
                    draggableProps={childProvided.draggableProps}
                    isDragging={snapshot.isDragging}
                  />
                )}
              </Draggable>
            ))}
            {parentProvided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
