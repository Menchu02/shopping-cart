import photo1 from './assets/botas cuero.png';
import photo2 from './assets/mocasines.png';
import photo3 from './assets/runningShoes.png';
import photo4 from './assets/sandalias.png';
import photo5 from './assets/zapatillasUrbanas.png';
import photo6 from './assets/zapatosVestir.png';

const products = [
  {
    id: 1,
    name: 'Botas de Cuero Resistentes',
    price: 79.99,
    image: photo1,
    description:
      'Comodidad y estilo para el día a día. Ideales para caminar y uso casual.',
  },
  {
    id: 2,
    name: 'Mocasines Casual',
    price: 120.0,
    image: photo2,
    description:
      'Duraderas y robustas, perfectas para cualquier aventura o clima.',
  },
  {
    id: 3,
    name: 'Zapatillas de Running Avanzadas',
    price: 95.5,
    image: photo3,
    description:
      'Acabado brillante y diseño sofisticado para ocasiones especiales.',
  },
  {
    id: 4,
    name: 'Sandalias de Verano Confort',
    price: 35.99,
    image: photo4,
    description:
      'Ligeras y frescas, imprescindibles para los días más cálidos.',
  },
  {
    id: 5,
    name: 'Zapatillas Urbanas',
    price: 110.0,
    image: photo5,
    description:
      'Máximo rendimiento y amortiguación superior para tus entrenamientos.',
  },
  {
    id: 6,
    name: 'Zapatos Vestir',
    price: 65.0,
    image: photo6,
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
