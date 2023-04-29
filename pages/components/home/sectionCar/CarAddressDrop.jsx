import {
  InputLabel,
  MenuItem,
  ListSubheader,
  FormControl,
  Select,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { differentDropZoneState, dropCarAddressState } from "../../../../atom";
import React, { useCallback } from "react";
import places from "../../../../json/places.json";
import { FormattedMessage } from "react-intl";

const CarAddressDrop = React.memo(() => {
  const differentDropZone = useRecoilValue(differentDropZoneState);
  const [dropCarAddress, setDropCarAddress] =
    useRecoilState(dropCarAddressState);

  const handleDropCarAddress = useCallback(
    (e) => {
      setDropCarAddress(e.target.value);
    },
    [setDropCarAddress]
  );

  return (
    <div className="form__group field">
      <label className="form__label field" htmlFor="car-drop-select">
        <FormattedMessage
          id="page.home.carselect.droplocation"
          values={{ b: (title) => <b>{title}</b> }}
        />
      </label>
      <FormControl
        id="car-drop-select"
        variant="standard"
        required={differentDropZone ? true : false}
        fullWidth
      >
        <Select
          value={dropCarAddress}
          onChange={(e) => handleDropCarAddress(e)}
          id="car-drop-select"
          inputProps={{ MenuProps: { disableScrollLock: true } }}
        >
          <MenuItem value="">
            <em>Temizle</em>
          </MenuItem>
          <ListSubheader sx={{ backgroundColor: "#74adab", fontWeight: 700 }}>
            İzmir
          </ListSubheader>
          {places
            .filter((e) => e.city === "İzmir")
            .map((e, i) => (
              <MenuItem key={i} value={e.place}>
                {e.place}
              </MenuItem>
            ))}
          <ListSubheader sx={{ backgroundColor: "#74adab", fontWeight: 700 }}>
            İstanbul
          </ListSubheader>
          {places
            .filter((e) => e.city === "İstanbul")
            .map((e, i) => (
              <MenuItem key={i} value={e.place}>
                {e.place}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
});

export default CarAddressDrop;
