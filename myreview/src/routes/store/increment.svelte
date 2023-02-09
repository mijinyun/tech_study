<script>
    import { count } from "./store";

    const increment = () => count.update(num => num + 1);
</script>

<button on:click={increment}> + </button>