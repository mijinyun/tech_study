<script>
    import { page } from '$app/stores' 
    import Account from "./Account.svelte";
    import Auth from "./Auth.svelte";

    console.log('page:',$page);
    console.log('page.data:',$page.data);
    console.log('page.data.session:',$page.data.session);

</script>

<svelte:head>
    <title>Supabase + SvelteKit</title>
    <meta name="description" content="SvelteKit using supabase-js v2" />
</svelte:head>


{#if !$page.data.session}
    <Auth />
{:else}
    <Account session="{$page.data.session}"/>
{/if}