const carData = [
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
];

export default function handler(req, res) {
  const { id } = req.query;

  if (id) {
    const carList = carData.find((car) => car.id === id);

    if (carList) {
      res.status(200).json(carList);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } else {
    res.status(200).json(carData);
  }
}