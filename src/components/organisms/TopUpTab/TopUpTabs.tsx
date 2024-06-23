import { Loading } from '@/components/atoms/Loading'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import dynamic from 'next/dynamic'
import { useId } from 'react'

export const TopUpTab = () => {
  const listTab = [
    {
      id: useId(),
      title: 'Top Up',
      Component: dynamic(
        () => import('@/components/organisms/ListTopUp/ListTopUp'),
        {
          loading: () => <Loading className="mt-24" />,
        },
      ),
    },
    {
      id: useId(),
      title: 'History',
      Component: dynamic(() => import('@/components/organisms/TopUpHistory'), {
        loading: () => <Loading className="mt-24" />,
      }),
    },
  ]
  return (
    <TabGroup>
      <TabList className="mb-10 flex max-w-lg gap-1 rounded-lg bg-gray-200 p-2">
        {listTab.map(({ id, title }) => (
          <Tab
            className="w-[calc((100%-0.25rem)/2)] transform rounded-lg px-4 py-2 text-sm/6 font-semibold text-gray-500 duration-200 ease-in-out focus:outline-none data-[selected]:bg-gray-100 data-[hover]:font-bold data-[selected]:font-bold data-[hover]:text-black data-[selected]:text-black"
            key={id}
          >
            {title}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {listTab.map(({ id, Component }) => (
          <TabPanel key={id}>
            <Component />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
