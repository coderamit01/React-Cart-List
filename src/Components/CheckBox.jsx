import PropTypes from "prop-types";

const CheckBox = ({onChecked}) => {
  return (
    <div>
      <label className="text-base text-slate-900 flex items-center space-x-1 cursor-pointer">
        <input type="checkbox" className="cursor-pointer" onChange={onChecked} />
         <span>Show Premium Only</span>
      </label>
    </div>
  );
};
CheckBox.propTypes = {
  onChecked: PropTypes.func.isRequired
}
export default CheckBox;