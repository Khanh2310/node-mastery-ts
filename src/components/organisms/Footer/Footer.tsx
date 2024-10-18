import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/atoms/Logo'
import { NavLink } from '@/components/atoms/NavLink/NavLink'

import facebook from '@/images/icons/facebook.webp'
import telegram from '@/images/icons/telegram.webp'
import tiktok from '@/images/icons/tiktok.webp'
import twitter from '@/images/icons/twitter.webp'
import Image from 'next/image'
export const Footer = () => {
  return (
    <>
      <footer className="bg-[#192b37] relative">
        <span className='absolute top-0 w-full'>
          <svg data-v-c6bcc2cb="" className="" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" viewBox="0 0 1920 30.000000000000234"><g data-v-c6bcc2cb="" transform="matrix(-1,-1.2246468525851679e-16,1.2246468525851679e-16,-1,3840,60.0000000000007)"><path data-v-c6bcc2cb="" d="M1920,30.000000000000234C1920,30.000000000000234,3840,30.000000000000234,3840,30.000000000000234C3840,30.000000000000234,3840,60.000000000000234,3840,60.000000000000234C3840,60.000000000000234,3416.5,30.000000000000234,2881.5,30.000000000000234C2346.5,30.000000000000234,1920,60.000000000000234,1920,60.000000000000234C1920,60.000000000000234,1920,30.000000000000234,1920,30.000000000000234Z" fillRule="evenodd" fill="#192C38" fillOpacity="1"></path></g></svg>
        </span>
        <Container>
          <div className="">
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
                      <Image src={item.logo} width={54} height={54} alt='' className='object-cover' />
                    </Link>
                  </div>
                ))
              }
            </div>
            <div className="">
              <div className="flex text-white">
                <div className="flex-1">
                  <h3 className='text-sm mb-6 font-medium'>ABOUT</h3>
                  <ul>
                    <li className='mb-4 text-[#fff9]'>About Us</li>
                    <li className='mb-4 text-[#fff9]'>Contact Us</li>
                    <li className='mb-4 text-[#fff9]'>Help Center</li>
                  </ul>
                </div>
                <div className="flex-1">
                  <h3 className='text-sm mb-6 font-medium'>LEGAL</h3>
                  <ul>
                    <li className='mb-4 text-[#fff9]'>Udemy Premium</li>
                    <li className='mb-4 text-[#fff9]'>Student Account</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  )
}
