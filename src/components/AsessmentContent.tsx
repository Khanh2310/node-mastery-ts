import Image from 'next/image'
import React from 'react'
import avatar1 from '@/images/screenshots/ilus1.jpg'
import avatar2 from '@/images/screenshots/ilus2.jpg'
import avatar3 from '@/images/screenshots/ilus3.jpg'
import avatar4 from '@/images/screenshots/ilus4.jpg'
import avatar5 from '@/images/screenshots/ilus5.jpg'

export const AsessmentContent = ({ ass_ars }: any) => {
  return (
    <>
      {ass_ars.map(
        ({
          id_as,

          id_img,
          id_text,
          subtitle1,
          description1,
          subtitle2,
          description2,
          subtitle3,
          description3,
          subtitle4,
          description4,
          subtitle5,
          description5,
          cls_cur,
        }: any) => (
          <div
            data-show=".target-show"
            data-item=".target-item"
            className="assessment_container_wrap "
            id={id_as != '' ? id_as : ''}
            key={id_as}
          >
            <div className="assessment_container_wrap_content flex flex-col-reverse justify-between gap-x-5 gap-y-0 md:flex-row md:items-center">
              <div className="assessment_wrap order-1 flex items-center justify-center ">
                <div
                  className="assessment_wrap_picture relative mb-4 flex justify-center"
                  id={`${id_img != '' ? id_img : ''}`}
                >
                  <Image
                    src={avatar1}
                    className=" assessment_content-image assm_1_1  current:opacity-1 current:pointer-events-none current:invisible pointer-events-none invisible m-auto  max-h-[165px] max-w-full translate-y-0 object-contain opacity-0 transition-all duration-500 ease-linear md:mb-0 md:max-h-[330px] md:max-w-[40vw]  md:object-cover"
                    alt={''}
                    width={500}
                    height={500}
                  />
                  <Image
                    src={avatar2}
                    className="assessment_content-image  assm_2_2  current:opacity-1 current:pointer-events-none current:invisible pointer-events-none invisible absolute  top-0 m-auto mb-0 max-h-[165px] max-w-full translate-y-0 object-contain opacity-0 transition-all duration-500 ease-linear md:mb-0 md:max-h-[330px] md:max-w-[40vw]  md:object-cover"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <Image
                    src={avatar3}
                    className="assessment_content-image assm_3_3  current:opacity-1 current:pointer-events-none current:invisible md:mb-0s pointer-events-none invisible  absolute top-0 m-auto mb-0 max-h-[165px] max-w-full translate-y-0 object-contain opacity-0 transition-all duration-500 ease-linear md:max-h-[330px] md:max-w-[40vw]  md:object-cover"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <Image
                    src={avatar4}
                    className="assessment_content-image assm_4_4  current:opacity-1 current:pointer-events-none current:invisible pointer-events-none invisible absolute  top-0 m-auto mb-0 max-h-[165px] max-w-full translate-y-0 object-contain opacity-0 transition-all duration-500 ease-linear md:mb-0 md:max-h-[330px] md:max-w-[40vw]  md:object-cover"
                    alt=""
                    width={500}
                    height={500}
                  />
                  <Image
                    src={avatar5}
                    className="assessment_content-image assm_5_5  current:opacity-1 current:pointer-events-none current:invisible pointer-events-none invisible absolute  top-0 m-auto mb-0 max-h-[165px] max-w-full translate-y-0 object-contain opacity-0 transition-all duration-500 ease-linear md:mb-0 md:max-h-[330px] md:max-w-[40vw]  md:object-cover"
                    alt=""
                    width={500}
                    height={500}
                  />
                </div>
              </div>
              <div className="assessment_slide pb-0 pt-[5px]">
                <div className="progress p-0 md:px-0 md:py-5">
                  <div className="right">
                    <div
                      className={` items assm_1_1 before:-left-[20px] before:top-0 before:m-auto before:w-[12px] before:transform-none before:p-0 after:w-[38px] ${
                        cls_cur != '' ? cls_cur : ''
                      }`}
                    >
                      <h2 className="">{subtitle1}</h2>
                      <span className="hidden pl-3 md:mt-2 md:pl-0">
                        <p className="text-xs font-normal italic lg:text-base">
                          {description1}
                        </p>
                      </span>
                    </div>

                    <div
                      className={`items assm_2_2 after:absolute after:-left-[59px] after:h-[38px] ${
                        cls_cur != '' ? cls_cur : ''
                      }`}
                    >
                      <h2 className="">{subtitle2}</h2>
                      <span className="hidden pl-3 md:mt-2 md:pl-0">
                        <p className="text-xs font-normal italic lg:text-base">
                          {description2}
                        </p>
                      </span>
                    </div>

                    <div
                      className={` items assm_3_3 after:absolute after:-left-[59px] after:h-[38px] ${
                        cls_cur != '' ? cls_cur : ''
                      }`}
                    >
                      <h2 className="">{subtitle3}</h2>
                      <span className="hidden pl-3 md:mt-2 md:pl-0">
                        <p className="text-xs font-normal italic lg:text-base">
                          {description3}
                        </p>
                      </span>
                    </div>

                    <div
                      className={`items assm_4_4 after:absolute after:-left-[59px] after:h-[38px] ${
                        cls_cur != '' ? cls_cur : ''
                      }`}
                    >
                      <h2 className="">{subtitle4}</h2>
                      <span className="hidden pl-3 md:mt-2 md:pl-0">
                        <p className="text-xs font-normal italic lg:text-base">
                          {description4}
                        </p>
                      </span>
                    </div>

                    <div
                      className={`items assm_5_5 after:absolute after:-left-[59px] after:h-[38px] ${
                        cls_cur != '' ? cls_cur : ''
                      }`}
                    >
                      <h2 className="">{subtitle5}</h2>
                      <span className="hidden pl-3 md:mt-2 md:pl-0">
                        <p className="text-xs font-normal italic lg:text-base">
                          {description5}
                        </p>
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
