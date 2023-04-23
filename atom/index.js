import { atom } from "recoil";
import dayjs from "dayjs";
import GetToday from "../utils/GetToday";

export const pickDateState = atom({
  key: "pickDate",
  default: dayjs(GetToday()),
});

export const pickClockState = atom({
  key: "pickClock",
  default: "",
});

export const dropDateState = atom({
  key: "dropDate",
  default: dayjs(GetToday()),
});

export const dropClockState = atom({
  key: "dropClock",
  default: "",
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