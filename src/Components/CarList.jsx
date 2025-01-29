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
    { id: 6, title: "Compact Sedan", brand: "Honda", year: 2021, price: 25000, isPremium: false },
    { id: 7, title: "Convertible", brand: "Audi", year: 2023, price: 75000, isPremium: true },
    { id: 8, title: "Hybrid SUV", brand: "Ford", year: 2022, price: 50000, isPremium: false },
    { id: 9, title: "Electric Sedan", brand: "Tesla", year: 2023, price: 95000, isPremium: true },
    { id: 10, title: "Pickup Truck", brand: "Chevrolet", year: 2021, price: 40000, isPremium: false },
    { id: 11, title: "Luxury Coupe", brand: "Lexus", year: 2023, price: 85000, isPremium: true },
    { id: 12, title: "Compact SUV", brand: "Hyundai", year: 2022, price: 30000, isPremium: false },
    { id: 13, title: "Supercar", brand: "Ferrari", year: 2023, price: 250000, isPremium: true },
    { id: 14, title: "Minivan", brand: "Kia", year: 2021, price: 35000, isPremium: false },
    { id: 15, title: "Electric SUV", brand: "Rivian", year: 2023, price: 80000, isPremium: true },
    { id: 16, title: "Crossover", brand: "Mazda", year: 2022, price: 28000, isPremium: false },
    { id: 17, title: "Luxury Convertible", brand: "Jaguar", year: 2023, price: 110000, isPremium: true },
    { id: 18, title: "Compact Hatchback", brand: "Volkswagen", year: 2021, price: 22000, isPremium: false },
    { id: 19, title: "Hypercar", brand: "Bugatti", year: 2023, price: 3000000, isPremium: true },
    { id: 20, title: "Electric Sedan", brand: "Polestar", year: 2023, price: 60000, isPremium: false },
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