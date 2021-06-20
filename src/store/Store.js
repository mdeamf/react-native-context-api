import React from 'react';

const Store = React.createContext();
Store.displayName = 'Store';

export const useStore = () => React.useContext(Store);

export const StoreProvider = ({children}) => {
  const color = '#ff0000';

  return <Store.Provider value={{myColor: color}}>{children}</Store.Provider>;
};
