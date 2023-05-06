import {
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useCallback, useState } from "react";
import ChildFriendlyOutlinedIcon from "@mui/icons-material/ChildFriendlyOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import { useRecoilState } from "recoil";
import {
  additionalDriverState,
  babySeatState,
  superMiniDamageInsuranceState,
  youngDriverState,
} from "@/atom";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "#74adab!important",
        },
      },
    },
  },
});

const CarPackages = () => {
  const [babySeat, setBabySeat] = useRecoilState(babySeatState);
  const [disabledPlusSeat, setDisabledPlusSeat] = useState(false);
  const [disabledMinusSeat, setDisabledMinusSeat] = useState(true);
  const [superMiniDamageInsurance, setSuperMiniDamageInsurance] =
    useRecoilState(superMiniDamageInsuranceState);
  const [additionalDriver, setAdditionalDriver] = useRecoilState(
    additionalDriverState
  );
  const [youngDriver, setYoungDriver] = useRecoilState(youngDriverState);

  const handleCountAdder = useCallback(() => {
    if (babySeat < 4) {
      setBabySeat(babySeat + 1);
    }
    if (babySeat + 1 === 4) {
      setDisabledPlusSeat(true);
    }
    if (babySeat + 1 > 0) {
      setDisabledMinusSeat(false);
    }
  }, [babySeat, setBabySeat]);

  const handleCountMinor = useCallback(() => {
    if (babySeat > 0) {
      setBabySeat(babySeat - 1);
    }
    if (babySeat - 1 === 0) {
      setDisabledMinusSeat(true);
    }
    if (babySeat - 1 < 4) {
      setDisabledPlusSeat(false);
    }
  }, [babySeat, setBabySeat]);

  return (
    <ThemeProvider theme={theme}>
      <div className="car-detail-pacgakes">
        <div className="detail-package-wrapper counter-wrapper">
          <div className="counter-container">
            <div className="counter-img">
              <ChildFriendlyOutlinedIcon />
              <p>Bebek koltuğu</p>
            </div>
            <div className="counter">
              <div
                onClick={handleCountMinor}
                className={
                  disabledMinusSeat
                    ? "counter-buttons disabled"
                    : "counter-buttons"
                }
              >
                -
              </div>
              <div className="counter-amount">{babySeat}</div>
              <div
                onClick={handleCountAdder}
                className={
                  disabledPlusSeat
                    ? "counter-buttons disabled"
                    : "counter-buttons"
                }
              >
                +
              </div>
            </div>
          </div>
          <div className="counter-price"><p>44 TL</p><p>/ Günlük</p></div>
        </div>
        <div className="detail-package-wrapper">
          <DirectionsCarFilledOutlinedIcon />
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            checked
            label="HGS"
          />
        </div>
        <div className="detail-package-wrapper">
          <DirectionsCarFilledOutlinedIcon />
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            label="Mini Hasar Güvencesi"
            checked
          />
        </div>
        <div className="detail-package-wrapper">
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            label="Süper Mini Hasar Güvencesi"
            checked={superMiniDamageInsurance}
            onChange={() =>
              setSuperMiniDamageInsurance(!superMiniDamageInsurance)
            }
          />
        </div>
        <div className="detail-package-wrapper">
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            label="Ek Sürücü"
            checked={additionalDriver}
            onChange={() => setAdditionalDriver(!additionalDriver)}
          />
        </div>
        <div className="detail-package-wrapper">
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            label="Genç Sürücü"
            checked={youngDriver}
            onChange={() => setYoungDriver(!youngDriver)}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CarPackages;
