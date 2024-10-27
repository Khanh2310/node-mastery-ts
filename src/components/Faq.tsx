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
            title: "1. What types of instructors benefit from your service?",
            text: "Our service is designed for all existing Udemy instructors, whether you are new to the platform or have been teaching for years. If you’re looking to boost your coursements, improve your ratings, and increase your revenue, our tailored solutions can help you achieve your goals.",
            active: false,
        },
        {
            title: "2. How do you ensure that the traffic is genuine?",
            text: "We utilize targeted marketing strategies that focus on reaching real students actively seeking online courses. Our promotions are conducted across various social media platforms, ensuring that the traffic generated is both authentic and engaged.",
            active: false,
        },
        {
            title: "3. Is my Udemy account safe with your service?",
            text: "Absolutely. We prioritize the safety and integrity of your Udemy account by strictly adhering to Udemy’s Terms of Service. Our ethical practices guarantee that your account remains secure, allowing you to focus on creating valuable content for your students.",
            active: false,
        },
        {
            title: "4. How quickly can I expect to see results?",
            text: "While results may vary depending on various factors such as course type and audience, many instructors begin to see an increase in enrollments and ratings shortly after using our service. Our real-time monitoring dashboard allows you to track progress and make timely adjustments to optimize your results.",
            active: false,
        },
        {
            title: "5. What payment options do you offer?",
            text: "We operate on a pay-per-success model, meaning you only pay for the actual actions generated . This ensures that you are investing in results rather than empty promises. Payment is straightforward and can be made using Paypal, Local Bank Transfer (Vietnam), Zalopay, Momo...",
            active: false,
        },
        {
            title: "6. Can I try your service before committing?",
            text: "Yes! We offer a trial service that allows you to experience our platform and see the benefits firsthand. This trial period is designed to give you confidence in our capabilities without any long-term commitment. However, please note that our trial service only allows you to promote for only 1 unique instructor within 03 days.",
            active: false,
        },
        {
            title: "7. What support do you provide during the service?",
            text: "We pride ourselves on offering excellent customer support. Our team is available to answer your questions, provide guidance, and assist you in optimizing your campaigns. You can reach out to us via email or chat, and we will respond promptly to help you navigate your experience.",
            active: false,
        },
        {
            title: "8. How does the real-time tracking dashboard work?",
            text: "Our History Tracking Dashboard provides you with real-time insights into your campaign’s performance. You can monitor key metrics such as total traffics, enrollments, ratings, allowing you to make informed decisions and adjustments in real-time for maximum impact.",
            active: false,
        },
        {
            title: "9. How can I begin?",
            text: "You can follow our basic guideline here to undertand how to prepare your instructor account, your course, promote coupon as well as how to run request to increase enrollment, rating. Please do not hestitate to let us know if you need any further assitance by emailing or chatting our Customer Support Center.",
            active: false,
        },
    ]

    return (
        <main className="relative min-h-screen flex flex-col justify-center overflow-hidden">
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