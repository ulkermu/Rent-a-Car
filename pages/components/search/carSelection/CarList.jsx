import Car from "./Car";
import { differenceInDaysState, dropDateState, pickDateState } from "@/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";

const CarList = ({ cars }) => {
  const pickDate = useRecoilValue(pickDateState);
  const dropDate = useRecoilValue(dropDateState);
  const [, setDifferenceInDays] = useRecoilState(differenceInDaysState);

  useEffect(() => {
    const differenceInTime = dropDate.getTime() - pickDate.getTime();
    setDifferenceInDays(differenceInTime / (1000 * 60 * 60 * 24));
  }, [setDifferenceInDays]);

  return (
    <div className="rent-a-car-list">
      {cars && cars.map((car) => <Car key={car.id} car={car} />)}
      {!cars && <div>Araç Kalmadı :(</div>}
    </div>
  );
};

export default CarList;
