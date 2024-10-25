'use client'
import { Loading } from '@/components/atoms/Loading'
import { useQueryCourses } from '@/components/hooks/Services'
import { PaginationTable } from '@/components/molecules/Pagination'
import { CourseColumn } from '@/components/molecules/Services'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Fragment, useState } from 'react'

export const CourseTableExpand = ({
  instructorId,
}: {
  instructorId: number
}) => {
  const [pageIndex, setPageIndex] = useState(1)
  const { courses, isLoading } = useQueryCourses({
    page: pageIndex,
    limit: 10,
    search: '',
    instructor_id: instructorId,
  })

  return (
    <td className="py-10 pl-10 pr-5" colSpan={100}>
      <div className="flex items-center justify-between gap-10">
        <h3 className="border-l-8 border-l-orange-600 px-2 text-lg font-bold leading-normal">
          Courses of Instructor
        </h3>
      </div>

      {isLoading ? (
        <Loading className="mt-10" />
      ) : (
        <>
          {instructorId ? (
            <div className="mt-5 w-full text-base leading-normal">
              <div className="">
                <Table className="bg-white border-collapse sm:border rounded-md">
                  <TableHeader className="border-b border-solid">
                    <TableRow>
                      <TableHead className="font-bold"></TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Course Name
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Available coupon
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Course Rank
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Rate Star
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Ready For Rating
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Enroll
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Rated
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Status
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Created At
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses?.items
                      ? courses?.items.map((course) => (
                          <Fragment key={course.id}>
                            <CourseColumn course={course} />
                          </Fragment>
                        ))
                      : null}
                  </TableBody>
                </Table>
                <PaginationTable
                  currentPage={pageIndex}
                  limit={10}
                  totalRecord={courses?.totalData || 0}
                  onPageChange={setPageIndex}
                />
              </div>
            </div>
          ) : null}
        </>
      )}
    </td>
  )
}
