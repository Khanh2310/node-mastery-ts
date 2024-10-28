import { Testimonials } from '@/components/Testimonials'
import { BasicLayout } from '@/components/layouts/BasicLayout'
import { Faq } from '../components/Faq'
import Hero from './(home)/hero/page'
import { Assessment } from '@/components/Asessment'

export default function Home() {
  return (
    <BasicLayout>
      <main>
        <Hero />
        <Assessment />
        <Testimonials />
        <Faq />
      </main>
    </BasicLayout>
  )
}
