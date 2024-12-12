import { Link } from 'react-router';
import PropTypes from 'prop-types';

export default function FooterLinkSection({ title, links }) {
  return (
    <div className="footer-nav">
      <h4>{title}</h4>
      <ul className='grid gap-2'>
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
