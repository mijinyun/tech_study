<script>
	import CustomBtn from "./CustomBtn.svelte";
import Inner from "./Inner.svelte";

    let m = { x: 0, y: 0 };

    // function handleMosuemove(event) {
    //     m.x = event.clientX;
    //     m.y = event.clientY;
    // }


    //Event modifiers
    function handleClick() {
        alert('no more alerts');
    }

    //Component events
    function handleMessage(event){
        alert(event.detail.text);
    }
    function handleMessage2(event){
        alert(event.detail.text2 + 'good!!!');
    }

    // DOM event forwarding
    function handleClick2(){
        alert(`hi!`);
    }

</script>

<div on:mousemove={(e) => m = { x : e.clientX, y:e.clientY}}>
    The mouse positions is {m.x} x {m.y}
</div>

<!-- Event modifiers -->
<button on:click|once|capture={handleClick}> Click me! </button>


<!-- Component events -->
<Inner on:message={handleMessage} on:myevent={handleMessage2}/>


<!-- DOM event forwarding -->
<CustomBtn on:click={handleClick2}/>
