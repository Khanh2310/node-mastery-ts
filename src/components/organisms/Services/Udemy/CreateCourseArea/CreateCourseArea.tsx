'use client'
import { SheetWithoutButtonComponent } from '@/components/molecules/SheetWithoutButtonComponent'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { CourseForm } from '../CoursesForm'

export const CreateCourseArea = ({
  instructorData,
  setInstructorData
}: {
  instructorData?: {
    id: number
    name: string
  } | null,
  setInstructorData: Dispatch<
  SetStateAction<{
    id: number
    name: string
  } | null>
>
}) => {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (instructorData && instructorData?.id) setOpen(true)
    else setOpen(false)
  }, [instructorData])

  return (
    <div>
      <SheetWithoutButtonComponent
        open={open}
        setInstructorData={setInstructorData}
        title={`Add new Course <br/> Instructor: <span class='font-normal'>${instructorData?.name}</span>`}
      > 
        {instructorData?.id && <CourseForm instructorId={instructorData?.id}/>}
      </SheetWithoutButtonComponent>
    </div>
  )
}
