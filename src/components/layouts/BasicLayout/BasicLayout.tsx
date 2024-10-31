import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'
import Image from 'next/image'
import iconChatBox from '@/images/icons/chatbox.svg'
export function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-10">{children}</div>
      <Footer />
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
