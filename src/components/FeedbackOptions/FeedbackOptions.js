import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionNames = Object.keys(options);
  return (
    <div className="feedback__wrapper">
      {optionNames.map((optionName, i) => {
        return (
          <button
            key={i}
            name={optionName}
            className="feedback__button"
            onClick={() => onLeaveFeedback(optionName)}
          >
            {optionName}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
