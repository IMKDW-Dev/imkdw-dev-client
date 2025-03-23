import { Icon } from '@iconify/react';

export function HeaderCreateKnowledge() {
  return (
    <button className="flex items-center gap-2 rounded-lg bg-white p-4 shadow-primary flex-1">
      <Icon icon="mdi-light:pencil" className="text-gray-400" fontSize={28} />
      <div className="flex items-center h-full">
        <span className="text-gray-400">Write Knowledge</span>
      </div>
    </button>
  );
}
