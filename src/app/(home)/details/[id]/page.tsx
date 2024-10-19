"use client"

import { Container } from "@/components/Container";
import { BasicLayout } from "@/components/layouts/BasicLayout";
import Image from "next/image";
import imageLogo from '@/images/logos/0f51929d358472fe7ab782257199e59d.webp'

import plus from '@/images/logos/plus.png'
import reneva from '@/images/logos/renewal.png'
import available from '@/images/logos/available.png'
import pass from '@/images/logos/pass.png'
import star_fill from '@/images/icons/star.svg'
import star_not_fill from '@/images/icons/star-not-fill.svg'

const page = () => {

    return (
        <BasicLayout>
            <section className="lg:pt-32 lg:pb-40">
                <Container className="">
                    <div className="flex flex-col justify-center lapstops_big:flex-row ">
                        <div className="flex">
                            <div className="w-[200px]">
                                <Image src={imageLogo} width={200} height={200} alt="" className="rounded-2xl" />
                            </div>
                            <div className="lg:mx-9 xl:mx-12 flex-1">
                                <h3 className="text-5xl leading-[58px] font-bold">Nexflix</h3>
                                <ul className="flex flex-wrap border-b-[1px] border-b-[#9e9e9e] lg:pt-12 lg:pb-6">
                                    {[
                                        {
                                            image: plus,
                                            title: 'Plan',
                                            content: 'Premium'
                                        },
                                        {
                                            image: reneva,
                                            title: 'Is it renewable?',
                                            content: 'Yes'
                                        },
                                        {
                                            image: available,
                                            title: 'Supported devices',
                                            content: 'PC, Mobile, Pad, Mac, iPhone'
                                        },
                                        {
                                            image: pass,
                                            title: 'Credential type',
                                            content: 'Passkey'
                                        },
                                    ].map((item, index) => (
                                        <li className="flex w-1/2 lg:mb-6" key={index}>
                                            <Image src={item.image} width={40} height={40} alt={item.content} className="object-contain" />
                                            <div className="ml-4 text-sm flex flex-col justify-between">
                                                <p className="text-[#a3a0a0]">{item.title}</p>
                                                <p>{item.content}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-5 text-[#9e9e9e] text-sm">Only supports Mac, smartphones, and tablets. TV devices, such as TV, Xbox, and PSN,are not allowed.</p>
                            </div>
                        </div>
                        <div className="border rounded-2xl border-[#e5e1e1] lg:px-8 lg:py-12 shadow-[0_4px_24px_#00000014]">
                            <div className="flex lg:gap-x-2">
                                <Image src={star_fill} width={20} height={20} className="object-cover" alt="" />
                                <Image src={star_fill} width={20} height={20} className="object-cover" alt="" />
                                <Image src={star_fill} width={20} height={20} className="object-cover" alt="" />
                                <Image src={star_fill} width={20} height={20} className="object-cover" alt="" />
                                <Image src={star_not_fill} width={20} height={20} className="object-cover" alt="" />
                            </div>

                            <div className="flex items-end lg:mt-6">
                                <strong className="text-[#ff9208] text-[32px] leading-10 mr-1">85%</strong>
                                <p>User Satisfaction</p>
                            </div>
                            <div className="lg:mt-16 lg:text-lg ">
                                <strong className="text-[32px] leading-10 text-[#ef534f]">$3.77</strong>  /month
                            </div>

                            <button className="w-[344px] lg:mt-10 rounded-full hover:opacity-80 bg-[#5a27da] flex items-center py-4 justify-center">
                                <span className="text-white text-base leading-5 ">
                                    INVENTORY SHORTAGE
                                </span>
                                <span>
                                    <svg data-v-96876882="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="6" height="10" viewBox="0 0 6 10" className="ml-4"><g><path d="M5.72134,5.82431C5.6948,5.8585,5.66637,5.89162,5.63604,5.9235C5.63604,5.9235,2.12132,9.61748,2.12132,9.61748C1.63604,10.1275,0.849242,10.1275,0.363961,9.61748C-0.12132,9.10744,-0.12132,8.28052,0.363961,7.77049C0.363961,7.77049,3,5,3,5C3,5,0.363961,2.22951,0.363961,2.22951C-0.12132,1.71948,-0.12132,0.892557,0.363961,0.382524C0.849242,-0.127508,1.63604,-0.127508,2.12132,0.382524C2.12132,0.382524,5.63604,4.0765,5.63604,4.0765C6.09099,4.55466,6.11942,5.31134,5.72134,5.82431Z" fill="#FFFFFF" fillOpacity="1"></path></g></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </Container>
            </section>
        </BasicLayout >
    );
};

export default page;