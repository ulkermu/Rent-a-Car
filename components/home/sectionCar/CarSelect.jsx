import React, { useCallback } from "react";
import {
  Box,
  Button,
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
import { carSelectSearchDisabledState } from "../../../atom";
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

const CarSelect = React.memo(() => {
  const router = useRouter();
  const carSelectSearchDisabled = useRecoilValue(carSelectSearchDisabledState);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    // router.push("/arac-kirala", undefined, { shallow: true });

    
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
                <FormattedMessage
                  id="page.home.rent"
                  values={{ b: (title) => <b>{title}</b> }}
                />
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
