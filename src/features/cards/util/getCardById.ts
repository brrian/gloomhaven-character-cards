import cards from '../assets';
import { Card } from '../models';

export default function getCardById(id: string): Card {
  const card = cards[id];

  if (!card) {
    throw new Error(`Unable to get card with id "${id}"`);
  }

  return card;
}
