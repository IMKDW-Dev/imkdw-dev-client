/* eslint-disable react/jsx-props-no-spreading */

'use client';

import { useEffect, useState } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

import ManageCategoryItem from './ManageCategoryItem';
import { Category } from '../../../services/@types/category';
import { getCategories } from '../../../services/category';

export default function ManageCategory() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await getCategories();
      setCategories(response.items);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

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
                    key={category.id}
                    name={category.name}
                    image={category.image}
                    articleCount={category.articleCount}
                    desc={category.desc}
                    id={category.id}
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
