import { Asessment } from '@/components/Asessment'

import { Testimonials } from '@/components/Testimonials'
import { BasicLayout } from '@/components/layouts/BasicLayout'
import { Faq } from '../components/Faq'
import Hero from './(home)/hero/page'
import Image from 'next/image'
import { AsessmentContent } from '@/components/AsessmentContent'

export default function Home() {
  return (
    <BasicLayout>
      <main>
        <Hero />

        <AsessmentContent />
        <Testimonials />
        <Faq />
      </main>
    </BasicLayout>
  )
}
