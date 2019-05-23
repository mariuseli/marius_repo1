import { ClientI } from '../interfaces/client-i';
import { StateClient } from '../enums/state-client.enum';

export class Client implements ClientI {
  id: string;
  name: string;
  email: string;
  state: StateClient;

  constructor(field?: Partial<Client>) {

    if(field){
      Object.assign(this, field);
    }

  }
}
