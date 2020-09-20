import cc from 'classcat';
import React, { FC } from 'react';
import styles from './Card.module.scss';
import { Action } from './models';

interface CardProps {
  actions?: Action[];
  card: DeckCard;
  selected?: boolean;
}

const Card: FC<CardProps> = ({ actions, card, selected }) => {
  return (
    <div
      className={cc({
        [styles.card]: true,
        [styles.isSelected]: selected,
      })}
    >
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
