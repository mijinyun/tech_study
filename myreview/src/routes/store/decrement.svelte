<script>
    import { count } from "./store";

    const decrement = () => count.update(num => num - 1);
</script>

<button on:click={decrement}> - </button>