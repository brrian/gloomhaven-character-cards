import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCardsStore } from '../../stores';
import Cards from '../cards/Cards';
import useDeckByState from '../cards/util/useDeckByState';
import Section from '../section/Section';
import { CardState } from './models';

const LostCards = () => {
  const { recoverCard } = useCardsStore();

  const cards = useDeckByState(CardState.Lost);

  return (
    <Section heading="Lost cards">
      <Cards
        actions={[{ label: 'Recover', handler: recoverCard }]}
        cards={cards}
      />
    </Section>
  );
};

export default observer(LostCards);
