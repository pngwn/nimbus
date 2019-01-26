import { writable } from 'svelte/store';

export function createMachineStore(machine) {
  const { subscribe, update } = writable(machine.initial);

  let currentState = machine.initial;

  function send(event) {
    update(state => {
      if (!machine.states[state].on) return state;
      if (!machine.states[state].on[event]) return state;

      currentState = machine.states[state].on[event];
      return currentState;
    });
  }

  function nextEvents() {
    return Object.keys(machine.states[currentState].on);
  }

  return {
    subscribe,
    send,
    nextEvents,
  };
}
