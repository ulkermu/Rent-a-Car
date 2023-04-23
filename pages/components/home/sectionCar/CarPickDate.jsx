import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRecoilState } from "recoil";
import { pickDateState } from "../../../../atom";
import dayjs from "dayjs";
import "dayjs/locale/tr";
import { FormattedMessage } from "react-intl";

const CarPickDate = React.memo(() => {
  dayjs.locale("tr"); // Türkçe yerelleştirmeyi etkinleştirin
  const [pickDate, setPickDate] = useRecoilState(pickDateState);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"tr"}>
      <DatePicker
        label={
          <FormattedMessage
            id="page.home.carselect.pickdate"
            values={{ b: (title) => <b>{title}</b> }}
          />
        }
        format="DD.MM.YYYY"
        placeholder="DD.MM.YYYY"
        value={pickDate}
        onChange={(e) => setPickDate(e)}
        disablePast={true}
        sx={{ minWidth: "200px" }}
      />
    </LocalizationProvider>
  );
});

export default CarPickDate;
