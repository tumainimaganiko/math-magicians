import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

export default function Span({
  text, color, obj, setObj,
}) {
  function handleClick(valueBtn) {
    setObj(calculate(obj, valueBtn));
  }
  return (
    <button onClick={() => handleClick(text)} type="button" className={color}>
      {text}
    </button>
  );
}

Span.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  obj: PropTypes.oneOfType([
    PropTypes.shape({
      total: PropTypes.string,
      next: PropTypes.string,
      operation: PropTypes.string,
    }),
    PropTypes.oneOf([null]),
  ]).isRequired,
  setObj: PropTypes.func.isRequired,
};
