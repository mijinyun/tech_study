<script>
    import Todolist from "./Todolist.svelte";
    import { createTodoStore } from "./todo";

    let text;

    const todos = createTodoStore([
		{ done: false, description: 'write some docs' },
		{ done: false, description: 'start writing blog post' }
    ])

    // const handleWrite = () => {
    //     todos.add({done: false , description: text });
    // }

    const handleWrite = (e) => {
        todos.add(text);
        text = '';
    }

</script>
<input type="text" placeholder="할일을 입력해주세요." bind:value={text}>
<button on:click={handleWrite}>작성</button>

<br>

<div class="todo">
    <h2>todo</h2>
	<Todolist store={todos} filter={(t) => !t.done} />
</div>

<div class="done">
    <h2>done</h2>
	<Todolist store={todos} filter={(t) => t.done} />
</div>