import {
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
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
          loading: () => <p>Loading...</p>,
        },
      ),
    },
    {
      id: useId(),
      title: 'History',
      Component: dynamic(() => import('@/components/organisms/TopUpHistory'), {
        loading: () => <p>Loading...</p>,
      }),
    },
  ]
  return (
    <TabGroup>
      <TabList className="mb-10 bg-gray-200 max-w-lg p-2 rounded-lg flex gap-1">
        {listTab.map(({ id, title }) => (
          <Tab className="w-[calc((100%-0.25rem)/2)] rounded-lg py-2 px-4 text-sm/6 font-semibold focus:outline-none text-gray-500 data-[hover]:font-bold data-[selected]:text-black data-[selected]:font-bold data-[selected]:bg-gray-100 data-[hover]:text-black transform duration-200 ease-in-out" key={id}>{title}</Tab>
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
