'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'

import arrow from '@/images/icons/arrow.png'
import arrow_opacity from '@/images/icons/arrow_opacity.png'
import arrow_up from '@/images/icons/arrow_up.png'
import arrow_up_opacity from '@/images/icons/arrow_up_opacity.png'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Slider } from '@/components/organisms/Slider'
import { MessageRotator } from '@/components/molecules/MessageRotator'
import imageLine from '@/images/screenshots/imageLine.png'
export function Hero() {
  const router = useRouter()

  const [show, setShow] = useState<{ [key: number]: any }>({})
  const handleShowContent = (itemId: number) => {
    setShow((prevVisibleItems) => ({
      ...prevVisibleItems,
      [itemId]: !prevVisibleItems[itemId],
    }))
  }

  const pakageBasic = [
    {
      id: 1,
      name: 'Free Trial',
      price: '',
      credit: '10',
      category: [
        '01 new student : 01 credit',
        '01 new 5-star rate: 05 credits',
        'Valid 03 days',
        'Only for 1 instructor',
      ],
      userHasPurchased: Array.from({ length: 10 }, (_, i) => 101 + i),
      renderName: 100,
    },
    {
      id: 2,
      name: 'PAY AS YOU GO',
      price: '1',
      credit: '10',
      category: [
        '01 new student : 01 credit',
        '01 new 5-star rate: 05 credits',
        'No expire',
        'Unlimited instructor / course',
      ],
      userHasPurchased: Array.from({ length: 10 }, (_, i) => 201 + i),
      renderName: 100,
    },
    {
      id: 3,
      name: 'Basic Pack',
      price: '9',
      credit: '130',
      category: [
        '01 new student : 01 credit',
        '01 new 5-star rate: 05 credits',
        'No expire',
        'Unlimited instructor / course',
      ],
      userHasPurchased: Array.from({ length: 10 }, (_, i) => 301 + i),
      sale: '30%',
      renderName: 90,
    },
    {
      id: 4,
      name: 'Premium Pack',
      price: '19',
      credit: '300',
      category: [
        '01 new student : 01 credit',
        '01 new 5-star rate: 05 credits',
        'No expire',
        'Unlimited instructor / course',
      ],
      userHasPurchased: Array.from({ length: 10 }, (_, i) => 401 + i),
      sale: '50%',
      renderName: 80,
    },
  ]

  const requestPackage = [
    {
      id: 5,
      name: 'STARTER PLAN',
      credit: '9',
      category: [
        'New student : 100 students',
        'New 5-star rate: 10 rating',
        'Execute by our expert team',
        'No login info required',
        'Delivery date: 05 Days',
      ],
      userHasPurchased: Array.from({ length: 10 }, (_, i) => 501 + i),
      renderName: 70,
    },
    {
      id: 6,
      name: 'MOVER PLAN',
      credit: '49',
      category: [
        'New student : 1.000 students',
        'New 5-star rate: 30 rating',
        'Execute by our expert team',
        'No login info required',
        'Delivery date: 10 Days',
      ],
      userHasPurchased: Array.from({ length: 10 }, (_, i) => 601 + i),
      renderName: 100,
    },
    {
      id: 7,
      name: 'FLYER PLAN',
      credit: '99',
      category: [
        'New student : 2.000 students',
        'New 5-star rate: 30 rating',
        'Revenue Guarantee: 50 USD *',
        'Executed by our expert team',
        'No login info required',
        'Delivery date: 15 Days',
      ],
      userHasPurchased: Array.from({ length: 10 }, (_, i) => 701 + i),
      renderName: 99,
    },
    {
      id: 8,
      name: 'LEAP PLAN',
      credit: '299',
      category: [
        'New student : 20.000 students',
        'New 5-star rate: 50 rating',
        'Revenue Guarantee: 100 USD *',
        'Executed by our expert team',
        'No login info required',
        'Delivery date: 15 Days',
      ],
      userHasPurchased: Array.from({ length: 10 }, (_, i) => 801 + i),
      renderName: 89,
    },
  ]

  const generateRandomNamesWithTime = (count: number): string[] => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'
    const messages: string[] = []

    const randomTimeAgo = () => {
      const timeType = Math.floor(Math.random() * 3) // 0: days, 1: hours, 2: seconds
      let timeValue

      if (timeType === 0) {
        timeValue = Math.floor(Math.random() * 12) + 1 // Giới hạn từ 1 đến 12 ngày
        return `${timeValue} days ago`
      } else if (timeType === 1) {
        timeValue = Math.floor(Math.random() * 60) + 1 // Giới hạn từ 1 đến 60 giờ
        return `${timeValue} hours ago`
      } else {
        timeValue = Math.floor(Math.random() * 60) + 1 // Giới hạn từ 1 đến 60 giây
        return `${timeValue} seconds ago`
      }
    }

    for (let i = 0; i < count; i++) {
      const randomName = Array.from(
        { length: 5 },
        () => alphabet[Math.floor(Math.random() * alphabet.length)],
      ).join('')
      messages.push(
        `${randomName.slice(0, 2)}***${randomName.slice(
          2,
        )} joined ${randomTimeAgo()}`,
      )
    }
    return messages
  }

  return (
    <>
      <div className="relative h-[380px] bg-[#6C33B5] text-center md:h-[380px] lg:h-[380px]">
        <div className="mx-auto w-full px-5 pt-20 md:pb-0 md:pt-16 lg:pt-28">
          <h1 className="mb-6 text-center text-[22px] font-bold text-white md:text-[32px]">
            Real Traffic, Real Students, Real Revenue!
          </h1>

          <p className="text-sm text-white md:pb-10 md:text-base lg:pb-20">
            Are you a dedicated Udemy instructor looking to boost your course
            enrollments and improve your ratings? Look no further!
            <br /> Our innovative service is designed specifically for existing
            Udemy instructors who want to maximize their potential without
            compromising their account safety.
          </p>
        </div>

        <svg
          data-v-2dd81426=""
          className="svg z-2 absolute bottom-0 translate-y-[95%]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          version="1.1"
          viewBox="0 0 1920 30"
          preserveAspectRatio="none"
        >
          <g data-v-2dd81426="">
            <path
              data-v-2dd81426=""
              d="M0,0C0,0,1920,0,1920,0C1920,0,1920,30,1920,30C1920,30,1496.5,-1.66533e-15,961.5,0C426.5,1.66533e-15,0,30,0,30C0,30,0,0,0,0Z"
              fillRule="evenodd"
              fill="#6C33B5"
              fillOpacity="1"
            />
          </g>
        </svg>
      </div>
      <Container className="text-center">
        <div className="relative z-10 -mt-[20px] w-full bg-white">
          <div className="relative z-10 mx-auto mt-12 flex -translate-y-[60px] flex-wrap justify-center gap-6 rounded-full">
            {pakageBasic.map((option) => (
              <div
                key={option.id}
                className="md:calc(33.33%-16px) laptops:calc(33.33%-16px)  xl:w-[calc(25%-18px)] small_SP:w-[90%]"
              >
                <div
                  onClick={() => router.push(`details/${option.id}`)}
                  className=" flex cursor-pointer flex-col items-center rounded-2xl bg-white shadow-xl transition-all hover:shadow-[0_8px_32px_#0000003d] "
                >
                  <div className="relative w-full pb-10">
                    {option?.sale && (
                      <div className="ribbon">{option.sale}</div>
                    )}
                    <p className="mt-6 block text-2xl font-bold uppercase text-[#5a27da] lg:mb-5">
                      {option.name}
                    </p>
                    <svg
                      data-v-fb0f0a5d=""
                      className="absolute bottom-0 w-full translate-y-[1px]"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      version="1.1"
                      width="100%"
                      height="15.100669860839844"
                      viewBox="0 0 324 15.100669860839844"
                    >
                      <g data-v-fb0f0a5d="">
                        <path
                          data-v-fb0f0a5d=""
                          d="M0,15L148.773,15Q74.3864,13.8677,0,0L0,15ZM148.773,15Q155.386,15.1007,162,15.1007Q168.614,15.1007,175.227,15L148.773,15ZM175.227,15L324,15L324,0Q249.614,13.8677,175.227,15Z"
                          fill="#6C33B5"
                          fillOpacity="1"
                        ></path>
                      </g>
                    </svg>
                    <div className="absolute bottom-0 left-1/2 z-10 mx-auto flex w-52 -translate-x-1/2 translate-y-1/2 items-center justify-center">
                      <Slider imageUser={option.userHasPurchased} />
                    </div>
                  </div>
                  <div className="relative z-[2] mt-auto w-full rounded-b-2xl bg-[#6C33B5] pb-5 pt-10">
                    {option.id === 1 ? (
                      <div className="my-[6px] lg:my-2">
                        {option.renderName !== undefined && (
                          <MessageRotator
                            messages={generateRandomNamesWithTime(
                              option.renderName,
                            )}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="my-1">
                        {option.renderName !== undefined && (
                          <MessageRotator
                            messages={generateRandomNamesWithTime(
                              option.renderName,
                            )}
                          />
                        )}
                      </div>
                    )}

                    {option.name == 'Free Trial' ? (
                      <div className="test-base font-bold text-white">
                        {option.credit} credits
                      </div>
                    ) : (
                      <div className="font-bold text-white lg:text-2xl">
                        <span className="text-lg font-medium leading-7">$</span>
                        {option.price} /{' '}
                        <span className="text-base">
                          {option.credit} credits
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div
                  className="mt-5 overflow-hidden rounded-2xl bg-gradient-box p-5"
                  onClick={() => handleShowContent(option.id)}

                >
                  <ul
                    className={`${show[option.id] ? 'h-auto' : 'max-h-[60px]'
                      } overflow-hidden transition-all`}
                  >
                    {option?.category.map((categoryItem, index) => (
                      <li className="flex items-center gap-2" key={index}>
                        <span className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 text-[#7b5bf7]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </span>
                        <p className="text-sm text-[#7b5bf7]">{categoryItem}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mx-auto my-3 w-3 cursor-pointer">
                    {show[option.id] ? (
                      <>
                        <div className="transition-all">
                          <Image src={arrow_up} width={10} height={10} alt="" />
                        </div>
                        <div>
                          <Image
                            src={arrow_up_opacity}
                            width={10}
                            height={10}
                            alt=""
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="transition-all">
                          <Image
                            src={arrow_opacity}
                            width={10}
                            height={10}
                            alt=""
                          />
                        </div>
                        <div>
                          <Image src={arrow} width={10} height={10} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="">
                  <Link
                    href="#_"
                    className="group relative block overflow-hidden rounded-full bg-[#6C33B5] px-5 py-3 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#6C33B5] hover:to-[#9c67e5] hover:ring-2 hover:ring-[#9c67e5] hover:ring-offset-2"
                  >
                    <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-64" />
                    <span className="relative text-xs font-bold uppercase">
                      {option.name === 'Free Trial'
                        ? 'Try Now'
                        : 'PURCHASE NOW'}
                    </span>
                  </Link>
                  <Link
                    href={`details/${option.id}`}
                    className="inline-block pt-6 text-center text-sm font-bold text-[#6C33B5] underline"
                  >
                    View more details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative  rounded-lg bg-[#f8f8f8] px-5 py-5 md:my-10">
          <h2 className="font-bold text-2xl md:text-3xl">
            Don't have <span className="text-[#5a27da]">TIME</span>?  Our team
            handle <span className="text-[#5a27da]">EVERYTHING </span>
          </h2>
          <Image
            width={180}
            height={180}
            src={imageLine}
            className="absolute -top-full right-0 z-10 hidden md:block md:translate-y-4"
            alt=""
          />
        </div>
        <div className="relative z-10 mx-auto mt-12 flex flex-wrap justify-center gap-6 rounded-full">
          {requestPackage.map((pagkage) => (
            <div
              key={pagkage.id}
              className="md:calc(33.33%-16px) laptops:calc(33.33%-16px) xl:w-[calc(25%-18px)] small_SP:w-[90%]"
            >
              <div
                onClick={() => router.push(`details/${pagkage.id}`)}
                className=" flex cursor-pointer flex-col items-center rounded-2xl bg-white shadow-xl transition-all hover:shadow-[0_8px_32px_#0000003d]"
              >
                <div className="relative w-full pb-10">
                  <p className="mt-6 block text-2xl font-bold uppercase text-[#5a27da] lg:mb-5">
                    {pagkage.name}
                  </p>
                  <svg
                    data-v-fb0f0a5d=""
                    className="absolute bottom-0 w-full translate-y-[1px]"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    version="1.1"
                    width="100%"
                    height="15.100669860839844"
                    viewBox="0 0 324 15.100669860839844"
                  >
                    <g data-v-fb0f0a5d="">
                      <path
                        data-v-fb0f0a5d=""
                        d="M0,15L148.773,15Q74.3864,13.8677,0,0L0,15ZM148.773,15Q155.386,15.1007,162,15.1007Q168.614,15.1007,175.227,15L148.773,15ZM175.227,15L324,15L324,0Q249.614,13.8677,175.227,15Z"
                        fill="#6C33B5"
                        fillOpacity="1"
                      ></path>
                    </g>
                  </svg>
                  <div className="absolute bottom-0 left-1/2 z-10 mx-auto flex w-52 -translate-x-1/2 translate-y-1/2 items-center justify-center">
                    <Slider imageUser={pagkage.userHasPurchased} />
                  </div>
                </div>
                <div className="relative z-[2] mt-auto w-full   rounded-b-2xl bg-[#6C33B5] pb-5 pt-10">
                  <div className="my-1">
                    {pagkage.renderName !== undefined && (
                      <MessageRotator
                        messages={generateRandomNamesWithTime(
                          pagkage.renderName,
                        )}
                      />
                    )}
                  </div>
                  <div className="font-bold text-white lg:mt-4 lg:text-2xl">
                    <span className="text-lg font-medium leading-7">$</span>
                    {''}
                    {pagkage.credit}
                  </div>
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl bg-gradient-box p-5">
                <div onClick={() => handleShowContent(pagkage.id)}>
                  <ul
                    className={`${show[pagkage.id] ? 'h-auto' : 'max-h-[60px]'
                      } overflow-hidden transition-all`}
                  >
                    {pagkage?.category.map((pagkageItem, index) => (
                      <li className="flex items-center gap-2" key={index}>
                        <span className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 text-[#7b5bf7]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </span>
                        <p className="text-sm text-[#7b5bf7]">{pagkageItem}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mx-auto my-3 w-3 cursor-pointer">
                    {show[pagkage.id] ? (
                      <>
                        <div className="transition-all">
                          <Image src={arrow_up} width={10} height={10} alt="" />
                        </div>
                        <div>
                          <Image
                            src={arrow_up_opacity}
                            width={10}
                            height={10}
                            alt=""
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="transition-all">
                          <Image
                            src={arrow_opacity}
                            width={10}
                            height={10}
                            alt=""
                          />
                        </div>
                        <div>
                          <Image src={arrow} width={10} height={10} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="">
                  <Link
                    href="#_"
                    className="group relative block overflow-hidden rounded-full bg-[#6C33B5] px-5 py-3 text-white transition-all duration-300 ease-out hover:bg-gradient-to-r hover:from-[#6C33B5] hover:to-[#9c67e5] hover:ring-2 hover:ring-[#9c67e5] hover:ring-offset-2"
                  >
                    <span className="ease absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform bg-white opacity-10 transition-all duration-1000 group-hover:-translate-x-64" />
                    <span className="relative text-xs font-bold">
                      PURCHASE NOW
                    </span>
                  </Link>
                  <Link
                    href={`details/${pagkage.id}`}
                    className="inline-block pt-6 text-center text-sm font-bold text-[#6C33B5] underline"
                  >
                    View more details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
