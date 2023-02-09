<script>
    import Increment from '../store/increment.svelte';
import { count } from './store'

</script>

{$count}
<br>
<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>