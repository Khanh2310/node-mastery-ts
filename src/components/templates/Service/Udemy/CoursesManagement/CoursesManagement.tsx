import { Title } from '@/components/molecules/Title'
import { CreateInstructorArea, InstructorTable } from '@/components/organisms/Services'

export const CoursesManagementTemplate = () => {
  return (
    <div>
      <Title className="mb-10" title="Course Management" caption="" />
      <div className="">
        <CreateInstructorArea />
        <InstructorTable />
      </div>
    </div>
  )
}
