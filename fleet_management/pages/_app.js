import '@/styles/globals.css';
import Sidebar from '@/components/Sidebar';

import { SessionProvider, useSession } from 'next-auth/react';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const renderSidebar = session && <Sidebar />;
  return (
    <SessionProvider session={session}>
      {session ? (
        <>
          <Sidebar>
            <Component {...pageProps} />
          </Sidebar>
        </>
      ) : (
        <Component {...pageProps} />
      )}
      {/* <Sidebar>
        <Component {...pageProps} />
      </Sidebar> */}
    </SessionProvider>
  );
}
