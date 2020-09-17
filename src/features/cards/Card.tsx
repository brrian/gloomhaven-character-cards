import React, { FC } from 'react';
import styles from './Card.module.scss';
import { Action, DeckCard as ICard } from './models';

interface CardProps {
  card: ICard;
  actions?: Action[];
}

const Card: FC<CardProps> = ({ actions, card }) => {
  return (
    <div className={styles.card}>
      <img src={card.src} alt={card.name} width={254} />
      {!!actions?.length && (
        <div className={styles.actions}>
          {actions.map((action, index) => (
            <button key={index} onClick={() => action.handler(card.id)}>
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;
