import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import {
  carSelectSearchDisabledState,
  dropDateState,
  pickDateState,
} from "../../../../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import React, { useCallback, useEffect } from "react";
import { FormattedMessage } from "react-intl";

const CarDropDate = React.memo(() => {
  dayjs.locale("tr"); // Türkçe yerelleştirmeyi etkinleştirin
  const pickDate = useRecoilValue(pickDateState);
  const [dropDate, setDropDate] = useRecoilState(dropDateState);
  const [, setCarSelectSearchDisabled] = useRecoilState(
    carSelectSearchDisabledState
  );

  const handleDropClock = useCallback(
    (e) => {
      setDropDate(e);
    },
    [setDropDate]
  );

  const datePick = new Date(pickDate.$d);
  const dateDrop = new Date(dropDate.$d);

  useEffect(() => {
    if (datePick.getTime() >= dateDrop.getTime()) {
      setDropDate({});
      setCarSelectSearchDisabled(true);
    } else if (isNaN(dateDrop.getTime())) {
      setCarSelectSearchDisabled(true);
    } else {
      setCarSelectSearchDisabled(false);
    }
  }, [pickDate, dropDate, setCarSelectSearchDisabled]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"}>
      <DatePicker
        label={
          <FormattedMessage
            id="page.home.carselect.dropdate"
            values={{ b: (title) => <b>{title}</b> }}
          />
        }
        format="DD.MM.YYYY"
        placeholder="DD.MM.YYYY"
        sx={{ minWidth: "200px" }}
        value={dropDate}
        onChange={(e) => handleDropClock(e)}
        disablePast={true}
        minDate={pickDate.add(1, "day")}
      />
    </LocalizationProvider>
  );
});

export default CarDropDate;
