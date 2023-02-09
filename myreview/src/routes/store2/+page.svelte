<script>
import { count, doubled, time } from './store'

</script>

<h3>현재 count : {$count}</h3>
<h3>현재 doubled : {$doubled}</h3>
<br>
<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>
<hr>
<h1> 현재 시간은 {$time} 입니다.</h1>