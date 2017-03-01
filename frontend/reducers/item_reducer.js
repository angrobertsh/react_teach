import * as ACTIONS from '../actions/item_actions';
import merge from 'lodash/merge';

const defaultState = {};

const ItemReducer = (state = defaultState, action) => {
  switch(action.type){
    case "RECEIVE_ITEMS":
      let newState = merge({}, state, action.items);
      return newState;
    default:
      return state;
  }
};

export default ItemReducer;

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
