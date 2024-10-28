
'use client'
import { useState, useEffect, SetStateAction } from 'react'
import { Container } from './Container'
import Image from 'next/image'
import avatar1 from '@/images/screenshots/ilus1.png'
import avatar2 from '@/images/screenshots/ilus2.png'
import avatar3 from '@/images/screenshots/ilus3.png'
import avatar4 from '@/images/screenshots/ilus4.png'
import avatar5 from '@/images/screenshots/ilus5.png'



export const Assessment = () => {
  const testimonials = [
    {
      initials: avatar1,
      quote:
        'Experience a significant increase in enrollment numbers as we drive authentic traffic to your courses from real students who are genuinely eager to learn. Our strategies ensure that your courses reach those who are not just browsing, are actively seeking the knowledge you offer. Say goodbye to stagnant numbers and hello to a vibrant classroom filled with engaged learners!',
      name: 'Boost Enrollment',
      title: 'Digital Content Vertical Merchant',
    },
    {
      initials: avatar2,
      quote:
        'Elevate your course ratings to new heights with our proven methodologies. We specialize in tailored solutions that foster positive reviews, helping your courses shine in the crowded marketplace. With our incredible starting price of just $0.50 for a 5-star rating, investing in your course’s reputation has never been more accessible. Watch as your ratings improve, bringing more visibility and credibility to your offerings!',
      name: 'Enhance Your Course Rating',
      title: 'Streaming Service Provider',
    },
    {
      initials: avatar3,
      quote:
        'Unlock your earning potential with our targeted approach that ensures your courses connect with the right audience. Our marketing strategies not only increase engagement but also foster positive reviews, leading to greater profitability. With our support, you’ll transform your passion for teaching into a sustainable income stream, empowering your financial freedom!',
      name: 'Maximize Your Revenue',
      title: 'Streaming Service Provider',
    },
    {
      initials: avatar4,
      quote:
        'Your peace of mind is our top priority. We are committed to maintaining the integrity of your Udemy account by strictly adhering to Udemy’s Terms of Service. Our ethical practices guarantee a secure and reliable experience, so you can focus on what you do best—creating exceptional courses—without worrying about your account’s safety.',
      name: '100% Account Safety',
      title: 'Streaming Service Provider',
    },
    {
      initials: avatar5,
      quote:
        'Gain invaluable insights into your campaign’s effectiveness with our advanced History Tracking Dashboard. This tool provides real-time updates on your performance, allowing you to make informed decisions and adjustments as needed. Our pay-per-success model ensures that you only invest in actions that yield results, making it a highly cost-effective and results-oriented solution that aligns with your goals.',
      name: 'Real-Time Performance Monitoring',
      title: 'Streaming Service Provider',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [fadeClass, setFadeClass] = useState('ass-active')

  const handleNext = () => {
    setFadeClass('')
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      setFadeClass('ass-active')
    }, 800)
  }

  const handlePrevious = () => {
    setFadeClass('')
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
      )
      setFadeClass('ass-active')
    }, 800)
  }

  const handleDotClick = (index: SetStateAction<number>) => {
    setFadeClass('')
    setTimeout(() => {
      setCurrentIndex(index)
      setFadeClass('ass-active')
    }, 800)
  }

  // useEffect(() => {
  //   const interval = setInterval(handleNext, 4000)
  //   return () => clearInterval(interval)
  // }, [])

  return (
    <Container>
      <div className="mt-10 shadow-[0_4px_24px_#0000000a] md:mt-28">
        <div className="relative flex h-[600px] md:h-[330px] flex-col md:items-center md:justify-center rounded-2xl bg-white shadow-lg ">
          <div className="">
            <div className="absolute md:space-x-0 space-x-1 left-1/2 -translate-x-1/2 bottom-5 md:bottom-auto md:left-4 md:top-1/2 z-10 flex md:-translate-x-0 md:-translate-y-1/2 transform md:flex-col items-center md:space-y-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 w-2 cursor-pointer rounded-full ${index === currentIndex ? 'bg-[#7b5bf7]' : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
            <div
              className={`${fadeClass} ass relative flex w-full items-center md:space-x-8 p-6 md:flex-row flex-col`}
            >
              <div className="flex flex-col items-center justify-center md:mb-0 mb-4">
                <p className="text-2xl font-semibold text-center md:mb-0 mb-5">
                  {testimonials[currentIndex].name}
                </p>
                <Image
                  src={testimonials[currentIndex].initials}
                  width={280}
                  height={280}
                  alt=""
                />
              </div>
              <div className="flex w-full flex-1 flex-col justify-between md:max-w-[400px] lg:max-w-[500px] xl:max-w-[650px]">
                <blockquote className="mb-2 max-h-[200px] overflow-y-auto text-sm md:text-base italic">
                  {testimonials[currentIndex].quote}
                </blockquote>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 md:bottom-8 left-1/2 flex -translate-x-1/2 transform items-center justify-center gap-x-3">
            <button
              onClick={handlePrevious}
              className="btn flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow hover:bg-[#7b5bf7] hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 shadow hover:bg-[#7b5bf7] hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Container>
  )
}
