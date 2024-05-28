/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, DropResult, Droppable } from 'react-beautiful-dnd';

import ManageCategoryItem from './ManageCategoryItem';
import { Category } from '../../../services/@types/category';
import { getCategories, patchUpdateCategory } from '../../../services/category';
import useCategory from '../../../stores/use-category';

export default function ManageCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [enabled, setEnabled] = useState(false);
  const { newCategory, updatedCategory, deletedCategory } = useCategory((state) => state);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.items);
    };

    fetchCategories();
  }, []);

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
   * 새로운 카테고리가 생성되면 해당 카테고리를 추가
   */
  useEffect(() => {
    if (newCategory) {
      setCategories((prev) => [newCategory, ...prev]);
    }
  }, [newCategory]);

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

  /**
   * 삭제된 카테고리가 있으면 해당 카테고리를 삭제
   */
  useEffect(() => {
    if (deletedCategory) {
      setCategories((prev) => prev.filter((category) => category.id !== deletedCategory.id));
    }
  }, [deletedCategory]);

  if (!enabled) {
    return null;
  }

  const handleDragEnd = async (result: DropResult) => {
    const { draggableId, destination } = result;
    if (draggableId && destination) {
      const sourceIndex = categories.findIndex((category) => category.id === parseInt(draggableId, 10));
      const destinationIndex = destination.index - 1;

      const newCategories = [...categories];
      const [draggedCategory] = newCategories.splice(sourceIndex, 1);
      newCategories.splice(destinationIndex, 0, draggedCategory);
      setCategories(newCategories);

      await patchUpdateCategory(parseInt(draggableId, 10), { sort: destination.index });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="vertical">
        {(parentProvided) => (
          <ul className="flex w-full flex-col gap-5" ref={parentProvided.innerRef} {...parentProvided.droppableProps}>
            {categories.map((category) => (
              <Draggable key={category.id} draggableId={category.id.toString()} index={category.sort}>
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
