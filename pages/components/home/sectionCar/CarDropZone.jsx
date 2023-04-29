import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { differentDropZoneState, dropCarAddressState } from "../../../../atom";
import { FormattedMessage } from "react-intl";

const CarDropZone = React.memo(() => {
  const [differentDropZone, setDifferentDropZone] = useRecoilState(
    differentDropZoneState
  );
  const [, setDropCarAddress] = useRecoilState(dropCarAddressState);

  useEffect(() => {
    if (differentDropZone) {
      setDropCarAddress("");
    }
  }, [differentDropZone, setDropCarAddress]);

  return (
    <FormControlLabel
      sx={{
        background: "var(--brand)",
        borderRadius: "8px",
        paddingRight: "10px",
        margin: 0,
        color: "white!important",
        width: "fit-content",
        userSelect: "none",
        ":checked": {
          color: "white!important",
        },
      }}
      control={
        <Checkbox
          checked={differentDropZone}
          onChange={(e) => setDifferentDropZone(e.target.checked)}
          sx={{
            color: "white!important",
            ":checked": {
              color: "white!important",
            },
          }}
        />
      }
      label={
        <FormattedMessage
          id="page.home.carselect.timezone"
          values={{ b: (title) => <b>{title}</b> }}
        />
      }
    />
  );
});

export default CarDropZone;
