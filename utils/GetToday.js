const GetToday = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Ocak ayı 0 olarak kabul edildiği için +1 ekliyoruz.
  const year = today.getFullYear();

  return `${year}-${month}-${day}`;
};

export default GetToday;
