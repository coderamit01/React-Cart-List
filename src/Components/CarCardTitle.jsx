import PropTypes from "prop-types";

const CarCardTitle = ({title}) => {
  return (
    <>
      <h4 className="text-xl text-black font-bold capitalize">{title}</h4>
    </>
  );
};

CarCardTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CarCardTitle;