import React, { FC } from 'react';
import Item from './Item';
import styles from './Items.module.scss';

interface ItemsProps {
  actions?: Action[];
  items: DeckCard[];
}

const Items: FC<ItemsProps> = ({ actions, items }) => {
  return (
    <div className={styles.container}>
      {items.map(item => (
        <Item actions={actions} item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Items;
