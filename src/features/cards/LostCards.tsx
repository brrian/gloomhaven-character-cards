import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCardsStore } from '../../stores';
import Cards from '../cards/Cards';
import useDeckByState from '../cards/util/useDeckByState';
import CardsSection from './CardsSection';
import { CardState } from './models';

const LostCards = () => {
  const { recoverCard } = useCardsStore();

  const cards = useDeckByState(CardState.Lost);

  return (
    <CardsSection heading="Lost cards">
      <Cards
        actions={[{ label: 'Recover', handler: recoverCard }]}
        cards={cards}
      />
    </CardsSection>
  );
};

export default observer(LostCards);
