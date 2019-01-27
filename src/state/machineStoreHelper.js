import { writable } from 'svelte/store';

export function createMachineStore(machine, actions, store) {
  const { subscribe, update } = writable(machine.initial);

  let currentState = machine.initial;

  function send(event, payload) {
    let stateChanged = false;
    update(state => {
      if (!machine.states[state].on) return state;
      if (!machine.states[state].on[event]) return state;

      stateChanged = true;
      currentState = machine.states[state].on[event];
      return currentState;
    });

    if (!stateChanged) return;
    if (!actions[currentState]) return;
    actions[currentState].forEach(fn => {
      const returnVal = fn(payload, store);

      if (!returnVal) return;

      if (returnVal && returnVal.event) {
        send(returnVal.event, returnVal.payload);
        return;
      }

      if (returnVal.then) {
        returnVal.then(v => {
          if (v) {
            send(v.event, v.payload);
          }
        });
      }
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
