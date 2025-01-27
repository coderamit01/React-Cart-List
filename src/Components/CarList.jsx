import Cars from "./Cars";
import CheckBox from "./CheckBox";
import SearchBox from "./SearchBox";
import SectionTitle from "./SectionTitle";

const CarList = () => {
  return (
    <div>
      <div className="container mx-auto pt-10 px-4">
       <SectionTitle title="Car List" />
       <div className="flex items-center space-x-2 w-full py-3">
        <SearchBox />
        <CheckBox />
       </div>
       <Cars />
      </div>
    </div>
  );
};

export default CarList;