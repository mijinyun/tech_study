<script lang="ts">
	import Footer from './Footer.svelte'
	import NavBar from './NavBar.svelte'

	let navLinkList = [
		{ title: 'SUB1', href: '/sub1' },
		{ title: 'SUB2', href: '/sub2' },
		{ title: 'LOGIN', href: '/login' }
	]

	let informationList = [
		{ title: 'About Us', href: '/about' },
		{ title: 'Terms of Use', href: '/terms' }
	]
	const companyInformations = ['COPYRIGHT~', '서울특별시 마포구~']
</script>

<NavBar linkList={navLinkList} />
<main>
	<slot><!-- optional fallback --></slot>
</main>
<Footer {informationList} {companyInformations} />
