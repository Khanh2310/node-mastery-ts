'use client'
import { User } from '@/types/User'
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'
import { SWRConfig } from 'swr'
import { useRouter } from 'next/navigation'
import { useQueryUser } from '@/components/hooks/User/useQueryUser'
import axiosInstance, { setOnUnauthorized } from '@/config/axiosInstance'
import { AuthUrlApi } from '@/config/url'

interface AuthContextType {
  user: User | null
  loading: boolean
  logout: () => Promise<void>
  setUser: Dispatch<SetStateAction<User | null>>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function Providers(props: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const { user: data, error } = useQueryUser()


  const logout = async () => {
    await axiosInstance.post(AuthUrlApi.LOGOUT);
    setUser(null);
    router.push('/');
  };

  useEffect(() => {
    setOnUnauthorized(() => {
      setUser(null);
      router.push('/login');
    });
  }, [router]);

  useEffect(() => {
    if (data) {
      setUser(data)
      setLoading(false)
    } else if (error) {
      setLoading(false)
    }
  }, [data, error, router])

  return (
    <SWRConfig
      value={{
        shouldRetryOnError: false,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
      <AuthContext.Provider value={{ user, setUser, loading, logout  }}>
        {props.children}
      </AuthContext.Provider>
    </SWRConfig>
  )
}

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};