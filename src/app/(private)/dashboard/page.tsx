import { PrivateLayout } from '@/components/layouts/PrivateLayout'
import { DashboardTemplate } from '@/components/templates/Dashboard'

export default function Profile() {
  return (
    <PrivateLayout>
      <DashboardTemplate />
    </PrivateLayout>
  )
}
