import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-12 shadow-md">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

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
          <h6 className="footer-title font-semibold mb-4">Useful Links</h6>
          <ul className="space-y-2">
            <li><Link href="/about" className="link link-hover">About</Link></li>
            <li><Link href="/services" className="link link-hover">Services</Link></li>
            <li><Link href="/blog" className="link link-hover">Blog</Link></li>
            <li><Link href="/contact" className="link link-hover">Contact</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            <li><Link href="/about" className="link link-hover">About us</Link></li>
            <li><Link href="/contact" className="link link-hover">Contact</Link></li>
            <li><Link href="/jobs" className="link link-hover">Jobs</Link></li>
            <li><Link href="/press" className="link link-hover">Press kit</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="footer-title font-semibold mb-4">Legal</h6>
          <ul className="space-y-2">
            <li><Link href="/terms" className="link link-hover">Terms of use</Link></li>
            <li><Link href="/privacy" className="link link-hover">Privacy policy</Link></li>
            <li><Link href="/cookies" className="link link-hover">Cookie policy</Link></li>
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
