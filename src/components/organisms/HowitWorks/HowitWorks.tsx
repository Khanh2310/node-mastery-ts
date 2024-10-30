'use client'

import { useState, useEffect, Key } from 'react'

type IProps = {
  children: React.ReactNode
  title: string
  id: string
  active?: boolean
}

interface HowItWorksItem {
  title: string
  text: string
  active: boolean
}
interface Props {
  listHowitWorks: HowItWorksItem[]
}

function HowitWorksCommon({ children, title, id, active = false }: IProps) {
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setOpen(active)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mb-5 rounded-lg bg-gradient-item-howitworks p-5 last:mb-0 md:px-[30px] md:py-[25px]">
      <h2>
        <button
          className="flex w-full items-center justify-between py-2 text-left font-semibold"
          onClick={(e) => {
            e.preventDefault()
            setOpen(!open)
          }}
          aria-expanded={open}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <svg
            className="ml-8 shrink-0 fill-indigo-500"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`ttransform origin-center transition duration-200 ease-out ${
                open && '!rotate-180'
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                open && '!rotate-180'
              }`}
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid overflow-hidden text-sm text-[#4d4b4b] transition-all duration-500 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-3 pb-3">{children}</div>
        </div>
      </div>
    </div>
  )
}

export const HowitWorks: React.FC<Props> = ({ listHowitWorks }) => {
  return (
    <main className="relative mb-24 flex min-h-screen flex-col justify-center overflow-hidden md:mb-0">
      <div className="mx-auto w-full md:px-6 md:py-24">
        <h3 className="mb-8 text-xl font-semibold leading-6">How it works</h3>
        <div>
          {listHowitWorks.map((faq, index) => (
            <HowitWorksCommon
              key={index}
              title={faq.title}
              id={`faqs-${index}`}
              active={faq.active}
            >
              {faq.text.split('\n').map((line, index) => (
                <ul key={index} className="mb-2 list-none pl-0 last:mb-0">
                  <li className=" relative pl-5 before:absolute before:left-0 before:top-1/2 before:h-1 before:w-1 before:-translate-y-full before:rounded-full before:bg-[#6C33B5]">
                    {line}
                  </li>
                </ul>
              ))}
            </HowitWorksCommon>
          ))}
        </div>
      </div>
    </main>
  )
}
