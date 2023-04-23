import { Box } from "@mui/material";
import CarPickClock from "./CarPickClock";
import CarPickDate from "./CarPickDate";

const CarPick = () => {
  return (
    <Box className="car-pick">
      <CarPickDate />
      <CarPickClock />
    </Box>
  );
};

export default CarPick;
