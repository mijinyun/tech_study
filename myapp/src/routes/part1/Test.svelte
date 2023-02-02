<!-- <script>
    import { onMount } from "svelte";

    let seconds = 0;
    onMount(() => {
        const interval = setInterval(() => seconds +=1 , 1000);
        return () => clearInterval(interval);
    });
</script>

<p>{seconds} {seconds === 1 ? 'second' : 'seconds'} </p>
 -->

<!-- --------------------- -->

<script>
    import {tick} from 'svelte'

    let name = 'world';

    async function handler(){
        name = 'Kim'
        await tick();
    }
</script>

<h1 on:click={handler}>Hello {name}!</h1>