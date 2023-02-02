<script>
    import Nested2 from "./Nested2.svelte";

    const info = {
        name : 'Kim',
        age : 20,
        gender: 'male'
    }
</script>

<Nested2 answer={10} />
<!-- props 할당해주지 않았을 때, 하위 컴포넌트에서는 기본값 -->
<!-- <Nested2 />   -->
<Nested2 {...info}/>