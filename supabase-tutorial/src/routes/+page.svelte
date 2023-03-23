<script>
    import { afterUpdate } from "svelte";
    import { supabase } from "$lib/supabaseClient";
    import SmoothieCard from "./SmoothieCard.svelte";

    let result = []
    let orderBy = 'created_at'
    
    afterUpdate(() => {
        getInfo()
    })
    
    const getInfo = async () => {
        try {
            const { data, error } = await supabase
            .from('smoothies')
            .select()
            .order(orderBy, { ascending: false})

            if (data) {
                result = [...data]
            }

            if (error) throw error

        } catch (error) {
            if (error) console.log(error)
        }
    }

    const handleDelete = (id) => {
        result = [...result].filter((data) => {
            return data.id != id
        })
    }

</script>

<div class="page home">
    <div class="smoothies">
        <div class="order-by">
            <p>Order by:</p>
            <button on:click={() => orderBy = 'created_at'}>Time Created</button>
            <button on:click={() => orderBy = 'title'}>Title</button>
            <button on:click={() => orderBy = 'rating'}>Rating</button>
            <p>{orderBy}</p>
        </div>
        <div class="smoothie-grid">
            {#each result as smoothie}
            <SmoothieCard 
            key={smoothie.id}
            {smoothie}
            onDelete={handleDelete} />
            {/each}
        </div>
    </div>
</div>