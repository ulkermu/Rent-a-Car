import React from "react";
import { MenuItem, FormControl, Select } from "@mui/material";
import time from "../../../json/time.json";
import { useRecoilState } from "recoil";
import { pickClockState } from "../../../atom";
import { FormattedMessage } from "react-intl";

const CarPickClock = React.memo(() => {
  const [pickClock, setPickClock] = useRecoilState(pickClockState);

  return (
    <div className="form__group field">
      <label className="form__label field" htmlFor="car-take-hour">
        <FormattedMessage
          id="page.home.carselect.pickclock"
          values={{ b: (title) => <b>{title}</b> }}
        />
      </label>
      <FormControl variant="standard" required fullWidth>
        <Select
          value={pickClock}
          onChange={(e) => setPickClock(e.target.value)}
          labelId="car-take-hour"
          id="car-take-hour"
          inputProps={{ MenuProps: { disableScrollLock: true } }}
        >
          <MenuItem value="">
            <em>Temizle</em>
          </MenuItem>
          {time.map((e, key) => (
            <MenuItem key={key} value={e.time}>
              {e.time.replace(".", ":")}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
});

export default CarPickClock;
