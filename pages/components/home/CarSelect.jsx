import React from "react";
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import CarAddress from "./CarAddress";
import CarPick from "./CarPick";
import CarDrop from "./CarDrop";
import CarDropZone from "./CarDropZone";
import { FormattedMessage } from "react-intl";

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
        <Typography variant="h1" fontSize={40}>
          <FormattedMessage
            id="page.home.title"
            values={{ b: (title) => <b>{title}</b> }}
          />
        </Typography>
        <Box className="car">
          <Box className="car-select">
            <CarAddress />
            <CarPick />
            <CarDrop />
          </Box>
          <CarDropZone />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default CarSelect;
