import { useLocalStore } from 'mobx-react-lite';
import React, { createContext, FC, useContext } from 'react';
import CardsStore from './features/cards/cardsStore';
import ItemsStore from './features/items/itemsStore';

interface StoreContext {
  cards: CardsStore;
  items: ItemsStore;
}

const StoreContext = createContext<StoreContext | undefined>(undefined);

export const useStore = (): StoreContext => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('useStore used outside of StoreContextProvider');
  }

  return store;
};

export const useCardsStore = (): CardsStore => {
  return useStore().cards;
};

export const useItemsStore = (): ItemsStore => {
  return useStore().items;
};

export const StoreContextProvider: FC = ({ children }) => {
  const store = useLocalStore(() => ({
    cards: new CardsStore(),
    items: new ItemsStore(),
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
