import { PropTypes } from 'prop-types';

export function Filter({ onInputFilter }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" onChange={onInputFilter} />
    </>
  );
}

Filter.propTypes = {
  onInputFilter: PropTypes.func.isRequired,
};
