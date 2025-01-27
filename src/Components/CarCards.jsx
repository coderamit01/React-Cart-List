import CarCardTitle from "./CarCardTitle";
import InfoText from "./InfoText";

const CarCards = ({car}) => {
  const {title,year,brand,price} = car;
  return (
    <div className="p-4 shadow rounded">
      <div className="pb-2">
        <CarCardTitle title={title} />
      </div>
      <InfoText name="Brand" value={brand} />
      <InfoText name="Year" value={year} />
      <InfoText name="Price" value={price} />
      {/* <InfoText name="Premium" value={} /> */}
    </div>
  );
};

export default CarCards;