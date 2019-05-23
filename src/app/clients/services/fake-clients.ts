import { Client } from 'src/app/shared/models/client.model';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

export const fakeClients: Client[] = [
  new Client({
    id: 'A1',
    name: 'Ambassadeur Spoke',
    email: 'spoke@trek.com',
    state: StateClient.ACTIF
  }),
  new Client({
    id: 'A2',
    name: 'Monsieur Sulu',
    email: 'sulu@trek.com',
    state: StateClient.ACTIF
  }),
  new Client({
    id: 'A3',
    name: 'Rishto Stoikov',
    email: 'rishto@mondial.com',
    state: StateClient.ACTIF
  })

];
