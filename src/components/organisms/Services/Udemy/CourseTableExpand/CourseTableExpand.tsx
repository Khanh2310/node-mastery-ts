'use client'
import { Loading } from '@/components/atoms/Loading'
import { useQueryCourses } from '@/components/hooks/Services/Udemy/Course/useQueryCourse'
import { Button } from '@/components/molecules/ButtonCommon'
import { TextboxForSearch } from '@/components/molecules/TextboxForSearch'
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
import { ArrowPathIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction, useState } from 'react'
import { CourseStatus } from '@/types/services'
import { classNames, stringDatetimeFormat } from '@/utils/clinet'
import { motion } from 'framer-motion'

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
  const [spinEffect, setSpinEffect] = useState<boolean>(false)
  const [searchText, setSearchText] = useState('')

  // query
  const [search, setSearch] = useState('')
  const [pageIndex, setPageIndex] = useState(1)
  const { courses, isLoading, refetch } = useQueryCourses({
    page: pageIndex,
    limit: 10,
    search: search,
    instructor_id: instructorId,
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch(searchText)
    setPageIndex(1)
  }

  const resetSearch = () => {
    setSearchText('')
    setSearch('')
    setPageIndex(1)
  }
  return (
    <td className="bg-gray-200 p-5" colSpan={100}>
      <div className="flex gap-10 items-center justify-between"> 
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
              <div className="my-2 flex items-center gap-4">
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
              </div>
              <div className="rounded-md sm:border">
                <Table className="bg-white">
                  <TableHeader>
                    <TableRow className="bg-gray-100">
                      <TableHead className="font-bold">Course Name</TableHead>
                      <TableHead className="font-bold">Course Rank</TableHead>
                      <TableHead className="font-bold">Course Status</TableHead>
                      <TableHead className="font-bold">Rate Star</TableHead>
                      <TableHead className="font-bold">
                        Ready For Rating
                      </TableHead>
                      <TableHead className="font-bold">Coupon</TableHead>
                      <TableHead className="font-bold">Created At</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses?.items
                      ? courses?.items.map((course) => (
                          <Collapsible key={course.id} asChild>
                            <>
                              <TableRow>
                                <TableCell>
                                  <a
                                    href={course.course_link}
                                    target="_blank"
                                    className="underline hover:text-blue-400"
                                  >
                                    {course.course_name}
                                  </a>
                                </TableCell>
                                <TableCell>
                                  <CollapsibleTrigger
                                    className="w-fit transform rounded-md bg-gray-200 p-2 duration-300 ease-in-out hover:bg-gray-300"
                                    asChild
                                  >
                                    <div className="flex items-center gap-2">
                                      Coupon:{' '}
                                      <span className="font-medium">
                                        {course.Coupon.length}
                                      </span>
                                      <ChevronDownIcon className="h-4 w-auto" />
                                    </div>
                                  </CollapsibleTrigger>
                                </TableCell>
                                <TableCell>{course.course_rank}</TableCell>
                                <TableCell>{course.rate_star}</TableCell>
                                <TableCell>{course.readyForRating}</TableCell>
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
                                <TableCell>
                                  {stringDatetimeFormat(course.create_at)}
                                </TableCell>
                              </TableRow>
                              <CollapsibleContent asChild>
                                <motion.tr
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.4 }}
                                >
                                  abc
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
          ) : null}
        </>
      )}
    </td>
  )
}
