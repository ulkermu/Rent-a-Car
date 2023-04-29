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
  default: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)),
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
  default: [],
});
