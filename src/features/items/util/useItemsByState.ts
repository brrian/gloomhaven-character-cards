import { useItemsStore } from '../../../stores';
import { ItemState } from '../models';

export default function useItemsByState(state: ItemState): DeckCard[] {
  const { items } = useItemsStore();

  return Array.from(items.values())
    .filter(item => item.state === state)
    .sort((a, b) => a.updatedAt - b.updatedAt);
}
