'use client'
import { useQueryInstructors } from '@/components/hooks/Services/Udemy/Instructor/useQueryInstructor'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useState } from 'react'
import { CourseTableExpand } from '../CourseTableExpand'
import { motion } from 'framer-motion'
import { classNames, stringDatetimeFormat } from '@/utils/clinet'
import { InstructorStatus } from '@/types/services'
import { ChevronDownIcon } from '@radix-ui/react-icons'

export const InstructorTable = () => {
  const [pageIndex, setPageIndex] = useState(1)
  const { instructors, isLoading } = useQueryInstructors({
    page: pageIndex,
    limit: 10,
  })

  console.log('instructors', instructors)

  return (
    <div className="w-full text-base leading-normal mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-bold">Instructor Name</TableHead>
              <TableHead className="font-bold">Course</TableHead>
              <TableHead className="font-bold">Status</TableHead>
              <TableHead className="font-bold">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {instructors?.items
              ? instructors?.items.map((instructor) => (
                  <Collapsible key={instructor.id} asChild>
                    <>
                      <TableRow>
                        <TableCell>{instructor.instructor_name}</TableCell>
                        <TableCell>
                          <CollapsibleTrigger
                            className="w-fit rounded-md bg-gray-200 p-2 hover:bg-gray-300 transform duration-300 ease-in-out"
                            asChild
                          >
                            <div className="flex items-center gap-2">
                              Courses:
                              <span className="font-medium">
                                {instructor.Course?.length}
                              </span>
                              <ChevronDownIcon className='h-4 w-auto'/>
                            </div>
                          </CollapsibleTrigger>
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
                        <TableCell>
                          {stringDatetimeFormat(instructor.created_at)}
                        </TableCell>
                      </TableRow>
                      <CollapsibleContent asChild>
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
                ))
              : null}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
