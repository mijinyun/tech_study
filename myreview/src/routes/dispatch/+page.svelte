<script>
    import First from "./first.svelte";

    let value = 0;

    function handleValueAdd(event){
        console.log('event:',event);
        console.log('event_value:',event.detail.value);
        console.log('event_msg:',event.detail.message);
        
        value = value + event.detail.value
    }
</script>

<p> value : {value}</p>

<First on:add={handleValueAdd}/>
