<script>
    import { page } from "$app/stores";
    import { tick } from "svelte";

    $: console.log('page:',$page);
    let a = 1;
    let b = 2;
    let sumElement;

    async function handleUpdate() {
        a = 2;
        b = 5;

        await tick();

        console.log(`${a} , ${b}`);
        console.log(sumElement.textContent);
    }
</script>

<div class="sum" bind:this={sumElement}>
    {a} + {b} = {a + b}
</div>

<button on:click={handleUpdate}>숫자 업데이트</button>