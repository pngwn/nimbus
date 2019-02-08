import { createMachineStore } from './helper';
import { searchMachine, searchActions } from './search';
import { writable } from 'svelte/store';

const searchStore = { places: [] };

export const search = createMachineStore(
  searchMachine,
  searchActions,
  searchStore
);

export const iconPositions = writable({
	big: {
	  morning: 0.25,
	  afternoon: 0.416,
	  evening: 0.58,
	  night: 0.75
	},
	small: {
	  morning: 0.06,
	  afternoon: 0.225,
	  evening: 0.39,
	  night: 0.56
	}
});

export const iconColors = writable({
    morning: {
      primary: 'dark',
      accent: 'light'
    },
    afternoon: {
      primary: 'darkest',
      accent: 'dark'
    },
    evening: {
      primary: 'lightest',
      accent: 'darkest'
    },
    night: {
      primary: 'light',
      accent: 'dark'
    }
});

export const colormap = writable({
    lightest: "#e3bb88",
    light: "#db9864",
    dark: "#b1695a",
    darkest: "#644749"
});
