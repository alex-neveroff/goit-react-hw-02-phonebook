import PropTypes from 'prop-types';

const SearchFilter = ({ filter, onChange }) => {
  return (
    <label htmlFor="filter-field">
      Find contacts by name
      <input id="filter-field" type="text" value={filter} onChange={onChange} />
    </label>
  );
};

SearchFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchFilter;
