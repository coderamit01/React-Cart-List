import { useState } from "react";
import Cars from "./Cars";
import CheckBox from "./CheckBox";
import SearchBox from "./SearchBox";
import SectionTitle from "./SectionTitle";

const CarList = () => {
  const cars = [   
    { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
    { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
    { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
    { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
  ];

  const [searchInput,setSearchInput] = useState('');
  const [showPremium,setShowPremium] = useState(false);

  const filteredCars = cars.filter((car) => {
    const matchesPremium = !showPremium || car.isPremium;
    return matchesPremium;
  });

  const handleChecked = () => {
    setShowPremium(!showPremium);
  }

  return (
    <div>
      <div className="container mx-auto pt-10 px-4">
       <SectionTitle title="Car List" />
       <div className="flex items-center space-x-2 w-full py-3">
        <SearchBox searchInput={searchInput} onSearch={setSearchInput} />
        <CheckBox onChecked={handleChecked} />
       </div>
       <Cars cars={filteredCars} searchTerm={searchInput} />
      </div>
    </div>
  );
};

export default CarList;