export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary-50/30 to-background pt-20">
      {/* About Us Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy lg:text-4xl mb-6">
              About Us
            </h2>
            <p className="text-lg leading-8 text-brand-gray">
              DekainPay revolutionizes digital payments with cutting-edge technology, 
              seamless user experiences, and enterprise-grade security. Transform how 
              your business handles transactions with our innovative fintech solutions 
              designed for the modern economy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
