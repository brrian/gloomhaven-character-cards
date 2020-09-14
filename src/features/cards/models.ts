export interface Cards {
  [card: string]: Card;
}

export interface Card {
  id: string;
  name: string;
  src: string;
}
