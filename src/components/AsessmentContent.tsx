import Image from 'next/image'
import React from 'react'
import avatar1 from '@/images/screenshots/ilus1.jpg'
import avatar2 from '@/images/screenshots/ilus2.jpg'
import avatar3 from '@/images/screenshots/ilus3.jpg'
import avatar4 from '@/images/screenshots/ilus4.jpg'


export const AsessmentContent = ({ass_ars}:[]) => {
  return (
    <>
      {ass_ars.map(
        ({
          id_as,
          id_img,
          id_text,
          title1,
          subtitle1,
          description1,
          title2,
          subtitle2,
          description2,
          title3,
          subtitle3,
          description3,
          title4,
          subtitle4,
          description4,
          cls_cur,
        }) => (
          <div
            data-show=".target-show"
            data-item=".target-item"
            className="assessment_container_wrap "
            id={id_as != '' ? id_as : ''}
            key={id_as}
          >
            <div className="assessment_container_wrap_content flex flex-col-reverse justify-between gap-y-0 gap-x-5 md:flex-row md:items-center">
              <div className="assessment_wrap order-1 flex items-center ">
                <div
                  className="assessment_wrap_picture relative flex justify-center mb-4"
                  id={`${id_img != '' ? id_img : ''}`}
                >
                  <Image
                    src={avatar1}
                    className=" assessment_content-image m-auto  max-w-full object-contain max-h-[165px] assm_1_1 md:max-w-[40vw] md:max-h-[330px] translate-y-0 mb-0 opacity-0 invisible pointer-events-none transition-all duration-500 ease-linear current:opacity-1 current:pointer-events-none current:invisible  md:mb-0"
                    alt={''}
                  />
                  <Image
                    src={avatar2}
                    className="assessment_content-image  m-auto  max-w-full object-contain max-h-[165px] absolute top-0 assm_2_2 md:max-w-[40vw] md:max-h-[330px] translate-y-0 mb-0 opacity-0 invisible pointer-events-none transition-all duration-500 ease-linear current:opacity-1 current:pointer-events-none current:invisible  md:mb-0"
                    alt=""
                  />
                  <Image
                    src={avatar3}
                    className="assessment_content-image m-auto  max-w-full object-contain max-h-[165px] absolute top-0 assm_3_3 md:max-w-[40vw] md:max-h-[330px] translate-y-0 mb-0 opacity-0 invisible pointer-events-none transition-all duration-500 ease-linear current:opacity-1 current:pointer-events-none current:invisible  md:mb-0s"
                    alt=""
                  />
                  <Image
                    src={avatar4}
                    className="assessment_content-image m-auto  max-w-full object-contain max-h-[165px] absolute top-0 assm_4_4 md:max-w-[40vw] md:max-h-[330px] translate-y-0 mb-0 opacity-0 invisible pointer-events-none transition-all duration-500 ease-linear current:opacity-1 current:pointer-events-none current:invisible  md:mb-0"
                    alt=""
                  />
                </div>
              </div>
              <div className="assessment_slide pb-0 pt-[5px]">
                <div className="progress p-0 md:px-0 md:py-5">
                  <div className="right">
                    <div
                      className={` items assm_1_1 before:-left-[20px] before:bottom-0 before:top-0 before:m-auto before:w-[12px] before:transform-none before:p-0 after:w-[38px] ${
                        cls_cur != '' ? cls_cur : ''
                      }`}
                    >
                      <h2 className="">{subtitle1}</h2>
                      <span className="hidden pl-3 md:mt-2 md:pl-0">
                        <p className="text-base font-normal">{description1}</p>
                      </span>
                    </div>

                    <div
                      className={`after:absolute items assm_2_2 after:h-[38px] after:-left-[59px] ${
                        cls_cur != '' ? cls_cur : ''
                      }`}
                    >
                      <h2 className="">{subtitle2}</h2>
                      <span className="hidden pl-3 md:mt-2 md:pl-0">
                        <p className="text-base font-normal">{description2}</p>
                      </span>
                    </div>

                    <div
                      className={` items assm_3_3 after:absolute after:h-[38px] after:-left-[59px] ${
                        cls_cur != '' ? cls_cur : ''
                      }`}
                    >
                      <h2 className="">{subtitle3}</h2>
                      <span className="hidden pl-3 md:mt-2 md:pl-0">
                        <p className="text-base font-normal">{description3}</p>
                      </span>
                    </div>

                    <div
                      className={`items assm_4_4 after:absolute after:h-[38px] after:-left-[59px] ${
                        cls_cur != '' ? cls_cur : ''
                      }`}
                    >
                      <h2 className="">{subtitle4}</h2>
                      <span className="hidden pl-3 md:mt-2 md:pl-0">
                        <p className="text-base font-normal">{description4}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </>
  )
}
