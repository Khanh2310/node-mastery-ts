import { ServiceCard } from '@/components/molecules/ServiceCard'
import { Title } from '@/components/molecules/Title'
import udemyLogo from '@/images/icons/udemy.svg'

export const ServiceTemplate = () => {
  return (
    <div className="m-auto w-[90%] max-w-[1000px]">
      <Title
        className="mb-10"
        title="Our Service tools"
        caption="Please select the tool you want to use"
      />
      <div>
        <ServiceCard
          href="/service-udemy"
          alt="udemy-logo"
          image={udemyLogo}
          className="transform rounded-lg border-2 border-purple-300 px-5 py-10 duration-300 ease-in-out hover:scale-105"
        />
      </div>
    </div>
  )
}
