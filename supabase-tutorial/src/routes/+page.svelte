<script>
    import { onMount } from "svelte";
    import { supabase } from "$lib/supabaseClient";
    import SmoothieCard from "./SmoothieCard.svelte";

    let result = []
    
    onMount(() => {
        getInfo()
    })
    
    const getInfo = async () => {
        try {
            const { data, error } = await supabase
            .from('smoothies')
            .select('*')

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
    <h2>Home</h2>
    <div class="smoothies">
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