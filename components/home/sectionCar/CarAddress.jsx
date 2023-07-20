import React, { useCallback } from "react";
import { Box } from "@mui/material";
import CarAddressGet from "./CarAddressGet";
import CarAddressDrop from "./CarAddressDrop";
import { differentDropZoneState } from "../../../atom";
import { useRecoilValue } from "recoil";
import axios from "axios";

const CarAddress = React.memo(() => {
  const differentDropZone = useRecoilValue(differentDropZoneState);

  const getStationData = useCallback(() => {
    axios.post();
  }, []);

  return (
    <Box className="car-pick">
      <CarAddressGet />
      {differentDropZone && <CarAddressDrop />}
    </Box>
  );
});

export default CarAddress;
