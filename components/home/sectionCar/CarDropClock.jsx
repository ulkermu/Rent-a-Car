import { MenuItem, FormControl, Select } from "@mui/material";
import time from "../../../json/time.json";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  dropClockState,
  dropDateState,
  pickClockState,
  pickDateState,
} from "../../../atom";
import React, { useCallback, useEffect } from "react";
import { FormattedMessage } from "react-intl";

const CarDropClock = React.memo(() => {
  const [dropClock, setDropClock] = useRecoilState(dropClockState);
  const pickDate = useRecoilValue(pickDateState);
  const dropDate = useRecoilValue(dropDateState);
  const pickClock = useRecoilValue(pickClockState);

  const handleDropClock = useCallback(
    (e) => {
      setDropClock(e);
    },
    [setDropClock]
  );

  useEffect(() => {
    if (pickClock.length === 0) {
      setDropClock("");
    }
  }, [pickClock.length, setDropClock]);

  return (
    <div className="form__group field">
      <label className="form__label field" htmlFor="car-drop-hour">
        <FormattedMessage
          id="page.home.carselect.dropclock"
          values={{ b: (title) => <b>{title}</b> }}
        />
      </label>
      <FormControl
        required
        disabled={pickClock.length === 0}
        fullWidth
        variant="standard"
      >
        <Select
          value={dropClock}
          onChange={(e) => handleDropClock(e.target.value)}
          labelId="car-drop-hour"
          id="car-drop-hour"
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
                pickDate?.getTime() + 24 * 60 * 60 * 1000 ===
                  dropDate?.getTime() && e.time < pickClock
              }
              value={e.time}
            >
              {e.time.replace(".", ":")}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
});

export default CarDropClock;
