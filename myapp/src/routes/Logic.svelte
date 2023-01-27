<script>
	import Thing from "./Thing.svelte";

    let user = { loggedIn : false };
    $: userState = user.loggedIn ?'로그아웃' : '로그인';
    
    function toggle() {
        user.loggedIn = !user.loggedIn;
    }

    // elseif
    let num = 8;


    //Each
    let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];

    //Keyed each blocks
    let things = [
        {id:1 , name: 'apple'},
        { id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
    ]

    function removeFirst() {
        things = [...things.slice(1)];
    }


</script>

<button on:click={toggle}>{userState}</button>

<!-- if문 사용 -->
<hr>
<h3>if문</h3>
{#if user.loggedIn}
    <button on:click={toggle}>로그아웃</button>
{/if} 

{#if !user.loggedIn}
    <button on:click={toggle}>로그인</button>
{/if} 


<!-- if~else문 -->
<hr>
<h3>if~else문</h3>
{#if user.loggedIn}
    <button on:click={toggle}>로그아웃</button>
{:else}
    <button on:click={toggle}>로그인</button>
{/if} 


<!-- elseif문 -->
<hr>
<h3>else if문</h3>
{#if num > 10}
    <p>{num}은 10보다 큼</p>
{:else if num > 5}
    <p>{num}은 5보다 큼</p>
{:else}
    <p>{num}은 0보다 큼</p>
{/if}



<!-- each -->
<hr>
<h3>each</h3>
<h1>The Famous Cats of YouTube</h1>
{#each cats as cat,i}
    <div>
        <a href="https://www.youtube.com/watch?v={cat.id}" target="_blank" rel="noreferrer">{i+1}번째 : {cat.name}</a>
    </div>
{/each}

<hr>

<h3>each-destructing</h3>
<h1>The Famous Cats of YouTube</h1>
{#each cats as {id,name},i}
    <div>
        <a href="https://www.youtube.com/watch?v={id}" target="_blank" rel="noreferrer">{i+1}번째 : {name}</a>
    </div>
{/each}


<!-- Keyed each blocks -->
<button on:click={removeFirst}>Remove first thing</button>
{#each things as thing}
    <Thing name={thing.name}/>
{/each}