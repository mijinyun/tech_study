<script lang="ts">
	interface InformationLink {
		title: string
		href: string
	}

	//+layout.svelte에 설정된 데이터 가져오기
	export let informationList: InformationLink[] = []
	export let companyInformations: string[] = []
</script>

<footer>
	<!-- 1. 로고파트 -->
	<div>
		<a href="/">
			<img src="" alt="로고" />
		</a>
	</div>

	<!-- 메인 정보(회사소개,고객센터 등 연결링크) & 서브 정보(회사 위치,copyright 등 텍스트 정보) -->
	<div>
		<div>
			{#each informationList as info}
				<a href={info.href}>{info.title}</a>
			{/each}
		</div>
		<div>
			{#each companyInformations as company}
				<p>{company}</p>
			{/each}
		</div>
	</div>
</footer>

<style>
	footer {
		border: 3px solid blue;
	}
</style>
