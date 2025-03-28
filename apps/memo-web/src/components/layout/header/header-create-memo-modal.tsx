import { X } from 'lucide-react';

interface CreateKnowledgeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HeaderCreateMemoModal({ isOpen, onClose }: CreateKnowledgeModalProps) {
  if (!isOpen) {
    return null;
  }

  return <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50"></div>;
}
