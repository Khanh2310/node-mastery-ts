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
import sitelock from "@/images/screenshots/Google_Safe.webp"
import momo from '@/images/logos/visa.webp'
import paypal from '@/images/logos/visa.webp'
import zalopay from '@/images/logos/visa.webp'
import vietQR from '@/images/logos/visa.webp'


export const Footer = () => {
  return (
    <>
      <footer className="bg-[#192b37] relative">
        <span className='absolute top-0 w-full lg:-translate-y-[1rem] md:-translate-y-2 -translate-y-1'>
          <svg data-v-c6bcc2cb="" className="" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 1920 30.000000000000234"><g data-v-c6bcc2cb="" transform="matrix(-1,-1.2246468525851679e-16,1.2246468525851679e-16,-1,3840,60.0000000000007)"><path data-v-c6bcc2cb="" d="M1920,30.000000000000234C1920,30.000000000000234,3840,30.000000000000234,3840,30.000000000000234C3840,30.000000000000234,3840,60.000000000000234,3840,60.000000000000234C3840,60.000000000000234,3416.5,30.000000000000234,2881.5,30.000000000000234C2346.5,30.000000000000234,1920,60.000000000000234,1920,60.000000000000234C1920,60.000000000000234,1920,30.000000000000234,1920,30.000000000000234Z" fillRule="evenodd" fill="#192C38" fillOpacity="1"></path></g></svg>
        </span>
        <Container>
          <div className="md:mb-8">
            <div className="flex items-center justify-center -translate-y-1/2">
              {
                [
                  {
                    logo: facebook,
                    href: 'facebook'
                  },
                  {
                    logo: telegram,
                    href: 'telegram'

                  },
                  {
                    logo: tiktok,
                    href: 'tiktok'

                  },
                  {
                    logo: twitter,
                    href: 'twitter'
                  },
                ].map((item, index) => (
                  <div key={index} className='mx-3'>
                    <Link href={item.href} >
                      <Image src={item.logo} alt='' className='object-cover w-10 h-10 md:w-[54px] md:h-[54px]' />
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className="">
              <div className="flex pb-14 md:pb-0 pt-7 md:pt-0 flex-col justify-center items-center text-center text-white md:flex-row md:text-left md:items-start md:justify-normal">
                <div className="flex-1 mb-[10px] md:mb-0">
                  <h3 className='text-sm mb-6 font-medium uppercase'>ABOUT</h3>
                  <ul>
                    <li className='mb-4 text-[#fff9] hover:text-white cursor-pointer'>About Us</li>
                    <li className='mb-4 text-[#fff9] hover:text-white cursor-pointer'>Contact Us</li>
                    <li className='mb-4 text-[#fff9] hover:text-white cursor-pointer'>Help Center</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className='text-sm mb-6 font-medium uppercase'>Other tool</h3>
                  <ul>
                    <li className='mb-6 md:mb-4 text-[#fff9] hover:text-white cursor-pointer'>100 Free Udemy Courses</li>
                    <li className='mb-6 md:mb-4 text-[#fff9] hover:text-white cursor-pointer'>Popular IT Certificate Free Practice Courses</li>
                  </ul>
                </div>
                <div className="flex-1 mb-4 md:mb-0">
                  <h3 className='text-sm mb-6 font-medium uppercase'>Language</h3>
                  <button className="flex items-center bg-[#FFFFFF1A] px-4 py-1 rounded-full hover:opacity-80">
                    <Image src={earth} width={18} height={18} alt='' className='mr-2' />
                    <p>English</p>
                  </button>
                </div>
                <div className="">
                  <h3 className='text-sm mb-6 font-medium uppercase'>Customer service</h3>
                  <ul>
                    <li className='mb-4 text-[#fff9] hover:text-white cursor-pointer'>Support</li>
                    <li className='mb-6 md:mb-4 text-[#fff9] hover:text-white cursor-pointer'>24/7 Support, 12 hours response</li>
                  </ul>
                  <div className="flex items-center flex-col gap-y-6  md:gap-3 hover:cursor-pointer md:flex-row">
                    <div className="">
                      <Image src={safe} width={130} height={38} alt='' />

                    </div>
                    <div className="">
                      <Image src={trusted} width={86} height={36} alt='' />

                    </div>
                    <div className="">
                      <Image src={sitelock} width={130} height={38} alt='' />
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </Container>
        <div className=" bg-black md:pt-[21px] md:pb-[29px] md:px-5 px-5 py-7 ">
          <div className="flex items-center justify-center gap-x-6 flex-wrap md:0 mb-7">
            <Image src={paypal} width={130} height={38} alt='' className='md:w-[130px] md:h-[38px] w-20 h-[50px] object-cover' />
            <Image src={zalopay} width={130} height={38} alt='' className='md:w-[130px] md:h-[38px] w-20 h-[50px] object-cover' />
            <Image src={momo} width={130} height={38} alt='' className='md:w-[130px] md:h-[38px] w-20 h-[50px] object-cover' />
            <Image src={vietQR} width={130} height={38} alt='' className='md:w-[130px] md:h-[38px] w-20 h-[50px] object-cover' />
          </div>
          <div className="text-[#788086] flex flex-col  items-center text-xs text-center">
            <p>All copyrights, trade marks, service marks belong to the corresponding owners.</p>
            <p>Copyright © 2024 Udemy.com All Rights.</p>
            <div>
              <span className='uppercase'>TERMS AND CONDITION</span> and <span className='uppercase'>PRIVACY POLICY</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
