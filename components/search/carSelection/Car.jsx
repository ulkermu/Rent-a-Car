import { differenceInDaysState } from "../../../atom";
import {
  Accordion,
  AccordionDetails,
  Button,
  ClickAwayListener,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useRecoilValue } from "recoil";
import CarDetail from "./CarDetail";

const Car = ({ car }) => {
  const differenceInDays = useRecoilValue(differenceInDaysState);
  const totalPrice = (car.price * Math.ceil(differenceInDays)).toFixed(0);
  const [expanded, setExpanded] = useState(false);

  const handleClickAway = () => {
    setExpanded(false);
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Accordion
        sx={{
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.23)",
          borderRadius: "8px",
          ":before": { height: 0 },
        }}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <div className="rent-a-car-list-item">
          <img
            src="/cars/citroen-elysee.png"
            alt="Citroen Elysee Benzinli Manuel"
          />
          <div className="list-item options">
            <div className="options-model">
              {car.model} veya <Button className="modal-button">Benzeri</Button>
            </div>
            <div className="list-item-car-option">
              <div className="list-item-car-option-item">
                <img
                  width={40}
                  height={40}
                  src="/cars/fuel.png"
                  alt="Yakıt Tipi"
                />
                <FormattedMessage
                  id={
                    car.fuel === "gasoline"
                      ? "page.rent.gasoline"
                      : "page.rent.diesel"
                  }
                  values={{ b: (title) => <b>{title}</b> }}
                />
              </div>
              <Divider className="divider" />
              <div className="list-item-car-option-item">
                <img
                  width={40}
                  height={40}
                  src="/cars/gear.png"
                  alt="Vites Tipi"
                />
                <FormattedMessage
                  id={
                    car.gear === "manuel"
                      ? "page.rent.manuel"
                      : "page.rent.auto"
                  }
                  values={{ b: (title) => <b>{title}</b> }}
                />
              </div>
              <Divider className="divider" />
              <div className="list-item-car-option-item">
                <img
                  width={40}
                  height={40}
                  src="/cars/family.png"
                  alt="Kişi Sayısı"
                />
                <FormattedMessage
                  id="page.rent.people"
                  values={{ b: (title) => <b>{title}</b> }}
                />
              </div>
            </div>
          </div>
          <div className="list-item price">
            <div className="price-day">{Math.ceil(differenceInDays)} Gün</div>
            <div className="price-total">{totalPrice} ₺</div>
            <div className="price-amount">{car.price} ₺ / Günlük Tutar</div>
            <Button
              onClick={() => setExpanded(!expanded)}
              className={
                expanded ? "price-button expanded-button" : "price-button"
              }
            >
              {expanded ? "Aracı Değiştir" : "Aracı Seç"}
            </Button>
          </div>
        </div>
        <AccordionDetails>
          <CarDetail />
        </AccordionDetails>
      </Accordion>
    </ClickAwayListener>
  );
};

export default Car;
