import Layout from '@/components/layout';

export default function PrivacyPolicy() {
  const data = [
    {
      title: 'Privacy Policy for Digital Resolution',
      content:
        'At Digital Resolution, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website or use our services.'
    },
    {
      title: 'Collection of Personal Information',
      content:
        'When you visit our website, we may collect personal information that you voluntarily provide to us, such as your name, email address, and phone number. We may also collect information about your use of our website, including your IP address, browser type, and device type.'
    },
    {
      title: 'Use of Personal Information',
      content:
        'We may use your personal information to provide you with information about our services, to respond to your inquiries, and to improve our website and services. We may also use your personal information for marketing purposes, but we will always provide you with the opportunity to opt-out of such communications.'
    },
    {
      title: 'Disclosure of Personal Information',
      content:
        'We may disclose your personal information to third-party service providers who assist us in providing our services, such as hosting providers, payment processors, and email service providers. We may also disclose your personal information if required by law or if we believe that such disclosure is necessary to protect our rights or the safety of others.'
    },
    {
      title: 'Protection of Personal Information',
      content:
        'We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee the security of your personal information.'
    },
    {
      title: 'Cookies',
      content:
        'We may use cookies to collect information about your use of our website. Cookies are small data files that are stored on your device and allow us to recognize your device when you return to our website. You can set your browser to refuse cookies, but this may limit your ability to use our website.'
    },
    {
      title: 'Third-Party Websites',
      content:
        'Our website may contain links to third-party websites that are not under our control. We are not responsible for the privacy practices of these websites and encourage you to review their privacy policies.'
    },
    {
      title: 'Changes to this Privacy Policy',
      content:
        'We may update this Privacy Policy from time to time by posting a new version on our website. We encourage you to review this Privacy Policy periodically for any changes.'
    },
    {
      title: 'Contact Us',
      content:
        'If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at globaldigitalresolution@gmail.com.'
    }
  ];

  return (
    <Layout pageTitle="Digital Resolution - Privacy Policy">
      <section className="py-[3.75rem]">
        <div className="container">
          <div className="flex flex-col gap-10">
            {data.map((item, index) => (
              <div key={index}>
                <h1 className="font-semibold text-black text-[1.5rem] mb-[1rem]">
                  {item.title}
                </h1>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
