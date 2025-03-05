import { cn, DropdownMenuItem } from '../../../../_shadcn';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../../../_shadcn/components/ui/alert-dialog';

interface Props {
  title: string;
  className?: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CategoryItem({ title, className = '', isOpen, onOpenChange }: Props) {
  return (
    <>
      <DropdownMenuItem
        className={cn('cursor-pointer', className)}
        onSelect={(event) => {
          event.preventDefault();
          onOpenChange(true);
        }}
      >
        {title}
      </DropdownMenuItem>

      <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
