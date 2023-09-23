import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';

import '@/styles/globals.css';

import ChatSystemFacebook from '@/components/contact-us/ChatSystemFacebook';
import ChatSystemWhatsApp from '@/components/contact-us/ChatSystemWhatsApp';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
        <ChatSystemWhatsApp/>
        <ChatSystemFacebook />
      </Hydrate>
    </QueryClientProvider>
  );
}
