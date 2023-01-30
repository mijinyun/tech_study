<script>
	import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    function sayHello() {
        dispatch('message',{
            text:'Hello!'
        });
    }

    function sayNice(){
        dispatch('myevent', {
            text2:'nice!'
        });
    }
</script>

<button on:click={sayHello}>Click to say hello</button>
<button on:click={sayNice}>Click to say nice</button>