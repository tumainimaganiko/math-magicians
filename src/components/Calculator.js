import PropTypes from 'prop-types';

export default function Calculator() {
  return (
    <div className="container">
      <Span text="0" color="display" />
      <Span text="AC" color="white" />
      <Span text="+/-" color="white" />
      <Span text="%-" color="white" />
      <Span text="÷" color="yellow" />
      <Span text="7" color="white" />
      <Span text="8" color="white" />
      <Span text="9" color="white" />
      <Span text="×" color="yellow" />
      <Span text="4" color="white" />
      <Span text="5" color="white" />
      <Span text="6" color="white" />
      <Span text="-" color="yellow" />
      <Span text="1" color="white" />
      <Span text="2" color="white" />
      <Span text="3" color="white" />
      <Span text="+" color="yellow" />
      <Span text="0" color="zero white" />
      <Span text="." color="white" />
      <Span text="=" color="yellow" />
    </div>
  );
}

function Span({ text, color }) {
  return (
    <span className={color}>{text}</span>
  );
}

Span.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
