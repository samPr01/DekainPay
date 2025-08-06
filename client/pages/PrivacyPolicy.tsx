export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-5xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg leading-8 text-brand-gray">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">1. Information We Collect</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  DekainPay collects information you provide directly to us, such as when you create an account, 
                  make transactions, or contact us for support. This includes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                  <li>Personal identification information (name, email address, phone number)</li>
                  <li>Financial information (bank account details, payment card information)</li>
                  <li>Transaction data and payment history</li>
                  <li>Communication records when you contact our support team</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">2. How We Use Your Information</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                  <li>Process payments and financial transactions</li>
                  <li>Verify your identity and prevent fraud</li>
                  <li>Provide customer support and respond to inquiries</li>
                  <li>Improve our services and develop new features</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Send important updates about your account and our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To prevent fraud or protect our rights and property</li>
                  <li>With trusted service providers who assist in our operations</li>
                  <li>In connection with a business transfer or acquisition</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">4. Data Security</h2>
                <p className="text-brand-gray leading-relaxed">
                  We implement industry-standard security measures to protect your personal information, including:
                  encryption, secure data transmission, regular security audits, and restricted access to personal data.
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">5. Your Rights</h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                  <li>Access and review your personal information</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Data portability (where applicable)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">6. Contact Us</h2>
                <p className="text-brand-gray leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                  <p className="text-brand-navy font-medium">Email: agentxofficialwork@gmail.com</p>
                  <p className="text-brand-navy font-medium">
                    Address: 213, Diamond Trading Centre, New Palasia Indore 452001
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
