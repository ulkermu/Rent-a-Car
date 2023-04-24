import React, { useCallback } from "react";
import {
  Box,
  Button,
  FormControl,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import CarAddress from "./CarAddress";
import CarPick from "./CarPick";
import CarDrop from "./CarDrop";
import CarDropZone from "./CarDropZone";
import CarBenefit from "./CarBenefit";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { carSelectSearchDisabledState } from "@/atom";

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

const CarSelect = React.memo(() => {
  const router = useRouter();
  const carSelectSearchDisabled = useRecoilValue(carSelectSearchDisabledState);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    router.push("/search", undefined, { shallow: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box className="home">
        <Box className="car-wrapper">
          <Box className="car">
            <form onSubmit={handleSearch} className="car-select">
              <CarAddress />
              <CarPick />
              <CarDrop />
              <Button
                disabled={carSelectSearchDisabled}
                type="submit"
                className="car-search"
              >
                Ara
              </Button>
            </form>
            <CarDropZone />
          </Box>
          <CarBenefit />
        </Box>
      </Box>
    </ThemeProvider>
  );
});

export default CarSelect;
