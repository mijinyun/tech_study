<script>
	import { createEventDispatcher } from "svelte";


    export let value = '';
    const dispatch = createEventDispatcher();

    const select = num => () => {
        value += num;
    }

    function clear() {
        value = '';
    }
    

</script>

<div>
    <button on:click={select(1)}>1</button>
    <button on:click={select(2)}>2</button>
    <button on:click={select(3)}>3</button>
    <button on:click={select(4)}>4</button>
    <button on:click={select(5)}>5</button>
    <button on:click={select(6)}>6</button>
    <button on:click={select(7)}>7</button>
    <button on:click={select(8)}>8</button>
    <button on:click={select(9)}>9</button>

    <button disable={!value} on:click={clear}>clar</button>
    <button on:click={select(0)}>0</button>
    <button disalbe={!value} on:click={() => dispatch('submit')}>submit</button>
</div>

<style>
    div{
        display: grid;
        grid-template-columns: repeat(3,5em);
        grid-gap: 0.5em;
    }
</style>