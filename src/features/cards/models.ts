export interface Action {
  label: string;
  handler: (id: string) => void;
}

export enum CardState {
  Actived = 'actived',
  Available = 'available',
  Discarded = 'discarded',
  Lost = 'lost',
  Played = 'played',
}
