import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCardsStore } from '../../stores';
import Cards from '../cards/Cards';
import useDeckByState from '../cards/util/useDeckByState';
import CardsSection from './CardsSection';
import { CardState } from './models';

const DiscardedCards = () => {
  const { loseCard, recoverCard } = useCardsStore();

  const cards = useDeckByState(CardState.Discarded);

  const handleRecoveraAll = () => {
    for (const card of cards) {
      recoverCard(card.id);
    }
  };

  return (
    <CardsSection
      actions={[{ label: 'Recover all', handler: handleRecoveraAll }]}
      heading="Discarded Cards"
    >
      <Cards
        actions={[
          { label: 'Recover', handler: recoverCard },
          { label: 'Lose', handler: loseCard },
        ]}
        cards={cards}
      />
    </CardsSection>
  );
};

export default observer(DiscardedCards);
