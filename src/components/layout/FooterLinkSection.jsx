import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Headings from '../../shared/styles/Typo'

export default function FooterLinkSection({ title, links }) {
  return (
    <div className="footer-nav">
      <Headings as="h4" >{title}</Headings>
      <ul className='grid gap-3'>
        {links.map((link, index) => (
          <li key={index} className='subtext'>
            <Link to={link.url} className='reversed-link'>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

FooterLinkSection.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
};
