import { useLocalStore } from 'mobx-react-lite';
import React, { createContext, FC, useContext } from 'react';
import DeckStore from './features/deck/deckStore';

interface StoreContext {
  deck: DeckStore;
}

const StoreContext = createContext<StoreContext | undefined>(undefined);

export const useStore = (): StoreContext => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('useStore used outside of StoreContextProvider');
  }

  return store;
};

export const useDeckStore = (): DeckStore => {
  return useStore().deck;
};

export const StoreContextProvider: FC = ({ children }) => {
  const store = useLocalStore(() => ({
    deck: new DeckStore(),
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
