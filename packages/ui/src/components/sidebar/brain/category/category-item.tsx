import { cn, DropdownMenuItem } from '../../../../_shadcn';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../../../../_shadcn/components/ui/alert-dialog';

interface Props {
  title: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CategoryItem({ title, isOpen, onOpenChange }: Props) {
  return (
    <>
      <DropdownMenuItem
        className="cursor-pointer"
        onSelect={(event) => {
          event.preventDefault();
          onOpenChange(true);
        }}
      >
        {title}
      </DropdownMenuItem>

      <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
        <AlertDialogContent onClick={(event) => event.stopPropagation()}>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
