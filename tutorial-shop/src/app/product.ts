export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  caracteristicas: string[];
  garantia: Garantia;
}

export interface Garantia {
  periodo: string;
  tipo: string;
}

export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    stock: 15,
    caracteristicas: ["5G", "Pantalla OLED", "Almacenamiento de 128GB"],
    garantia: {
      periodo: "2 años",
      tipo: "Fabricante"
    }
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    stock: 0,
    caracteristicas: ["4G", "Pantalla LCD", "Almacenamiento de 256GB"],
    garantia: {
      periodo: "4 años",
      tipo: "Vendedor"
    }
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
    stock: 3,
    caracteristicas: [],
    garantia: {
      periodo: "3 años",
      tipo: "Vendedor"
    }
  },
];
