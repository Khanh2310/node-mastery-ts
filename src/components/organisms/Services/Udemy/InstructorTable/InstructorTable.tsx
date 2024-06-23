'use client'
import { useQueryInstructors } from '@/components/hooks/Services'
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
import { Button } from '@/components/molecules/ButtonCommon'
import { ArrowPathIcon } from '@heroicons/react/24/outline'
import { TextboxForSearch } from '@/components/molecules/TextboxForSearch'
import { CreateCourseArea } from '../CreateCourseArea'

export const InstructorTable = () => {
  const [spinEffect, setSpinEffect] = useState<boolean>(false)
  const [searchText, setSearchText] = useState('')
  
  const [instructorData, setInstructorData] = useState<{id: number, name: string} | null>(null)


  // query
  const [search, setSearch] = useState('')
  const [pageIndex, setPageIndex] = useState(1)
  const { instructors, isLoading, refetch } = useQueryInstructors({
    page: pageIndex,
    limit: 10,
    search: search,
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
            placeholder: 'Search Instructor Name',
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
      <div className="rounded-md sm:border min-w-lg overflow-x-auto">
        <Table className='w-full'>
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
                        <TableCell><a href={instructor.instructor_link} target='_blank' className='underline hover:text-blue-400'>{instructor.instructor_name}</a></TableCell>
                        <TableCell>
                          <CollapsibleTrigger
                            className="w-fit transform rounded-md bg-gray-200 p-2 duration-300 ease-in-out hover:bg-gray-300"
                            asChild
                          >
                            <div className="flex items-center gap-2">
                              Courses:
                              <span className="font-medium">
                                {instructor.Course?.length}
                              </span>
                              <ChevronDownIcon className="h-4 w-auto" />
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
                          <CourseTableExpand instructorId={instructor.id} instructorName={instructor.instructor_name} setInstructorData={setInstructorData}/>
                        </motion.tr>
                      </CollapsibleContent>
                    </>
                  </Collapsible>
                ))
              : null}
          </TableBody>
        </Table>
      </div>
      <CreateCourseArea instructorData={instructorData} setInstructorData={setInstructorData}/>
    </div>
  )
}
