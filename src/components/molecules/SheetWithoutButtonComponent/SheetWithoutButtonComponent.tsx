import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  open: boolean
  children: React.ReactNode
  title: string
  footer?: React.ReactNode
  subTitle?: string
  classBtn?: string
  titleBtn?: string
  setInstructorData: Dispatch<
  SetStateAction<{
    id: number
    name: string
  } | null>
>
}

export const SheetWithoutButtonComponent = ({
  open,
  children,
  title,
  subTitle,
  footer,
  setInstructorData
}: Props) => {
  return (
    <Sheet open={open} onOpenChange={()=> setInstructorData(null)}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="w-fit border-b-2 border-b-orange-600 text-xl font-bold leading-normal" dangerouslySetInnerHTML={{ __html: title }} />
          {subTitle && <SheetDescription>{subTitle}</SheetDescription>}
        </SheetHeader>
        <div className="grid gap-4 py-4">{children}</div>
        {footer && (
          <SheetFooter>
            <SheetClose asChild>{footer}</SheetClose>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
