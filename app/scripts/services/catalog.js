'use strict';

angular.module('yeomanApp')
.value('catalog', [
  {
    id: 1,
    name: 'Belts',
    img: '../../images/belt.jpg',
    price: 45
  },
  {
    id: 2,
    name: 'Hats',
    img: '../../images/hats.jpg',
    price: 58
  },
  {
    id: 3,
    name: 'Jeans',
    img: '../../images/jeans.jpg',
    price: 80
  },
  {
    id: 4,
    name: 'Shoes',
    img: '../../images/shoes.jpg',
    price: 137
  }
]);