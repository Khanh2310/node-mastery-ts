import { Instructor, InstructorStatus } from '@/types/services'
import { TableCell, TableRow } from '@/components/ui/table'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import { ChevronDownIcon } from '@radix-ui/react-icons'
import { classNames, stringDatetimeFormat } from '@/utils/clinet'
import { motion } from 'framer-motion'
import { CourseTableExpand } from '@/components/organisms/Services'
import { Dispatch, SetStateAction, useState } from 'react'
import { Button } from '@/components/molecules/ButtonCommon'
type Props = {
  instructor: Instructor
  setInstructorData: Dispatch<
    SetStateAction<{
      id: number
      name: string
    } | null>
  >
}

export const InstructorColumn = ({ instructor, setInstructorData }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible asChild open={open} onOpenChange={setOpen}>
      <>
        <TableRow>
          <TableCell>
            <CollapsibleTrigger asChild>
              <div className="w-fit transform rounded-md bg-gray-100 p-2 duration-300 ease-in-out hover:bg-gray-200">
                <ChevronDownIcon
                  className={`${
                    open ? '-rotate-180' : ''
                  } h-5 w-5 transform duration-300 ease-in-out`}
                />
              </div>
            </CollapsibleTrigger>
          </TableCell>
          <TableCell>
            <a
              href={instructor.instructor_link}
              target="_blank"
              className="underline hover:text-blue-400"
            >
              {instructor.instructor_name}
            </a>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              Courses:
              <span className="font-medium">{instructor.Course?.length}</span>
            </div>
          </TableCell>
          <TableCell>
            <p
              className={classNames(
                `${
                  InstructorStatus.ALIVE === instructor.status
                    ? 'border-green-600 bg-green-200 text-green-600'
                    : 'border-yellow-600 bg-yellow-200 text-yellow-600'
                }`,
                'w-fit rounded-sm border px-2 py-1 text-xs font-semibold capitalize',
              )}
            >
              {instructor.status}
            </p>
          </TableCell>
          <TableCell>{stringDatetimeFormat(instructor.created_at)}</TableCell>
          <TableCell>
            {' '}
            <Button
              type="button"
              color="blue"
              onClick={() =>
                setInstructorData({
                  id: instructor.id,
                  name: instructor.instructor_name,
                })
              }
              className="flex items-center rounded-md"
            >
              Add Course
            </Button>
          </TableCell>
        </TableRow>
        <CollapsibleContent
          asChild
          className="border-b border-solid bg-[rgb(250,250,251)]"
        >
          <motion.tr
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <CourseTableExpand instructorId={instructor.id} />
          </motion.tr>
        </CollapsibleContent>
      </>
    </Collapsible>
  )
}
