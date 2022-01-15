import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <section className="feedback__section">
      <h1>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
};

export default Section;
