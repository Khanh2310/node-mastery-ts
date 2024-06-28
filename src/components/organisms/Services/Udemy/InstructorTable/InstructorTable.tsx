'use client'
import { useQueryInstructors } from '@/components/hooks/Services'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { Fragment, useState } from 'react'
import { TextboxForSearch } from '@/components/molecules/TextboxForSearch'
import { CreateCourseArea } from '../CreateCourseArea'
import { InstructorColumn } from '@/components/molecules/Services'
import { PaginationTable } from '@/components/molecules/Pagination'

export const InstructorTable = () => {
  const [searchText, setSearchText] = useState('')

  const [instructorData, setInstructorData] = useState<{
    id: number
    name: string
  } | null>(null)

  // query
  const [search, setSearch] = useState('')
  const [pageIndex, setPageIndex] = useState(1)
  const { instructors, isLoading } = useQueryInstructors({
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
    <div className="mt-5 w-full rounded-md bg-white p-5 text-base leading-normal shadow-md">
      <div className="my-2 flex items-center justify-end gap-4">
        <TextboxForSearch
          onSubmit={handleSubmit}
          className="w-full max-w-sm"
          labelProps={{
            children: 'Search',
          }}
          textboxProps={{
            className:
              'block w-full pl-4 pr-2 py-0 bg-white shadow-none border-none focus:border-none focus:outline-0 focus:ring-0 text-sm placeholder-gray-500 sm:text-sm rounded-l-md rounded-none',
            placeholder: 'Search',
            name: 'search',
            value: searchText,
            disabled: isLoading,
            onChange: (e) => setSearchText(e.target.value),
          }}
          resetSearch={resetSearch}
        />
      </div>
      <div className="w-full overflow-x-auto mt-5">
        <Table className="w-full min-w-[1050px] border-collapse sm:border rounded-md">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-bold"></TableHead>
              <TableHead className="font-bold text-[rgb(38,38,38)]">
                Instructor Name
              </TableHead>
              <TableHead className="font-bold text-[rgb(38,38,38)]">
                Course
              </TableHead>
              <TableHead className="font-bold text-[rgb(38,38,38)]">
                Status
              </TableHead>
              <TableHead className="font-bold text-[rgb(38,38,38)]">
                Created At
              </TableHead>
              <TableHead className="font-bold text-[rgb(38,38,38)]">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {instructors?.items
              ? instructors?.items.map((instructor, index) => (
                  <Fragment key={instructor.id}>
                    <InstructorColumn
                      defaultOpen={index === 0}
                      instructor={instructor}
                      setInstructorData={setInstructorData}
                    />
                  </Fragment>
                ))
              : null}
          </TableBody>
        </Table>

        <PaginationTable
          currentPage={pageIndex}
          limit={10}
          totalRecord={instructors?.totalData || 0}
          onPageChange={setPageIndex}
        />
      </div>
      <CreateCourseArea
        instructorData={instructorData}
        setInstructorData={setInstructorData}
      />
    </div>
  )
}
