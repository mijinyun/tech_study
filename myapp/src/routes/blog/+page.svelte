<script>
    export let data;
</script>

<h1>blog</h1>

<ul>
    <!-- <li><a href="/part2/blog/one">one</a></li>
    <li><a href="/part2/blog/two">two</a></li>
    <li><a href="/part2/blog/three">three</a></li> -->

    {#each data.summaries as { slug, title }}
        <li><a href="/blog/{slug}">{title}</a></li>
    
    {/each}
</ul>