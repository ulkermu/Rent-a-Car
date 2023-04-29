import Car from "./Car";
import {
  carsState,
  differenceInDaysState,
  dropDateState,
  pickDateState,
} from "@/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";

const CarList = () => {
  const pickDate = useRecoilValue(pickDateState);
  const dropDate = useRecoilValue(dropDateState);
  const [, setDifferenceInDays] = useRecoilState(differenceInDaysState);
  const cars = useRecoilValue(carsState);

  useEffect(() => {
    const differenceInTime = dropDate.getTime() - pickDate.getTime();
    setDifferenceInDays(differenceInTime / (1000 * 60 * 60 * 24));
  }, [setDifferenceInDays]);

  return (
    <div className="rent-a-car-list">
      {cars !== 0 && cars.map((car) => <Car key={car.id} car={car} />)}
      {!cars && <div style={{ marginTop: "20px" }}>Araç Kalmadı"</div>}
    </div>
  );
};

export default CarList;
