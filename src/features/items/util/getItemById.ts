import items from '../assets';

export default function getItemById(id: string): Card {
  const item = items[id];

  if (!item) {
    throw new Error(`Unable to get item with id "${id}"`);
  }

  return item;
}
