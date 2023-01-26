<script>
// 1.introduce
    let name = 'world';
    let image = '/image.gif'
    import Nested from "./Nested.svelte";
    let string = `This includes <strong style="color:blue">html section</strong>.`;
</script>

<style>
/* introduce */
    h3 {
        color:crimson;
        font-size:2rem;
    }

    h3 > div {
        color:purple;
    }
</style>

<!-- 1. introduce -->
<h1>hello {name.toUpperCase()}!</h1>
<img src={image} alt="dancing!">
<h3>Styling test!
    <p>sub testing</p>
    <div>sub testing2</div>
</h3>
<Nested />
<p>{@html string}</p>