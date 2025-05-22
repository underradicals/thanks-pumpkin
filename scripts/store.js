const state = {
  nextNumber: 0,
  sound: true,
}

export function soundOn() {
  state.sound = true;
}


export function soundOff() {
  state.sound = false;
}

export function increment() {
  state.nextNumber = state.nextNumber + 1;
}

export function decrement() {
  state.nextNumber = state.nextNumber - 1;
}

export function get(key) {
  // if (!state[key]) throw new Error("Key not found");
  return state[key];
}