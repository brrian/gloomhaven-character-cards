import { observer } from 'mobx-react-lite';
import React from 'react';
import { useItemsStore } from '../../stores';
import Section from '../section/Section';
import Items from './Items';
import { ItemState } from './models';
import useItemsByState from './util/useItemsByState';

const UsedItems = () => {
  const { refreshItem } = useItemsStore();

  const items = useItemsByState(ItemState.Used);

  const handleRefreshAll = () => {
    for (const item of items) {
      refreshItem(item.id);
    }
  };

  return (
    <Section
      actions={[{ label: 'Refresh all', handler: handleRefreshAll }]}
      heading="Used items"
    >
      <Items
        actions={[{ label: 'Refresh', handler: refreshItem }]}
        items={items}
      />
    </Section>
  );
};

export default observer(UsedItems);
