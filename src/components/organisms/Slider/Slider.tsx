'use client'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import './slide.scss'
import { Autoplay } from 'swiper/modules'

export const Slider: React.FC = () => {
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
      {Array.from({ length: 8 }).map((_, index) => (
        <SwiperSlide key={index}>
          <Image
            src={`https://picsum.photos/200?random=${index + 1}`}
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
