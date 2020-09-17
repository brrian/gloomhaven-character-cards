import { sample } from 'lodash';
import { useState } from 'react';
import { DeckCard } from '../models';

interface UseSelectRandomCard {
  clearSelectedCard: () => void;
  selectedCard: Set<string>;
  selectRandomCard: () => void;
}

export default function useSelectRandomCard(
  cards: DeckCard[]
): UseSelectRandomCard {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const selectRandomCard = () => {
    const selectedCard = sample(cards);

    if (selectedCard) {
      setSelected(new Set([selectedCard.id]));
    }
  };

  const clearSelectedCard = () => {
    setSelected(new Set());
  };

  return {
    clearSelectedCard,
    selectedCard: selected,
    selectRandomCard,
  };
}
