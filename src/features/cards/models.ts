export interface Cards {
  [card: string]: Card;
}

export interface Card {
  id: string;
  name: string;
  src: string;
}

export interface Action {
  label: string;
  handler: (id: string) => void;
}

export type Deck = Map<string, DeckCard>;

export interface DeckCard extends Card {
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
