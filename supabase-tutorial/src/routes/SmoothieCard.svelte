<script>
  import { supabase } from "$lib/supabaseClient";

    export let key
    export let smoothie
    export let onDelete

    const handleDelete = async () => {
        const { data, error } = await supabase
            .from('smoothies')
            .delete()
            .eq('id',smoothie.id)

        if (error) {
            console.log(error)
        }
        onDelete(smoothie.id)
    }
</script>
<div class="smoothie-card">
    <h3>{smoothie.title}</h3>
    <p>{smoothie.method}</p>
    <div class="rating">{smoothie.rating}</div>
    <div class="buttons">
        <a href="/{smoothie.id}">
            <i class="material-icons">edit</i>
        </a>
        <i class="material-icons" on:click={handleDelete}>delete</i>
    </div>
</div>