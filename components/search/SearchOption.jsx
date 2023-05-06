import { useEffect, useState } from "react";
import CarClass from "./carSelection/CarClass";
import CarList from "./carSelection/CarList";
import FuelType from "./carSelection/FuelType";
import GearType from "./carSelection/GearType";

const SearchOption = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const fixedPoint = 210; // Div'in fixed olmasını istediğiniz scroll değeri
      if (window.pageYOffset >= fixedPoint) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Event listener'ı temizleme
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="rent-a-car-option">
      <div
        className={isFixed ? "rent-a-car-options fixed" : "rent-a-car-options"}
      >
        <CarClass />
        <FuelType />
        <GearType />
      </div>
      <div
        className={isFixed ? "rent-a-car-list fixed-list" : "rent-a-car-list"}
      >
        <CarList />
      </div>
    </div>
  );
};

export default SearchOption;
