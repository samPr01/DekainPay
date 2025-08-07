export default function RefundsCancellation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-5xl mb-6">
              Refunds & Cancellation Policy
            </h1>
            <p className="text-lg leading-8 text-brand-gray">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  1. Service Cancellation
                </h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  You may cancel your DekainPay service at any time by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                  <li>
                    Logging into your account and selecting the cancellation
                    option
                  </li>
                  <li>
                    Contacting our customer support team at
                    info@dekainpay.com
                  </li>
                  <li>Sending a written notice to our business address</li>
                </ul>
                <p className="text-brand-gray leading-relaxed mt-4">
                  Cancellations will take effect at the end of your current
                  billing cycle. You will continue to have access to all
                  features until that date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  2. Refund Eligibility
                </h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  Refunds may be issued under the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                  <li>
                    Service downtime exceeding 24 hours due to technical issues
                    on our end
                  </li>
                  <li>Duplicate charges or billing errors</li>
                  <li>
                    Cancellation within 7 days of initial service activation
                  </li>
                  <li>Unauthorized transactions reported within 48 hours</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  3. Refund Process
                </h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  To request a refund:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                  <li>
                    Contact our support team with your account details and
                    reason for refund
                  </li>
                  <li>Provide transaction IDs and relevant documentation</li>
                  <li>Allow 5-7 business days for refund processing</li>
                  <li>
                    Refunds will be credited to the original payment method
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  4. Non-Refundable Items
                </h2>
                <p className="text-brand-gray leading-relaxed mb-4">
                  The following are generally not eligible for refunds:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-brand-gray">
                  <li>Transaction processing fees for completed payments</li>
                  <li>Custom development or integration work</li>
                  <li>Services used for more than 30 days</li>
                  <li>Cancellations due to violation of terms of service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  5. Dispute Resolution
                </h2>
                <p className="text-brand-gray leading-relaxed">
                  If you have a billing dispute or refund request that cannot be
                  resolved through normal channels, you may escalate the matter
                  to our management team. We are committed to resolving all
                  disputes fairly and promptly within 15 business days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  6. Contact Information
                </h2>
                <p className="text-brand-gray leading-relaxed">
                  For refund requests or cancellation assistance, please contact
                  us:
                </p>
                <div className="mt-4 p-4 bg-primary-50 rounded-lg">
                  <p className="text-brand-navy font-medium">
                    Email: agentxofficialwork@gmail.com
                  </p>
                  <p className="text-brand-navy font-medium">
                    Address: 213, Diamond Trading Centre, New Palasia, Indore
                    474001 (MP) India
                  </p>
                  <p className="text-brand-navy font-medium">
                    Response Time: Within 24 hours
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">
                  7. Policy Updates
                </h2>
                <p className="text-brand-gray leading-relaxed">
                  This refund and cancellation policy may be updated from time
                  to time. We will notify users of any significant changes via
                  email or through our platform. Continued use of our services
                  after policy updates constitutes acceptance of the new terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
