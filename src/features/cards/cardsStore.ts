import { decorate, observable } from 'mobx';
import { CardState } from './models';
import getCardById from './util/getCardById';

export default class CardsStore {
  public deck: Deck;

  public constructor() {
    const deck = [
      'bitingWind',
      'dividedMind',
      'earthenSteed',
      'inexorableMomentum',
      'livingNight',
      'oozingManifestation',
      'strengthInNumbers',
      'unendingDominance',
      'wildAnimation',
    ];

    this.deck = new Map(
      deck.map(id => [
        id,
        {
          ...getCardById(id),
          state: CardState.Available,
          updatedAt: new Date().getTime(),
        },
      ])
    );
  }

  public activateCard = (id: string): void => {
    this.updateCardState(id, CardState.Actived);
  };

  public discardCard = (id: string): void => {
    this.updateCardState(id, CardState.Discarded);
  };

  public loseCard = (id: string): void => {
    this.updateCardState(id, CardState.Lost);
  };

  public playCard = (id: string): void => {
    this.updateCardState(id, CardState.Played);
  };

  public recoverCard = (id: string): void => {
    this.updateCardState(id, CardState.Available);
  };

  private getDeckCardById = (id: string): DeckCard => {
    const card = this.deck.get(id);

    if (!card) {
      throw new Error(`Unable to get deck card with id "${id}"`);
    }

    return card;
  };

  private updateCardState = (id: string, state: CardState) => {
    const card = this.getDeckCardById(id);

    this.deck.set(id, {
      ...card,
      state,
      updatedAt: new Date().getTime(),
    });
  };
}

decorate(CardsStore, {
  deck: observable,
});
