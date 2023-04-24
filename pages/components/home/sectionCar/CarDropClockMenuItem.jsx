import {
  dropClockState,
  dropDateState,
  pickClockState,
  pickDateState,
} from "@/atom";
import { MenuItem } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const CarDropClockMenuItem = ({ e }) => {
  const pickDate = useRecoilValue(pickDateState);
  const dropDate = useRecoilValue(dropDateState);
  const pickClock = useRecoilValue(pickClockState);
  const [dropClock, setDropClock] = useRecoilState(dropClockState);
  const [disabled, setDisabled] = useState(false);

  const datePick = new Date(pickDate.$d);
  const dateDrop = new Date(dropDate.$d);

  const handleClick = useCallback(() => {
    setDropClock(e.time);
  }, [setDropClock]);

  useEffect(() => {
    if (
      datePick.getTime() === dateDrop.getTime() &&
      dropClock > pickClock &&
      pickClock.length !== 0 &&
      dropClock.length !== 0
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [pickDate, dropDate, pickClock, dropClock]);

  return (
    <MenuItem disabled={disabled} value={e.time} onClick={handleClick}>
      {e.time.replace(".", ":")}
    </MenuItem>
  );
};

export default CarDropClockMenuItem;
