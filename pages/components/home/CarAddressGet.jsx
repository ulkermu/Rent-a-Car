import {
  InputLabel,
  MenuItem,
  ListSubheader,
  FormControl,
  Select,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { differentDropZoneState, getCarAddressState } from "../../../atom";
import places from "../../../json/places.json";
import React, { useCallback } from "react";
import { FormattedMessage } from "react-intl";

const CarAddressGet = React.memo(() => {
  const differentDropZone = useRecoilValue(differentDropZoneState);
  const [getCarAddress, setGetCarAddress] = useRecoilState(getCarAddressState);

  const handleTakingPlace = useCallback(
    (e) => {
      setGetCarAddress(e.target.value);
    },
    [setGetCarAddress]
  );

  console.log("CarAddressGet rendered");

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="car-take-select-label">
        {differentDropZone ? (
          <FormattedMessage
            id="page.home.carselect.picklocation"
            values={{ b: (title) => <b>{title}</b> }}
          />
        ) : (
          <FormattedMessage
            id="page.home.carselect.location"
            values={{ b: (title) => <b>{title}</b> }}
          />
        )}
      </InputLabel>
      <Select
        value={getCarAddress}
        onChange={(e) => handleTakingPlace(e)}
        labelId="car-take-select-label"
        id="car-take-select"
        label={differentDropZone ? "Alış Yeri" : "Alış/İade Yeri"}
        inputProps={{ MenuProps: { disableScrollLock: true } }}
      >
        <MenuItem value="">
          <em>Temizle</em>
        </MenuItem>
        <ListSubheader sx={{ backgroundColor: "Highlight", fontWeight: 700 }}>
          İzmir
        </ListSubheader>
        {places
          .filter((e) => e.city === "İzmir")
          .map((e, i) => (
            <MenuItem key={i} value={e.place}>
              {e.place}
            </MenuItem>
          ))}
        <ListSubheader sx={{ backgroundColor: "Highlight", fontWeight: 700 }}>
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

export default CarAddressGet;
