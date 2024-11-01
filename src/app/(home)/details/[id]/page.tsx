'use client'

import { Container } from '@/components/Container'
import { BasicLayout } from '@/components/layouts/BasicLayout'
import Image from 'next/image'
import imageLogo from '@/images/logos/UdemyService-logo.svg'

import credits from '@/images/icons/credits.png'
import students from '@/images/icons/students.png'
import instructor from '@/images/icons/instructor.png'
import login from '@/images/icons/login.png'
import date from '@/images/icons/date.png'
import execute from '@/images/icons/execute.png'
import rating from '@/images/icons/rating.png'

import star_fill from '@/images/icons/star.svg'
import star_not_fill from '@/images/icons/star-not-fill.svg'
import { HowitWorks } from '@/components/organisms/HowitWorks'
import { useEffect, useState } from 'react'

type Product = {
  id: number
  name: string
  price: string
  credit?: string
  instructor?: string
  rating?: string
  students?: string
  days?: string
  category: string[]
  userHasPurchased: number[]
  renderName: number
  sale?: string
  baseCount: number
}

const listHowitWorks = [
  {
    title: '1. Preparation Before Execution:',
    text: "Navigate to your Udemy instructor page and select your course.\nSet up a free coupon for your course in the Promotions tab.\nIn the Active/Scheduled Coupons section, click on 'Share Coupon' to obtain the promotional course link.",
    active: true,
  },
  {
    title: '2. Increasing Student Enrollment:',
    text: 'Go to the “Run Enroll” page. Enter your Udemy promotional course link.\nSpecify the number of students you wish to enroll.\nClick the “Run Enroll” button and monitor the progress of your job in the History Tracking section.',
    active: false,
  },
  {
    title: '3. Enhancing Course Ratings:',
    text: 'Go to the “Run Rate” page.\nEnter your Udemy promotional course link.\nProvide the desired rating content.\nClick the “Run Rate” button and track the status of your job in the History Tracking section.',
    active: false,
  },
  {
    title: '4. Credit Deduction Policy:',
    text: 'Your credits will only be deducted once the History Tracking indicates that your job has been marked as COMPLETED.\nPlease contact us if your credits are deducted in the event of a FAILURE.',
    active: false,
  },
]

const pakageBasic: Product[] = [
  {
    id: 1,
    name: 'Free Trial',
    price: '0',
    credit: '10',
    days: '3 Days',
    instructor: '1 instructor',
    category: ['01 new student : 01 credit', '01 new 5-star rate: 05 credits'],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 101 + i),
    renderName: 100,
    baseCount: 10,
  },
  {
    id: 2,
    name: 'PAY AS YOU GO',
    price: '1',
    credit: '10',
    days: 'Never Expired',
    instructor: 'Unlimited instructor',
    category: ['01 new student : 01 credit', '01 new 5-star rate: 05 credits'],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 201 + i),
    renderName: 100,
    baseCount: 15,
  },
  {
    id: 3,
    name: 'Basic Pack',
    price: '9',
    credit: '130',
    instructor: 'Unlimited instructor',
    days: 'Never Expired',
    category: ['01 new student : 01 credit', '01 new 5-star rate: 05 credits'],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 301 + i),
    sale: '30%',
    renderName: 90,
    baseCount: 20,
  },
  {
    id: 4,
    name: 'Premium Pack',
    price: '19',
    credit: '300',
    instructor: 'Unlimited instructor',
    days: 'Never Expired',
    category: ['01 new student : 01 credit', '01 new 5-star rate: 05 credits'],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 401 + i),
    sale: '50%',
    renderName: 80,
    baseCount: 25,
  },
  {
    id: 5,
    name: 'STARTER PLAN',
    credit: '',
    students: '100',
    rating: '10',
    price: '9',
    instructor: 'Unlimited instructor',
    days: '5 Days',
    category: [],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 501 + i),
    renderName: 70,
    baseCount: 30,
  },
  {
    id: 6,
    name: 'MOVER PLAN',
    credit: '',
    students: '1000',
    rating: '30',
    price: '49',
    instructor: 'Unlimited instructor',
    days: '10 Days',
    category: [],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 601 + i),
    renderName: 100,
    baseCount: 35,
  },
  {
    id: 7,
    name: 'FLYER PLAN',
    credit: '',
    students: '2000',
    rating: '30',
    price: '99',
    instructor: 'Unlimited instructor',
    days: '15 Days',
    category: [],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 701 + i),
    renderName: 99,
    baseCount: 40,
  },
  {
    id: 8,
    name: 'LEAP PLAN',
    credit: '',
    students: '20.000',
    rating: '50',
    price: '299',
    instructor: 'Unlimited instructor',
    days: '15 Days',
    category: [],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 801 + i),
    renderName: 89,
    baseCount: 45,
  },
]

const PackageDetail = ({ params }: { params: { id: string } }) => {
  // const [userCount, setUserCount] = useState(0)
  const [data, setData] = useState<Product[]>([])

  const getDateNumber = () => {
    const now = new Date()
    const dateStr = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}`
    return Number(dateStr)
  }

  const [userCount, setUserCount] = useState(() => {
    // Lấy `userCount` từ localStorage nếu có; nếu không, sử dụng `getDateNumber` để lấy ngày hiện tại
    const storedCount = localStorage.getItem('userCount')
    return storedCount ? parseInt(storedCount) : getDateNumber()
  })
  useEffect(() => {
    const product = pakageBasic.find((item) => item.id === Number(params.id))

    if (product && product !== undefined) {
      setData([product])
    }

    const currentDateNumber = getDateNumber()

    // Lấy ngày cuối cùng từ localStorage
    const lastDateNumber = parseInt(
      localStorage.getItem('lastDateNumber') || '0',
    )

    if (currentDateNumber !== lastDateNumber) {
      // Nếu ngày đã thay đổi, cập nhật `userCount`
      const newCount = userCount + currentDateNumber

      setUserCount(newCount)
      localStorage.setItem('userCount', newCount.toString())
      localStorage.setItem('lastDateNumber', currentDateNumber.toString())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCount])
  return (
    <BasicLayout>
      <section className="pt-24 lg:pb-40 lg:pt-32">
        <Container>
          {data &&
            data.map((item, index) => (
              <div key={index}>
                <div className="hidden justify-center lapstops_big:flex lapstops_big:flex-row ">
                  <div className="lg:w-[200px] ">
                    <Image
                      src={imageLogo}
                      width={200}
                      height={200}
                      alt=""
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="flex-1 lg:mx-9 xl:mx-12">
                    <h3 className="text-5xl font-bold leading-[58px] text-[#2f4858]">
                      {item.name}
                    </h3>
                    {item.id <= 4 ? (
                      <ul className="flex flex-col border-b-[1px] border-b-[#9e9e9e] font-semibold text-[#2f4858] lg:flex-row lg:flex-wrap lg:pb-6 lg:pt-12">
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={credits}
                            width={40}
                            height={40}
                            alt={item.name}
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm ">
                            <p className="mr-1">{item.credit}</p>
                            <p>Credits</p>
                          </div>
                        </li>
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={instructor}
                            width={40}
                            height={40}
                            alt=""
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>{item.instructor}</p>
                          </div>
                        </li>
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={execute}
                            width={40}
                            height={40}
                            alt=""
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>Execute by yourself</p>
                          </div>
                        </li>
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={date}
                            width={40}
                            height={40}
                            alt=""
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>{item.days}</p>
                          </div>
                        </li>
                      </ul>
                    ) : (
                      <ul className="flex flex-col border-b-[1px] border-b-[#9e9e9e] font-semibold text-[#2f4858] lg:flex-row lg:flex-wrap lg:pb-6 lg:pt-12">
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={students}
                            width={40}
                            height={40}
                            alt={item.name}
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm ">
                            <p className="mr-1">{item.students}</p>
                            <p>New students</p>
                          </div>
                        </li>
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={rating}
                            width={40}
                            height={40}
                            alt=""
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p className="mr-1">{item.rating}</p>
                            <p>Rating</p>
                          </div>
                        </li>
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={instructor}
                            width={40}
                            height={40}
                            alt=""
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>Unlimited instructor</p>
                          </div>
                        </li>
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={login}
                            width={40}
                            height={40}
                            alt=""
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>No login required</p>
                          </div>
                        </li>
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={execute}
                            width={40}
                            height={40}
                            alt=""
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>Execute by our team</p>
                          </div>
                        </li>
                        <li className="flex w-1/2 items-center lg:mb-6">
                          <Image
                            src={date}
                            width={40}
                            height={40}
                            alt=""
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            {item.days}
                          </div>
                        </li>
                      </ul>
                    )}

                    {item.category.length === 0 ? (
                      <p className="mt-5 text-sm italic">
                        Your peace of mind is our top priority. We are committed
                        to maintaining the integrity of your Udemy account by
                        strictly adhering to Udemy’s Terms of Service.{' '}
                      </p>
                    ) : (
                      item.category.map((content, index) => (
                        <p
                          className="mt-3 text-sm italic last:mt-1"
                          key={index}
                        >
                          {content}
                        </p>
                      ))
                    )}
                  </div>
                  <div className="order-2 rounded-2xl border border-[#e5e1e1] shadow-[0_4px_24px_#00000014] lg:px-8 lg:py-12">
                    <div className="flex lg:gap-x-2">
                      <Image
                        src={star_fill}
                        width={20}
                        height={20}
                        className="object-cover"
                        alt=""
                      />
                      <Image
                        src={star_fill}
                        width={20}
                        height={20}
                        className="object-cover"
                        alt=""
                      />
                      <Image
                        src={star_fill}
                        width={20}
                        height={20}
                        className="object-cover"
                        alt=""
                      />
                      <Image
                        src={star_fill}
                        width={20}
                        height={20}
                        className="object-cover"
                        alt=""
                      />
                      <Image
                        src={star_not_fill}
                        width={20}
                        height={20}
                        className="object-cover"
                        alt=""
                      />
                    </div>

                    <div className="flex items-end lg:mt-6">
                      <strong className="mr-1 text-[32px] leading-10 text-[#ff9208]">
                        {userCount + item.baseCount}
                      </strong>
                      <p className="text-2xl">Happy users</p>
                    </div>
                    <div className="text-center lg:mt-16 lg:text-lg">
                      <strong className="text-[60px] leading-10 text-[#5a27da]">
                        ${item.price}
                      </strong>
                    </div>

                    <button className="flex w-[320px] items-center justify-center rounded-full bg-[#5a27da] py-4 hover:opacity-80 lg:mt-10">
                      <span className="text-base leading-5 text-white ">
                        Payment
                      </span>
                      <span>
                        <svg
                          data-v-96876882=""
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          fill="none"
                          version="1.1"
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          className="ml-4"
                        >
                          <g>
                            <path
                              d="M5.72134,5.82431C5.6948,5.8585,5.66637,5.89162,5.63604,5.9235C5.63604,5.9235,2.12132,9.61748,2.12132,9.61748C1.63604,10.1275,0.849242,10.1275,0.363961,9.61748C-0.12132,9.10744,-0.12132,8.28052,0.363961,7.77049C0.363961,7.77049,3,5,3,5C3,5,0.363961,2.22951,0.363961,2.22951C-0.12132,1.71948,-0.12132,0.892557,0.363961,0.382524C0.849242,-0.127508,1.63604,-0.127508,2.12132,0.382524C2.12132,0.382524,5.63604,4.0765,5.63604,4.0765C6.09099,4.55466,6.11942,5.31134,5.72134,5.82431Z"
                              fill="#FFFFFF"
                              fillOpacity="1"
                            />
                          </g>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                <div className="mb-24 flex w-full flex-col justify-center sm:mx-auto sm:w-1/2 lg:hidden tablet:block">
                  <div className="flex">
                    <Image
                      src={imageLogo}
                      width={120}
                      height={120}
                      alt=""
                      className="mb-6 mr-6 rounded-2xl"
                    />
                    <div className="">
                      <h3 className="text-2xl font-bold leading-[30px] text-[#2f4858]">
                        {item.name}
                      </h3>
                      <div className="mt-5 flex items-center gap-x-2">
                        <Image
                          src={star_fill}
                          width={20}
                          height={20}
                          className="object-cover"
                          alt=""
                        />
                        <Image
                          src={star_fill}
                          width={20}
                          height={20}
                          className="object-cover"
                          alt=""
                        />
                        <Image
                          src={star_fill}
                          width={20}
                          height={20}
                          className="object-cover"
                          alt=""
                        />
                        <Image
                          src={star_fill}
                          width={20}
                          height={20}
                          className="object-cover"
                          alt=""
                        />
                        <Image
                          src={star_not_fill}
                          width={20}
                          height={20}
                          className="object-cover"
                          alt=""
                        />
                      </div>

                      <div className="mt-5 flex items-end text-xs leading-[14px]">
                        <strong className="mr-1 text-xl leading-5 text-[#ff9208]">
                          {userCount + item.baseCount}
                        </strong>
                        <p className="">Happy users</p>
                      </div>
                    </div>
                  </div>
                  <div className="pb-2">
                    {item.id <= 4 ? (
                      <ul className="flex flex-col border-b-[1px] border-b-[#9e9e9e] ">
                        <li className="mb-4 flex w-[70%] items-center">
                          <Image
                            src={credits}
                            width={40}
                            height={40}
                            alt={item.name}
                            className="object-contain"
                          />
                          <div className="ml-2 flex justify-between text-sm">
                            <p className="mr-1">{item.credit}</p>
                            <p>Credits</p>
                          </div>
                        </li>
                        <li className="mb-4 flex w-[70%]  items-center">
                          <Image
                            src={instructor}
                            width={40}
                            height={40}
                            alt="fdjfhjdsh"
                            className="object-contain"
                          />
                          <div className="ml-2 flex justify-between text-sm">
                            <p className="mr-1">{item.instructor}</p>
                          </div>
                        </li>
                        <li className="mb-4 flex w-[70%] items-center">
                          <Image
                            src={execute}
                            width={40}
                            height={40}
                            alt="fdjfhjdsh"
                            className="object-contain"
                          />
                          <div className="ml-2 text-sm">
                            <p>Execute by yourself</p>
                          </div>
                        </li>
                        <li className="mb-4 flex w-[70%]">
                          <Image
                            src={date}
                            width={40}
                            height={40}
                            alt="fdjfhjdsh"
                            className="object-contain"
                          />
                          <div className="ml-2 flex justify-between text-sm">
                            <p>{item.days}</p>
                          </div>
                        </li>
                      </ul>
                    ) : (
                      <ul className="flex flex-col border-b-[1px] border-b-[#9e9e9e] ">
                        <li className="mb-4 flex w-[70%] items-center ">
                          <Image
                            src={students}
                            width={40}
                            height={40}
                            alt={item.name}
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p className="mr-1">{item.students}</p>
                            <p>New students</p>
                          </div>
                        </li>
                        <li className="mb-4 flex w-[70%] items-center">
                          <Image
                            src={rating}
                            width={40}
                            height={40}
                            alt="fdjfhjdsh"
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p className="mr-1">{item.rating}</p>
                            <p>Rating</p>
                          </div>
                        </li>
                        <li className="mb-4 flex w-[70%] items-center">
                          <Image
                            src={instructor}
                            width={40}
                            height={40}
                            alt="fdjfhjdsh"
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>{item.instructor}</p>
                          </div>
                        </li>
                        <li className="mb-4 flex w-[70%] items-center">
                          <Image
                            src={login}
                            width={40}
                            height={40}
                            alt="fdjfhjdsh"
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>No login required</p>
                          </div>
                        </li>
                        <li className="mb-4 flex w-[70%] items-center">
                          <Image
                            src={execute}
                            width={40}
                            height={40}
                            alt="fdjfhjdsh"
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>Execute by our team</p>
                          </div>
                        </li>
                        <li className="mb-4 flex w-[70%] items-center">
                          <Image
                            src={date}
                            width={40}
                            height={40}
                            alt="fdjfhjdsh"
                            className="object-contain"
                          />
                          <div className="ml-2 flex items-center text-sm">
                            <p>{item.days}</p>
                          </div>
                        </li>
                      </ul>
                    )}
                  </div>
                  {item.category.length === 0 ? (
                    <p className="mt-3 text-sm text-[#9e9e9e]">
                      Your peace of mind is our top priority. We are committed
                      to maintaining the integrity of your Udemy account by
                      strictly adhering to Udemy’s Terms of Service.{' '}
                    </p>
                  ) : (
                    item.category.map((content, index) => (
                      <p className="mt-3 text-sm italic last:mt-1" key={index}>
                        {content}
                      </p>
                    ))
                  )}
                </div>
              </div>
            ))}
        </Container>
        {data.map((item, index) => (
          <div
            className="fixed bottom-0 left-0 z-10 h-auto w-full border-none bg-white px-5 py-4 shadow-[0_-4px_24px_#00000014] sm:px-[100px] lg:hidden"
            key={index}
          >
            <div className="text-center">
              <strong className="text-4xl leading-10 text-[#5a27da]">
                ${item.price}
              </strong>
            </div>
            <button className="mt-2 flex w-full items-center justify-center rounded-full bg-[#5a27da] px-5 py-4">
              <span className="text-base leading-5 text-white ">Payment</span>
              <span>
                <svg
                  data-v-96876882=""
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="none"
                  version="1.1"
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  className="ml-4"
                >
                  <g>
                    <path
                      d="M5.72134,5.82431C5.6948,5.8585,5.66637,5.89162,5.63604,5.9235C5.63604,5.9235,2.12132,9.61748,2.12132,9.61748C1.63604,10.1275,0.849242,10.1275,0.363961,9.61748C-0.12132,9.10744,-0.12132,8.28052,0.363961,7.77049C0.363961,7.77049,3,5,3,5C3,5,0.363961,2.22951,0.363961,2.22951C-0.12132,1.71948,-0.12132,0.892557,0.363961,0.382524C0.849242,-0.127508,1.63604,-0.127508,2.12132,0.382524C2.12132,0.382524,5.63604,4.0765,5.63604,4.0765C6.09099,4.55466,6.11942,5.31134,5.72134,5.82431Z"
                      fill="#FFFFFF"
                      fillOpacity="1"
                    />
                  </g>
                </svg>
              </span>
            </button>
          </div>
        ))}
        <Container>
          <HowitWorks listHowitWorks={listHowitWorks} />
        </Container>
      </section>
    </BasicLayout>
  )
}

export default PackageDetail
