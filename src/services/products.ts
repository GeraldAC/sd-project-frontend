import cafe from '../assets/cafe.jpg'
import quinua from '../assets/quinua.jpg'
import cacao from '../assets/cacao.jpg'
import muna from '../assets/muna.jpg'

export const organicProducts = [
  {
    id: 1,
    name: 'Quinua Orgánica Blanca',
    description:
      'Quinua cultivada en las alturas de Ayacucho, rica en proteínas, ideal para una alimentación saludable.',
    price: 18.5,
    imageUrl: quinua,
    category: 'Granos Andinos',
    ratingAvg: 3,
  },
  {
    id: 2,
    name: 'Café Orgánico de Villa Rica',
    description:
      'Café de altura 100% orgánico, con notas florales y sabor balanceado. Ideal para los amantes del café premium.',
    price: 35.0,
    imageUrl: cafe,
    category: 'Bebidas',
    ratingAvg: 4,
  },
  {
    id: 3,
    name: 'Cacao Orgánico de Cusco',
    description:
      'Cacao fino de aroma cultivado de forma sostenible en el Valle del Cusco. Ideal para repostería gourmet o para preparar bebidas antioxidantes.',
    price: 42.0,
    imageUrl: cacao,
    category: 'Bebidas',
    ratingAvg: 4,
  },
  {
    id: 4,
    name: 'Té de Muña Orgánico',
    description:
      'Infusión andina elaborada con hojas de muña seleccionadas. Con propiedades digestivas y un sabor refrescante, perfecta para después de las comidas.',
    price: 18.0,
    imageUrl: muna,
    category: 'Bebidas',
    ratingAvg: 5,
  },
]
