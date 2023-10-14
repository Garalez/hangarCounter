import PropTypes from 'prop-types';

export const Input = ({ inputId, label }) => (
  <div>
    <input className='h-input outline color text-base/[1.25] p-input' type="text" id={inputId} />
    <label htmlFor={inputId}>{label}</label>
  </div>
);

Input.propTypes = {
  inputId: PropTypes.string,
  label: PropTypes.string,
};
