import { atom } from "recoil";

export const pickDateState = atom({
  key: "pickDate",
  default: new Date(),
});

export const pickClockState = atom({
  key: "pickClock",
  default: "08.00",
});

export const dropDateState = atom({
  key: "dropDate",
  default: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
});

export const dropClockState = atom({
  key: "dropClock",
  default: "08.00",
});

export const getCarAddressState = atom({
  key: "getCarAddress",
  default: "",
});

export const dropCarAddressState = atom({
  key: "dropCarAddress",
  default: "",
});

export const differentDropZoneState = atom({
  key: "differentDropZone",
  default: false,
});

export const langState = atom({
  key: "lang",
  default: "tr",
});

export const carSelectSearchDisabledState = atom({
  key: "carSelectSearchDisabled",
  default: false,
});

export const differenceInDaysState = atom({
  key: "differenceInDays",
  default: 0,
});

export const carsState = atom({
  key: "cars",
  default: [
    {
      id: 1,
      model: "Citroen Elysee Benzinli Manuel",
      class: "eko",
      fuel: "gasoline",
      gear: "manuel",
      price: 675,
    },
    {
      id: 2,
      model: "Renault Symbol Benzinli Manuel",
      class: "eko",
      fuel: "diesel",
      gear: "auto",
      price: 800,
    },
    {
      id: 3,
      model: "Renault Clio Benzinli Manuel",
      class: "eko",
      fuel: "diesel",
      gear: "manuel",
      price: 725,
    },
    {
      id: 4,
      model: "Citroen Elysee Benzinli Manuel",
      class: "eko",
      fuel: "gasoline",
      gear: "manuel",
      price: 675,
    },
    {
      id: 5,
      model: "Renault Symbol Benzinli Manuel",
      class: "eko",
      fuel: "diesel",
      gear: "auto",
      price: 800,
    },
    {
      id: 6,
      model: "Renault Clio Benzinli Manuel",
      class: "eko",
      fuel: "diesel",
      gear: "manuel",
      price: 725,
    },
    {
      id: 7,
      model: "Citroen Elysee Benzinli Manuel",
      class: "eko",
      fuel: "gasoline",
      gear: "manuel",
      price: 675,
    },
    {
      id: 8,
      model: "Renault Symbol Benzinli Manuel",
      class: "eko",
      fuel: "diesel",
      gear: "auto",
      price: 800,
    },
    {
      id: 9,
      model: "Renault Clio Benzinli Manuel",
      class: "eko",
      fuel: "diesel",
      gear: "manuel",
      price: 725,
    },
  ],
});

export const babySeatState = atom({
  key: "babySeat",
  default: 0,
});

export const superMiniDamageInsuranceState = atom({
  key: "superMiniDamageInsurance",
  default: false,
});

export const additionalDriverState = atom({
  key: "additionalDriver",
  default: false,
});

export const youngDriverState = atom({
  key: "youngDriver",
  default: false,
});
