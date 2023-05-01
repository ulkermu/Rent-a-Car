import React from "react";
import { Box } from "@mui/material";
import CarAddressGet from "./CarAddressGet";
import CarAddressDrop from "./CarAddressDrop";
import { differentDropZoneState } from "../../../atom";
import { useRecoilValue } from "recoil";

const CarAddress = React.memo(() => {
  const differentDropZone = useRecoilValue(differentDropZoneState);

  return (
    <Box className="car-pick">
      <CarAddressGet />
      {differentDropZone && <CarAddressDrop />}
    </Box>
  );
});

export default CarAddress;
