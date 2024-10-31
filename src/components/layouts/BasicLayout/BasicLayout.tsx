"use client"
import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import Image from 'next/image'
import iconChatBox from '@/images/icons/chatbox.svg'
import { useCallback, useState } from 'react'
import { ModalBase } from '@/components/molecules/ModalBase'
export function BasicLayout({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false)
  // Memoize the handleClose function
  const handleClose = useCallback(() => setShowModal(false), [])
  return (
    <>
      <Header />
      <div className="pt-10">{children}</div>
      <Footer />
      <ModalBase open={showModal} handleClose={handleClose} />
      <div
        className="fixed bottom-0 right-6 z-40 -translate-y-24 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        <svg
          className="swingimage"
          data-v-be02304d=""
          width="54"
          height="54"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1336_1756)" data-v-be02304d="">
            <path
              d="M22 6.94462C22 9.7136 24.2 11.8892 27 11.8892C29.8 11.8892 32 9.7136 32 6.94462C32 4.17563 29.8 2 27 2C24.2 2 22 4.17563 22 6.94462Z"
              fill="#EF534F"
              data-v-be02304d=""
            ></path>
            <path
              d="M45 39H9C6.2 39 4 36.8259 4 34.059V20.7789C4 18.012 6.2 15.8379 9 15.8379H45C47.8 15.8379 50 18.012 50 20.7789V34.059C50 36.8259 47.8 39 45 39Z"
              fill="#EF534F"
              data-v-be02304d=""
            ></path>
            <path
              d="M12.1242 16.2253L22.1642 6.30371L23.5782 7.70103L13.5382 17.6226L12.1242 16.2253ZM30.2662 7.70103L31.6802 6.30371L41.7202 16.2253L40.3062 17.6226L30.2662 7.70103Z"
              fill="#EF534F"
              data-v-be02304d=""
            ></path>
            <path
              d="M13.1295 31.8532C12.4981 31.8532 12.0146 31.6755 11.679 31.3201C11.3513 30.9647 11.1875 30.4632 11.1875 29.8156V25.3613C11.1875 24.7137 11.3513 24.2122 11.679 23.8568C12.0146 23.5014 12.4981 23.3237 13.1295 23.3237C13.7608 23.3237 14.2404 23.5014 14.568 23.8568C14.9037 24.2122 15.0715 24.7137 15.0715 25.3613V26.238H13.8248V25.2784C13.8248 24.7651 13.605 24.5084 13.1655 24.5084C12.7259 24.5084 12.5061 24.7651 12.5061 25.2784V29.9104C12.5061 30.4158 12.7259 30.6685 13.1655 30.6685C13.605 30.6685 13.8248 30.4158 13.8248 29.9104V28.6428H15.0715V29.8156C15.0715 30.4632 14.9037 30.9647 14.568 31.3201C14.2404 31.6755 13.7608 31.8532 13.1295 31.8532Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M18.5391 31.8532C17.8918 31.8532 17.3963 31.6716 17.0526 31.3083C16.709 30.945 16.5372 30.4316 16.5372 29.7682V25.4087C16.5372 24.7453 16.709 24.232 17.0526 23.8687C17.3963 23.5054 17.8918 23.3237 18.5391 23.3237C19.1864 23.3237 19.6819 23.5054 20.0256 23.8687C20.3692 24.232 20.541 24.7453 20.541 25.4087V29.7682C20.541 30.4316 20.3692 30.945 20.0256 31.3083C19.6819 31.6716 19.1864 31.8532 18.5391 31.8532ZM18.5391 30.6685C18.9946 30.6685 19.2224 30.3961 19.2224 29.8511V25.3258C19.2224 24.7808 18.9946 24.5084 18.5391 24.5084C18.0836 24.5084 17.8558 24.7808 17.8558 25.3258V29.8511C17.8558 30.3961 18.0836 30.6685 18.5391 30.6685Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M24.1001 31.8532C23.4607 31.8532 22.9732 31.6755 22.6376 31.3201C22.3019 30.9568 22.1341 30.4395 22.1341 29.7682V23.4422H23.4527V29.863C23.4527 30.1473 23.5087 30.3526 23.6206 30.479C23.7404 30.6054 23.9083 30.6685 24.124 30.6685C24.3398 30.6685 24.5037 30.6054 24.6155 30.479C24.7354 30.3526 24.7954 30.1473 24.7954 29.863V23.4422H26.066V29.7682C26.066 30.4395 25.8982 30.9568 25.5626 31.3201C25.2269 31.6755 24.7394 31.8532 24.1001 31.8532Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M27.7544 23.4422H29.6964C30.3518 23.4422 30.8432 23.6159 31.1709 23.9634C31.4986 24.3109 31.6624 24.8203 31.6624 25.4916V26.309C31.6624 26.9803 31.4986 27.4897 31.1709 27.8372C30.8432 28.1847 30.3518 28.3585 29.6964 28.3585H29.0731V31.7347H27.7544V23.4422ZM29.6964 27.1738C29.9122 27.1738 30.072 27.1146 30.1759 26.9961C30.2878 26.8777 30.3438 26.6763 30.3438 26.392V25.4087C30.3438 25.1244 30.2878 24.923 30.1759 24.8045C30.072 24.6861 29.9122 24.6268 29.6964 24.6268H29.0731V27.1738H29.6964Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M35.0338 31.8532C34.3865 31.8532 33.891 31.6716 33.5474 31.3083C33.2037 30.945 33.0319 30.4316 33.0319 29.7682V25.4087C33.0319 24.7453 33.2037 24.232 33.5474 23.8687C33.891 23.5054 34.3865 23.3237 35.0338 23.3237C35.6812 23.3237 36.1767 23.5054 36.5203 23.8687C36.8639 24.232 37.0358 24.7453 37.0358 25.4087V29.7682C37.0358 30.4316 36.8639 30.945 36.5203 31.3083C36.1767 31.6716 35.6812 31.8532 35.0338 31.8532ZM35.0338 30.6685C35.4894 30.6685 35.7171 30.3961 35.7171 29.8511V25.3258C35.7171 24.7808 35.4894 24.5084 35.0338 24.5084C34.5783 24.5084 34.3505 24.7808 34.3505 25.3258V29.8511C34.3505 30.3961 34.5783 30.6685 35.0338 30.6685Z"
              fill="white"
              data-v-be02304d=""
            ></path>
            <path
              d="M38.6768 23.4422H40.3311L41.6137 28.4059H41.6377V23.4422H42.8125V31.7347H41.4579L39.8755 25.6812H39.8516V31.7347H38.6768V23.4422Z"
              fill="white"
              data-v-be02304d=""
            ></path>
          </g>
          <defs data-v-be02304d="">
            <filter
              id="filter0_d_1336_1756"
              x="0"
              y="0"
              width="54"
              height="45"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
              data-v-be02304d=""
            >
              <feFlood
                floodOpacity="0"
                result="BackgroundImageFix"
                data-v-be02304d=""
              ></feFlood>
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
                data-v-be02304d=""
              ></feColorMatrix>
              <feOffset dy="2" data-v-be02304d=""></feOffset>
              <feGaussianBlur
                stdDeviation="2"
                data-v-be02304d=""
              ></feGaussianBlur>
              <feComposite
                in2="hardAlpha"
                operator="out"
                data-v-be02304d=""
              ></feComposite>
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                data-v-be02304d=""
              ></feColorMatrix>
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1336_1756"
                data-v-be02304d=""
              ></feBlend>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1336_1756"
                result="shape"
                data-v-be02304d=""
              ></feBlend>
            </filter>
          </defs>
        </svg>
      </div>
      <div className=" fill-[#ef5350 ] fixed bottom-0 right-4 z-40 flex h-[60px] w-[60px] -translate-y-7 cursor-pointer items-center justify-center rounded-full">
        <Image
          src={iconChatBox}
          width={60}
          height={60}
          alt=""
          className="animage object-cover"
        />
      </div>
    </>
  )
}
