import React, { FC } from 'react';
import Card from './Card';
import styles from './Cards.module.scss';
import { Action, DeckCard as ICard } from './models';

interface CardsProps {
  cards: ICard[];
  actions?: Action[];
}

const Cards: FC<CardsProps> = ({ actions, cards }) => {
  return (
    <div className={styles.container}>
      {cards.map(card => (
        <Card actions={actions} card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Cards;
