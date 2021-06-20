import React from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({children, reducer, initialState}) => {
  const color = '#ff0000';
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <Store.Provider value={{color, state, dispatch}}>{children}</Store.Provider>
  );
};
