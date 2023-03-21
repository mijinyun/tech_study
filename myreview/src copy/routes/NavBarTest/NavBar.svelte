<script lang="ts">
	import SideNavBar from './SideNavBar.svelte'

	export let linkList
</script>

<nav>
	<ul class="nav_section">
		<div>
			<li>
				<a href="">
					<img src="" alt="로고" />
				</a>
			</li>
		</div>

		<SideNavBar {linkList} />
	</ul>
</nav>

<!-- <nav>
	<ul>
		{#each linkList as link}
			<li>
				<a href={link.href}><span>{link.title}</span></a>
			</li>
		{/each}
	</ul>
</nav> 

-->
<style>
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		list-style: none;
	}

	.nav_section {
		/* grid를 사용하여 로고 영역과 서브메뉴 영역의 너비를 따로 설정해줌 */
		display: grid;
		grid-template-columns: 100px auto;
		align-items: center;
		min-height: 64px;
		/* border는 임시로 영역 확인용 */
		border: 3px solid red;
	}
</style>
