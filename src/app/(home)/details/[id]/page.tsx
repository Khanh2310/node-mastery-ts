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
  price?: string
  credit: string
  category: string[]
  userHasPurchased: number[]
  renderName: number
  sale?: string
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
    text: 'Go to the “Run Rate” page.\nEnter your Udemy promotional course link. Provide the desired rating content. Click the “Run Rate” button and track the status of your job in the History Tracking section.',
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
    price: '',
    credit: '10',
    category: ['01 new student : 01 credit', '01 new 5-star rate: 05 credits'],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 101 + i),
    renderName: 100,
  },
  {
    id: 2,
    name: 'PAY AS YOU GO',
    price: '1',
    credit: '10',
    category: ['01 new student : 01 credit', '01 new 5-star rate: 05 credits'],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 201 + i),
    renderName: 100,
  },
  {
    id: 3,
    name: 'Basic Pack',
    price: '9',
    credit: '130',
    category: ['01 new student : 01 credit', '01 new 5-star rate: 05 credits'],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 301 + i),
    sale: '30%',
    renderName: 90,
  },
  {
    id: 4,
    name: 'Premium Pack',
    price: '19',
    credit: '300',
    category: ['01 new student : 01 credit', '01 new 5-star rate: 05 credits'],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 401 + i),
    sale: '50%',
    renderName: 80,
  },
  {
    id: 5,
    name: 'STARTER PLAN',
    credit: '100',
    category: [],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 501 + i),
    renderName: 70,
  },
  {
    id: 6,
    name: 'MOVER PLAN',
    credit: '1000',
    category: [],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 601 + i),
    renderName: 100,
  },
  {
    id: 7,
    name: 'FLYER PLAN',
    credit: '2000',
    category: [],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 701 + i),
    renderName: 99,
  },
  {
    id: 8,
    name: 'LEAP PLAN',
    credit: '20.000',
    category: [],
    userHasPurchased: Array.from({ length: 10 }, (_, i) => 801 + i),
    renderName: 89,
  },
]

const PackageDetail = ({ params }: { params: { id: string } }) => {
  const [data, setData] = useState<Product[]>([])
  useEffect(() => {
    const product = pakageBasic.find((item) => item.id === Number(params.id))
    console.log(product)

    if (product && product !== undefined) {
      setData([product])
    }
  }, [params.id])
  return (
    <BasicLayout>
      <section className="pt-24 lg:pb-40 lg:pt-32">
        <Container>
          {data &&
            data.map((item, index) => (
              <div
                className="hidden justify-center lapstops_big:flex lapstops_big:flex-row "
                key={index}
              >
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
                  {item.id < 4 ? (
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
                          alt="fdjfhjdsh"
                          className="object-contain"
                        />
                        <div className="ml-2 flex items-center text-sm">
                          <p className="mr-1">{item.credit}</p>
                          <p>Instructor</p>
                        </div>
                      </li>
                      <li className="flex w-1/2 items-center lg:mb-6">
                        <Image
                          src={execute}
                          width={40}
                          height={40}
                          alt="fdjfhjdsh"
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
                          alt="fdjfhjdsh"
                          className="object-contain"
                        />
                        <div className="ml-2 flex items-center text-sm">
                          <p className="mr-1">{item.credit}</p>
                          <p>Days</p>
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
                          <p className="mr-1">{item.credit}</p>
                          <p>New students</p>
                        </div>
                      </li>
                      <li className="flex w-1/2 items-center lg:mb-6">
                        <Image
                          src={rating}
                          width={40}
                          height={40}
                          alt="fdjfhjdsh"
                          className="object-contain"
                        />
                        <div className="ml-2 flex items-center text-sm">
                          <p className="mr-1">{item.credit}</p>
                          <p>Rating</p>
                        </div>
                      </li>
                      <li className="flex w-1/2 items-center lg:mb-6">
                        <Image
                          src={instructor}
                          width={40}
                          height={40}
                          alt="fdjfhjdsh"
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
                          alt="fdjfhjdsh"
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
                          alt="fdjfhjdsh"
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
                          alt="fdjfhjdsh"
                          className="object-contain"
                        />
                        <div className="ml-2 flex items-center text-sm">
                          <p>5 days delivery</p>
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
                      <p className="mt-3 text-sm italic last:mt-1" key={index}>
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
                      85%
                    </strong>
                    <p>User Satisfaction</p>
                  </div>
                  <div className="lg:mt-16 lg:text-lg ">
                    <strong className="text-[32px] leading-10 text-[#5a27da]">
                      $3.77
                    </strong>{' '}
                    /month
                  </div>

                  <button className="flex w-[320px] items-center justify-center rounded-full bg-[#5a27da] py-4 hover:opacity-80 lg:mt-10">
                    <span className="text-base leading-5 text-white ">
                      INVENTORY SHORTAGE
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
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
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
                  Netflix
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
                    85%
                  </strong>
                  <p className="">User Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="pb-2">
              {/* <ul className="flex flex-col border-b-[1px] border-b-[#9e9e9e] ">
                {[
                  {
                    image: plus,
                    title: 'Plan',
                    content: 'Premium',
                  },
                  {
                    image: reneva,
                    title: 'Is it renewable?',
                    content: 'Yes',
                  },
                  {
                    image: available,
                    title: 'Supported devices',
                    content: 'PC, Mobile, Pad, Mac, iPhone',
                  },
                  {
                    image: pass,
                    title: 'Credential type',
                    content: 'Passkey',
                  },
                ].map((item, index) => (
                  <li className="mb-4 flex w-1/2" key={index}>
                    <Image
                      src={item.image}
                      width={40}
                      height={40}
                      alt={item.content}
                      className="object-contain"
                    />
                    <div className="ml-4 flex flex-col justify-between text-sm">
                      <p className="text-[#a3a0a0]">{item.title}</p>
                      <p>{item.content}</p>
                    </div>
                  </li>
                ))}
              </ul> */}
            </div>
            <p className="mt-6 text-sm text-[#9e9e9e]">
              Only supports Mac, smartphones, and tablets. TV devices, such as
              TV, Xbox, and PSN,are not allowed.
            </p>
          </div>
        </Container>
        <div className="fixed bottom-0 left-0 z-10 h-auto w-full border-none bg-white px-5 py-4 shadow-[0_-4px_24px_#00000014] sm:px-[100px] lg:hidden">
          <div className="text-left">
            <strong className="text-[32px] leading-10 text-[#5a27da]">
              $3.77
            </strong>{' '}
            / month
            <span className="ml-2 text-xl text-[#9e9e9e] line-through">
              $7.27
            </span>
          </div>
          <button className="mt-2 flex w-full items-center justify-center rounded-full bg-[#5a27da] px-5 py-4">
            <span className="text-base leading-5 text-white ">
              INVENTORY SHORTAGE
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

        <Container>
          <HowitWorks listHowitWorks={listHowitWorks} />
        </Container>
      </section>
    </BasicLayout>
  )
}

export default PackageDetail
