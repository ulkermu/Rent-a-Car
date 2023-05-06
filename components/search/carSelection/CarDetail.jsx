import { Button } from "@mui/material";
import { useState } from "react";
import CarPackages from "./carDetail/CarPackages";

const CarDetail = () => {
  const [additionPackages, setAdditionPackages] = useState(true);
  const [rentCondition, setRentCondition] = useState(false);
  const [carSettings, setCarSettings] = useState(false);
  const [carImages, setCarImages] = useState(false);
  const [inPrice, setInPrice] = useState(false);

  const handleAdditionPackages = () => {
    setAdditionPackages(true);
    setRentCondition(false);
    setCarSettings(false);
    setCarImages(false);
    setInPrice(false);
  };
  const handleRentCondition = () => {
    setAdditionPackages(false);
    setRentCondition(true);
    setCarSettings(false);
    setCarImages(false);
    setInPrice(false);
  };
  const handleCarSettings = () => {
    setAdditionPackages(false);
    setRentCondition(false);
    setCarSettings(true);
    setCarImages(false);
    setInPrice(false);
  };
  const handleCarImages = () => {
    setAdditionPackages(false);
    setRentCondition(false);
    setCarSettings(false);
    setCarImages(true);
    setInPrice(false);
  };
  const handleInPrice = () => {
    setAdditionPackages(false);
    setRentCondition(false);
    setCarSettings(false);
    setCarImages(false);
    setInPrice(true);
  };

  return (
    <div className="car-detail">
      <div className="car-detail-nav">
        <Button
          className={additionPackages ? "active" : ""}
          onClick={handleAdditionPackages}
        >
          Ek Paketler
        </Button>
        <Button
          className={rentCondition ? "active" : ""}
          onClick={handleRentCondition}
        >
          Kiralama Koşulları
        </Button>
        <Button
          className={carSettings ? "active" : ""}
          onClick={handleCarSettings}
        >
          Araç Özellikleri
        </Button>
        <Button className={carImages ? "active" : ""} onClick={handleCarImages}>
          Araç Resimleri
        </Button>
        <Button className={inPrice ? "active" : ""} onClick={handleInPrice}>
          Fiyata Dahil Olanlar
        </Button>
      </div>
      <div className="car-detail-page">
        <CarPackages />
      </div>
    </div>
  );
};

export default CarDetail;
