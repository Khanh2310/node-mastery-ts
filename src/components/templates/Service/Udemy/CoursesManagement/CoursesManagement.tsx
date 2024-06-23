import { Title } from '@/components/molecules/Title'
import {
  CreateInstructorArea,
  InstructorTable,
} from '@/components/organisms/Services'

export const CoursesManagementTemplate = () => {
  return (
    <div>
      <div className='flex gap-2 justify-between'>
        <Title className="mb-10" title="Course Management" caption="" />
        <CreateInstructorArea />
      </div>

      <div className="">
        <InstructorTable />
      </div>
    </div>
  )
}
