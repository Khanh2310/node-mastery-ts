'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'

import arrow from '@/images/icons/arrow.png'
import arrow_opacity from '@/images/icons/arrow_opacity.png'
import arrow_up from '@/images/icons/arrow_up.png'
import arrow_up_opacity from '@/images/icons/arrow_up_opacity.png'
import { useCallback, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Slider } from '@/components/organisms/Slider'
import { MessageRotator } from '@/components/molecules/MessageRotator'
import imageLine from '@/images/screenshots/imageLine.png'
import { ModalBase } from '@/components/molecules/ModalBase'

export function Hero() {
  const router = useRouter()

  const [show, setShow] = useState<{ [key: number]: any }>({})
  const handleShowContent = (itemId: number) => {
    setShow((prevVisibleItems) => ({
      ...prevVisibleItems,
      [itemId]: !prevVisibleItems[itemId],
    }))
  }

  const [showModal, setShowModal] = useState(false)
  // Memoize the handleClose function
  const handleClose = useCallback(() => setShowModal(false), [])

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
                        />
                      </g>
                    </svg>
                    <div className="absolute bottom-0 left-1/2 z-10 mx-auto flex w-52 -translate-x-1/2 translate-y-1/2 items-center justify-center">
                      <Slider imageUser={option.userHasPurchased} />
                    </div>
                  </div>
                  <div className="relative z-[2] mt-auto w-full rounded-b-2xl bg-[#6C33B5] pb-5 pt-10">
                    <div
                      className={`${
                        option.id === 1 ? 'my-[6px] lg:my-2' : 'my-1'
                      }`}
                    >
                      {option.renderName && (
                        <MessageRotator
                          messages={generateRandomNamesWithTime(
                            option.renderName,
                          )}
                        />
                      )}
                    </div>
                    {option.name == 'Free Trial' ? (
                      <div className="test-base font-bold text-white">
                        {option.credit} credits
                      </div>
                    ) : (
                      <div className="font-bold text-white md:text-2xl">
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
                    className={`${
                      show[option.id] ? 'h-auto' : 'max-h-[60px]'
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
          <h2 className="text-2xl font-bold md:text-3xl">
            Don't have <span className="text-[#5a27da]">TIME</span>? Our team
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
                      />
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
                  <div className="font-bold text-white md:text-2xl lg:mt-4 ">
                    <span className="text-lg font-medium leading-7">$</span>
                    {''}
                    {pagkage.credit}
                  </div>
                </div>
              </div>
              <div className="mt-5 overflow-hidden rounded-2xl bg-gradient-box p-5">
                <div onClick={() => handleShowContent(pagkage.id)}>
                  <ul
                    className={`${
                      show[pagkage.id] ? 'h-auto' : 'max-h-[60px]'
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
      <ModalBase open={showModal} handleClose={handleClose} />
      <div
        className="fixed bottom-0 right-6 z-40 -translate-y-24 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="swingimage"
          data-v-be02304d=""
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1336_1756)" data-v-be02304d="">
            <path
              d="M22 6.94462C22 9.7136 24.2 11.8892 27 11.8892C29.8 11.8892 32 9.7136 32 6.94462C32 4.17563 29.8 2 27 2C24.2 2 22 4.17563 22 6.94462Z"
              fill="#EF534F"
              data-v-be02304d=""
            ></path>
            <path
              d="M45 39H9C6.2 39 4 36.8259 4 34.059V20.7789C4 18.012 6.2 15.8379 9 15.8379H45C47.8 15.8379 50 18.012 50 20.7789V34.059C50 36.8259 47.8 39 45 39Z"
              fill="#EF534F"
              data-v-be02304d=""
            ></path>
            <path
              d="M12.1242 16.2253L22.1642 6.30371L23.5782 7.70103L13.5382 17.6226L12.1242 16.2253ZM30.2662 7.70103L31.6802 6.30371L41.7202 16.2253L40.3062 17.6226L30.2662 7.70103Z"
              fill="#EF534F"
              data-v-be02304d=""
            ></path>
            <path
              d="M13.1295 31.8532C12.4981 31.8532 12.0146 31.6755 11.679 31.3201C11.3513 30.9647 11.1875 30.4632 11.1875 29.8156V25.3613C11.1875 24.7137 11.3513 24.2122 11.679 23.8568C12.0146 23.5014 12.4981 23.3237 13.1295 23.3237C13.7608 23.3237 14.2404 23.5014 14.568 23.8568C14.9037 24.2122 15.0715 24.7137 15.0715 25.3613V26.238H13.8248V25.2784C13.8248 24.7651 13.605 24.5084 13.1655 24.5084C12.7259 24.5084 12.5061 24.7651 12.5061 25.2784V29.9104C12.5061 30.4158 12.7259 30.6685 13.1655 30.6685C13.605 30.6685 13.8248 30.4158 13.8248 29.9104V28.6428H15.0715V29.8156C15.0715 30.4632 14.9037 30.9647 14.568 31.3201C14.2404 31.6755 13.7608 31.8532 13.1295 31.8532Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M18.5391 31.8532C17.8918 31.8532 17.3963 31.6716 17.0526 31.3083C16.709 30.945 16.5372 30.4316 16.5372 29.7682V25.4087C16.5372 24.7453 16.709 24.232 17.0526 23.8687C17.3963 23.5054 17.8918 23.3237 18.5391 23.3237C19.1864 23.3237 19.6819 23.5054 20.0256 23.8687C20.3692 24.232 20.541 24.7453 20.541 25.4087V29.7682C20.541 30.4316 20.3692 30.945 20.0256 31.3083C19.6819 31.6716 19.1864 31.8532 18.5391 31.8532ZM18.5391 30.6685C18.9946 30.6685 19.2224 30.3961 19.2224 29.8511V25.3258C19.2224 24.7808 18.9946 24.5084 18.5391 24.5084C18.0836 24.5084 17.8558 24.7808 17.8558 25.3258V29.8511C17.8558 30.3961 18.0836 30.6685 18.5391 30.6685Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M24.1001 31.8532C23.4607 31.8532 22.9732 31.6755 22.6376 31.3201C22.3019 30.9568 22.1341 30.4395 22.1341 29.7682V23.4422H23.4527V29.863C23.4527 30.1473 23.5087 30.3526 23.6206 30.479C23.7404 30.6054 23.9083 30.6685 24.124 30.6685C24.3398 30.6685 24.5037 30.6054 24.6155 30.479C24.7354 30.3526 24.7954 30.1473 24.7954 29.863V23.4422H26.066V29.7682C26.066 30.4395 25.8982 30.9568 25.5626 31.3201C25.2269 31.6755 24.7394 31.8532 24.1001 31.8532Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M27.7544 23.4422H29.6964C30.3518 23.4422 30.8432 23.6159 31.1709 23.9634C31.4986 24.3109 31.6624 24.8203 31.6624 25.4916V26.309C31.6624 26.9803 31.4986 27.4897 31.1709 27.8372C30.8432 28.1847 30.3518 28.3585 29.6964 28.3585H29.0731V31.7347H27.7544V23.4422ZM29.6964 27.1738C29.9122 27.1738 30.072 27.1146 30.1759 26.9961C30.2878 26.8777 30.3438 26.6763 30.3438 26.392V25.4087C30.3438 25.1244 30.2878 24.923 30.1759 24.8045C30.072 24.6861 29.9122 24.6268 29.6964 24.6268H29.0731V27.1738H29.6964Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M35.0338 31.8532C34.3865 31.8532 33.891 31.6716 33.5474 31.3083C33.2037 30.945 33.0319 30.4316 33.0319 29.7682V25.4087C33.0319 24.7453 33.2037 24.232 33.5474 23.8687C33.891 23.5054 34.3865 23.3237 35.0338 23.3237C35.6812 23.3237 36.1767 23.5054 36.5203 23.8687C36.8639 24.232 37.0358 24.7453 37.0358 25.4087V29.7682C37.0358 30.4316 36.8639 30.945 36.5203 31.3083C36.1767 31.6716 35.6812 31.8532 35.0338 31.8532ZM35.0338 30.6685C35.4894 30.6685 35.7171 30.3961 35.7171 29.8511V25.3258C35.7171 24.7808 35.4894 24.5084 35.0338 24.5084C34.5783 24.5084 34.3505 24.7808 34.3505 25.3258V29.8511C34.3505 30.3961 34.5783 30.6685 35.0338 30.6685Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M38.6768 23.4422H40.3311L41.6137 28.4059H41.6377V23.4422H42.8125V31.7347H41.4579L39.8755 25.6812H39.8516V31.7347H38.6768V23.4422Z"
              fill="white"
              data-v-be02304d=""
            ></path>
          </g>
          <defs data-v-be02304d="">
            <filter
              id="filter0_d_1336_1756"
              x="0"
              y="0"
              width="54"
              height="45"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
              data-v-be02304d=""
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
                data-v-be02304d=""
              ></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                data-v-be02304d=""
              ></feColorMatrix>
              <feOffset dy="2" data-v-be02304d=""></feOffset>
              <feGaussianBlur
                stdDeviation="2"
                data-v-be02304d=""
              ></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="out"
                data-v-be02304d=""
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                data-v-be02304d=""
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1336_1756"
                data-v-be02304d=""
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1336_1756"
                result="shape"
                data-v-be02304d=""
              ></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
    </>
  )
}
