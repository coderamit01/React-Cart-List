import PropTypes from "prop-types";
import CarCards from "./CarCards";

const Cars = ({cars,searchTerm}) => {
  const row= [];
  cars.forEach(car => {
    if(car.title.toLowerCase().includes(searchTerm.toLowerCase()) === false){
      return;
    }
    row.push(<CarCards key={car.id} car={car} />);
  })
  return (
    <>
      {
        row.length > 0 ? (
          <div className="grid grid-cols-4 gap-5 pt-2">
            { row }
          </div>
        ) : (<p className="text-base font-semibold">No Records Found..</p>)
      }
    </>
  );
};

Cars.propTypes = {
  cars: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
}


export default Cars;