<script lang="ts">
	interface PageLink {
		title: string
		href: string
	}
	export let linkList: PageLink[] = []
	let showSideButton = false
</script>

<!-- 900px이상의 경우 navbar 메뉴파트 -->
<div class="subNav_section">
	{#each linkList as nav}
		<li>
			<a href={nav.href}>{nav.title}</a>
		</li>
	{/each}
</div>

<!-- 900px이하의 경우 생성되는 sideNav 버튼 -->
<button
	type="button"
	class="sideNavButton"
	aria-label="sideNavButton"
	on:click={() => {
		showSideButton = true
	}}
>
	<img src="/sideNavButton.png" alt="사이드 메뉴 버튼" />
</button>

<!-- sideNav -->
<div class={showSideButton ? 'showSide' : 'hideSide'}>
	<button
		aria-label={showSideButton ? 'showSide' : 'hideSide'}
		on:click={() => {
			showSideButton = false
		}}
	>
		<img src="/closeBtn.png" alt="사이드 메뉴 닫기 버튼" />
	</button>

	{#each linkList as nav}
		<li>
			<a href={nav.href}>{nav.title}</a>
		</li>
	{/each}
</div>

<style>
	li {
		list-style: none;
	}
	.subNav_section {
		display: flex;
		justify-content: flex-end;
	}

	@media (max-width: 900px) {
		.subNav_section {
			display: none;
		}
	}
	.sideNavButton {
		background: none;
		border: 0;
		display: none;
	}
	.sideNavButton > img {
		width: 32px;
		height: 32px;
		cursor: pointer;
	}
	@media (max-width: 900px) {
		.sideNavButton {
			display: block;
			display: flex;
			justify-content: flex-end;
		}
	}
	.showSide {
		position: fixed;
		top: 0;
		right: 0px;
		width: 200px;
		height: 100vh;
		/* yellow는 임시로 영역 확인용 */
		background-color: yellow;
	}

	.hideSide {
		display: none;
	}

	.showSide button {
		background: none;
		border: 0;
	}
	.showSide img {
		width: 32px;
		height: 32px;
		cursor: pointer;
	}
</style>
