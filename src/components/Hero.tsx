'use client'
import Image from 'next/image'

import { Button } from '@/components/molecules/ButtonCommon/ButtonCommon'
import { Container } from '@/components/Container'

import avatar1 from '@/images/avatars/avatar-1.png'
import avatar2 from '@/images/avatars/avatar-2.png'
import avatar3 from '@/images/avatars/avatar-3.png'
import avatar4 from '@/images/avatars/avatar-4.png'
import arrow from '@/images/icons/arrow.png'
import arrow_up from '@/images/icons/arrow_up.png'
import deco_1 from '@/images/avatars/deco-1.png'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export function Hero() {
  const [show, setShow] = useState<{ [key: number]: any }>({})

  const handleShowContent = (itemId: number) => {
    setShow((prevVisibleItems) => ({
      ...prevVisibleItems,
      [itemId]: !prevVisibleItems[itemId],
    }))
  }

  const slides = ['1', '2', '3', '4', '5']

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <Container className="bg-[#ecd3ff] pt-20 text-center lg:pt-32">
      <h1 className="font-display mx-auto max-w-4xl text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Accounting{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">made simple</span>
        </span>{' '}
        for small businesses.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Most bookkeeping software is accurate, but hard to use. We make the
        opposite trade-off, and hope you don’t get audited.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Get 6 months free</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>

      <div className="lg:mt-30 relative mt-36 w-full bg-white ">
        <svg
          data-v-2dd81426=""
          className="svg"
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
              fill="#ecd3ff"
              fillOpacity="1"
            ></path>
          </g>
        </svg>

        <div className="relative text-center text-6xl font-semibold">
          <Image
            src={deco_1}
            width={100}
            height={100}
            alt=""
            className="absolute bottom-0 right-16 -translate-x-full translate-y-1/2"
          />
          Tool for every kind
          <br /> of business
          <p className="mt-5 text-sm text-gray-400">
            Some metrisc play an essential role to measure the pulse of a
            companys customer service efficiency
          </p>
          <Image
            src={deco_1}
            width={100}
            height={100}
            alt=""
            className="absolute left-[10rem] top-0 -rotate-[90deg] "
          />
        </div>
        <div className="mx-auto mt-12 grid w-[1366px] grid-cols-3 gap-8 bg-white px-40 tablet:max-w-[672px]  tablet:grid-cols-2 tablet:px-5 PC:w-[1020px] PC:grid-cols-2 SP:w-full SP:max-w-[333px] SP:grid-cols-1 SP:px-5">
          {[
            { name: 'Trial', id: 1 },
            {
              name: 'Enorollment',
              id: 2,
            },
            { name: 'Rating', id: 3 },
          ].map((option) => (
            <div
              key={option.id}
              className="w-[calc(33.33% - 11px)] tablet:w-[calc(50% - 11px)] SP:w-full"
            >
              <div className=" flex cursor-pointer flex-col items-center overflow-hidden rounded-2xl bg-white shadow-xl">
                <div className="relative w-full pb-10">
                  <p className="mt-6 block text-[32px] font-semibold">
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
                        fill="#ef534f"
                        fillOpacity="1"
                      ></path>
                    </g>
                  </svg>
                  <div className="slider-container absolute bottom-0 left-1/2 z-10 mt-8 flex -translate-x-1/2 translate-y-1/2 items-center justify-center">
                    <Slider {...settings} className="w-[200px] overflow-hidden">
                      <div className="border-3 -ml-5 overflow-hidden rounded-full border-white">
                        <Image
                          src={avatar4}
                          alt=""
                          width={40}
                          height={40}
                          className=" block w-full object-cover"
                        />
                      </div>
                      <div className="border-3 -ml-5 overflow-hidden rounded-full border-white">
                        <Image
                          src={avatar4}
                          alt=""
                          width={40}
                          height={40}
                          className=" block w-full object-cover"
                        />
                      </div>
                      <div className="border-3 -ml-5 overflow-hidden rounded-full border-white">
                        <Image
                          src={avatar4}
                          alt=""
                          width={40}
                          height={40}
                          className=" block w-full object-cover"
                        />
                      </div>
                      <div className="border-3 -ml-5 overflow-hidden rounded-full border-white">
                        <Image
                          src={avatar4}
                          alt=""
                          width={40}
                          height={40}
                          className=" block w-full object-cover"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
                <div className="relative z-[2] w-full bg-[#ef534f] pb-3 pt-7">
                  <p className="my-1 text-sm text-gray-200">
                    joined 1 days ago
                  </p>
                  <div className="text-4xl text-white">
                    $4.04
                    <p className="text-sm">/month</p>
                  </div>
                </div>
              </div>
              <div
                className="mt-5 overflow-hidden rounded-2xl bg-[#fef1f7] p-5"
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
                        className="size-4 text-[#e91f64]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <p className="truncate text-sm text-[#ef534f]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
                        className="size-4 text-[#e91f64]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <p className="truncate text-sm text-[#ef534f]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
                        className="size-4 text-[#e91f64]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <p className="truncate text-sm text-[#ef534f]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
                        className="size-4 text-[#e91f64]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </span>
                    <p className="truncate text-sm text-[#ef534f]">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
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
                  className="block cursor-pointer rounded-full bg-[#ef534f] py-4 text-xs font-bold uppercase text-white"
                >
                  {option.name === 'Trial' ? 'USE NOW' : 'PURCHASE NOW'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
