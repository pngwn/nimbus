import { createMachineStore } from './helper';
import { searchMachine, searchActions } from './search';

const searchStore = { places: [] };

export const search = createMachineStore(
  searchMachine,
  searchActions,
  searchStore
);
