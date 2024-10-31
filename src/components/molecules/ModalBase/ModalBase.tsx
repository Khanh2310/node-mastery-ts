import Image from 'next/image'
import React from 'react'
import ReactDOM from 'react-dom'
import mystery from '@/images/screenshots/mystery.png'
import mystery_off from '@/images/screenshots/mystery_off.webp'
export const ModalBase = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === 'undefined') return <div className="modal" />
  const bodyElement = document.querySelector('body')
  if (!bodyElement) return null
  return ReactDOM.createPortal(
    <div
      className={`modal fixed inset-0 z-50 flex items-center justify-center p-5 ${
        open == true ? '' : 'invisible opacity-0'
      }`}
    >
      <div
        className="overlay absolute inset-0 cursor-pointer bg-black bg-opacity-50"
        onClick={handleClose}
      />
      <div className="modal-content relative z-10 w-[500px] translate-y-10 rounded-2xl  bg-[#42315d] px-6 pb-10 pt-16 text-center">
        <Image
          src={mystery}
          width={402}
          height={224}
          alt=""
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[75%] object-cover"
        />
        <span
          className="absolute right-0 top-0 -translate-x-1/2 translate-y-1/2 cursor-pointer text-white hover:opacity-80"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="3"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </span>
        <h3 className="left-6 mb-6 text-xl text-white">
          Congratulations, Time-limited reward!
        </h3>
        <p className="mb-10 text-base leading-5 text-white">
          You have received a limited-time coupon, valid for only <b>30</b>{' '}
          minutes after successful registration of new users.
        </p>

        <div className="mb-6 text-5xl font-bold leading-[58px] text-white">
          00:10:22
        </div>
        <div className="mb-10">
          <Image
            src={mystery_off}
            width={402}
            height={224}
            alt=""
            className="w-full"
          />
        </div>
        <button className="w-full rounded-lg bg-[#ef534f] p-4 text-base text-white">
          Get Coupon
        </button>
      </div>
    </div>,
    bodyElement,
  )
}
