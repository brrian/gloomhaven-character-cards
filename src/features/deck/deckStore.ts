import { decorate, observable } from 'mobx';
import getCardById from '../cards/util/getCardById';
import { Card, CardState, Deck } from './models';

export default class DeckStore {
  public deck: Deck;

  public constructor() {
    const deck = ['bitingWind', 'blackFire', 'livingNight', 'dividedMind'];

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

  private getDeckCardById = (id: string): Card => {
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

decorate(DeckStore, {
  deck: observable,
});
