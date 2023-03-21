<script>
    let count = 0;

    function increase() {
        count += 1;
    }
</script>
{count}
<button on:click={increase}>버튼</button>