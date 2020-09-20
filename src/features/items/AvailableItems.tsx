import { observer } from 'mobx-react-lite';
import React from 'react';
import { useItemsStore } from '../../stores';
import Section from '../section/Section';
import Items from './Items';
import { ItemState } from './models';
import useItemsByState from './util/useItemsByState';

const AvailableItems = () => {
  const { consumeItem, useItem } = useItemsStore();

  const items = useItemsByState(ItemState.Available);

  return (
    <Section heading="Available items">
      <Items
        actions={[
          { label: 'Use', handler: useItem },
          { label: 'Consume', handler: consumeItem },
        ]}
        items={items}
      />
    </Section>
  );
};

export default observer(AvailableItems);
