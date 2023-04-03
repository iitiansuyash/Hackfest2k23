import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "bootstrap/dist/css/bootstrap.min.css";
import UserProvider from '../contexts/user.context'
import { SmoothProvider } from 'react-smooth-scrolling'

function Loading() {
  return (
    <>
      <div className="spinner-wrapper">
        {/* <div className="spinner" /> */}
        <img src='./assets/images/gallery/hackfest_logo.gif' className='spinner'/>
      </div>
    </>
  )
}

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  })
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
    // <SmoothProvider skew={true}>
    <>{loading ? <Loading /> : <Component {...pageProps} />}</>
    // </SmoothProvider>
  )
}
