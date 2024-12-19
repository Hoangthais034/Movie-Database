import { Link } from 'react-router';
import Image from '../../Image';
import FooterLinkSection from './FooterLinkSection';
import Headings from '../../../shared/styles/Typo'
import { FlexBox } from "../../../shared/styles/LayoutModels/LayoutModels";

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
import styled from "styled-components";

export const FooterWrap = styled.footer`
  display: grid;
  gap: 1.2rem;
  background: url(/slider-bg2.jpg) no-repeat;
  background-position: center;
  background-size: cover;
  padding-block: 80px;

  ul {
    list-style: none;
    padding: 0;
  }

  a,
  .footer-nav p {
    text-decoration: none;
    font-size: 14px;
    color: inherit;
  }

  .logo-image {
    margin-bottom: 60px;
    max-width: 120px;
  }

  .footer-content {
    max-width: 210px;
  }

  .footer-content p {
    margin-bottom: 15px;
    font-size: 14px;
    color: var(--color-subtext);
  }
`

export default function Footer() {
  return (
    <FooterWrap className="page-width">
      <FlexBox justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" gap="24px">
        {/* Company Info */}
        <div className="footer-content">
          <Link to="/">
            <Image
              src="/logo1.png"
              alt="Company Logo"
              className="logo-image shrink-0"
              loading="lazy"
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
          <Headings as="h4" >Newsletter</Headings>
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
      </FlexBox>

      {/* Copyright */}
      <div className="footer-copyright">
        <div>
          <p>© {new Date().getFullYear()} Blockbuster. All Rights Reserved.</p>
        </div>
      </div>
    </FooterWrap>
  );
} 