'use client'
import Image from 'next/image'

import { Container } from '@/components/Container'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import iconRocket from '@/images/icons/rocket.svg'
import itemRocket_hover from '@/images/icons/rocket-hover.svg'
import iconPwd from '@/images/icons/pwd.svg'
import iconPwd_hover from '@/images/icons/pwd_hover.svg'
import iconSll from '@/images/icons/ssl.svg'
import iconSll_hover from '@/images/icons/ssl_hover.svg'
import iconSp from '@/images/icons/support.svg'
import iconSp_hover from '@/images/icons/support_hover.svg'
import iconSub from '@/images/icons/subcribe.svg'
import iconSub_hover from '@/images/icons/subcribe_hover.svg'
import iconRef from '@/images/icons/refund.svg'
import iconRef_hover from '@/images/icons/refund_hover.svg'

import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'

const testimonials = [
  {
    content:
      'I’ve seen a remarkable increase in my enrollments since using this service. The real traffic from genuine students has made all the difference!',
    author: {
      name: 'Sarah Thompson',
      role: 'Online Course Creator',
      image: avatarImage1,
    },
  },
  {
    content:
      'The team’s expertise in marketing truly shines. My course rating improved within weeks, and I couldn’t be happier!',
    author: {
      name: 'Michael Roberts',
      role: 'Educational Entrepreneur',
      image: avatarImage4,
    },
  },
  {
    content:
      'This service is a game-changer! I love the real-time tracking dashboard—it’s so motivating to see my progress instantly.',
    author: {
      name: 'Emily Johnson',
      role: 'Udemy Instructor',
      image: avatarImage5,
    },
  },
  {
    content:
      'I was skeptical at first, but the increase in my revenue speaks for itself. This service is worth every penny!',
    author: {
      name: 'David Martinez',
      role: 'Digital Marketing Specialist',
      image: avatarImage2,
    },
  },
  {
    content:
      'My course ratings have soared, thanks to their effective strategies. I highly recommend this service to fellow instructors!',
    author: {
      name: 'Jessica Brown',
      role: 'Language Instructor',
      image: avatarImage3,
    },
  },
  {
    content:
      'Finally, a service that prioritizes account safety while delivering results. I feel secure promoting my courses through them.',
    author: {
      name: 'Daniel Lee',
      role: 'Business Coach',
      image: avatarImage4,
    },
  },
  {
    content:
      'The low-cost options for boosting ratings are incredible. I appreciate how affordable it is to enhance my course’s reputation.',
    author: {
      name: 'Laura Wilson',
      role: 'Fitness Trainer',
      image: avatarImage4,
    },
  },
  {
    content:
      'The targeted marketing approach has helped me reach students who truly want to learn. My classes are now filled with eager learners!',
    author: {
      name: 'James Anderson',
      role: 'Graphic Design Instructor',
      image: avatarImage4,
    },
  },
  {
    content:
      'This service has transformed my Udemy experience. I’m now confident in my teaching and my income!',
    author: {
      name: 'Olivia Martinez',
      role: 'STEM Educator',
      image: avatarImage4,
    },
  },
  {
    content:
      'The real-time insights provided by the dashboard have allowed me to optimize my marketing efforts effectively. Highly recommend!',
    author: {
      name: 'Kevin Garcia',
      role: 'Software Development Trainer',
      image: avatarImage4,
    },
  },
  {
    content:
      'I can’t believe how quickly my course ratings improved. This service delivers on its promises—I’m thrilled!',
    author: {
      name: 'Sophia Taylor',
      role: 'Art Instructor',
      image: avatarImage4,
    },
  },
  {
    content:
      'Their commitment to ethical practices gives me peace of mind. I trust this service completely with my account.',
    author: {
      name: 'Ryan Williams',
      role: 'Personal Development Coach',
      image: avatarImage4,
    },
  },
  {
    content:
      'The increase in engagement and positive reviews has been phenomenal. I’ve seen a tangible impact on my revenue!',
    author: {
      name: 'Megan Davis',
      role: 'Music Teacher',
      image: avatarImage4,
    },
  },
  {
    content:
      'What I appreciate most is the transparent pay-per-success model. I only pay for results, which makes it a smart investment.',
    author: {
      name: 'Matthew Robinson',
      role: 'History Professor',
      image: avatarImage4,
    },
  },
  {
    content:
      'Thanks to this service, I’ve gained not only students but also friends who are passionate about learning. My community has grown!',
    author: {
      name: 'Isabella Harris',
      role: 'Cooking Instructor',
      image: avatarImage4,
    },
  },
  {
    content:
      'The team is incredibly supportive and responsive. They truly care about my success, and it shows in the results!',
    author: {
      name: 'Ethan Clark',
      role: 'Freelance Writer',
      image: avatarImage4,
    },
  },
  {
    content:
      'I’ve tried other services before, but none compare to this. The combination of safety and effectiveness is unmatched.',
    author: {
      name: 'Ava Nelson',
      role: 'Marketing Strategist',
      image: avatarImage4,
    },
  },
  {
    content:
      'I’m amazed by how quickly I saw an increase in course enrollments. This service really understands the Udemy platform!',
    author: {
      name: 'Lucas Wright',
      role: 'Photography Instructor',
      image: avatarImage4,
    },
  },
  {
    content:
      'It’s refreshing to work with a service that genuinely cares about its clients. My ratings and income have both improved dramatically!',
    author: {
      name: 'Grace Turner',
      role: 'Wellness Coach',
      image: avatarImage4,
    },
  },
  {
    content:
      'This service has taken my Udemy journey to the next level. I’m excited to see what the future holds with such a reliable partner!',
    author: {
      name: 'Noah King',
      role: 'Programming Instructor',
      image: avatarImage4,
    },
  },
]

const listPeopleUse = [
  {
    id: 1,
    image: iconRocket,
    image_hover: itemRocket_hover,
    title: 'Pay as you run',
    content:
      'Enjoy the flexibility of our pay-as-you-go model, where you only invest when you see results. Get started for just $1, making it easy to grow without upfront costs!',
  },
  {
    id: 2,
    image: iconPwd,
    image_hover: iconPwd_hover,
    title: 'Realtime monitoring',
    content:
      'Enjoy the flexibility of our pay-as-you-go model, where you only invest when you see results. Get started for just $1, making it easy to grow without upfront costs!',
  },
  {
    id: 3,
    image: iconSll,
    image_hover: iconSll_hover,
    title: 'Your account safety',
    content:
      'We prioritize your peace of mind. Our practices are designed to be 100% risk-free for your Udemy account, ensuring compliance with all guidelines and protecting your reputation',
  },
  {
    id: 4,
    image: iconSp,
    image_hover: iconSp_hover,
    title: 'Support Center',
    content:
      'Have questions or concerns? Our dedicated support center is here to assist you within two hours, ensuring you receive prompt and helpful responses whenever you need them',
  },
  {
    id: 5,
    image: iconSub,
    image_hover: iconSub_hover,
    title: 'Result Guarantee',
    content:
      'We stand behind our service with a guarantee—if we don’t deliver enrollments or ratings, you don’t pay. This means zero financial risk for you!',
  },
  {
    id: 6,
    image: iconRef,
    image_hover: iconRef_hover,
    title: 'Best price - Hight Profit',
    content:
      'Our unique service offers the best value in the market. With no comparable services available, you can expect to see a significant increase in your revenue as we help you reach your audience effectively',
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
  const [hovered, setHovered] = useState<number | null>()

  const handleMouseEnter = (id: number) => {
    setHovered(id)
  }

  const handleMouseLeave = () => {
    setHovered(null)
  }

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
      className="bg-slate-50 py-10"
    >
      <Container>
        <div className=" mb-[80px] text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            <span className="text-[#5a27da]">Udemy</span> Growth
          </h2>
        </div>

        <div className="block w-full flex-wrap justify-center gap-6 md:flex lg:flex">
          {listPeopleUse.map((item, index) => (
            <div
              className="mb-5 flex cursor-pointer px-4 py-6 last:mb-0 hover:rounded-2xl hover:shadow-[0_24px_40px_#e6dbdb52] md:mb-0 md:w-[calc(50%-12px)] lg:mb-0 lg:w-[calc(33.333333%-16px)]"
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`relative mr-6 flex h-16 w-16 items-center justify-center rounded-full shadow-[0_20px_20px_#0000000d] transition-all duration-1000 ease-in-out ${hovered === item.id ? 'bg-[#6C33B5] shadow-[0_4px_10px_#00000014]' : 'bg-white'} `}
              >
                {/* Default Image */}
                <Image
                  src={item.image}
                  width={36}
                  height={36}
                  alt=""
                  className={`absolute transition-all duration-1000 ease-in-out transform ${hovered === item.id ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
                />

                {/* Hover Image */}
                <Image
                  src={item.image_hover}
                  width={36}
                  height={36}
                  alt=""
                  className={`absolute transition-all duration-1000 ease-in-out transform ${hovered === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
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
        <div className=" mt-11">
          <h2 className="mb-[68px] text-center font-bold leading-10 lg:text-4xl">
            Hear from our happy clients
          </h2>
          <Slider
            {...settings}
            className="slider-container testimonial bg-transparent"
          >
            {testimonials.map((slideItem, slideIndex) => (
              <div
                className="mb-2 flex h-[200px] flex-col justify-between rounded-2xl p-5 shadow-[0_4px_16px_#f1f5f9]"
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
