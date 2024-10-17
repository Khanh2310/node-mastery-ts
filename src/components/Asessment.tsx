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
      subtitle1: 'Boost Enrollment',
      description1:
        "Experience a significant increase in enrollment numbers as we drive authentic traffic to your courses from real students who are genuinely eager to learn. Our strategies ensure that your courses reach those who are not just browsing, are actively seeking the knowledge you offer. Say goodbye to stagnant numbers and hello to a vibrant classroom filled with engaged learners!",
      subtitle2: 'Enhance Your Course Rating',
      description2:
        "Elevate your course ratings to new heights with our proven methodologies. We specialize in tailored solutions that foster positive reviews, helping your courses shine in the crowded marketplace. With our incredible starting price of just $0.50 for a 5-star rating, investing in your course’s reputation has never been more accessible. Watch as your ratings improve, bringing more visibility and credibility to your offerings!",
      subtitle3: 'Maximize Your Revenue',
      description3:
        'Unlock your earning potential with our targeted approach that ensures your courses connect with the right audience. Our marketing strategies not only increase engagement but also foster positive reviews, leading to greater profitability. With our support, you’ll transform your passion for teaching into a sustainable income stream, empowering your financial freedom!',
      subtitle4: '100% Account Safety',
      description4:
        "Your peace of mind is our top priority. We are committed to maintaining the integrity of your Udemy account by strictly adhering to Udemy’s Terms of Service. Our ethical practices guarantee a secure and reliable experience, so you can focus on what you do best—creating exceptional courses—without worrying about your account’s safety.",
      subtitle5: 'Real-Time Performance Monitoring',
      description5:
        "Gain invaluable insights into your campaign’s effectiveness with our advanced History Tracking Dashboard. This tool provides real-time updates on your performance, allowing you to make informed decisions and adjustments as needed. Our pay-per-success model ensures that you only invest in actions that yield results, making it a highly cost-effective and results-oriented solution that aligns with your goals.",
      cls_cur: '',
    },
  ]
  return (
    <div className="scroll-smooth">
      <div
        className="assessment relative z-10 h-auto bg-transparent py-0 md:py-[130px] lg:py-[70px] "
        id="assessmentflow"
      >
        <div className="assessment_bg sticky top-0 z-[1] h-screen max-h-[800px] min-h-[650px] bg-gray-100 md:max-h-[1100px] md:min-h-[750px]">
          <div className="assessment_content_wrapper absolute bottom-0 top-0 my-0 flex w-full flex-col items-center bg-white lg:px-[10vh]   py-0 md:my-0 md:px-[10vh] md:py-0 SP:mx-0 SP:px-0">
            <div className="w-[90%]">
              <h2 className="max-md:text-2xl mb-5 text-center text-4xl font-bold lg:mt-10 md:mt-10 sm:mt-6">
                Why Choose Us?
              </h2>
              <p className="mb-4 text-center text-base md:mb-24">
                Boost Enrollments, Elevate Ratings, and Watch Your Revenue Soar.
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
              className="assessment_container_bg_scroll_item 5 h-screen"
              data-show="#assm_5"
              data-item=".assm_5_5"
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
