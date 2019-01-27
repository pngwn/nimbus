import { createMachineStore } from './machineStoreHelper';
import { searchMachine, searchActions } from './machines';
import { writable } from 'svelte/store';

export const myStore = writable({ places: [] });
export const search = createMachineStore(searchMachine, searchActions, myStore);
