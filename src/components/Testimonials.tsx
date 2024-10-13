'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import iconRocket from '@/images/icons/rocket.svg'
import avatar1 from '@/images/avatars/avatar-4.png'

import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const testimonials = [
  {
    content:
      'Udemy Service is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
    author: {
      name: 'Sheryl Berge',
      role: 'CEO at Lynch LLC',
      image: avatarImage1,
    },
  },
  {
    content:
      'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
    author: {
      name: 'Amy Hahn',
      role: 'IT',
      image: avatarImage4,
    },
  },
  {
    content:
      'The best part about Udemy Service is every time I pay my employees, my bank balance doesn’t go down like it used to.',
    author: {
      name: 'Leland Kiehn',
      role: 'IT',
      image: avatarImage5,
    },
  },
  {
    content:
      'There are so many things I had to do with my old software that I just don’t do at all with Udemy Service. Suspicious but I can’t say I don’t love it.',
    author: {
      name: 'Erin Powlowski',
      role: 'COO at Armstrong Inc',
      image: avatarImage2,
    },
  },
  {
    content:
      'I used to have to remit tax to the EU and with Udemy Service I somehow don’t have to do that anymore. Nervous to travel there now though.',
    author: {
      name: 'Peter Renolds',
      role: 'Founder of West Inc',
      image: avatarImage3,
    },
  },
  {
    content:
      'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
    author: {
      name: 'Amy Hahn',
      role: 'CEO',
      image: avatarImage4,
    },
  },
]

const listPeopleUse = [
  {
    image: 'iconRocket',
    title: 'REAL-TIME DELIVERY',
    content:
      'Real-time delivery after payment without waiting, fast arrival to dispel your worries',
  },
  {
    image: 'iconRocket',
    title: 'QUICK RESET',
    content:
      'Click reset passkey on the subscription page without waiting and manual operation',
  },
  {
    image: 'iconRocket',
    title: 'SSL CERTIFICATE',
    content:
      'Payments take place in a secure environment with an SSL security certificate',
  },
  {
    image: 'iconRocket',
    title: '24/7 LIVE SUPPORT',
    content:
      'provides 24/7 online private customer service, help you have a good experience',
  },
  {
    image: 'iconRocket',
    title: 'SUITABLE SUBSCRIBER',
    content: 'Get premium subscription at lower price.',
  },
  {
    image: 'iconRocket',
    title: 'REFUND GUARANTEE',
    content:
      'We offer buyer protection, with refunds available within 24 hours.',
  },
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className="absolute right-0 top-1/2  z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full shadow-[0_2px_8px_#00000014] transition-all duration-300 hover:bg-[#7b5bf7] hover:text-white"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  )
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return (
    <div
      className="absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full shadow-[0_2px_8px_#00000014] transition-all duration-300 hover:bg-[#7b5bf7] hover:text-white"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
    </div>
  )
}

export function Testimonials() {
  const settings: Settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 px-5 py-20 sm:py-32 sm:px-20 md:px-20 xl:px-40"
    >
      <Container>
        <div className="mx-auto mb-[80px] max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why <span className="text-[#5a27da]">more and more</span> people use
            <span className="text-[#5a27da]"> Udemy?</span>
          </h2>
        </div>
        <div
          className="md:w-max-[80%] mx-auto flex w-[80%] flex-wrap justify-center sm:justify-center
        md:w-full md:max-w-[1366px] lg:max-w-none lg:justify-between xl:justify-center xl:gap-x-10 xl:gap-y-5 tablet:justify-center"
        >
          {listPeopleUse.map((item, index) => (
            <div
              className="flex w-full px-4 py-6 hover:rounded-2xl hover:shadow-[0_24px_40px_#e6dbdb52] md:w-[438px] "
              key={index}
            >
              <div className="mr-6 flex h-16 w-16 items-center justify-center rounded-full shadow-[0_20px_20px_#0000000d] hover:bg-[#ef534f] hover:fill-white hover:shadow-[0_4px_10px_#00000014]">
                <Image
                  src={iconRocket}
                  width={36}
                  height={36}
                  alt=""
                  className=" hover:fill-white"
                />
              </div>
              <div className="flex-1">
                <p className="pb-6 text-lg font-bold text-[#333232]">
                  {item.title}
                </p>
                <span className="text-sm text-[#999696]">{item.content}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="md:mt-36 mt-11">
          <div className="mb-[68px] text-center text-2xl font-bold leading-10">
            <span className="text-[#5a27da]">98%</span> Positive Reviews
          </div>
          <Slider {...settings} className="slider-container testimonial">
            {testimonials.map((slideItem, slideIndex) => (
              <div
                className="flex h-[200px] flex-col justify-between rounded-2xl p-5 shadow-[0_4px_16px_#00000014]"
                key={slideIndex}
              >
                <div className="mb-6 flex items-start">
                  <div className="mr-4">
                    <Image
                      src={slideItem.author.image}
                      width={48}
                      height={48}
                      alt=""
                      className="w-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-base font-bold leading-5 text-[#333333]">
                      {slideItem.author.name}
                    </p>
                    <p className="mt-3 text-sm leading-4 text-[#999696]">
                      {slideItem.author.role}
                    </p>
                  </div>
                </div>
                <div className="line-clamp-[10] overflow-hidden text-sm">
                  {slideItem.content}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  )
}
