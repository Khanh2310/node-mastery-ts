'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'

import avatar1 from '@/images/avatars/avatar-4.png'

import arrow from '@/images/icons/arrow.png'
import arrow_up from '@/images/icons/arrow_up.png'
import deco_1 from '@/images/avatars/deco-1.png'
import iconPlus from '@/images/icons/plus_custom.webp'
import DOMPurify from 'dompurify';

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export function Hero() {
  const [show, setShow] = useState<{ [key: number]: any }>({})
  const [showModal, setShowModal] = useState(true)
  const handleShowContent = (itemId: number) => {
    setShow((prevVisibleItems) => ({
      ...prevVisibleItems,
      [itemId]: !prevVisibleItems[itemId],
    }))
  }

  const [slides, setSlides] = useState([
    { id: 1, content: 'User 1' },
    { id: 2, content: 'User 2' },
    { id: 3, content: 'User 3' },
    { id: 4, content: 'User 4' },
  ])

  const sliderRef = useRef<Slider | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      content: `User ${slides.length + 1}`,
    }
    setSlides([...slides, newSlide])
  }

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }, [slides])

  const settings: Settings = {
    className: 'center',
    infinite: true,
    draggable: false,
    swipe: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: undefined,
    prevArrow: undefined,
  }

  return (
    <>
      <div className="relative h-[380px] md:h-[380px] lg:h-[380px] bg-[#C1CEFE] text-center">
        <div className="mx-auto w-full px-5 md:pb-0 lg:pt-28 md:pt-16 pt-20">
          <h1 className="mb-6 text-center text-[22px] font-bold text-white md:text-[32px]">
            Ignite Your Udemy Success: Real Traffic, Real Students, Real Revenue!
          </h1>

          <p className="lg:pb-20 md:text-base text-white md:pb-10 text-sm">
            Are you a dedicated Udemy instructor looking to boost your course enrollments and improve your ratings? Look no further!<br /> Our innovative service is designed specifically for existing Udemy instructors who want to maximize their potential without compromising their account safety.
          </p>
        </div>

        <svg
          data-v-2dd81426=""
          className="svg z-2 absolute bottom-0 translate-y-full"
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
              fill="#C1CEFE"
              fillOpacity="1"
            ></path>
          </g>
        </svg>
      </div>
      <Container className="text-center">
        <div className="relative z-10 w-full bg-white -mt-[20px]">
          <div className="relative z-10 mx-auto mt-12 flex gap-6 -translate-y-[60px] flex-wrap justify-center rounded-full">
            {[
              {
                id: 1, name: 'Free Trial', credit: '10 credits', category: [
                  '01 new student : 01 credit',
                  '01 new 5-star rate: 05 credits',
                  'Valid 03 days',
                  'Only for 1 instructor'
                ]
              },
              {
                id: 2,
                name: 'PAY AS YOU GO',

                credit: '1 USD = 10 credits',
                category: [
                  '01 new student : 01 credit',
                  '01 new 5-star rate: 05 credits',
                  'No expire',
                  'Unlimited instructor / course'
                ]
              },
              {
                id: 3, name: 'Basic plan', credit: '10 USD = 130 credits', category: [
                  '01 new student : 01 credit',
                  '01 new 5-star rate: 05 credits',
                  'No expire',
                  'Unlimited instructor / course'
                ]
              },
              {
                id: 4, name: 'Premium plan', credit: '20 USD = 300 credits', category: [
                  '01 new student : 01 credit',
                  '01 new 5-star rate: 05 credits',
                  'No expire',
                  'Unlimited instructor / course'
                ]
              },
            ].map((option) => (
              <div
                key={option.id}
                className="lg:w-[calc(25%-18px)] md:calc(33.33%-16px)"
              >
                <div className=" flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-[0_8px_32px_#0000003d]">
                  <div className="relative w-full pb-10">
                    <p className="mt-6 block text-2xl font-bold lg:mb-5 uppercase text-[#5a27da]">
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
                          fill="#758ECD"
                          fillOpacity="1"
                        ></path>
                      </g>
                    </svg>
                    <div className="slider-container absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 translate-y-1/2 items-center justify-center overflow-hidden">
                      <Slider
                        {...settings}
                        ref={sliderRef}
                        className="lg:w-[180px] w-[150px] overflow-hidden"
                      >
                        {slides.map((_, index) => (
                          <div
                            className={`border-3 overflow-hidden rounded-full border-white  ${currentIndex === index &&
                              'scale-105 transform duration-500'
                              }`}
                            key={index}
                            data-index={index}
                          >
                            <Image
                              src={avatar1}
                              alt=""
                              width={48}
                              height={48}
                              className="w-full object-cover"
                            />
                          </div>
                        ))}
                      </Slider>

                      <button onClick={addSlide}>
                        <Image
                          src={iconPlus}
                          alt=""
                          width={40}
                          height={40}
                          className="block w-full object-cover"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative z-[2] w-full bg-[#758ECD] pb-5 pt-7">
                    {slides.map((item, index) => (
                      <p
                        className={` my-1 transform text-sm text-white  ${slides.length - 1 === item.id
                          ? 'opacity-1 transition-all delay-700 duration-1000 ease-in-out'
                          : 'opacity-0 transition-all delay-700 duration-1000 ease-in-out'
                          }`}
                        key={index}
                      >
                        {slides.length - 1 === item.id &&
                          item.content + ` joined ${index + ' seconds ago'}`}
                      </p>
                    ))}
                    <div className="font-bold text-white lg:mt-4 lg:text-lg lg:leading-[22px]">
                      {option.credit}
                    </div>
                  </div>
                </div>
                <div
                  className="mt-5 overflow-hidden rounded-2xl bg-[#f4f3ff] p-5"
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
                        <p className="truncate text-sm text-[#7b5bf7]">
                          {categoryItem}
                        </p>
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
                          <Image src={arrow_up} width={10} height={10} alt="" />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="transition-all">
                          <Image src={arrow} width={10} height={10} alt="" />
                        </div>
                        <div>
                          <Image src={arrow} width={10} height={10} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                  <Link
                    href="#"
                    className="block cursor-pointer rounded-full bg-[#758ECD] py-4 text-xs font-bold uppercase text-white"
                  >
                    {option.name === 'Trial' ? 'USE NOW' : 'PURCHASE NOW'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:text-2xl font-bold px-5">DON'T KNOW HOW TO DO? LET OUR EXPERT TEAM HANDLE EVERYTHING FOR YOU WITH STARTER PLAN</div>
        <div className="relative z-10 mx-auto mt-12 flex gap-6 flex-wrap justify-center rounded-full">
          {[
            {
              id: 5, name: 'STARTER PLAN', credit: '10 USD', category: [
                'New student : 100 students',
                'New 5-star rate: 10 rating',
                'Execute by our expert team',
                'No login info required',
                'Delivery date: 05 Days'
              ]
            },
            {
              id: 6,
              name: 'MOVER PLAN',

              credit: '50 USD',
              category: [
                'New student : 1.000 students',
                'New 5-star rate: 30 rating',
                'Execute by our expert team',
                'No login info required',
                'Delivery date: 10 Days',
              ]
            },
            {
              id: 7, name: 'FLYER PLAN', credit: '100 USD', category: [
                'New student : 2.000 students',
                'New 5-star rate: 30 rating',
                "Revenue Guarantee: 50 USD *",
                'Executed by our expert team',
                'No login info required',
                'Delivery date: 15 Days'
              ]
              ,
              sale: '10%'
            },
            {
              id: 8, name: 'LEAP PLAN', credit: '300 USD', category: [
                'New student : 20.000 students',
                'New 5-star rate: 50 rating',
                "Revenue Guarantee: 100 USD *",
                'Executed by our expert team',
                'No login info required',
                'Delivery date: 15 Days',
              ]
            },
          ].map((pagkage) => (
            <div
              key={pagkage.id}
              className="lg:w-[calc(25%-18px)] md:calc(33.33%-16px)"
            >
              <div className=" flex cursor-pointer flex-col items-center rounded-2xl bg-white shadow-xl transition-all hover:shadow-[0_8px_32px_#0000003d]">

                <div className="relative w-full pb-10">

                  {pagkage?.sale && <div className="ribbon">{pagkage.sale}</div>}

                  <p className="mt-6 block text-2xl font-bold lg:mb-5 uppercase text-[#5a27da]">
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
                        fill="#758ECD"
                        fillOpacity="1"
                      ></path>
                    </g>
                  </svg>
                  <div className="slider-container absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 translate-y-1/2 items-center justify-center overflow-hidden">
                    <Slider
                      {...settings}
                      ref={sliderRef}
                      className="lg:w-[180px] w-[150px] overflow-hidden"
                    >
                      {slides.map((_, index) => (
                        <div
                          className={`border-3 overflow-hidden rounded-full border-white  ${currentIndex === index &&
                            'scale-105 transform duration-500'
                            }`}
                          key={index}
                          data-index={index}
                        >
                          <Image
                            src={avatar1}
                            alt=""
                            width={48}
                            height={48}
                            className="w-full object-cover"
                          />
                        </div>
                      ))}
                    </Slider>

                    <button onClick={addSlide}>
                      <Image
                        src={iconPlus}
                        alt=""
                        width={40}
                        height={40}
                        className="block w-full object-cover"
                      />
                    </button>
                  </div>
                </div>
                <div className="relative z-[2] w-full bg-[#758ECD] pb-5 pt-7 rounded-b-2xl">
                  {slides.map((item, index) => (
                    <p
                      className={` my-1 transform text-sm text-white  ${slides.length - 1 === item.id
                        ? 'opacity-1 transition-all delay-700 duration-1000 ease-in-out'
                        : 'opacity-0 transition-all delay-700 duration-1000 ease-in-out'
                        }`}
                      key={index}
                    >
                      {slides.length - 1 === item.id &&
                        item.content + ` joined ${index + ' seconds ago'}`}
                    </p>
                  ))}
                  <div className="font-bold text-white lg:mt-4 lg:text-lg lg:leading-[22px]">
                    {pagkage.credit}
                  </div>
                </div>
              </div>
              <div
                className="mt-5 overflow-hidden rounded-2xl bg-[#f4f3ff] p-5"
                onClick={() => handleShowContent(pagkage.id)}
              >
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
                      <p className="truncate text-sm text-[#7b5bf7]">
                        {pagkageItem}
                      </p>
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
                        <Image src={arrow_up} width={10} height={10} alt="" />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="transition-all">
                        <Image src={arrow} width={10} height={10} alt="" />
                      </div>
                      <div>
                        <Image src={arrow} width={10} height={10} alt="" />
                      </div>
                    </>
                  )}
                </div>
                <Link
                  href="#"
                  className="block cursor-pointer rounded-full bg-[#758ECD] py-4 text-xs font-bold uppercase text-white"
                >
                  {pagkage.name === 'Trial' ? 'USE NOW' : 'PURCHASE NOW'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
