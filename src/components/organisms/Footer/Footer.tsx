import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/atoms/Logo'
import { NavLink } from '@/components/atoms/NavLink/NavLink'

import facebook from '@/images/icons/facebook.webp'
import telegram from '@/images/icons/telegram.webp'
import tiktok from '@/images/icons/tiktok.webp'
import twitter from '@/images/icons/twitter.webp'
import Image from 'next/image'
import earth from '@/images/icons/earth.svg'
import safe from '@/images/screenshots/Google_Safe.webp'
import trusted from '@/images/screenshots/TrustedSite.webp'
import sitelock from '@/images/screenshots/Google_Safe.webp'
import momo from '@/images/logos/visa.webp'
import paypal from '@/images/logos/visa.webp'
import zalopay from '@/images/logos/visa.webp'
import vietQR from '@/images/logos/visa.webp'

export const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#192b37]">
        <span className="absolute top-0 w-full -translate-y-1 md:-translate-y-2 lg:-translate-y-[1rem]">
          <svg
            data-v-c6bcc2cb=""
            className=""
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="none"
            version="1.1"
            viewBox="0 0 1920 30.000000000000234"
          >
            <g
              data-v-c6bcc2cb=""
              transform="matrix(-1,-1.2246468525851679e-16,1.2246468525851679e-16,-1,3840,60.0000000000007)"
            >
              <path
                data-v-c6bcc2cb=""
                d="M1920,30.000000000000234C1920,30.000000000000234,3840,30.000000000000234,3840,30.000000000000234C3840,30.000000000000234,3840,60.000000000000234,3840,60.000000000000234C3840,60.000000000000234,3416.5,30.000000000000234,2881.5,30.000000000000234C2346.5,30.000000000000234,1920,60.000000000000234,1920,60.000000000000234C1920,60.000000000000234,1920,30.000000000000234,1920,30.000000000000234Z"
                fillRule="evenodd"
                fill="#192C38"
                fillOpacity="1"
              ></path>
            </g>
          </svg>
        </span>
        <Container>
          <div className="md:mb-8">
            <div className="flex -translate-y-1/2 items-center justify-center">
              {[
                {
                  logo: facebook,
                  href: 'facebook',
                },
                {
                  logo: telegram,
                  href: 'telegram',
                },
                {
                  logo: tiktok,
                  href: 'tiktok',
                },
                {
                  logo: twitter,
                  href: 'twitter',
                },
              ].map((item, index) => (
                <div key={index} className="mx-3">
                  <Link href={item.href}>
                    <Image
                      src={item.logo}
                      alt=""
                      className="h-10 w-10 object-cover hover:opacity-95 md:h-[54px] md:w-[54px]"
                    />
                  </Link>
                </div>
              ))}
            </div>
            <div className="">
              <div className="flex flex-col items-center justify-center pb-14 pt-7 text-center text-white md:flex-row md:items-start md:justify-normal md:pb-0 md:pt-0 md:text-left">
                <div className="mb-[10px] flex-1 md:mb-0">
                  <h3 className="mb-6 text-sm font-medium uppercase">ABOUT</h3>
                  <ul>
                    <li className="mb-4 cursor-pointer text-[#fff9] hover:text-white">
                      About Us
                    </li>
                    <li className="mb-4 cursor-pointer text-[#fff9] hover:text-white">
                      Contact Us
                    </li>
                    <li className="mb-4 cursor-pointer text-[#fff9] hover:text-white">
                      Help Center
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className="mb-6 text-sm font-medium uppercase">
                    Other tool
                  </h3>
                  <ul>
                    <li className="mb-6 cursor-pointer text-[#fff9] hover:text-white md:mb-4">
                      999+ FREE Courses Account
                    </li>
                    <li className="mb-6 cursor-pointer text-[#fff9] hover:text-white md:mb-4">
                      Popular IT Free Courses
                    </li>
                  </ul>
                </div>
                <div className="mb-4 flex-1 md:mb-0">
                  <h3 className="mb-6 text-sm font-medium uppercase">
                    Language
                  </h3>
                  <button className="flex items-center rounded-full bg-[#FFFFFF1A] px-4 py-1 hover:opacity-80">
                    <Image
                      src={earth}
                      width={18}
                      height={18}
                      alt=""
                      className="mr-2"
                    />
                    <p>English</p>
                  </button>
                </div>
                <div className="">
                  <h3 className="mb-6 text-sm font-medium uppercase">
                    Customer service
                  </h3>
                  <ul>
                    <li className="mb-4 cursor-pointer text-[#fff9] hover:text-white">
                      Support
                    </li>
                    <li className="mb-6 cursor-pointer text-[#fff9] hover:text-white md:mb-4">
                      24/7 Support, 12 hours response
                    </li>
                  </ul>
                  <div className="flex flex-col items-center gap-y-6  hover:cursor-pointer md:flex-row md:gap-3">
                    <div className="">
                      <Image src={safe} width={130} height={38} alt="" />
                    </div>
                    <div className="">
                      <Image src={trusted} width={86} height={36} alt="" />
                    </div>
                    <div className="">
                      <Image src={sitelock} width={130} height={38} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className=" bg-black px-5 py-7 md:px-5 md:pb-[29px] md:pt-[21px] ">
          <div className="md:0 mb-7 flex flex-wrap items-center justify-center gap-x-6">
            <Image
              src={paypal}
              width={130}
              height={38}
              alt=""
              className="h-[50px] w-20 object-cover md:h-[38px] md:w-[130px]"
            />
            <Image
              src={zalopay}
              width={130}
              height={38}
              alt=""
              className="h-[50px] w-20 object-cover md:h-[38px] md:w-[130px]"
            />
            <Image
              src={momo}
              width={130}
              height={38}
              alt=""
              className="h-[50px] w-20 object-cover md:h-[38px] md:w-[130px]"
            />
            <Image
              src={vietQR}
              width={130}
              height={38}
              alt=""
              className="h-[50px] w-20 object-cover md:h-[38px] md:w-[130px]"
            />
          </div>
          <div className="flex flex-col items-center  text-center text-xs text-[#788086]">
            <p>
              All copyrights, trade marks, service marks belong to the
              corresponding owners.
            </p>
            <p>Copyright © 2024 Udemy.com All Rights.</p>
            <div>
              <span className="uppercase">TERMS AND CONDITION</span> and{' '}
              <span className="uppercase">PRIVACY POLICY</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
