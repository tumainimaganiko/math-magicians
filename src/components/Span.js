import PropTypes from 'prop-types';

export default function Span({ text, color }) {
  return (
    <span className={color}>{text}</span>
  );
}

Span.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
