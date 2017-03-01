import * as ACTIONS from '../actions/storefront_actions';
import merge from 'lodash/merge';

const defaultState = {}

const ItemReducer = (state = defaultState, action) => {
  switch(action.type){
    case "RECEIVE_ITEMS":
      let newState = merge(state, action.items);
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












const defaultState = {
  items: {},
  filters: {price: undefined, sort: "none"}
};

let newState;

const StorefrontReducer = (state = defaultState, action) => {
  switch(action.type){
    case "RECEIVE_ITEMS":
      newState = merge({}, state, {items: action.items});
      return newState;
    case "PRICE_MAX":
      newState = merge({}, state, {filters: {price: action.price}});
      return newState;
    case "NEW_SORT":
      newState = merge({}, state, {filters: {sort: action.sort}});
      return newState;
    default:
      return state;
  }
};

export default StorefrontReducer;
