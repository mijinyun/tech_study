import { render } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import Footer from './Footer.svelte'

describe('Footer component test', () => {
	const informationList = [
		{ title: '이용방법', href: '/how' },
		{ title: '고객센터', href: '/support' }
	]
	const { getAllByRole } = render(Footer, { informationList })

	const anchorLists = getAllByRole('link')

	//navbar와 동일하게 link를 가져오지만
	//navbar의 경우 로고를 제외한 나머지 item들을 subNav로 컴포넌트를 분리하였습니다.
	//footer는 컴포넌트 분리없이 a 태그를 가져오면 로고부분 즉, <a><img src='' ~ ></a> 부분이 가져와지기때문에 title을 비교할 수 없습니다. 그래서 아래와 같이 slice처리를 해줘서 로고 부분을 날려주고 새로운 배열로 담았습니다.
	const newAnchorLists = anchorLists.slice(1)
	it('a 태그 타이틀생성(로고 a 태그 제외)', () => {
		informationList.map(({ title }, index) => {
			expect(newAnchorLists[index].innerHTML).toContain(title)
		})
	})

	it('a 태그 타이틀에 따른 경로 확인(로고 a 태그 제외)', () => {
		informationList.map(({ href }, index) => {
			expect(newAnchorLists[index].getAttribute('href')).toEqual(href)
		})
	})
})
