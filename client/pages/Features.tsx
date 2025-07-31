import { 
  Zap, 
  Shield, 
  Clock, 
  Scale, 
  Layers, 
  User, 
  Activity, 
  Code 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Instant Payments",
      description: "Process payments in milliseconds with real-time settlement capabilities and immediate transaction confirmations."
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Bank-grade encryption, multi-factor authentication, and advanced fraud detection protect every transaction."
    },
    {
      icon: Clock,
      title: "Faster Settlements",
      description: "Accelerated settlement times with automated reconciliation and instant fund availability."
    },
    {
      icon: Scale,
      title: "Dispute Resolution",
      description: "Streamlined dispute management system with automated workflows and comprehensive tracking."
    },
    {
      icon: Layers,
      title: "Scalable Solutions",
      description: "Infrastructure that grows with your business, handling millions of transactions seamlessly."
    },
    {
      icon: User,
      title: "User-Friendly Processes",
      description: "Intuitive interfaces and simplified workflows designed for optimal user experience."
    },
    {
      icon: Activity,
      title: "Real-Time Tracking",
      description: "Monitor transactions, analytics, and performance metrics with live dashboards and alerts."
    },
    {
      icon: Code,
      title: "API Support",
      description: "Comprehensive RESTful APIs, SDKs, and developer tools for seamless integration."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      {/* Header Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-5xl mb-6">
              Check The Features
            </h1>
            <p className="text-lg leading-8 text-brand-gray">
              Discover the powerful features that make DekainPay the preferred choice for businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/30 to-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary-400/20 to-brand-teal/20 rounded-full translate-x-6 -translate-y-6"></div>
                <feature.icon className="h-10 w-10 text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-brand-navy mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-brand-gray leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
              Built for Modern Businesses
            </h2>
            <p className="text-lg leading-8 text-brand-gray mb-8">
              Our comprehensive feature set ensures your payment infrastructure is ready for today's challenges and tomorrow's growth.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                <div className="text-brand-gray">Uptime Reliability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">&lt;300ms</div>
                <div className="text-brand-gray">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-brand-gray">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
