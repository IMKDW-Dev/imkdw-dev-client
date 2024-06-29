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
      setCategories(response.categories);
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
      setCategories((prev) => [...prev, newCategory]);
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
      const sourceCategory = categories.find((category) => category.id === parseInt(draggableId, 10));
      const sourceCategorySort = sourceCategory?.sort;

      // 낙관적 업데이트
      const updatedCategories = categories.map((category) => {
        if (category.id === parseInt(draggableId, 10)) {
          return { ...category, sort: destination.index };
        }
        if (category.sort >= destination.index && category.sort < sourceCategorySort!) {
          return { ...category, sort: category.sort + 1 };
        }
        if (category.sort <= destination.index && category.sort > sourceCategorySort!) {
          return { ...category, sort: category.sort - 1 };
        }
        return category;
      });

      setCategories(updatedCategories.sort((a, b) => a.sort - b.sort));

      try {
        const destCategory = categories.find((category) => category.id === +draggableId);
        await patchUpdateCategory(+draggableId, {
          name: destCategory?.name,
          desc: destCategory?.desc,
          sort: destination.index,
        });
      } catch (error) {
        setCategories(categories);
      }
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
