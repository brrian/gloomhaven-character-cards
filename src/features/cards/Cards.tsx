import React, { FC } from 'react';
import Card from './Card';
import styles from './Cards.module.scss';
import { Action, DeckCard as ICard } from './models';

interface CardsProps {
  actions?: Action[];
  cards: ICard[];
  selected?: Set<string>;
}

const Cards: FC<CardsProps> = ({ actions, cards, selected }) => {
  return (
    <div className={styles.container}>
      {cards.map(card => (
        <Card
          actions={actions}
          card={card}
          key={card.id}
          selected={selected?.has(card.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
