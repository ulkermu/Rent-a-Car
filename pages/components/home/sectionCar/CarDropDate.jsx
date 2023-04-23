import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import { dropDateState } from "../../../../atom";
import { useRecoilState } from "recoil";
import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";

const CarDropDate = React.memo(() => {
  dayjs.locale("tr"); // Türkçe yerelleştirmeyi etkinleştirin
  const [dropDate, setDropDate] = useRecoilState(dropDateState);

  const handleDropClock = useCallback(
    (e) => {
      setDropDate(e);
    },
    [setDropDate]
  );

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
      />
    </LocalizationProvider>
  );
});

export default CarDropDate;
