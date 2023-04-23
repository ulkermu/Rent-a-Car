import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import time from "../../../json/time.json";
import { useRecoilState } from "recoil";
import { dropClockState } from "../../../atom";
import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";

const CarDropClock = React.memo(() => {
  const [dropClock, setDropClock] = useRecoilState(dropClockState);

  const handleDropClock = useCallback(
    (e) => {
      setDropClock(e.target.value);
    },
    [setDropClock]
  );

  console.log("CarDropClock rendered");

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="car-take-select-label">
        <FormattedMessage
          id="page.home.carselect.dropclock"
          values={{ b: (title) => <b>{title}</b> }}
        />
      </InputLabel>
      <Select
        value={dropClock}
        onChange={(e) => handleDropClock(e)}
        labelId="car-take-select-label"
        id="car-take-select"
        label="İade Saati"
        inputProps={{ MenuProps: { disableScrollLock: true } }}
      >
        <MenuItem value="">
          <em>Temizle</em>
        </MenuItem>
        {time.map((e, key) => (
          <MenuItem key={key} value={e.time}>
            {e.time}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default CarDropClock;
