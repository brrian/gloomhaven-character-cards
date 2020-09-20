import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCardsStore } from '../../stores';
import Cards from '../cards/Cards';
import useDeckByState from '../cards/util/useDeckByState';
import Section from '../section/Section';
import { CardState } from './models';
import useSelectRandomCard from './util/useSelectRandomCard';

const DiscardedCards = () => {
  const { loseCard, recoverCard } = useCardsStore();

  const cards = useDeckByState(CardState.Discarded);

  const {
    clearSelectedCard,
    selectedCard,
    selectRandomCard,
  } = useSelectRandomCard(cards);

  const handleRecoveraAll = () => {
    for (const card of cards) {
      recoverCard(card.id);
    }
  };

  return (
    <Section
      actions={[
        { label: 'Select random card', handler: selectRandomCard },
        { label: 'Clear selected card', handler: clearSelectedCard },
        { label: 'Recover all', handler: handleRecoveraAll },
      ]}
      heading="Discarded cards"
    >
      <Cards
        actions={[
          { label: 'Recover', handler: recoverCard },
          { label: 'Lose', handler: loseCard },
        ]}
        cards={cards}
        selected={selectedCard}
      />
    </Section>
  );
};

export default observer(DiscardedCards);
