import '@/styles/globals.css';
import Sidebar from '@/components/Sidebar';

import { SessionProvider } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Sidebar>
        <Component {...pageProps} />
      </Sidebar>
    </SessionProvider>
  );
}
