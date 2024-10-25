import { Course, CourseStatus } from '@/types/services'
import { TableCell, TableRow } from '@/components/ui/table'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { classNames } from '@/lib/utils'
import { stringDatetimeFormat } from '@/utils/clinet'
import { motion } from 'framer-motion'
import { CouponArea } from '@/components/organisms/Services/Udemy/CouponArea'
import { useState } from 'react'

type Props = {
  course: Course
}

export const CourseColumn = ({ course }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
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
            <TableCell className="max-w-[350px] truncate">
              <a
                title={course.course_name}
                href={course.course_link}
                target="_blank"
                className="underline hover:text-blue-400"
              >
                {course.course_name}
              </a>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="font-medium">{course.Coupon.length}</span>
              </div>
            </TableCell>
            <TableCell>{course.course_rank}</TableCell>
            <TableCell>{course.rate_star}</TableCell>
            <TableCell>{course.readyForRating}</TableCell>
            <TableCell>{course.s_enroll_count}</TableCell>
            <TableCell>{course.s_rate_count}</TableCell>
            <TableCell>
              <p
                className={classNames(
                  `${
                    CourseStatus.PUBLIC === course.status
                      ? 'border-green-600 bg-green-200 text-green-600'
                      : 'border-yellow-600 bg-yellow-200 text-yellow-600'
                  }`,
                  'w-fit rounded-sm border px-2 py-1 text-xs font-semibold capitalize',
                )}
              >
                {course.status}
              </p>
            </TableCell>
            <TableCell>{stringDatetimeFormat(course.create_at)}</TableCell>
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
              <CouponArea courseId={course.id} />
            </motion.tr>
          </CollapsibleContent>
        </>
      </Collapsible>
    </>
  )
}
