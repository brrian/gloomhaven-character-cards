import { Card } from '../models';
import cards from '../assets';

export default function getCardById(id: string): Card {
  const card = cards[id];

  if (!card) {
    throw new Error(`Unable to get card with id "${id}"`);
  }

  return card;
}
