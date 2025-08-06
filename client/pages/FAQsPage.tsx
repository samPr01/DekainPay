import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border-b border-primary-100 last:border-b-0">
    <button
      className="w-full py-6 text-left flex justify-between items-center hover:text-primary-600 transition-colors duration-200"
      onClick={onToggle}
    >
      <span className="text-lg font-semibold text-brand-navy pr-4">
        {question}
      </span>
      {isOpen ? (
        <Minus className="h-5 w-5 text-primary-500 flex-shrink-0" />
      ) : (
        <Plus className="h-5 w-5 text-primary-500 flex-shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="pb-6 text-brand-gray leading-relaxed animate-fade-in">
        {answer}
      </div>
    )}
  </div>
);

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I start processing payments with DekainPay?",
      answer:
        "With our seamless onboarding process, you can start processing payments within 24 hours. Our quick setup wizard guides you through account verification, integration, and testing, ensuring you're ready to accept payments with minimal downtime.",
    },
    {
      question: "What security measures does DekainPay implement?",
      answer:
        "DekainPay employs bank-grade encryption, multi-factor authentication, PCI DSS compliance, and advanced fraud detection algorithms. All transactions are processed through secure, encrypted channels with real-time monitoring to protect against threats.",
    },
    {
      question: "Which payment methods and currencies does DekainPay support?",
      answer:
        "We support all major payment methods including credit/debit cards, digital wallets, bank transfers, and cryptocurrency. DekainPay processes transactions in 190+ countries with support for multiple currencies and automatic conversion.",
    },
    {
      question: "How does DekainPay's pricing structure work?",
      answer:
        "DekainPay offers transparent, competitive pricing with no hidden fees. Our rates are based on transaction volume with discounts for high-volume merchants. Contact our sales team for custom enterprise pricing tailored to your business needs.",
    },
    {
      question: "Can DekainPay integrate with my existing business systems?",
      answer:
        "Yes! DekainPay provides comprehensive APIs, SDKs, and pre-built integrations for popular platforms like Shopify, WooCommerce, and enterprise ERPs. Our developer-friendly documentation makes integration straightforward.",
    },
    {
      question: "What kind of support does DekainPay provide?",
      answer:
        "We offer 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team includes technical specialists who can assist with integration, troubleshooting, and optimization.",
    },
    {
      question: "How does dispute resolution work with DekainPay?",
      answer:
        "Our automated dispute management system streamlines the entire process from initial notification to resolution. We provide comprehensive documentation, evidence collection tools, and work directly with card networks to resolve disputes efficiently.",
    },
    {
      question: "Is there a minimum transaction volume requirement?",
      answer:
        "No, DekainPay serves businesses of all sizes, from startups to enterprise corporations. Our scalable infrastructure grows with your business without minimum volume requirements or setup fees for small businesses.",
    },
    {
      question: "What countries does DekainPay operate in?",
      answer:
        "DekainPay operates globally, supporting transactions in 190+ countries. We comply with local financial regulations and offer localized payment methods to ensure seamless transactions worldwide.",
    },
    {
      question: "How does DekainPay ensure data privacy and compliance?",
      answer:
        "We adhere to strict data privacy regulations including GDPR, PCI DSS, and SOC 2 compliance. Your data is encrypted, stored securely, and processed in accordance with international privacy standards.",
    },
    {
      question: "Can I customize the payment experience for my customers?",
      answer:
        "Absolutely! DekainPay offers white-label solutions and customizable payment interfaces that can be branded to match your business. You can customize checkout flows, payment pages, and user experiences.",
    },
    {
      question: "What happens if there's a technical issue with payments?",
      answer:
        "Our 99.9% uptime guarantee ensures minimal service disruption. In the rare event of technical issues, our monitoring systems detect problems immediately, and our technical team works around the clock to resolve issues quickly.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-5xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg leading-8 text-brand-gray">
              Get answers to common questions about DekainPay's features,
              security, and implementation.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-primary-100 overflow-hidden">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brand-gray mb-6">
              Still have questions? Our support team is here to help.
            </p>
            <div className="bg-primary-50 rounded-2xl p-8">
              <div className="space-y-4">
                <p className="text-brand-navy font-medium">Contact Support:</p>
                <p className="text-brand-navy font-medium">
                  Email: agentxofficialwork@gmail.com
                </p>
                <p className="text-brand-navy font-medium">
                  Address: 213, Diamond Trading Centre, New Palasia, Indore 452001 (MP) India
                </p>
                <p className="text-brand-gray">
                  Response time: Within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
