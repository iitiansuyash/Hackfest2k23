import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserProvider from '../contexts/user.context'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const threeScript = document.createElement("script")
    threeScript.setAttribute("id", "threeScript")
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js',
    );
    document.getElementsByTagName("head")[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, [])
  return <UserProvider><Component {...pageProps} /></UserProvider>
}
