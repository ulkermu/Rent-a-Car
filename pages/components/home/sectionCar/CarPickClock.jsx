import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import time from "../../../../json/time.json";
import { useRecoilState } from "recoil";
import { pickClockState } from "../../../../atom";
import { FormattedMessage } from "react-intl";

const CarPickClock = React.memo(() => {
  const [pickClock, setPickClock] = useRecoilState(pickClockState);

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="car-take-select-label">
        {
          <FormattedMessage
            id="page.home.carselect.pickclock"
            values={{ b: (title) => <b>{title}</b> }}
          />
        }
      </InputLabel>
      <Select
        value={pickClock}
        onChange={(e) => setPickClock(e.target.value)}
        labelId="car-take-select-label"
        id="car-take-select"
        label="Alış Saati"
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

export default CarPickClock;
