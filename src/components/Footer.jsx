import { Link } from 'react-router';
import Image from './Image';
import FooterLinkSection from './FooterLinkSection';
import '../shared/styles/footer.css';

const footerLinks = {
  resources: [
    { text: 'About', url: '#' },
    { text: 'Blockbuster', url: '#' },
    { text: 'Contact Us', url: '#' },
    { text: 'Forums', url: '#' },
    { text: 'Blog', url: '#' },
    { text: 'Help Center', url: '#' }
  ],
  legal: [
    { text: 'Terms of Use', url: '#' },
    { text: 'Privacy Policy', url: '#' },
    { text: 'Security', url: '#' }
  ],
  account: [
    { text: 'My Account', url: '#' },
    { text: 'Watchlist', url: '#' },
    { text: 'Collections', url: '#' },
    { text: 'User Guide', url: '#' }
  ]
};


export default function Footer() {
  return (
    <footer className="footer grid page-width">
      <div className="flex justify-between items-start">
        {/* Company Info */}
        <div className="footer-content">
          <Link to="/">
            <Image
              src="/logo1.png"
              alt="Company Logo"
              className="logo-image shrink-0"
              loading="eager"
              fallback="/src/assets/react.svg"
              aspectRatio="adapt"
            />
          </Link>
          <p>5th Avenue st, Manhattan New York, NY 10001</p>
          <p>Call us: <Link to="tel:+012023426789" className='reversed-link'>+01 202 342 6789</Link></p>
        </div>

        {/* Footer Links */}
        <FooterLinkSection title="Resources" links={footerLinks.resources} />
        <FooterLinkSection title="Legal" links={footerLinks.legal} />
        <FooterLinkSection title="Account" links={footerLinks.account} />

        {/* Newsletter */}
        <div className="footer-nav subtext">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter system now<br /> to get latest news from us.</p>
          <form action="#" className='input_container'>
            <svg className='input_icon' viewBox="0 0 24 24" fill="none">
              <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input className='input_box' type="email" placeholder="Enter your email" />
          </form>
          <Link to="#" className="btn reversed-link">Subscribe now</Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <div className="ft-left">
          <p>© {new Date().getFullYear()} Blockbuster. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 