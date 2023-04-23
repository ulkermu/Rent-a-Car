import CarDropDate from "./CarDropDate";
import CarDropClock from "./CarDropClock";
import { Box } from "@mui/material";

const CarDrop = () => {
  return (
    <Box className="car-pick">
      <CarDropDate />
      <CarDropClock />
    </Box>
  );
};

export default CarDrop;
