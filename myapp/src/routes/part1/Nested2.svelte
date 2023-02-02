<script>
    export let answer = 3000;
    $: information = $$props;
</script>

<div>This answer is {answer}</div>
<div>{information.name}</div>
<div>{information.age}</div>
<div>{information.gender}</div>