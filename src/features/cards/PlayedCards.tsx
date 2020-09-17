import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCardsStore } from '../../stores';
import Cards from './Cards';
import CardsSection from './CardsSection';
import { CardState } from './models';
import useDeckByState from './util/useDeckByState';

const PlayedCards = () => {
  const { activateCard, discardCard, recoverCard } = useCardsStore();

  const cards = useDeckByState(CardState.Played);

  const handleDiscardAllClick = () => {
    for (const card of cards) {
      discardCard(card.id);
    }
  };

  return (
    <CardsSection
      actions={[{ label: 'Discard all', handler: handleDiscardAllClick }]}
      heading="Current cards"
    >
      <Cards
        actions={[
          { label: 'Activate', handler: activateCard },
          { label: 'Discard', handler: discardCard },
          { label: 'Put back', handler: recoverCard },
        ]}
        cards={cards}
      />
    </CardsSection>
  );
};

export default observer(PlayedCards);
