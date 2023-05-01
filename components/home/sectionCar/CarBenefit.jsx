import { Box, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import DownloadDoneRoundedIcon from '@mui/icons-material/DownloadDoneRounded';

const CarBenefit = () => {
  return (
    <Box className="car-benefit">
      <Box className="car-benefit-item">
        <DownloadDoneRoundedIcon sx={{color:'#31b531'}} />
        <Typography>
          <FormattedMessage
            id="page.home.benefit.1"
            values={{ b: (title) => <b>{title}</b> }}
          />
        </Typography>
      </Box>
      <Box className="car-benefit-item">
        <DownloadDoneRoundedIcon sx={{color:'#31b531'}} />
        <Typography>
          <FormattedMessage
            id="page.home.benefit.2"
            values={{ b: (title) => <b>{title}</b> }}
          />
        </Typography>
      </Box>
      <Box className="car-benefit-item">
        <DownloadDoneRoundedIcon sx={{color:'#31b531'}} />
        <Typography>
          <FormattedMessage
            id="page.home.benefit.3"
            values={{ b: (title) => <b>{title}</b> }}
          />
        </Typography>
      </Box>
      <Box className="car-benefit-item">
        <DownloadDoneRoundedIcon sx={{color:'#31b531'}} />
        <Typography>
          <FormattedMessage
            id="page.home.benefit.4"
            values={{ b: (title) => <b>{title}</b> }}
          />
        </Typography>
      </Box>
    </Box>
  );
};

export default CarBenefit;
