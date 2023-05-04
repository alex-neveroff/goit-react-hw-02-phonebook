import PropTypes from 'prop-types';

const ContactListItem = ({ name, number }) => {
  return (
    <li>
      <p>{name}:</p> <p>{number}</p>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
