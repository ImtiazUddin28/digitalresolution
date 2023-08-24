import { Manrope } from '@next/font/google';
import Head from 'next/head';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ChatBot from '../chatbot/ChatBot';
import Footer from '../common/Footer';
import Header from '../common/Header';
import MobileNav from '../common/MobileNav';

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export default function Layout({ children, pageTitle }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Expert digital solutions for your business"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>{pageTitle}</title>
        <script
          src="//code.tidio.co/lk0uyoqmvbfajhivagihylleitln8f8j.js"
          async
        ></script>
        {/* <!-- Google Tag Manager --> */}
        {/* <script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://blog.softexsolution.com/aecouttz.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-NTBBFFPW')}
                 
        </script> */}
        {/* <!-- End Google Tag Manager --> */}
        
{/* <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://blog.softexsolution.com/aecouttz.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTBBFFPW');</script> */}

        {/* <!-- Google Tag Manager --> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),
                dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://blog.softexsolution.com/aecouttz.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NTBBFFPW');
            `
          }}
        />

        {/* <!-- End Google Tag Manager --> */}
      </Head>
      <Header setOpen={setOpen} />

      <main className={manrope.className}>
        {children}
        {/* <ChatBot /> */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {open && <MobileNav setOpen={setOpen} />}
      </main>

      <Footer />
    </>
  );
}
