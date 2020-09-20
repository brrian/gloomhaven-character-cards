import React, { FC } from 'react';
import styles from './Item.module.scss';

interface ItemProps {
  actions?: Action[];
  item: DeckCard;
}

const Item: FC<ItemProps> = ({ actions, item }) => {
  return (
    <div className={styles.item}>
      <img src={item.src} alt={item.name} width={180} />
      {!!actions?.length && (
        <div className={styles.actions}>
          {actions.map((action, index) => (
            <button key={index} onClick={() => action.handler(item.id)}>
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Item;
