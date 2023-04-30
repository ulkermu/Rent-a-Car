import { differenceInDaysState } from "@/atom";
import { Button, Divider } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useRecoilValue } from "recoil";

const Car = ({ car }) => {
  const differenceInDays = useRecoilValue(differenceInDaysState);
  const totalPrice = (car.price * Math.ceil(differenceInDays)).toFixed(0);

  return (
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
            <img width={40} height={40} src="/cars/fuel.png" alt="Yakıt Tipi" />
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
            <img width={40} height={40} src="/cars/gear.png" alt="Vites Tipi" />
            <FormattedMessage
              id={car.gear === "manuel" ? "page.rent.manuel" : "page.rent.auto"}
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
        <div>{Math.ceil(differenceInDays)} Gün</div>
        <div>{car.price} ₺</div>
        <div>{totalPrice} ₺</div>
      </div>
    </div>
  );
};

export default Car;
