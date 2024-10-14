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

const coupon = () => {
  return
}
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
            <span className="text-[#5a27da]"> Udemy Service?</span>
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
        <div className="fixed right-6 bottom-0 -translate-y-7 z-40 cursor-pointer">
          <svg className='swingimage' data-v-be02304d="" width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_1336_1756)" data-v-be02304d=""><path d="M22 6.94462C22 9.7136 24.2 11.8892 27 11.8892C29.8 11.8892 32 9.7136 32 6.94462C32 4.17563 29.8 2 27 2C24.2 2 22 4.17563 22 6.94462Z" fill="#EF534F" data-v-be02304d=""></path><path d="M45 39H9C6.2 39 4 36.8259 4 34.059V20.7789C4 18.012 6.2 15.8379 9 15.8379H45C47.8 15.8379 50 18.012 50 20.7789V34.059C50 36.8259 47.8 39 45 39Z" fill="#EF534F" data-v-be02304d=""></path><path d="M12.1242 16.2253L22.1642 6.30371L23.5782 7.70103L13.5382 17.6226L12.1242 16.2253ZM30.2662 7.70103L31.6802 6.30371L41.7202 16.2253L40.3062 17.6226L30.2662 7.70103Z" fill="#EF534F" data-v-be02304d=""></path><path d="M13.1295 31.8532C12.4981 31.8532 12.0146 31.6755 11.679 31.3201C11.3513 30.9647 11.1875 30.4632 11.1875 29.8156V25.3613C11.1875 24.7137 11.3513 24.2122 11.679 23.8568C12.0146 23.5014 12.4981 23.3237 13.1295 23.3237C13.7608 23.3237 14.2404 23.5014 14.568 23.8568C14.9037 24.2122 15.0715 24.7137 15.0715 25.3613V26.238H13.8248V25.2784C13.8248 24.7651 13.605 24.5084 13.1655 24.5084C12.7259 24.5084 12.5061 24.7651 12.5061 25.2784V29.9104C12.5061 30.4158 12.7259 30.6685 13.1655 30.6685C13.605 30.6685 13.8248 30.4158 13.8248 29.9104V28.6428H15.0715V29.8156C15.0715 30.4632 14.9037 30.9647 14.568 31.3201C14.2404 31.6755 13.7608 31.8532 13.1295 31.8532Z" fill="white" data-v-be02304d=""></path><path d="M18.5391 31.8532C17.8918 31.8532 17.3963 31.6716 17.0526 31.3083C16.709 30.945 16.5372 30.4316 16.5372 29.7682V25.4087C16.5372 24.7453 16.709 24.232 17.0526 23.8687C17.3963 23.5054 17.8918 23.3237 18.5391 23.3237C19.1864 23.3237 19.6819 23.5054 20.0256 23.8687C20.3692 24.232 20.541 24.7453 20.541 25.4087V29.7682C20.541 30.4316 20.3692 30.945 20.0256 31.3083C19.6819 31.6716 19.1864 31.8532 18.5391 31.8532ZM18.5391 30.6685C18.9946 30.6685 19.2224 30.3961 19.2224 29.8511V25.3258C19.2224 24.7808 18.9946 24.5084 18.5391 24.5084C18.0836 24.5084 17.8558 24.7808 17.8558 25.3258V29.8511C17.8558 30.3961 18.0836 30.6685 18.5391 30.6685Z" fill="white" data-v-be02304d=""></path><path d="M24.1001 31.8532C23.4607 31.8532 22.9732 31.6755 22.6376 31.3201C22.3019 30.9568 22.1341 30.4395 22.1341 29.7682V23.4422H23.4527V29.863C23.4527 30.1473 23.5087 30.3526 23.6206 30.479C23.7404 30.6054 23.9083 30.6685 24.124 30.6685C24.3398 30.6685 24.5037 30.6054 24.6155 30.479C24.7354 30.3526 24.7954 30.1473 24.7954 29.863V23.4422H26.066V29.7682C26.066 30.4395 25.8982 30.9568 25.5626 31.3201C25.2269 31.6755 24.7394 31.8532 24.1001 31.8532Z" fill="white" data-v-be02304d=""></path><path d="M27.7544 23.4422H29.6964C30.3518 23.4422 30.8432 23.6159 31.1709 23.9634C31.4986 24.3109 31.6624 24.8203 31.6624 25.4916V26.309C31.6624 26.9803 31.4986 27.4897 31.1709 27.8372C30.8432 28.1847 30.3518 28.3585 29.6964 28.3585H29.0731V31.7347H27.7544V23.4422ZM29.6964 27.1738C29.9122 27.1738 30.072 27.1146 30.1759 26.9961C30.2878 26.8777 30.3438 26.6763 30.3438 26.392V25.4087C30.3438 25.1244 30.2878 24.923 30.1759 24.8045C30.072 24.6861 29.9122 24.6268 29.6964 24.6268H29.0731V27.1738H29.6964Z" fill="white" data-v-be02304d=""></path><path d="M35.0338 31.8532C34.3865 31.8532 33.891 31.6716 33.5474 31.3083C33.2037 30.945 33.0319 30.4316 33.0319 29.7682V25.4087C33.0319 24.7453 33.2037 24.232 33.5474 23.8687C33.891 23.5054 34.3865 23.3237 35.0338 23.3237C35.6812 23.3237 36.1767 23.5054 36.5203 23.8687C36.8639 24.232 37.0358 24.7453 37.0358 25.4087V29.7682C37.0358 30.4316 36.8639 30.945 36.5203 31.3083C36.1767 31.6716 35.6812 31.8532 35.0338 31.8532ZM35.0338 30.6685C35.4894 30.6685 35.7171 30.3961 35.7171 29.8511V25.3258C35.7171 24.7808 35.4894 24.5084 35.0338 24.5084C34.5783 24.5084 34.3505 24.7808 34.3505 25.3258V29.8511C34.3505 30.3961 34.5783 30.6685 35.0338 30.6685Z" fill="white" data-v-be02304d=""></path><path d="M38.6768 23.4422H40.3311L41.6137 28.4059H41.6377V23.4422H42.8125V31.7347H41.4579L39.8755 25.6812H39.8516V31.7347H38.6768V23.4422Z" fill="white" data-v-be02304d=""></path></g><defs data-v-be02304d=""><filter id="filter0_d_1336_1756" x="0" y="0" width="54" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB" data-v-be02304d=""><feFlood floodOpacity="0" result="BackgroundImageFix" data-v-be02304d=""></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-be02304d=""></feColorMatrix><feOffset dy="2" data-v-be02304d=""></feOffset><feGaussianBlur stdDeviation="2" data-v-be02304d=""></feGaussianBlur><feComposite in2="hardAlpha" operator="out" data-v-be02304d=""></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" data-v-be02304d=""></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1336_1756" data-v-be02304d=""></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1336_1756" result="shape" data-v-be02304d=""></feBlend></filter></defs></svg>
        </div>
      </Container>
    </section>
  )
}
