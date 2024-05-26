import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'

export function BasicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="pt-10">{children}</div>
      <Footer />
    </>
  )
}
