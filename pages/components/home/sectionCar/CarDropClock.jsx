import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import time from "../../../../json/time.json";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  dropClockState,
  dropDateState,
  pickClockState,
  pickDateState,
} from "../../../../atom";
import React, { useCallback, useEffect } from "react";
import { FormattedMessage } from "react-intl";

const CarDropClock = React.memo(() => {
  const [dropClock, setDropClock] = useRecoilState(dropClockState);
  const pickDate = useRecoilValue(pickDateState);
  const dropDate = useRecoilValue(dropDateState);
  const pickClock = useRecoilValue(pickClockState);

  const datePick = new Date(pickDate.$d);
  const dateDrop = new Date(dropDate.$d);

  const handleDropClock = useCallback(
    (e) => {
      setDropClock(e);
      console.log(e);
    },
    [setDropClock]
  );

  useEffect(() => {
    if (pickClock.length === 0) {
      setDropClock("");
    }
  }, [pickClock.length, setDropClock]);

  return (
    <FormControl required disabled={pickClock.length === 0} fullWidth>
      <InputLabel htmlFor="car-take-select-label">
        <FormattedMessage
          id="page.home.carselect.dropclock"
          values={{ b: (title) => <b>{title}</b> }}
        />
      </InputLabel>
      <Select
        value={dropClock}
        onChange={(e) => handleDropClock(e.target.value)}
        labelId="car-take-select-label"
        id="car-take-select"
        label="İade Saati"
        inputProps={{ MenuProps: { disableScrollLock: true } }}
      >
        <MenuItem value="">
          <em>Temizle</em>
        </MenuItem>
        {time.map((e, key) => (
          <MenuItem
            key={key}
            disabled={
              datePick.getTime() === dateDrop.getTime() && e.time < pickClock
            }
            value={e.time}
          >
            {e.time.replace(".", ":")}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export default CarDropClock;
