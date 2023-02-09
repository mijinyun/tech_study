import { writable, derived } from "svelte/store";

function createCount() {
    const { subscribe, set, update } = writable(0);

    const increment = () => update(count => count + 1);
    const decrement = () => update(count => count - 1);
    const reset = () => set(0);

    return {
        subscribe,
        increment,
        decrement,
        reset
    }
}

export const count = createCount();
export const doubled = derived(count, $count => $count * 2);