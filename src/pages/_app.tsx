import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import UserProvider from '../contexts/user.context'

function Loading() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleStart = (url: any) => setLoading(true)
    const handleComplete = (url: any) =>
      setTimeout(() => {
        setLoading(false)
      }, 1000)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <>
      {loading && (
        <div className="spinner-wrapper">
          <div className="spinner" />
        </div>
      )}
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const threeScript = document.createElement('script')
    threeScript.setAttribute('id', 'threeScript')
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js',
    )
    document.getElementsByTagName('head')[0].appendChild(threeScript)
    return () => {
      if (threeScript) {
        threeScript.remove()
      }
    }
  }, [])

  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  )
}
