import '@/styles/globals.css'
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store';
import { GoogleOAuthProvider } from '@react-oauth/google';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <PersistGate persistor={persistor} >
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_OAUTH_CLIENT_ID}`}>
        <Component {...pageProps} />
      </GoogleOAuthProvider>
    </PersistGate>
  </Provider>
}
