'use client'

import { useState, useEffect, Key } from 'react'

type IProps = {
  children: React.ReactNode
  title: string
  id: string,
  active?: boolean
}

interface HowItWorksItem {
  title: string;
  text: string;
  active: boolean;
}
interface Props {
  listHowitWorks: HowItWorksItem[];
}


function HowitWorksCommon({
  children,
  title,
  id,
  active = false
}: IProps) {

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setOpen(active)
  }, [])

  return (
    <div className="bg-gradient-item-howitworks p-5 md:px-[30px] md:py-[25px] rounded-lg mb-5 last:mb-0">
      <h2>
        <button
          className="flex items-center justify-between w-full text-left font-semibold py-2"
          onClick={(e) => { e.preventDefault(); setOpen(!open); }}
          aria-expanded={open}
          aria-controls={`accordion-text-${id}`}
        >
          <span>{title}</span>
          <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${open && '!rotate-180'}`} />
            <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${open && '!rotate-180'}`} />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-text-${id}`}
        role="region"
        aria-labelledby={`accordion-title-${id}`}
        className={`grid text-sm text-[#4d4b4b] overflow-hidden transition-all duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="pb-3 mt-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}


export const HowitWorks: React.FC<Props> = ({ listHowitWorks }) => {
  return (
    <main className="relative min-h-screen flex flex-col justify-center overflow-hidden mb-24 md:mb-0">
      <div className="w-full mx-auto md:px-6 md:py-24">
        <h3 className="mb-8 text-xl font-semibold leading-6">How it works</h3>
        <div>
          {listHowitWorks.map((faq, index) => (
            <HowitWorksCommon key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
              {faq.text.split("\n").map((line, index) => (
                <ul key={index} className='list-none pl-0 mb-2 last:mb-0'>
                  <li className=' relative pl-5 before:absolute before:left-0 before:top-1/2 before:-translate-y-full before:w-1 before:h-1 before:rounded-full before:bg-[#6C33B5]'>
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