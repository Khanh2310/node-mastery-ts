'use client'

import { useState, useEffect } from 'react'

type AccordionpProps = {
    children: React.ReactNode
    title: string
    id: string,
    active?: boolean
}

function Accordion({
    children,
    title,
    id,
    active = false
}: AccordionpProps) {

    const [accordionOpen, setAccordionOpen] = useState<boolean>(false)

    useEffect(() => {
        setAccordionOpen(active)
    }, [])

    return (
        <div className="border px-[30px] py-[25px] rounded-lg mb-5 last:mb-0">
            <h2>
                <button
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    onClick={(e) => { e.preventDefault(); setAccordionOpen(!accordionOpen); }}
                    aria-expanded={accordionOpen}
                    aria-controls={`accordion-text-${id}`}
                >
                    <span>{title}</span>
                    <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <rect y="7" width="16" height="2" rx="1" className={`ttransform origin-center transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
                        <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && '!rotate-180'}`} />
                    </svg>
                </button>
            </h2>
            <div
                id={`accordion-text-${id}`}
                role="region"
                aria-labelledby={`accordion-title-${id}`}
                className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-500 ease-in-out ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
                <div className="overflow-hidden">
                    <p className="pb-3">
                        {children}
                    </p>
                </div>
            </div>
        </div>
    )
}


export const Faq = () => {

    const faqs = [
        {
            title: "1. Do you offer a trial ?",
            text: "Absolutely, we offer a Micro Plan that serves as a trial option, complete with a money-back guarantee. If you encounter any issues with our proxies, just shoot us a message and we'll process your refund immediately.",
            active: false,
        },
        {
            title: "2. What's your money-back guarantee policy?",
            text: "We offer a 14-day money-back guarantee for all unused data on plans purchased via credit card.",
            active: false,
        },
        {
            title: "3. What locations are available for your proxies?",
            text: "We provide mobile and residential proxies in over 38 countries, including the United States, Germany, the United Kingdom, France, Malaysia, Belgium, the Netherlands, Italy, Canada, Spain, India, Thailand, Indonesia, and more.",
            active: false,
        },
        {
            title: "4. How many proxies come with each plan?",
            text: "With any subscription, you can create an unlimited number of proxies. The only limitation is the bandwidth, which varies between plans.",
            active: true,
        },
        {
            title: "5. Do you offer static or sticky IP proxies?",
            text: "We offer sticky IPs with long durations. If the IP disconnects, we'll reassign you another IP from the same city and ISP. This ensures your activities remain completely undetectable and won't raise any flags.",
            active: false,
        },


    ]

    return (
        <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
            <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
                <div className="text-center mb-[50px]">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Frequently asked questions</h1>
                    <p className='text-base'>Can't find what you're looking for? Feel free to reach out to us through our contact page or live support.</p>
                </div>
                <div>
                    {faqs.map((faq, index) => (
                        <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                            {faq.text}
                        </Accordion>
                    ))}
                </div>
            </div>
        </main>
    )
}