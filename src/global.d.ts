interface Cards {
  [card: string]: Card;
}

interface Card {
  id: string;
  name: string;
  src: string;
}

type Deck = Map<string, DeckCard>;

interface DeckCard extends Card {
  state: CardState;
  updatedAt: number;
}

interface Action {
  label: string;
  handler: (id: string) => void;
}
