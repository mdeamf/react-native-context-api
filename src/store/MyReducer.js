const REDUCER_ACTIONS = {
  ADD: 'ADD_ITEM',
};

export const initialState = {
  items: [],
};

export const addItem = item => myReducer(REDUCER_ACTIONS.ADD, item);

export const myReducer = (state = initialState, action) => {
  console.log(state, action);
  if (action.type === REDUCER_ACTIONS.ADD) {
    return {
      ...state,
      items: state.items.concat(action.item),
    };
  }
};
