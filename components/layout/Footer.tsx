import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream-800 text-cream-100 py-16">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">
              The Oak & Barrel
            </h3>
            <p className="text-cream-400 text-sm leading-relaxed">
              A family-friendly New York restaurant serving exceptional steaks,
              sushi, burgers, and craft beers since 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cream-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-cream-100 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="hover:text-cream-100 transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cream-100 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-body font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-cream-400 text-sm">
              <li>123 Oak Street, New York, NY 10001</li>
              <li>(212) 555-0123</li>
              <li>info@oakandbarrel.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-body font-semibold mb-4">Hours</h4>
            <ul className="space-y-1 text-cream-400 text-sm">
              <li>Mon-Thu: 11am - 10pm</li>
              <li>Fri-Sat: 11am - 11pm</li>
              <li>Sunday: 10am - 9pm</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-cream-700">
              <p className="text-sm text-brand-primary">
                Live Music
              </p>
              <p className="text-xs text-cream-400 mt-1">
                Fridays 7-10pm & Sundays 2-5pm
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream-700 pt-8 text-center text-cream-500 text-sm">
          <p>&copy; 2026 The Oak and Barrel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
