import { ArrowRight, Shield, Zap, Globe, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-20 pb-16 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-brand-teal/5 to-primary-600/10 animate-gradient-x"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold tracking-tight text-brand-navy lg:text-6xl">
                The Future of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-brand-teal">
                  Financial Technology
                </span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-brand-gray max-w-xl">
                DekainPay revolutionizes digital payments with cutting-edge technology, 
                seamless user experiences, and enterprise-grade security. Transform how 
                your business handles transactions.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <Button size="lg" className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative lg:ml-10 animate-slide-in-left">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-r from-primary-400 to-brand-teal rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 -right-4 w-72 h-72 bg-gradient-to-r from-brand-teal to-primary-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-primary-100">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-brand-navy">Payment Dashboard</h3>
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-primary-100 rounded-full w-3/4"></div>
                      <div className="h-3 bg-primary-200 rounded-full w-1/2"></div>
                      <div className="h-3 bg-primary-100 rounded-full w-5/6"></div>
                    </div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-brand-teal/10 rounded-xl">
                      <div className="text-2xl font-bold text-primary-600">$2.4M</div>
                      <div className="text-sm text-brand-gray">Monthly Volume</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl">
              Why Choose DekainPay?
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-gray">
              Built for the modern economy with features that scale with your business
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-6xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-brand-teal rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Shield className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Enterprise Security</h3>
                <p className="text-brand-gray leading-relaxed">
                  Bank-grade encryption, multi-factor authentication, and compliance with global 
                  financial regulations ensure your data is always protected.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-teal/10 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-brand-teal/20">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-brand-teal to-primary-400 rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Zap className="h-12 w-12 text-brand-teal mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Lightning Fast</h3>
                <p className="text-brand-gray leading-relaxed">
                  Process payments in milliseconds with our optimized infrastructure. 
                  Real-time transactions and instant settlement capabilities.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-50 to-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-400 to-brand-teal rounded-full translate-x-8 -translate-y-8 opacity-20"></div>
                <Globe className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold text-brand-navy mb-3">Global Reach</h3>
                <p className="text-brand-gray leading-relaxed">
                  Accept payments from 190+ countries with multi-currency support and 
                  localized payment methods for international customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-brand-navy to-primary-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-white lg:text-5xl">$50B+</div>
              <div className="mt-2 text-primary-200">Transaction Volume</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white lg:text-5xl">99.9%</div>
              <div className="mt-2 text-primary-200">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white lg:text-5xl">10M+</div>
              <div className="mt-2 text-primary-200">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white lg:text-5xl">190+</div>
              <div className="mt-2 text-primary-200">Countries Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50/50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
                Built for Scale, Designed for Simplicity
              </h2>
              <p className="text-lg text-brand-gray mb-8">
                DekainPay combines powerful enterprise features with intuitive design. 
                Our platform grows with your business, from startup to enterprise.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-navy">Smart Analytics</h4>
                    <p className="text-brand-gray">Real-time insights and detailed reporting to optimize your payment flows</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-navy">Developer First</h4>
                    <p className="text-brand-gray">Comprehensive APIs and SDKs for seamless integration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-brand-teal mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-brand-navy">24/7 Support</h4>
                    <p className="text-brand-gray">Expert support team available around the clock</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-brand-teal rounded-3xl rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-primary-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-brand-navy">Transaction Analytics</h3>
                    <TrendingUp className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-brand-gray">Success Rate</span>
                      <span className="text-sm font-semibold text-brand-teal">99.8%</span>
                    </div>
                    <div className="w-full bg-primary-100 rounded-full h-2">
                      <div className="bg-gradient-to-r from-brand-teal to-primary-500 h-2 rounded-full w-[99.8%]"></div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-brand-gray">Processing Time</span>
                      <span className="text-sm font-semibold text-primary-600">0.3s avg</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-4 bg-primary-50 rounded-xl">
                        <div className="text-2xl font-bold text-primary-600">156K</div>
                        <div className="text-xs text-brand-gray">Today</div>
                      </div>
                      <div className="text-center p-4 bg-brand-teal/10 rounded-xl">
                        <div className="text-2xl font-bold text-brand-teal">4.2M</div>
                        <div className="text-xs text-brand-gray">This Month</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-brand-navy">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white lg:text-4xl">
            Ready to Transform Your Payments?
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-100">
            Join thousands of businesses already using DekainPay to streamline their payment processes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 rounded-xl border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-200">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
