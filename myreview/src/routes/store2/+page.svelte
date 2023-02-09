<script>
import { count, doubled } from './store'

</script>

<h3>현재 count : {$count}</h3>
<h3>현재 doubled : {$doubled}</h3>
<br>
<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>