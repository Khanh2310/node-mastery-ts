import { SheetComponent } from '@/components/molecules/SheetComponent'
import { InstructorForm } from '@/components/organisms/Services'

export const CreateInstructorArea = () => {
  return (
    <div>
      <SheetComponent title="Add new Instructor" titleBtn="Add New Instructor">
        <InstructorForm />
      </SheetComponent>
    </div>
  )
}
