<script>
  import { goto } from "$app/navigation";
  import { supabase } from "$lib/supabaseClient";


    let title = ''
    let method= ''
    let rating = ''
    let err = null

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !method || !rating) {
            err = 'Please fill in all the fields correctly'
            return
        }

        const { data, error } = await supabase
            .from('smoothies')
            .insert([{title,method,rating}])

            console.log('here:',data)
            if (error) {
                console.log(error)
                err = 'Please fill in all the fields correctly'
            }
            err = null
            goto('/')
    }


</script>

<div class="page create">
    <form on:submit={handleSubmit}>
    <label>Title:</label>
    <input
        type='text'
        id='title'
        bind:value={title}
    />

    <label>Method:</label>
    <textarea
        id='method'
        bind:value={method}
    />

    <label>Rating:</label>
    <input
        type='number'
        id='rating'
        bind:value={rating}
    />

    <button>Create Smoothie Recipe</button>

    {#if err}
    <p class="error">{err}</p>
    {/if}
    </form>
</div>