import { observer } from 'mobx-react-lite';
import React from 'react';
import { useCardsStore } from '../../stores';
import Cards from './Cards';
import Section from '../section/Section';
import { CardState } from './models';
import useDeckByState from './util/useDeckByState';

const ActiveCards = () => {
  const { loseCard } = useCardsStore();

  const cards = useDeckByState(CardState.Actived);

  return (
    <Section heading="Active cards">
      <Cards actions={[{ label: 'Lose', handler: loseCard }]} cards={cards} />
    </Section>
  );
};

export default observer(ActiveCards);
