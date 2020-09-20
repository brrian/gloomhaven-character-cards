import { useCardsStore } from '../../../stores';
import { CardState } from '../models';

export default function useDeckByState(state: CardState): DeckCard[] {
  const { deck } = useCardsStore();

  return Array.from(deck.values())
    .filter(card => card.state === state)
    .sort((a, b) => a.updatedAt - b.updatedAt);
}
