import React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import CarAddress from "./CarAddress";
import CarPick from "./CarPick";
import CarDrop from "./CarDrop";
import CarDropZone from "./CarDropZone";
import CarBenefit from "./CarBenefit";

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          backgroundColor: "white",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          maxHeight: "300px",
        },
      },
    },
  },
});

const CarSelect = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="home">
        <Box className="car-wrapper">
          <Box className="car">
            <Box className="car-select">
              <CarAddress />
              <CarPick />
              <CarDrop />
            </Box>
            <CarDropZone />
          </Box>
          <CarBenefit />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CarSelect;
