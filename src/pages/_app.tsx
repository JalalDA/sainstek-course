import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import 'react-quill/dist/quill.snow.css';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Poppins } from 'next/font/google';
import Head from 'next/head';

const poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <PersistGate persistor={persistor} >
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`}>
        <main className={`${poppins.className}`}>
          <Head>
          <meta name="google-adsense-account" content="ca-pub-7429657524364314"/>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7429657524364314"
              crossOrigin="anonymous"></script>
          </Head>
          <Component  {...pageProps} />
        </main>
      </GoogleOAuthProvider>
    </PersistGate>
  </Provider>
}
