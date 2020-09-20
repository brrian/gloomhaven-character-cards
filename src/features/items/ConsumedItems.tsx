import { observer } from 'mobx-react-lite';
import React from 'react';
import { useItemsStore } from '../../stores';
import Section from '../section/Section';
import Items from './Items';
import { ItemState } from './models';
import useItemsByState from './util/useItemsByState';

const ConsumedItems = () => {
  const { refreshItem } = useItemsStore();

  const items = useItemsByState(ItemState.Consumed);

  return (
    <Section heading="Consumed items">
      <Items
        actions={[{ label: 'Recover', handler: refreshItem }]}
        items={items}
      />
    </Section>
  );
};

export default observer(ConsumedItems);
