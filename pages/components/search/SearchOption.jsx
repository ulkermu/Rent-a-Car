import CarList from "./carSelection/CarList";

const SearchOption = ({ cars }) => {
  return (
    <div className="rent-a-car-option">
      <CarList cars={cars} />
    </div>
  );
};

export default SearchOption;
