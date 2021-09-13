const dataArray = [
  {
    id: 2,
    name: 'Teste 88',
    description: 'Farofa',
  },
  {
    id: 1,
    name: 'Teste 2',
    description: 'Achocolatado',
  },
  {
    id: 3,
    name: 'Teste 0000',
    description: 'Camomila',
  },
];

const orderedById = [
  {
    id: 1,
    name: 'Teste 2',
    description: 'Achocolatado',
  },
  {
    id: 2,
    name: 'Teste 88',
    description: 'Farofa',
  },
  {
    id: 3,
    name: 'Teste 0000',
    description: 'Camomila',
  },
];

const orderedByDescription = [
  {
    id: 1,
    name: 'Teste 2',
    description: 'Achocolatado',
  },
  {
    id: 3,
    name: 'Teste 0000',
    description: 'Camomila',
  },
  {
    id: 2,
    name: 'Teste 88',
    description: 'Farofa',
  },
];

const customOrderArray = ['Camomila', 'Farofa', 'Achocolatado'];

const reorderedWithCustomOrder = [
  {
    id: 3,
    name: 'Teste 0000',
    description: 'Camomila',
  },
  {
    id: 2,
    name: 'Teste 88',
    description: 'Farofa',
  },
  {
    id: 1,
    name: 'Teste 2',
    description: 'Achocolatado',
  },
];

export default {
  dataArray,
  orderedById,
  orderedByDescription,
  customOrderArray,
  reorderedWithCustomOrder,
};
