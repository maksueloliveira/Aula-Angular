export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Marlboro Vermelho',
    price: 11,
    description: 'Bom',
  },
  {
    id: 2,
    name: 'Winston',
    price: 5.5,
    description: 'Ruim',
  },
  {
    id: 3,
    name: 'Gudan',
    price: 45,
    description: 'Overrated',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
