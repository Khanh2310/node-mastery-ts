
import { Testimonials } from '@/components/Testimonials'
import { BasicLayout } from '@/components/layouts/BasicLayout'
import { Faq } from '../components/Faq'
import Hero from './(home)/hero/page'
import { Asessment } from '@/components/Asessment'

export default function Home() {
  return (
    <BasicLayout>
      <main>
        <Hero />
        <Asessment />
        <Testimonials />
        <Faq />
      </main>
    </BasicLayout>
  )
}
