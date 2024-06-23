import { CouponForm } from '../CouponForm'

type Props = {
  courseId: number
  initData: {
    coupon: string
    start_date: string
  } | null
}

export const CouponArea = ({ initData, courseId }: Props) => {
  return (
    <td className="p-5" colSpan={100}>
      <div className="md:flex block gap-4">
        <div className="w-[calc((100%-1rem)/2)]">
        <h3 className="border-l-8 border-l-orange-600 px-2 text-lg font-bold leading-normal">
          Coupon
        </h3>
        <p className='mt-2 leading-normal text-base'>Please enter a valid coupon. The valid period of the coupon is from the creation date to the following 30 days</p>
        </div>
        <div className="w-[calc((100%-1rem)/2)]">
          <CouponForm initialValues={initData} courseId={courseId}/>
        </div>
      </div>
    </td>
  )
}
