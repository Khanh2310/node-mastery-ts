"use client"

import { Container } from "@/components/Container";
import { BasicLayout } from "@/components/layouts/BasicLayout";
import Image from "next/image";
import imageLogo from '@/images/logos/UdemyService-logo.svg'

import plus from '@/images/logos/plus.png'
import reneva from '@/images/logos/renewal.png'
import available from '@/images/logos/available.png'
import pass from '@/images/logos/pass.png'
import star_fill from '@/images/icons/star.svg'
import star_not_fill from '@/images/icons/star-not-fill.svg'

const page = () => {

    return (
        <BasicLayout>
            <section className="lg:pt-32 lg:pb-40 pt-24">
                <Container className="">
                    <div className="hidden justify-center lapstops_big:flex-row lapstops_big:flex ">
                        <div className="lg:w-[200px] ">
                            <Image src={imageLogo} width={200} height={200} alt="" className="rounded-2xl" />
                        </div>
                        <div className="lg:mx-9 xl:mx-12 flex-1">
                            <h3 className="text-5xl leading-[58px] font-bold text-[#2f4858]">Nexflix</h3>
                            <ul className="flex flex-col lg:flex-row lg:flex-wrap border-b-[1px] border-b-[#9e9e9e] lg:pt-12 lg:pb-6">
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
                        <div className="border rounded-2xl border-[#e5e1e1] lg:px-8 lg:py-12 shadow-[0_4px_24px_#00000014] order-2">
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
                                <strong className="text-[32px] leading-10 text-[#5a27da]">$3.77</strong>  /month
                            </div>

                            <button className="w-[320px] lg:mt-10 rounded-full hover:opacity-80 bg-[#5a27da] flex items-center py-4 justify-center">
                                <span className="text-white text-base leading-5 ">
                                    INVENTORY SHORTAGE
                                </span>
                                <span>
                                    <svg data-v-96876882="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="6" height="10" viewBox="0 0 6 10" className="ml-4"><g><path d="M5.72134,5.82431C5.6948,5.8585,5.66637,5.89162,5.63604,5.9235C5.63604,5.9235,2.12132,9.61748,2.12132,9.61748C1.63604,10.1275,0.849242,10.1275,0.363961,9.61748C-0.12132,9.10744,-0.12132,8.28052,0.363961,7.77049C0.363961,7.77049,3,5,3,5C3,5,0.363961,2.22951,0.363961,2.22951C-0.12132,1.71948,-0.12132,0.892557,0.363961,0.382524C0.849242,-0.127508,1.63604,-0.127508,2.12132,0.382524C2.12132,0.382524,5.63604,4.0765,5.63604,4.0765C6.09099,4.55466,6.11942,5.31134,5.72134,5.82431Z" fill="#FFFFFF" fillOpacity="1"></path></g></svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col sm:mx-auto w-full justify-center lg:hidden sm:w-1/2 mb-24">
                        <div className="flex">
                            <Image src={imageLogo} width={120} height={120} alt="" className="rounded-2xl mr-6 mb-6" />
                            <div className="">
                                <h3 className="text-[#2f4858] text-2xl leading-[30px] font-bold">Netflix</h3>
                                <div className="flex items-center gap-x-2 mt-5">
                                    <Image src={star_fill} width={20} height={20} className="object-cover" alt="" />
                                    <Image src={star_fill} width={20} height={20} className="object-cover" alt="" />
                                    <Image src={star_fill} width={20} height={20} className="object-cover" alt="" />
                                    <Image src={star_fill} width={20} height={20} className="object-cover" alt="" />
                                    <Image src={star_not_fill} width={20} height={20} className="object-cover" alt="" />
                                </div>
                                <div className="flex items-end mt-5 text-xs leading-[14px]">
                                    <strong className="text-[#ff9208] text-xl leading-5 mr-1">85%</strong>
                                    <p className="">User Satisfaction</p>
                                </div>
                            </div>
                        </div>
                        <div className="pb-2">
                            <ul className="flex flex-col border-b-[1px] border-b-[#9e9e9e] ">
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
                                    <li className="flex w-1/2 mb-4" key={index}>
                                        <Image src={item.image} width={40} height={40} alt={item.content} className="object-contain" />
                                        <div className="ml-4 text-sm flex flex-col justify-between">
                                            <p className="text-[#a3a0a0]">{item.title}</p>
                                            <p>{item.content}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className="mt-6 text-[#9e9e9e] text-sm">Only supports Mac, smartphones, and tablets. TV devices, such as TV, Xbox, and PSN,are not allowed.</p>
                    </div>
                </Container>
                <div className="lg:hidden bottom-0 fixed bg-white py-4 px-5 sm:px-[100px] shadow-[0_-4px_24px_#00000014] w-full h-auto border-none left-0 z-10">
                    <div className="text-left">
                        <strong className="text-[32px] leading-10 text-[#5a27da]">$3.77</strong> / month
                        <span className="text-[#9e9e9e] text-xl ml-2 line-through">$7.27</span>
                    </div>
                    <button className="bg-[#5a27da] rounded-full mt-2 w-full flex items-center py-4 px-5 justify-center">
                        <span className="text-white text-base leading-5 ">
                            INVENTORY SHORTAGE
                        </span>
                        <span>
                            <svg data-v-96876882="" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="6" height="10" viewBox="0 0 6 10" className="ml-4"><g><path d="M5.72134,5.82431C5.6948,5.8585,5.66637,5.89162,5.63604,5.9235C5.63604,5.9235,2.12132,9.61748,2.12132,9.61748C1.63604,10.1275,0.849242,10.1275,0.363961,9.61748C-0.12132,9.10744,-0.12132,8.28052,0.363961,7.77049C0.363961,7.77049,3,5,3,5C3,5,0.363961,2.22951,0.363961,2.22951C-0.12132,1.71948,-0.12132,0.892557,0.363961,0.382524C0.849242,-0.127508,1.63604,-0.127508,2.12132,0.382524C2.12132,0.382524,5.63604,4.0765,5.63604,4.0765C6.09099,4.55466,6.11942,5.31134,5.72134,5.82431Z" fill="#FFFFFF" fillOpacity="1"></path></g></svg>
                        </span>
                    </button>
                </div>
            </section>
        </BasicLayout >
    );
};

export default page;