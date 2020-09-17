import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCardsStore } from '../../stores';
import Cards from '../cards/Cards';
import useDeckByState from '../cards/util/useDeckByState';
import CardsSection from './CardsSection';
import { CardState } from './models';
import useSelectRandomCard from './util/useSelectRandomCard';

const AvailableCards = () => {
  const { loseCard, playCard } = useCardsStore();

  const cards = useDeckByState(CardState.Available);

  const {
    clearSelectedCard,
    selectedCard,
    selectRandomCard,
  } = useSelectRandomCard(cards);

  return (
    <CardsSection
      actions={[
        { label: 'Select random card', handler: selectRandomCard },
        { label: 'Clear selected card', handler: clearSelectedCard },
      ]}
      heading="Available cards"
    >
      <Cards
        actions={[
          { label: 'Play', handler: playCard },
          { label: 'Lose', handler: loseCard },
        ]}
        cards={cards}
        selected={selectedCard}
      />
    </CardsSection>
  );
};

export default observer(AvailableCards);
