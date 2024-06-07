import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from '@headlessui/react'
import { useId } from 'react'
import dynamic from 'next/dynamic'
import qrImage from '@/images/app/qr-code-svgrepo-com.svg'
import Image from 'next/image'

export const ListTopUp = () => {
  const listTopUp = [
    {
      id: useId(),
      name: 'Deposit through ATM',
      Component: dynamic(
        () => import('@/components/organisms/DepositATM/DepositATM'),
        {
          loading: () => <p>Loading...</p>,
        },
      ),
    },
  ]
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      {listTopUp.map(({ id, name, Component }) => (
        <Disclosure as="div" className="w-full" key={id}>
    
            <>
              <DisclosureButton className={`w-full rounded-md border p-5 text-left md:w-[calc((100%-1.25rem)/2)]`}>
                <div className="flex w-full items-center gap-5">
                  <Image
                    src={qrImage}
                    className="has-auto: w-10"
                    alt="qr-code"
                    width={100}
                    height={100}
                  />
                  <p className="text-base font-bold">{name}</p>
                </div>
              </DisclosureButton>
              <div className="w-full overflow-hidden text-left md:w-[calc((100%-1.25rem)/2)]">
                <Transition
                  enter="duration-200 ease-out"
                  enterFrom="opacity-0 -translate-y-6"
                  enterTo="opacity-100 translate-y-0"
                  leave="duration-300 ease-out"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 -translate-y-6"
                >
                  <DisclosurePanel className="origin-top transition">
                    <div className='p-5 rounded-lg border'>
                    <Component />
                    </div>
                  </DisclosurePanel>
                </Transition>
              </div>
            </>
        </Disclosure>
      ))}
    </div>
  )
}
