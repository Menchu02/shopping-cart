// src/api.js
const products = [
  {
    id: 1,
    name: 'Zapatillas Urbanas Clásicas',
    price: 79.99,
    image: 'https://placehold.co/300x200/4CAF50/FFFFFF?text=Zapatillas+Urbanas',
    description:
      'Comodidad y estilo para el día a día. Ideales para caminar y uso casual.',
  },
  {
    id: 2,
    name: 'Botas de Cuero Resistentes',
    price: 120.0,
    image: 'https://placehold.co/300x200/8B4513/FFFFFF?text=Botas+Cuero',
    description:
      'Duraderas y robustas, perfectas para cualquier aventura o clima.',
  },
  {
    id: 3,
    name: 'Zapatos de Vestir Elegantes',
    price: 95.5,
    image: 'https://placehold.co/300x200/36454F/FFFFFF?text=Zapatos+Vestir',
    description:
      'Acabado brillante y diseño sofisticado para ocasiones especiales.',
  },
  {
    id: 4,
    name: 'Sandalias de Verano Confort',
    price: 35.99,
    image: 'https://placehold.co/300x200/FFD700/000000?text=Sandalias+Verano',
    description:
      'Ligeras y frescas, imprescindibles para los días más cálidos.',
  },
  {
    id: 5,
    name: 'Zapatillas de Running Avanzadas',
    price: 110.0,
    image: 'https://placehold.co/300x200/DC143C/FFFFFF?text=Running+Shoes',
    description:
      'Máximo rendimiento y amortiguación superior para tus entrenamientos.',
  },
  {
    id: 6,
    name: 'Mocasines Casuales',
    price: 65.0,
    image: 'https://placehold.co/300x200/A9A9A9/FFFFFF?text=Mocasines+Casual',
    description:
      'Versátiles y cómodos, ideales para un look relajado pero con estilo.',
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Simulamos un retraso de red
  });
};
