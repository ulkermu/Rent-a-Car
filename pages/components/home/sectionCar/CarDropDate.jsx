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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CarDropDate = React.memo(() => {
  dayjs.locale("tr"); // Türkçe yerelleştirmeyi etkinleştirin
  const pickDate = useRecoilValue(pickDateState);
  const [dropDate, setDropDate] = useRecoilState(dropDateState);

  const handleDropClock = useCallback(
    (e) => {
      setDropDate(e);
    },
    [setDropDate]
  );

  useEffect(() => {
    if (dropDate && pickDate?.getTime() >= dropDate?.getTime()) {
      setDropDate(new Date(pickDate?.getTime() + 24 * 60 * 60 * 1000));
    }
  }, [pickDate, dropDate]);

  return (
    <div className="form__group field">
      <label className="form__label field" htmlFor="drop-date-input">
        <FormattedMessage
          id="page.home.carselect.dropdate"
          values={{ b: (title) => <b>{title}</b> }}
        />
      </label>
      <DatePicker
        selected={dropDate}
        id="drop-date-input"
        minDate={pickDate}
        monthsShown={3}
        onChange={handleDropClock}
        selectsEnd
        startDate={pickDate}
        endDate={dropDate}
        dateFormat={"dd/MM/yyyy"}
      />
    </div>
  );
});

export default CarDropDate;
