import axios, { InternalAxiosRequestConfig } from 'axios'
import { useCallback, useEffect } from 'react'

const client = axios.create({
  baseURL: String(process.env.REACT_APP_API_URL),
  headers: { Accept: 'application/json' },
})

export const useNetwork = () => {

  const interceptor = useCallback(
    async (config: InternalAxiosRequestConfig) => {
      config.headers!.Authorization = `Bearer eyJhbGciOiJSUzI1NiIsImNhdCI6ImNsX0I3ZDRQRDIyMkFBQSIsImtpZCI6Imluc18yNnFOSGM1OVZORU80VGY3bW0zbVVZcDd6d28iLCJ0eXAiOiJKV1QifQ.eyJhenAiOiJodHRwOi8vbG9jYWxob3N0OjMwMDAiLCJlbWFpbCI6ImFiYXN0b3MrZW1wbG95ZXJAb25zdHJpZGVyLmNvbSIsImV4cCI6MTczMzMyMzcwNCwiaWF0IjoxNzMzMzIwNzA0LCJpc3MiOiJodHRwczovL2NsZXJrLmdlbnRsZS5xdWFpbC04OC5sY2wuZGV2IiwianRpIjoiOTUxMTk4MTYwMDUxNmNiYWJmMTUiLCJuYmYiOjE3MzMzMjA2OTksInN1YiI6InVzZXJfMkJGekxxVmg4cG44T3QxMkJISGpRSXJ1cFFTIn0.E9t5jrdC3TqUA52UBRxtQzgdfcVMBMKmTk0Ym3wsiAS5735fdkwKpDVjyQDigvCSUl2ZDXX6N59MEWu6_3Sjr8PgDeP6nI1EuPKp2cm1e5kKEHd6UmXVsUsRKnk60DSjAPF_8ZYl_EVACporNg4XVqfzpGpS6qkfL5LYTFETB7AQXGZ55_fBPDokEi5w-nOs2_cE0lN7ju4XkBAaX0D9NZ62OlAzMDJnuLAUV3aEOnyxtBWrc5VV3chJg1vyhj630DX0kRQmY0gDI_2BSIf-dHj2IiLeJVLo6tDbPH1fbEXtrJvgseIG3pQJNBPm33alUs6vyHyEVDCMJ-eSLjdDeg`

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
