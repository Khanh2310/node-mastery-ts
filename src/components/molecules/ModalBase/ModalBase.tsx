// import React from 'react'
// import ReactDOM from 'react-dom'

// export const ModalBase = ({ open = false, handleClose = () => {} }) => {
//   if (typeof document === 'undefined') return null

//   const bodyElement = document.querySelector('body')
//   if (!bodyElement) return null

//   return ReactDOM.createPortal(
//     <div
//       className={`modal fixed inset-0 z-50 flex items-center justify-center p-5 ${
//         open ? '' : 'invisible opacity-0'
//       }`}
//     >
//       <div
//         className="overlay absolute inset-0 bg-black bg-opacity-50"
//         onClick={handleClose}
//       ></div>
//       <div className="modal-content relative w-full max-w-[480px] rounded-lg bg-white p-10">
//         <span
//           className="absolute right-0 top-0 flex h-[38px] w-[38px] -translate-y-1/4 translate-x-2/4 cursor-pointer items-center justify-center rounded-full bg-white"
//           onClick={handleClose}
//         >
//           <svg
//             width="14"
//             height="14"
//             viewBox="0 0 14 14"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
//               fill="#84878B"
//             />
//           </svg>
//         </span>
//         <h2 className="mb-5 text-center text-3xl font-medium text-black">
//           Welcome Back
//         </h2>
//         <div className="mb-5 flex flex-col gap-3">
//           <label htmlFor="email" className="text-sm">
//             Email address
//           </label>
//           <input
//             type="text"
//             className="w-full rounded-lg bg-[#E7ECF3] p-4"
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="mb-10 flex flex-col gap-3">
//           <label htmlFor="password" className="text-sm">
//             Password
//           </label>
//           <input
//             type="password"
//             className="w-full rounded-lg bg-[#E7ECF3] p-4"
//             placeholder="Enter your password"
//           />
//         </div>
//         <button className="w-full rounded-lg bg-blue-400 p-4 text-base text-white">
//           Sign in
//         </button>
//       </div>
//     </div>,
//     bodyElement,
//   )
// }

import React from 'react'
import ReactDOM from 'react-dom'
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
        className="overlay absolute inset-0 bg-black bg-opacity-50"
        onClick={handleClose}
      ></div>
      <div className="modal-content relative z-10 w-full max-w-[480px] rounded-lg bg-white p-10">
        <span
          className="absolute right-0 top-0 flex h-[38px] w-[38px] -translate-y-1/4 translate-x-2/4 cursor-pointer items-center justify-center rounded-full bg-white"
          onClick={handleClose}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.225 7L13.7375 1.4875C14.0875 1.1375 14.0875 0.6125 13.7375 0.2625C13.3875 -0.0875 12.8625 -0.0875 12.5125 0.2625L7 5.775L1.4875 0.2625C1.1375 -0.0875 0.6125 -0.0875 0.2625 0.2625C-0.0874998 0.6125 -0.0874998 1.1375 0.2625 1.4875L5.775 7L0.2625 12.5125C0.0875002 12.6875 0 12.8625 0 13.125C0 13.65 0.35 14 0.875 14C1.1375 14 1.3125 13.9125 1.4875 13.7375L7 8.225L12.5125 13.7375C12.6875 13.9125 12.8625 14 13.125 14C13.3875 14 13.5625 13.9125 13.7375 13.7375C14.0875 13.3875 14.0875 12.8625 13.7375 12.5125L8.225 7Z"
              fill="#84878B"
            />
          </svg>
        </span>
        <h2 className="mb-5 text-center text-3xl font-medium text-black">
          Welcome Back
        </h2>
        <div className="mb-5 flex flex-col gap-3">
          <label htmlFor="email" className="text-sm">
            Email address
          </label>
          <input
            type="text"
            className="w-full rounded-lg  bg-[#E7ECF3] p-4"
            placeholder="Enter your email"
          ></input>
        </div>
        <div className="mb-10 flex flex-col gap-3">
          <label htmlFor="password" className="text-sm">
            Password
          </label>
          <input
            type="password"
            className="w-full rounded-lg  bg-[#E7ECF3] p-4"
            placeholder="Enter your password"
          ></input>
        </div>
        <button className="w-full rounded-lg bg-blue-400 p-4 text-base text-white">
          Sign in
        </button>
      </div>
    </div>,
    bodyElement,
  )
}
