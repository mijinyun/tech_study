import { fireEvent, render } from '@testing-library/svelte'
import { describe, it, expect } from 'vitest'
import SideNavBar from './SideNavBar.svelte'

describe('SideNavBar component test -- checking link', () => {
	// setup test props
	const linkList = [
		{ title: 'first', href: '/route1' },
		{ title: 'second', href: '/route2' }
	]
	// render component
	const { getAllByRole } = render(SideNavBar, { linkList })
	// get all <a> tags
	const anchorList = getAllByRole('link')

	it('all titles should be displayed in <a> tags', () => {
		linkList.map(({ title }, index) => {
			expect(anchorList[index].innerHTML).toContain(title)
		})
	})
	it('all <a> tags should have corresponding href attributes', () => {
		linkList.map(({ href }, index) => {
			expect(anchorList[index].getAttribute('href')).toBe(href)
		})
	})
	it('clicking menu button should open menu', () => {
		// ...
	})
	// 반응형 테스트는 라우팅과 마찬가지로 브라우저의 기능에 가까워서 playwright이 정확할 것 같습니다.
	// it('should show menu button on mobile scrrens(width < 900px)', async () => {})
})

describe('SideNavBar component test -- 사이드 메뉴바 버튼 테스트', () => {
	it('sideNavButton 클릭 전 default값 == 숨김', () => {
		const { getAllByRole } = render(SideNavBar)

		// 사이드 메뉴바(햄버거버튼) 기본값인 hide값(숨김 처리)을 가지는 버튼의 유무를 확인
		const divLists = getAllByRole('button', {
			name: 'hideSide'
		})[0].parentElement
		expect(divLists).toBeTruthy()
	})

	it('sideNavButton 클릭시 hide 속성에서 show 속성으로 변경', async () => {
		const { getAllByRole, getAllByAltText } = render(SideNavBar)

		// 사이드 메뉴바 버튼 (sideNavButton의 속성을 가진 태그는 한가지이기때문에 [0]으로 첫번째 인덱스로 불러옴)
		const button = getAllByRole('button', {
			name: 'sideNavButton'
		})[0]

		// 사이드 메뉴바가 열렸을 때 나타나는 'X' 버튼의 부모태그 가져오기 (부모의 속성이 hide or show로 지정되기 때문에)
		const divLists = getAllByAltText('사이드 메뉴 닫기 버튼')[0].closest('div')

		// 사이드 메뉴바 클릭 시 사이드 노출(class ==> show 설정)
		await fireEvent.click(button)

		// hide => show로 변경될 때, class="side s-dSv~~" 로 처리되기때문에 split를 사용해서 show or hide값을 확인함
		expect(divLists?.getAttribute('class')?.split(' ')[0]).toBe('showSide')
	})
})
