// Action Types
const ADD_TO_CART = "cart/addToCart";
const REMOVE_FROM_CART = "cart/removeFromCart";

// Action Creators
export const addToCart = (id) => ({
  type: ADD_TO_CART,
  payload: id,
});

export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

// Initial State
const initialState = {};

// Reducer
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const id = action.payload;
      const existingItem = state[id];

      return {
        ...state,
        [id]: {
          id,
          count: existingItem ? existingItem.count + 1 : 1,
        },
      };
    }

    case REMOVE_FROM_CART: {
      const id = action.payload;
      const existingItem = state[id];

      if (!existingItem) return state;

      if (existingItem.count === 1) {
        const newState = { ...state };
        delete newState[id];
        return newState;
      }

      return {
        ...state,
        [id]: {
          ...existingItem,
          count: existingItem.count - 1,
        },
      };
    }

    default:
      return state;
  }
}
