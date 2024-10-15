'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'

import avatar1 from '@/images/avatars/avatar-4.png'

import arrow from '@/images/icons/arrow.png'
import arrow_up from '@/images/icons/arrow_up.png'
import deco_1 from '@/images/avatars/deco-1.png'
import iconPlus from '@/images/icons/plus_custom.webp'

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
    { id: 1, content: 'Slide 1' },
    { id: 2, content: 'Slide 2' },
    { id: 3, content: 'Slide 3' },
    { id: 4, content: 'Slide 4' },
  ])

  const sliderRef = useRef<Slider | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      content: `Slide ${slides.length + 1}`,
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
      <div className="relative h-[450px] bg-[#C1CEFE] text-center">
        <div className="px-5 md:pb-36 lg:pt-40">
          <h1 className="pb-6   text-center text-[22px] font-bold text-white md:text-[32px]">
            Shared premium subscription with lower price on Udemy Service
          </h1>

          <p className="pb-10 text-base font-medium text-white md:text-lg">
            Boost your Udemy enrollments and ratings with our safe, affordable,
            and results-driven service. Real students, real traffic, real
            results.
          </p>
        </div>

        <svg
          data-v-2dd81426=""
          className="svg z-2 absolute"
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
      <Container className="pt-20 text-center lg:pt-0">
        <div className="relative z-10 mt-36 w-full bg-white lg:-mt-[20px]">
          <div className="relative z-10 mx-auto mt-12 grid  w-[1366px] -translate-y-[60px] grid-cols-4  gap-8 rounded-full px-0 xl:px-0 tablet:max-w-[672px] tablet:grid-cols-2 tablet:px-0 PC:w-[1020px] PC:grid-cols-2 SP:w-full SP:max-w-[333px] SP:grid-cols-1 SP:px-5">
            {[
              { id: 1, name: 'Free Trial', credit: '10 credits' },
              {
                id: 2,
                name: 'Pay as you run',

                credit: '1 USD = 10 credits',
              },
              { id: 3, name: 'Basic plan', credit: '10 USD = 130 credits' },
              { id: 4, name: 'Premium plan', credit: '20 USD = 300 credits' },
            ].map((option) => (
              <div
                key={option.id}
                className="w-[calc(33.33% - 11px)] tablet:w-[calc(50% - 11px)] SP:w-full"
              >
                <div className=" flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:shadow-[0_8px_32px_#0000003d]">
                  <div className="relative w-full pb-10">
                    <p className="mt-6 block text-[32px] font-semibold lg:mb-8">
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
                        className="w-[200px] overflow-hidden "
                      >
                        {slides.map((_, index) => (
                          <div
                            className={`border-3 overflow-hidden rounded-full border-white  ${
                              currentIndex === index &&
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
                  <div className="relative z-[2] w-full bg-[#758ECD] pb-3 pt-7">
                    {slides.map((item, index) => {
                      let randomTime = index + Math.floor(Math.random() * index)
                      return (
                        <p
                          className={` my-1 transform text-sm text-white  ${
                            slides.length - 1 === item.id
                              ? 'opacity-1 transition-all delay-700 duration-1000 ease-in-out'
                              : 'opacity-0 transition-all delay-700 duration-1000 ease-in-out'
                          }`}
                          key={index}
                        >
                          {slides.length - 1 === item.id &&
                            item.content +
                              ` joined ${
                                randomTime >= 60
                                  ? randomTime + ' minutes ago'
                                  : randomTime + ' seconds ago'
                              }`}
                        </p>
                      )
                    })}
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
                    className={`${
                      show[option.id] ? 'h-auto' : 'max-h-[60px]'
                    } overflow-hidden transition-all`}
                  >
                    <li className="flex items-center gap-2">
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </li>
                    <li className="flex items-center gap-2">
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
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit.
                      </p>
                    </li>
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
      </Container>
    </>
  )
}
