import PropTypes from "prop-types";

const InfoText = ({name,value}) => {
  return (
    <div className="flex items-center space-x-1">
      <span className="font-bold capitalize">{name}:</span>
      <span className="capitalize">{value}</span>
    </div>
  );
};

InfoText.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]).isRequired
}

export default InfoText;