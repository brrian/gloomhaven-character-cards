import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCardsStore } from '../../stores';
import Cards from '../cards/Cards';
import useDeckByState from '../cards/util/useDeckByState';
import CardsSection from './CardsSection';
import { CardState } from './models';

const AvailableCards = () => {
  const { loseCard, playCard } = useCardsStore();

  const cards = useDeckByState(CardState.Available);

  return (
    <CardsSection heading="Available cards">
      <Cards
        actions={[
          { label: 'Play', handler: playCard },
          { label: 'Lose', handler: loseCard },
        ]}
        cards={cards}
      />
    </CardsSection>
  );
};

export default observer(AvailableCards);
