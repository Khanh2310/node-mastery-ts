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
          const entry: any = entries[i]
          if (entry.isIntersecting) {
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
      id_img: 'section-1',
      id_text: '',
      subtitle1: 'Increase Enrollment',
      description1:
        'We generate real traffic from real students who are genuinely interested in your courses. Our natural traffic and real student enrollments ensure that your growth is sustainable and authentic. With our affordable pricing starting at just $0.1 USD, you can achieve your goals without breaking the bank.',
      subtitle2: 'Increase Your Course Rating',
      description2:
        "Are you tired of seeing other Udemy instructors with booming enrollments and glowing reviews while you struggle to make a name for yourself? It's time to take control of your success. Our service offers a proven method to increase your ratings. Our low prices make it easy to invest in your growth just from 0.5$ USD for 5-star rate.",
      subtitle3: 'Increase Your Revenue',
      description3:
        'Our targeted approach ensures that your courses reach the right audience, resulting in higher engagement, better reviews, and ultimately, a larger profit margin.',
      subtitle4: 'Your account is 100% Safe',
      description4:
        "Our commitment to ethical practices and strict adherence to Udemy's Terms of Service guarantees a safe and reliable experience for you. We prioritize the security of your account and the integrity of your instructor profile, ensuring that you can focus on creating exceptional content without worrying about any potential risks",
      subtitle5: 'Realtime Monitor Your Action',
      description5:
        "Our History Tracking Dashboard provides real-time insights into your executing's performance, allowing you to monitor progress. With our pay-per-success-run model, you only pay for the actual action generated, ensuring a cost-effective and results-oriented solution.",
      cls_cur: '',
    },
  ]
  return (
    <div className="">
      <div
        className="assessment relative z-10 h-auto bg-transparent py-0 md:py-[130px] lg:py-[70px] "
        id="assessmentflow"
      >
        <div className="assessment_bg  sticky top-0 z-[1] h-screen max-h-[800px] min-h-[650px] bg-gray-100 md:max-h-[1100px] md:min-h-[750px]">
          <div className="assessment_content_wrapper absolute bottom-0 top-0 my-0 flex w-full flex-col items-center rounded-[25px] bg-white px-[10vh]  py-0 md:my-0 md:rounded-[40px] md:px-[10vh]  md:py-0 SP:mx-0 SP:px-0">
            <div className="w-[90%]">
              <h2 className="max-md:text-2xl mb-5 text-center text-4xl font-bold">
                What is Udemy Service
              </h2>
              <p className="mb-4 text-center text-base md:mb-24">
                An application that provides features to improve efficiency and
                increase user engagement.
              </p>
            </div>
            <div className="w-full">
              <div className="assessment_content_content relative my-auto ml-2 w-[92%] max-w-[1200px] overflow-hidden md:mx-auto SP:ml-0 SP:w-full">
                <AsessmentContent ass_ars={as_ars} />
              </div>
            </div>
          </div>
        </div>
        <div className="assessment_container -mb-100vh relative mx-auto mt-0 min-h-screen bg-transparent md:rounded-[50px] md:bg-[#ffffff]">
          <div className="assessment_container_bg_scroll">
            <div
              className="assessment_container_bg_scroll_item 1 h-screen"
              data-show="#assm_1"
              data-item=".assm_1_1"
            ></div>
            <div
              className="assessment_container_bg_scroll_item 2 h-screen"
              data-show="#assm_2"
              data-item=".assm_2_2"
            ></div>
            <div
              className="assessment_container_bg_scroll_item 3 h-screen"
              data-show="#assm_3"
              data-item=".assm_3_3"
            ></div>
            <div
              className="assessment_container_bg_scroll_item 4 h-screen"
              data-show="#assm_4"
              data-item=".assm_4_4"
            ></div>
            <div
              className="assessment_container_bg_scroll_item 4 h-screen"
              data-show="#assm_5"
              data-item=".assm_5_5"
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
