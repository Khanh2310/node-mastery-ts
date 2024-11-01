import { useId } from 'react'
import dynamic from 'next/dynamic'
import qrImage from '@/images/app/qr-code-svgrepo-com.svg'
import Image from 'next/image'
import { Loading } from '@/components/atoms/Loading'

export default function ListTopUp() {
  const listTopUp = [
    {
      id: useId(),
      name: 'Deposit through ATM',
      Component: dynamic(
        () => import('@/components/organisms/Payment/Payment'),
        {
          loading: () => <Loading className="mt-24" />,
        },
      ),
    },
  ]
  return (
    <div>
      <div className="mt-10 flex flex-wrap gap-5">
        {listTopUp.map(({ id, name, Component }) => (
          // <Disclosure as="div" className="w-full" key={id}>
          <div key={id} className="flex w-1/2 flex-col md:w-full">
            <div className={`w-full rounded-md border p-5 text-left `}>
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
            </div>
            <div className="w-full overflow-hidden ">
              <div className="origin-top transition">
                <div className="rounded-lg border p-5">
                  <Component />
                </div>
              </div>
            </div>
          </div>
          // </Disclosure>
        ))}
      </div>
    </div>
  )
}
