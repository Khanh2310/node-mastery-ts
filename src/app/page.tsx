import { Asessment } from '@/components/Asessment'
import { CallToAction } from '@/components/CallToAction'

import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { BasicLayout } from '@/components/layouts/BasicLayout'
import { Faq } from '../components/Faq';
import Hero from './(home)/hero/page'

export default function Home() {
  return (
    <BasicLayout>
      <main>
        <Hero />
        <Asessment />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        <Testimonials />
        <Faq />
        {/* <Pricing /> */}
      </main>
    </BasicLayout>
  )
}
