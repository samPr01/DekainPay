import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const navigation = {
    product: [
      { name: 'Features', href: '/features' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'API Docs', href: '/docs' },
    ],
    company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Help Center', href: '/help' },
      { name: 'Security', href: '/security' },
      { name: 'Status', href: '/status' },
      { name: 'Terms', href: '/terms' },
    ],
    social: [
      {
        name: 'Twitter',
        href: '#',
        icon: Twitter,
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: Linkedin,
      },
      {
        name: 'GitHub',
        href: '#',
        icon: Github,
      },
      {
        name: 'Email',
        href: 'mailto:hello@dekainpay.com',
        icon: Mail,
      },
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
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-200 hover:text-white transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
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
              <div className="mt-10 md:mt-0">
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
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
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
