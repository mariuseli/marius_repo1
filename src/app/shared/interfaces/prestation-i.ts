import { State } from '../enums/state.enum';

export interface PrestationI {
  id: string;
  client: string;
  nbJours: number;
  tjmHt: number;
  tauxTva: number;
  state: State;
  comment: string;
  typePresta: string;
  totalHt(): number;
  totalTtc(): number;

}
