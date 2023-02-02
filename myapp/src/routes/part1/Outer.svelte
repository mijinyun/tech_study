<script>
	import { createEventDispatcher } from "svelte";
	import Inner from "./Inner.svelte";

    const dispatch = createEventDispatcher();

    // svelte는 아래 forward함수를 생략할 수가 있는 것이다. 원래는 이런 방식으로 Inner에 props를 전달할 수 있는 것!
    // function forward(event){
    //     dispatch('message',event.detail);
    // }
</script>

<!-- <Inner on:message={forward}/> -->
<Inner on:message />