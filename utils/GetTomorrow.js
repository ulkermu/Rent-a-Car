import dayjs from "dayjs";
import GetToday from "./GetToday";

const GetTomorrow = () => {
  const today = dayjs(GetToday()); // Bugünün tarihini alıyoruz
  const tomorrow = today.add(1, "day"); // Bugünden 1 gün sonrasını alıyoruz

  return tomorrow;
};

export default GetTomorrow;
