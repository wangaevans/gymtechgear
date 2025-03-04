import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700">
            At gymtechgear, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
            disclose, and safeguard your information when you visit our website or make a purchase. 
            Please read this policy carefully. By using our website, you consent to the data practices described in this statement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-700 mb-4">
            We collect information that you provide directly to us, such as when you create an account, make a purchase, 
            sign up for our newsletter, contact customer service, or interact with us on social media.
          </p>
          <p className="text-gray-700">
            This information may include:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700">
            <li>Personal information (name, email address, postal address, phone number)</li>
            <li>Payment information (credit card details, billing address)</li>
            <li>Account information (username, password)</li>
            <li>Order history and preferences</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-gray-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Process and fulfill your orders</li>
            <li>Send transactional emails and order confirmations</li>
            <li>Provide customer service and respond to inquiries</li>
            <li>Send marketing communications (if you have opted in)</li>
            <li>Improve our website and product offerings</li>
            <li>Prevent fraud and enhance security</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700">
            We use cookies, web beacons, and similar technologies to track activity on our website and to understand how 
            our website is being used. You can control cookies through your browser settings and other tools.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="text-gray-700">
            We implement appropriate technical and organizational measures to protect the personal information we collect 
            and process. However, no method of transmission over the Internet or electronic storage is 100% secure, so we 
            cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700 mt-2">
            Email: privacy@gymtechgear.com<br />
            Phone: +1 (555) 123-4567
          </p>
        </section>

        <p className="text-gray-500 mt-8">
          Last updated: March 1, 2025
        </p>
      </div>
    </div>
  );
}