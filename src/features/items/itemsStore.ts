import { decorate, observable } from 'mobx';
import { ItemState } from './models';
import getItemById from './util/getItemById';

export default class ItemsStore {
  public items: Deck;

  public constructor() {
    const items = ['minorStaminaPotion', 'bootsOfSpeed', 'phasingIdol'];

    this.items = new Map(
      items.map(id => [
        id,
        {
          ...getItemById(id),
          state: ItemState.Available,
          updatedAt: new Date().getTime(),
        },
      ])
    );
  }

  public consumeItem = (id: string): void => {
    this.updateCardState(id, ItemState.Consumed);
  };

  public recoverCard = (id: string): void => {
    this.updateCardState(id, ItemState.Available);
  };

  public useItem = (id: string): void => {
    this.updateCardState(id, ItemState.Used);
  };

  private getDeckItemById = (id: string): DeckCard => {
    const item = this.items.get(id);

    if (!item) {
      throw new Error(`Unable to get deck item with id "${id}"`);
    }

    return item;
  };

  private updateCardState = (id: string, state: ItemState) => {
    const item = this.getDeckItemById(id);

    this.items.set(id, {
      ...item,
      state,
      updatedAt: new Date().getTime(),
    });
  };
}

decorate(ItemsStore, {
  items: observable,
});
