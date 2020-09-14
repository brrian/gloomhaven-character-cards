import { Card as CardBase } from '../cards/models';

export type Deck = Map<string, Card>;

export interface Card extends CardBase {
  state: CardState;
  updatedAt: number;
}

export enum CardState {
  Actived = 'actived',
  Available = 'available',
  Discarded = 'discarded',
  Lost = 'lost',
  Played = 'played',
}
