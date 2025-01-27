
const InfoText = ({name,value}) => {
  return (
    <div className="flex items-center space-x-1">
      <span className="font-bold capitalize">{name}:</span>
      <span className="capitalize">{value}</span>
    </div>
  );
};

export default InfoText;