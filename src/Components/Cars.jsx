import CarCards from "./CarCards";

const Cars = () => {

  const cars = [   
    { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
    { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
    { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
    { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
    { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
  ];

  return (
    <div className="grid grid-cols-3 gap-5 pt-2">
      {
        cars.map((car) => (
          <CarCards key={car.id} car={car} />
        ))
      }
    </div>
  );
};

export default Cars;