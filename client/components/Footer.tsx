import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export default function Footer() {
  const navigation = {
    company: [
      { name: 'About Us', href: '/about-page' },
      { name: 'FAQs', href: '/faqs-page' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Refunds & Cancellation', href: '/refunds-cancellation' },
    ],
  };

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

            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-primary-200 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm leading-6 text-primary-200">
                  213, Diamond Trading Centre<br />
                  New Palasia Indore 452001
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-sm leading-6 text-primary-200 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
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
