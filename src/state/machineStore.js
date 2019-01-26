import { search } from './machines';
import { createMachineStore } from './machineStoreHelper';

export const searchMachine = createMachineStore(search);
