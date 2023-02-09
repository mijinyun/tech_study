<script>
    import { count } from './store'
    import Decrement from "./decrement.svelte";
    import Increment from "./increment.svelte";
    import Reset from "./reset.svelte";

</script>

{$count}
<br>
<Increment />
<Decrement />
<Reset />