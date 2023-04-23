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
    <FormControl required={differentDropZone ? true : false} fullWidth>
      <InputLabel htmlFor="car-take-select-label">
        <FormattedMessage
          id="page.home.carselect.droplocation"
          values={{ b: (title) => <b>{title}</b> }}
        />
      </InputLabel>
      <Select
        value={dropCarAddress}
        onChange={(e) => handleDropCarAddress(e)}
        labelId="car-take-select-label"
        id="car-take-select"
        label="İade Yeri"
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
  );
});

export default CarAddressDrop;
