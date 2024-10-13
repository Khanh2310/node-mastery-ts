'use client'

import React, { useEffect } from 'react'
import { AsessmentContent } from './AsessmentContent'

export const Asessment = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const config = {
        rootMargin: '50% 50%',
        threshold: 1,
        root: null,
      }

      const observer = new IntersectionObserver((entries) => {
        for (let i = entries.length - 1; i >= 0; i--) {
          const entry = entries[i]
          if (entry.isIntersecting ) {
            document.querySelectorAll('.assessment .items').forEach((img) => {
              img.classList.remove('current')
            })
            document
              .querySelectorAll('.assessment_content-image')
              .forEach((img) => {
                img.classList.remove('current')
              })
            document
              .querySelectorAll('.assessment_container_wrap')
              .forEach((img) => {
                img.classList.remove('show_anm')
              })

            const img = document.querySelector(entry.target.dataset.show)
            const img_item = document.querySelectorAll(
              entry.target.dataset.item,
            )

            if (img) {
              img.classList.add('show_anm')
            }

            img_item.forEach((item) => {
              item.classList.add('current')
            })
            break
          }
        }
      }, config)

      const sections = document.querySelectorAll(
        '.assessment_container_bg_scroll_item',
      )
      sections.forEach((section) => observer.observe(section))

      return () => {
        sections.forEach((section) => observer.unobserve(section))
      }
    }
  }, [])

  const as_ars = [
    {
      id_as: 'assm_1',
      img: '/assets/top/top01.png',
      img2: '/assets/top/top02.png',
      img3: '/assets/top/top03.png',
      img4: '/assets/top/top04.png',
      id_img: 'section-1',
      id_text: '',
      title1: 'Lorem',
      subtitle1: 'Safe account',
      description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      title2: 'Title 2',
      subtitle2: 'Easy Cards',
      description2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      title3: '',
      subtitle3: 'Smooth Payments',
      description3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      title4: 'title4',
      subtitle4: 'Easy to use',
      description4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      cls_cur: '',
    },
  ]
  return (
    <div className="">
      <div className="assessment h-auto bg-transparent py-0 relative z-10 lg:py-[70px] md:py-[130px] " id="assessmentflow">
        <div className="assessment_bg  sticky top-0 h-screen min-h-[650px] max-h-[800px] z-[1] md:min-h-[750px] md:max-h-[1100px] bg-gray-100">
          <div className="assessment_content_wrapper absolute flex items-center flex-col bottom-0 top-0 w-full bg-white rounded-[25px] px-[10vh] py-0  my-0 md:rounded-[40px] md:px-[10vh] md:py-0  md:my-0 SP:mx-0 SP:px-0">
            <div className="w-[90%]">
              <h2 className="max-md:text-2xl mb-5 text-center text-4xl font-bold">What is Udemy Service</h2>
              <p className="mb-4 text-center text-base md:mb-24">An application that provides features to improve efficiency and increase user engagement.</p>
            </div>
            <div className="w-full">
              <div className="assessment_content_content relative my-auto ml-2 w-[92%] max-w-[1200px] overflow-hidden md:mx-auto SP:ml-0 SP:w-full">
                <AsessmentContent ass_ars={as_ars} />
              </div>
            </div>
          </div>
        </div>
        <div className="assessment_container relative bg-transparent min-h-screen mt-0 -mb-100vh mx-auto md:bg-[#ffffff] md:rounded-[50px]">
          <div className="assessment_container_bg_scroll">
            <div
              className="assessment_container_bg_scroll_item h-screen 1"
              data-show="#assm_1"
              data-item=".assm_1_1"
            ></div>
            <div
              className="assessment_container_bg_scroll_item h-screen 2"
              data-show="#assm_2"
              data-item=".assm_2_2"
            ></div>
            <div
              className="assessment_container_bg_scroll_item h-screen 3"
              data-show="#assm_3"
              data-item=".assm_3_3"
            ></div>
            <div
              className="assessment_container_bg_scroll_item h-screen 4"
              data-show="#assm_4"
              data-item=".assm_4_4"
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

