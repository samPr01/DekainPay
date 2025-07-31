export default function Footer() {
  return (
    <footer className="bg-brand-navy" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-brand-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-white">DekainPay</span>
            </div>
            <p className="text-sm leading-6 text-primary-200">
              Revolutionizing digital payments with cutting-edge technology,
              seamless user experiences, and enterprise-grade security.
            </p>
          </div>
        </div>
        <div className="mt-16 border-t border-primary-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-primary-200">
            &copy; 2024 DekainPay, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
