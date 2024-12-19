import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Headings from '../../../shared/styles/Typo'
import { GridBox } from "../../../shared/styles/LayoutModels/LayoutModels";

export default function FooterLinkSection({ title, links }) {
  return (
    <div className="footer-nav">
      <Headings as="h4" >{title}</Headings>
      <GridBox element="ul" columns={1} gap="1.2rem">
        {links.map((link, index) => (
          <li key={index} className='subtext'>
            <Link to={link.url} className='reversed-link'>{link.text}</Link>
          </li>
        ))}
      </GridBox>
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
