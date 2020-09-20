import React, { FC } from 'react';
import styles from './App.module.scss';
import ActiveCards from './features/cards/ActiveCards';
import AvailableCards from './features/cards/AvailableCards';
import DiscardedCards from './features/cards/DiscardedCards';
import LostCards from './features/cards/LostCards';
import PlayedCards from './features/cards/PlayedCards';
import AvailableItems from './features/items/AvailableItems';

const App: FC = () => {
  return (
    <main>
      <div className={styles.playedAndActiveCards}>
        <div className={styles.playedCards}>
          <PlayedCards />
        </div>
        <div className={styles.activeCards}>
          <ActiveCards />
        </div>
      </div>
      <AvailableItems />
      <AvailableCards />
      <DiscardedCards />
      <LostCards />
    </main>
  );
};

export default App;
