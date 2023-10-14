import PropTypes from 'prop-types';

export const CustomSelectInput = ({ defaultValue, selectionOptions }) => {
  return (
    <div>
      <div>{defaultValue}</div>
      <ul>
        {selectionOptions.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

CustomSelectInput.propTypes = {
  defaultValue: PropTypes.string,
  selectionOptions: PropTypes.arrayOf(PropTypes.string),
};
