import { useQueryCoupon } from '@/components/hooks/Services'
import { CouponForm } from '../CouponForm'
import { Loading } from '@/components/atoms/Loading'

type Props = {
  courseId: number
}

export const CouponArea = ({ courseId }: Props) => {
  const { coupon, isLoading } = useQueryCoupon({
    course_id: courseId,
  })
  if (isLoading)
    return (
      <td className="p-5" colSpan={100}>
        <Loading className="mt-24" />
      </td>
    )
  return (
    <td className="py-10 pr-5 pl-16" colSpan={100}>
      <div className="block gap-4 md:flex">
        <div className="w-[calc((100%-1rem)/2)]">
          <h3 className="border-l-8 border-l-orange-600 px-2 text-lg font-bold leading-normal">
            Coupon
          </h3>
          <p className="mt-2 text-base leading-normal">
            Please enter a valid coupon. <br/>The valid period of the coupon is from
            the creation date to the following 30 days.
          </p>
        </div>
        <div className="w-[calc((100%-1rem)/2)]">
          <CouponForm initialValues={coupon} courseId={courseId} />
        </div>
      </div>
    </td>
  )
}
