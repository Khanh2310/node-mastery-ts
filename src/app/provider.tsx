'use client'
import { SWRConfig } from 'swr'

export function Providers(props: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        // refreshInterval: 3000,
      
        shouldRetryOnError: false,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      {props.children}
    </SWRConfig>
  )
}
