'use client'
import Image, { StaticImageData } from 'next/image'
import React, { useMemo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import { Autoplay } from 'swiper/modules'
interface AvatarProps {
  avatarUser: StaticImageData[]
}
export const SliderCommon: React.FC<AvatarProps> = ({ avatarUser }) => {
  function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ]
    }
    return shuffledArray
  }

  const shuffledAvatars = useMemo(() => {
    return shuffleArray(avatarUser)
  }, [avatarUser])
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={5}
      loop={true}
      centeredSlides={true}
      spaceBetween={0}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      onInit={(swiper) => {
        swiper.autoplay.start() // Bắt đầu autoplay khi khởi tạo
      }}
      onSlideChange={(swiper) => {
        const slides = swiper.slides
        slides.forEach((slide) => {
          slide.style.opacity = '0'
        })
        const activeIndex = swiper.activeIndex
        slides[activeIndex].style.opacity = '1'
        slides[
          (activeIndex - 1 + slides.length) % slides.length
        ].style.opacity = '1'
        slides[(activeIndex + 1) % slides.length].style.opacity = '1'
        slides[
          (activeIndex - 2 + slides.length) % slides.length
        ].style.opacity = '1'
        slides[(activeIndex + 2) % slides.length].style.opacity = '1'
      }}
    >
      {shuffledAvatars.map((avatar, index) => (
        <SwiperSlide key={index}>
          <Image
            src={avatar}
            alt={`Image ${index + 1}`}
            width={500}
            height={300}
            className="no-img-styles box-border h-[48px] w-[48px] rounded-[48px] border-2 border-white bg-white object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
