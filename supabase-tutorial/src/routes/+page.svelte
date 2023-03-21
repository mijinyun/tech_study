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

</script>

<div class="page home">
    <h2>Home</h2>
    <div class="smoothies">
        <div class="smoothie-grid">
            {#each result as smoothie}
            <SmoothieCard {smoothie} />
            {/each}
        </div>
    </div>
</div>