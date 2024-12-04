import axios, { InternalAxiosRequestConfig } from 'axios'
import { useCallback, useEffect } from 'react'

const client = axios.create({
  baseURL: String(process.env.REACT_APP_API_URL),
  headers: { Accept: 'application/json' },
})

export const useNetwork = () => {

  const interceptor = useCallback(
    async (config: InternalAxiosRequestConfig) => {
      config.headers!.Authorization = `Bearer ${process.env.REACT_APP_API_TOKEN}`

      return config
    },
    [],
  )

  useEffect(() => {
    const interceptorId = client.interceptors.request.use(interceptor)

    return () => client.interceptors.request.eject(interceptorId)
  }, [interceptor])

  return client
}
