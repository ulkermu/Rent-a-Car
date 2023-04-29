import Car from "./Car";
import { differenceInDaysState, dropDateState, pickDateState } from "@/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import carList from "@/json/carList.json";
import { useEffect } from "react";

const CarList = () => {
  const pickDate = useRecoilValue(pickDateState);
  const dropDate = useRecoilValue(dropDateState);
  const [, setDifferenceInDays] = useRecoilState(differenceInDaysState);

  useEffect(() => {
    const differenceInTime = dropDate.getTime() - pickDate.getTime();
    setDifferenceInDays(differenceInTime / (1000 * 60 * 60 * 24));
  }, [setDifferenceInDays]);

  return (
    <div className="rent-a-car-list">
      {carList.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarList;
