import PropTypes from "prop-types";

const SectionTitle = ({title}) => {
  return (
    <h2 className="text-3xl font-bold">
      {title}
    </h2>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired
}

export default SectionTitle;