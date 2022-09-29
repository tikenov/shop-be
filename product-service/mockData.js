const productsList = [
  {
    "count": 4,
    "description": "Fresh apples from garden.",
    "id": "1356",
    "price": 2.4,
    "title": "Apple",
    "image": "https://source.unsplash.com/rxN2MRdFJVg"
  },
  {
    "count": 6,
    "description": "Fresh bananas from Africa.",
    "id": "1614",
    "price": 10,
    "title": "Banana",
    "image": "https://source.unsplash.com/Kl3467edwsE"
  },
  {
    "count": 7,
    "description": "Fresh oranges from Egypt.",
    "id": "2173",
    "price": 23,
    "title": "Orange",
    "image": "https://source.unsplash.com/EovrNaCXeS0"
  },
  {
    "count": 12,
    "description": "Fresh pineapple from Costa Rica.",
    "id": "5641",
    "price": 15,
    "title": "Pineapple",
    "image": "https://source.unsplash.com/Cr9hZrpC1Oc"
  },
  {
    "count": 7,
    "description": "Fresh watermelon from garden.",
    "id": "3427",
    "price": 23,
    "title": "Watermelon",
    "image": "https://source.unsplash.com/wh3qvHXdGak"
  },
  {
    "count": 8,
    "description": "Fresh grapes from France.",
    "id": "9511",
    "price": 15,
    "title": "Grapes",
    "image": "https://source.unsplash.com/F_ilCik66Hg"
  },
  {
    "count": 2,
    "description": "Fresh mango from India.",
    "id": "8454",
    "price": 23,
    "title": "Mango",
    "image": "https://source.unsplash.com/7iLlgS5o09c"
  },
  {
    "count": 3,
    "description": "Fresh peach from Spain.",
    "id": "9873",
    "price": 15,
    "title": "Peach",
    "image": "https://source.unsplash.com/vhnWTlU-ZDY"
  }
];

export const mockProductsList = () => new Promise((resolve, reject) => {
  process.nextTick(() => {
    resolve(productsList);
  })
});