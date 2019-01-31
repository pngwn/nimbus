import { writable } from 'svelte/store';

export function createMachineStore(machine, actions = {}, store = null) {
  let currentState = machine.initial;
  const { subscribe, update } = writable(store);
  update(state => ({ ...state, state: currentState }));

  function send(event, payload) {
    let stateChanged = false;

    update(state => {
      if (machine.on && machine.on[event]) {
        currentState = machine.on[event];
      } else if (
        machine.states[state.state].on &&
        machine.states[state.state].on[event]
      ) {
        currentState = machine.states[state.state].on[event];
      }

      stateChanged = true;

      return { ...state, state: currentState };
    });

    if (!stateChanged || !actions[currentState]) return;

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
