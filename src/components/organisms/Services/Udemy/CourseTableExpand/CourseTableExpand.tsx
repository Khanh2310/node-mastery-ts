'use client'
import { Loading } from '@/components/atoms/Loading'
import { useQueryCourses } from '@/components/hooks/Services'
import { Button } from '@/components/molecules/ButtonCommon'
import { CourseColumn } from '@/components/molecules/Services'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'

export const CourseTableExpand = ({
  instructorId,
  instructorName,
  setInstructorData,
}: {
  instructorId: number
  instructorName: string
  setInstructorData: Dispatch<
    SetStateAction<{
      id: number
      name: string
    } | null>
  >
}) => {
  const [pageIndex, setPageIndex] = useState(1)
  const { courses, isLoading } = useQueryCourses({
    page: pageIndex,
    limit: 10,
    search: '',
    instructor_id: instructorId,
  })

  return (
    <td className="py-10 pl-16 pr-5" colSpan={100}>
      <div className="flex items-center justify-between gap-10">
        <h3 className="border-l-8 border-l-orange-600 px-2 text-lg font-bold leading-normal">
          Courses of Instructor
        </h3>
        <Button
          type="button"
          color="blue"
          disabled={isLoading}
          onClick={() =>
            setInstructorData({
              id: instructorId,
              name: instructorName,
            })
          }
          className="flex items-center rounded-md"
        >
          Add Course
        </Button>
      </div>

      {isLoading ? (
        <Loading className="mt-10" />
      ) : (
        <>
          {instructorId ? (
            <div className="mt-5 w-full text-base leading-normal">
              {/* <div className="my-2 flex items-center gap-4">
                <TextboxForSearch
                  onSubmit={handleSubmit}
                  className="w-full max-w-sm"
                  labelProps={{
                    children: 'Search',
                  }}
                  textboxProps={{
                    className:
                      'block w-full pl-4 pr-2 py-0 bg-white shadow-none border-none focus:border-none focus:outline-0 focus:ring-0 text-sm placeholder-gray-500 sm:text-sm rounded-l-md rounded-none',
                    placeholder: 'Search Course Name',
                    name: 'search',
                    value: searchText,
                    disabled: isLoading,
                    onChange: (e) => setSearchText(e.target.value),
                  }}
                  resetSearch={resetSearch}
                />
                <Button
                  type="button"
                  color="blue"
                  disabled={isLoading}
                  onClick={() => {
                    setSpinEffect(true)
                    refetch().finally(() => {
                      setTimeout(() => {
                        setSpinEffect(false)
                      }, 1000)
                    })
                  }}
                  className="flex items-center rounded-md"
                >
                  <div className={`${spinEffect && `animate-spin`}`}>
                    <ArrowPathIcon className={`h-4 w-4 scale-x-[-1]`} />
                  </div>
                </Button>
              </div> */}
              <div className="rounded-md sm:border">
                <Table className="bg-white">
                  <TableHeader className="border-b border-solid">
                    <TableRow>
                      <TableHead className="font-bold"></TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Course Name
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Course Rank
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Available coupon
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Rate Star
                      </TableHead>
                      <TableHead className="font-bold text-[rgb(38,38,38)]">
                        Ready For Rating
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
              </div>
            </div>
          ) : null}
        </>
      )}
    </td>
  )
}
