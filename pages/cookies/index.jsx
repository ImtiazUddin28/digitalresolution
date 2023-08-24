import Layout from '@/components/layout';

import Link from 'next/link';

export default function Cookies() {
  return (
    <Layout pageTitle="Digital Resolution - Cookies">
      <section className="py-[3.75rem]">
        <div className="container">
          <p>
            Cookie Policy for Digital Resolution
            <br />
            <br />
            At Digital Resolution, we respect your privacy and are committed to
            providing you with a safe and secure browsing experience. This
            Cookie Policy explains how we use cookies and similar technologies
            on our website.
            <br />
            <br />
            What Are Cookies? Cookies are small text files that are stored on
            your device when you visit a website. They are used to remember your
            preferences and improve your browsing experience. Some cookies are
            essential for the operation of the website, while others are used to
            collect information about how you interact with the website.
            <br />
            <br />
            Types of Cookies We Use We use the following types of cookies on our
            website:
            <br />
            <br />
            Strictly Necessary Cookies: These cookies are essential for the
            operation of the website and cannot be disabled in our systems. They
            are usually set in response to actions made by you, such as setting
            your privacy preferences or filling out forms. Performance Cookies:
            These cookies allow us to count visits and traffic sources, so we
            can measure and improve the performance of our website. They help us
            understand which pages are popular and how visitors navigate the
            website. Functional Cookies: These cookies enable the website to
            provide enhanced functionality and personalization, such as
            remembering your language preferences and login details. Targeting
            Cookies: These cookies are used to deliver advertising that is
            relevant to your interests. They may also be used to limit the
            number of times you see an advertisement and measure the
            effectiveness of advertising campaigns. Third-Party Cookies We may
            also use third-party cookies on our website, such as Google
            Analytics and social media plugins. These cookies are set by a third
            party and are subject to their own privacy policies. We do not have
            control over these cookies or the information collected by them.
            <br />
            <br />
            How We Use Cookies We use cookies for the following purposes:
            <br />
            <br />
            -To ensure the proper functioning of the website
            <br />- To personalize your browsing experience <br />- To measure
            and analyze website traffic and usage <br />- To deliver targeted
            advertising <br />- To provide social media features
            <br />
            <br />
            Your Choices You have the right to choose whether or not to accept
            cookies. You can set your browser to block or alert you about these
            cookies, but some parts of the website may not function properly.
            You can also delete cookies from your browser at any time.
            <br />
            <br />
            Changes to this Policy We reserve the right to modify this Cookie
            Policy at any time. Any changes will be posted on this page, and if
            significant, we will provide a more prominent notice.
            <br />
            <br />
            If you have any questions or concerns about our use of cookies,
            please{' '}
            <Link
              href="/contact-us"
              className="text-blue-500 underline"
            >
              contact us
            </Link>
          </p>
        </div>
      </section>
    </Layout>
  );
}
