<script>
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import { supabase } from "$lib/supabaseClient";
    import { onMount } from "svelte";

    const id = $page.params.id
    let title = ''
    let method = ''
    let rating = ''
    let err = null

    onMount(() => {
        fetchSmoothie()
    })

    const fetchSmoothie = async () => {
        const { data, error } = await supabase
            .from('smoothies')
            .select()
            .eq('id',id)
            .single()

            if (error) {
                console.log(error)
                goto('/', { replaceState: true })
            }

            if (data) {
                title = data.title
                method = data.method
                rating = data.rating
            }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!title || !method || !rating) {
            err = 'Please fill in all the fields correctly'
            return
        }

        const { data, error } = await supabase
            .from('smoothies')
            .update({title, method, rating })
            .eq('id',id)
            
            if (error) {
                err = 'Please fill in all the fields correctly'
            }
            err = null
            goto('/')
    }
</script>

<div class="page update">
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
    
        <button>Update Smoothie Recipe</button>
        </form>

        {#if err}
        <p class="error">{err}</p>
        {/if}
</div>