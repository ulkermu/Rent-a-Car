import {
  Checkbox,
  FormControlLabel,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import ChildFriendlyOutlinedIcon from "@mui/icons-material/ChildFriendlyOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  addDriverAmountState,
  additionalDriverState,
  babySeatAmountState,
  babySeatState,
  hgsAmountState,
  miniAmountState,
  superMiniAmountState,
  superMiniDamageInsuranceState,
  totalState,
  youngDriverAmountState,
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

const CarPackages = ({ totalPrice }) => {
  const [disabledPlusSeat, setDisabledPlusSeat] = useState(false);
  const [disabledMinusSeat, setDisabledMinusSeat] = useState(true);

  const [babySeat, setBabySeat] = useRecoilState(babySeatState);
  const [superMiniDamageInsurance, setSuperMiniDamageInsurance] =
    useRecoilState(superMiniDamageInsuranceState);
  const [additionalDriver, setAdditionalDriver] = useRecoilState(
    additionalDriverState
  );
  const [youngDriver, setYoungDriver] = useRecoilState(youngDriverState);

  const hgsAmount = useRecoilValue(hgsAmountState);
  const babySeatAmount = useRecoilValue(babySeatAmountState);
  const miniAmount = useRecoilValue(miniAmountState);
  const superMiniAmount = useRecoilValue(superMiniAmountState);
  const addDriverAmount = useRecoilValue(addDriverAmountState);
  const youngDriverAmount = useRecoilValue(youngDriverAmountState);

  const [total, setTotal] = useRecoilState(totalState);

  const getTotal = useCallback(() => {
    setTotal(Number(totalPrice) + hgsAmount + miniAmount);
  }, [setTotal, totalPrice, hgsAmount, miniAmount]);

  const handleCountAdder = useCallback(() => {
    if (babySeat < 4) {
      setBabySeat(babySeat + 1);
      setTotal(total + babySeatAmount);
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
      setTotal(total - babySeatAmount);
    }
    if (babySeat - 1 === 0) {
      setDisabledMinusSeat(true);
    }
    if (babySeat - 1 < 4) {
      setDisabledPlusSeat(false);
    }
  }, [babySeat, setBabySeat]);

  const handleSuperMiniCheck = useCallback(() => {
    setSuperMiniDamageInsurance(!superMiniDamageInsurance);

    if (superMiniDamageInsurance) {
      setTotal(total - superMiniAmount);
    } else {
      setTotal(total + superMiniAmount);
    }
  }, [
    total,
    setTotal,
    superMiniDamageInsurance,
    setSuperMiniDamageInsurance,
    superMiniAmount,
  ]);

  const handleAddDriver = useCallback(() => {
    setAdditionalDriver(!additionalDriver);

    if (additionalDriver) {
      setTotal(total - addDriverAmount);
    } else {
      setTotal(total + addDriverAmount);
    }
  }, [additionalDriver, setAdditionalDriver, total, setTotal, addDriverAmount]);

  const handleYoungDriver = useCallback(() => {
    setYoungDriver(!youngDriver);

    if (youngDriver) {
      setTotal(total - youngDriverAmount);
    } else {
      setTotal(total + youngDriverAmount);
    }
  }, [youngDriver, setYoungDriver, total, setTotal, youngDriverAmount]);

  useEffect(() => {
    getTotal();
  }, [getTotal]);

  return (
    <ThemeProvider theme={theme}>
      <div className="car-detail-pacgakes">
        <div className="detail-package-wrapper counter-wrapper">
          <div className="counter-container">
            <div className="counter-img">
              <ChildFriendlyOutlinedIcon />
              <div className="counter-price-wrapper">
                <p className="counter-price-headline">Bebek koltuğu</p>
                <div className="counter-price">
                  <p>{babySeatAmount} TL</p>
                  <p>/ Günlük</p>
                </div>
              </div>
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
        </div>
        <div className="detail-package-wrapper">
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            checked
            label={
              <div className="package-price">
                <DirectionsCarFilledOutlinedIcon />
                <div className="package-price-text">
                  <p>HGS</p>
                  <div className="package-price-amount">
                    <p className="amount">{hgsAmount} TL</p>
                    <p>/ Adet</p>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="detail-package-wrapper">
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            label={
              <div className="package-price">
                <DirectionsCarFilledOutlinedIcon />
                <div className="package-price-text">
                  <p>Mini Hasar Güvencesi</p>
                  <div className="package-price-amount">
                    <p className="amount">{miniAmount} TL</p>
                    <p>/ Günlük</p>
                  </div>
                </div>
              </div>
            }
            checked
          />
        </div>
        <div className="detail-package-wrapper">
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            label={
              <div className="package-price">
                <DirectionsCarFilledOutlinedIcon />
                <div className="package-price-text">
                  <p>Süper Mini Hasar Güvencesi</p>
                  <div className="package-price-amount">
                    <p className="amount">{superMiniAmount} TL</p>
                    <p>/ Günlük</p>
                  </div>
                </div>
              </div>
            }
            checked={superMiniDamageInsurance}
            onChange={handleSuperMiniCheck}
          />
        </div>
        <div className="detail-package-wrapper">
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            label={
              <div className="package-price">
                <DirectionsCarFilledOutlinedIcon />
                <div className="package-price-text">
                  <p>Ek Sürücü</p>
                  <div className="package-price-amount">
                    <p className="amount">{addDriverAmount} TL</p>
                    <p>/ Günlük</p>
                  </div>
                </div>
              </div>
            }
            checked={additionalDriver}
            onChange={handleAddDriver}
          />
        </div>
        <div className="detail-package-wrapper">
          <FormControlLabel
            className="detail-package"
            control={<Checkbox />}
            label={
              <div className="package-price">
                <DirectionsCarFilledOutlinedIcon />
                <div className="package-price-text">
                  <p>Genç Sürücü</p>
                  <div className="package-price-amount">
                    <p className="amount">{youngDriverAmount} TL</p>
                    <p>/ Günlük</p>
                  </div>
                </div>
              </div>
            }
            checked={youngDriver}
            onChange={handleYoungDriver}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CarPackages;
