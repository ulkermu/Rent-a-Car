import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
//import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRecoilState, useRecoilValue } from "recoil";
import { dropDateState, pickDateState } from "../../../../atom";
import dayjs from "dayjs";
import { FormattedMessage } from "react-intl";
import { StaticDatePicker } from "@mui/x-date-pickers";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CarPickDate = React.memo(() => {
  const dropDate = useRecoilValue(dropDateState);
  const [pickDate, setPickDate] = useRecoilState(pickDateState);

  return (
    <div className="form__group field">
      <label className="form__label field" htmlFor="pick-date-input">
        <FormattedMessage
          id="page.home.carselect.pickdate"
          values={{ b: (title) => <b>{title}</b> }}
        />
      </label>
      <DatePicker
        selected={pickDate}
        minDate={new Date()}
        monthsShown={3}
        onChange={(date) => setPickDate(date)}
        id="pick-date-input"
        selectsStart
        startDate={pickDate}
        endDate={dropDate}
        dateFormat={"dd/MM/yyyy"}
      />
    </div>
  );
});

export default CarPickDate;
