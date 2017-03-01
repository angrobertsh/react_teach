import { combineReducers } from 'redux';
import ItemsReducer from './items_reducer';

const RootReducer = combineReducers({items: ItemsReducer});

export default RootReducer


// store = {
//
//   item: {
//     1: {
//       name: "water",
//       id: 1,
//       price: 234
//     }
//     2: {
//       name: "poop",
//       id: 2,
//       price: 0
//     }
// 3: {
//   name: "happy",
    // id: 3,
    // price: 7
// }
//   }
//
//   filters: {
//     price: null,
//     sort: name
//   }
//
// }
