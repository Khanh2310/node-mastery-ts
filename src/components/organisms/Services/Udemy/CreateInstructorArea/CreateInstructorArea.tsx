import { SheetComponent } from '@/components/molecules/SheetComponent'
import { InstructorForm } from '@/components/organisms/Services'

export const CreateInstructorArea = () => {
  return (
    <div>
      <SheetComponent title="Add new Instructor" titleBtn="Add New Instructor" classBtn="rounded-xl bg-gradient-to-tr border-4 border-red-600 from-rose-500 to-red-500 text-white px-4 md:px-16 py-2 md:py-4 font-bold hover:from-red-500 hover:to-rose-700 transform duration-300">
        <InstructorForm />
      </SheetComponent>
    </div>
  )
}
