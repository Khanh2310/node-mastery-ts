import { Asessment } from '@/components/Asessment'

import { Testimonials } from '@/components/Testimonials'
import { BasicLayout } from '@/components/layouts/BasicLayout'
import { Faq } from '../components/Faq'
import Hero from './(home)/hero/page'
import { Slider } from '@/components/molecules/SliderCommon'
import styles from './page.module.scss'
import Image from 'next/image'

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
