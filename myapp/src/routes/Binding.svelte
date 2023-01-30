<script>
    import { marked } from 'marked';
    let name = 'world';

    let a = 1;
    let b = 2;

    let check = false;

    let menu = [
        'Cookies and cream',
        'Mint choc chip',
        'Raspberry ripple'
    ];
    let scoops = 1;
    let flavours=[menu[0]];

    // Textarea inputs
    let value='Write here!';

    // Select bindings
    let questions = [
		{ id: 1, text: `Where did you go to school?` },
		{ id: 2, text: `What is your mother's name?` },
		{ id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
	];
    // let selected = questions[0];
    let selected;
    let answer = '';
    function submitAnswer() {
        if (selected != '') {
            alert(`select question is'${selected.text}' and answer is '${answer}'`);
        } else {
            alert('질문을 골라주세요.')
        }
    }

    // select multiple
    let selectFlavour2=[menu[0]];

    // Contentditable bindings
    let html = `<div>Write some text!</div>`

    // Each block bindings
    let todos = [
		{ done: false, text: 'finish Svelte tutorial' },
		{ done: false, text: 'build an app' },
		{ done: false, text: 'world domination' }
	];

    function add() {
        todos = todos.concat({done:false,text:''});
    }
    function clear(){
        todos = todos.filter(todo => !todo.done)
    }
    $: remaining = todos.filter(v => !v.done).length;

</script>

<!-- Text inputs -->
<input bind:value={name}>
<h1>hello {name}!</h1>
<hr>
<!-- Numeric inputs -->
<label>
    <input type=number bind:value={a} min=0 max=10>
    <input type=range bind:value={a} min=0 max=10>
</label>

<label>
    <input type=number bind:value={b} min=0 max=10>
    <input type=range bind:value={b} min=0 max=10>
</label>

<p> {a} + {b} = {a+b} </p>
<hr>
<!-- Checkbox inputs -->
<label>
    <input type=checkbox bind:checked={check}>
    Yes! Check Here!
</label>

{#if check}
    <div style="color:blue"> => checking!</div>
{:else}
    <div style="color:red"> => Not checking!</div>
{/if}

<button disabled={!check}>Subscribe</button>
<hr>

<!-- Group inputs -->

<h2>Size</h2>
<label>
    <input type=radio bind:group={scoops} name='scoops' value={1}>
    One scoop
</label>
<label>
    <input type=radio bind:group={scoops} name='scoops' value={2}>
    two scoops
</label>
<label>
    <input type=radio bind:group={scoops} name='scoops' value={3}>
    three scoops
</label>

<h2>Flavours</h2>

{#each menu as flavour}
    <label>
        <input type=checkbox bind:group={flavours} name='flavours' value={flavour}>
        {flavour}
    </label>
{/each}

{#if flavours.length == 0}
    <p>Please select at least one flavour</p>
{:else if flavours.length > scoops }
    <p>Can't order more flavours than scoops!</p>
{:else}
    <p>
        You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
        of {flavours.join(' and ')}
    </p>
{/if}
<hr>
<!-- Textarea inputs -->
{@html marked(value)}
<textarea bind:value></textarea>

<hr>
<!-- Select bindings -->

<h2>Insecurity questions</h2>
<form on:submit|preventDefault={submitAnswer}>
    <select bind:value={selected} on:change={() => { answer=''}}>
        {#each questions as question}
            <option value={question}>{question.text}</option>
        {/each}
    </select>

    <input bind:value={answer}>;

    <button type=submit disabled={!answer}>Submit</button>
</form>

<p>selected question is : {!answer ? '...waiting' : answer}</p>
<p>selected question is : {selected ? selected.id : answer}</p>

<hr>
<!-- Select multiple -->
<h2>Flavours 2</h2>
<form>
    <select multiple bind:value={selectFlavour2}>
        {#each menu as flavour2}
            <option value={flavour2}>{flavour2}</option>
        {/each}
    </select>
</form>
<p>{selectFlavour2}</p>
<p> { selectFlavour2 != undefined ? `you ordered ${selectFlavour2.join(' and ')}`: 'Please select flavour!'}</p>

<hr>
<!-- Contentditable bindings -->
<div contenteditable="true" bind:innerHTML={html}></div>
<pre>{html}</pre>

<style>
    [contenteditable] {
        padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
    }
</style>

<!-- Each block bindings -->

{#each todos as todo}
    <div class:done={todo.done}>
        <input type=checkbox bind:checked={todo.done}>
        <input placeholder="what needs to be done?" bind:value={todo.text}>
    </div>
{/each}


<div>{remaining} remaining.</div>
<button on:click={add}>Add new</button>
<button on:click={clear}>Clear completed</button>