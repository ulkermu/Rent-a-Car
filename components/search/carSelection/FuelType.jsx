import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FuelType = () => {
  const [expanded, setExpanded] = useState(true);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      className="car-class"
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography fontWeight={700} sx={{ width: "70%", flexShrink: 0 }}>
          Yakıt Tipi
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Benzin" />
          <FormControlLabel control={<Checkbox />} label="Dizel" />
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default FuelType;
