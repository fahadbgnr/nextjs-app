import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-700 py-12 shadow-inner">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <Link href="/" className="text-2xl font-bold text-blue-600">
            NextjsApp
          </Link>
          <p className="mt-2 text-gray-600">
            Building amazing products for your needs.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h6 className="font-semibold mb-4 text-blue-600">Useful Links</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="font-semibold mb-4 text-blue-600">Company</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-500 transition">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/jobs" className="hover:text-blue-500 transition">
                Jobs
              </Link>
            </li>
            <li>
              <Link href="/press" className="hover:text-blue-500 transition">
                Press kit
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="font-semibold mb-4 text-blue-600">Legal</h6>
          <ul className="space-y-2">
            <li>
              <Link href="/terms" className="hover:text-blue-500 transition">
                Terms of use
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-500 transition">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-blue-500 transition">
                Cookie policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} NextjsApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
