import PropTypes from "prop-types";

const Statistics = ({ good, bad, neutral, total, percentage }) => {
  return (
    <div className="feedback__statistics">
      <h2>Statistics</h2>
      {
        <ul>
          <li>Good: {good}</li>
          <li>Bad: {bad}</li>
          <li>Neutral: {neutral}</li>
          <li>Total: {total}</li>
          <li>Positive feedback: {percentage}%</li>
        </ul>
      }
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export default Statistics;
