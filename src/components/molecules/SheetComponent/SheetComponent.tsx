import { Button } from '@/components/molecules/ButtonCommon'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { classNames } from '@/lib/utils'

type Props = {
  children: React.ReactNode
  title: string
  footer?: React.ReactNode
  subTitle?: string
  classBtn?: string
  titleBtn?: string
}

export const SheetComponent = ({
  children,
  title,
  subTitle,
  footer,
  titleBtn,
  classBtn,
}: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="solid"
          color="blue"
          className={classNames(`${classBtn}`, 'rounded-md')}
        >
          {titleBtn ?? 'Open'}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="w-fit border-b-2 border-b-orange-600 text-xl font-bold leading-normal">
            {title}
          </SheetTitle>
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
