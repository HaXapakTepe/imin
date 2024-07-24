$(document).ready(function () {
	const body = document.querySelector('body')
	const burger = document.querySelector('.burger')
	const dropdown = document.querySelector('.dropdown')
	const contacts = document.querySelector('.header__contacts')
	const contactsModal = document.querySelector('.contactsModal')
	const contactsModalClose = document.querySelector('.contactsModal__close')
	const links = document.querySelectorAll('.contactsModal__link')
	const chairsItem = document.querySelectorAll('.chairs__sorting-item')
	const filter = document.querySelector('.filter')
	const filterOpen = document.querySelector('.chairs__top-filter')
	const filterClose = document.querySelector('.filter__title')
	const tabs = document.querySelectorAll('.tab__target')
	const pages = document.querySelectorAll('.tab__info')
	const accordion = document.querySelectorAll('.accordion')
	const callModalOpen = document.querySelector('.callModal-open')
	const callModal = document.querySelector('.callModal')
	const buyModal = document.querySelector('.buyModal')
	const callModalClose = buyModal?.querySelector('.buyModal__close')
	const chairs = document.querySelector('.chairs')
	const btns = chairs?.querySelectorAll('.btn--blue')

	btns?.forEach(btn => {
		btn.addEventListener('click', () => {
			buyModal.classList.add('active')
		})
	})

	callModalClose?.addEventListener('click', () => {
		buyModal.classList.remove('active')
	})

	callModalOpen?.addEventListener('click', () => {
		callModal.classList.toggle('active')
	})

	if (document.querySelector('.projects')) {
		let ok = false
		window.addEventListener('scroll', function () {
			if (ok === false) {
				ok = true
				setTimeout(() => {
					let iframe = document.createElement('iframe')
					iframe.src =
						'https://kuula.co/share/collection/7qfjk?logo=0&info=0&fs=1&vr=0&zoom=1&thumbs=0&inst=en'
					iframe.classList.add('projects__iframe')
					document.getElementById('kuula')?.replaceWith(iframe)
				}, 3000)
			}
		})
	}

	if (document.querySelector('[name="phone"]')) {
		const element = document.querySelector('[name="phone"]')
		const maskOptions = {
			mask: '+{7} 000 000 00 00',
		}
		const mask = IMask(element, maskOptions)
	}

	Fancybox.bind('[data-fancybox]', {})

	const toggleMenu = () => {
		dropdown.classList.toggle('dropdown--active')
		burger.classList.toggle('burger--active')
		body.classList.toggle('no-scroll')
	}

	const clickOutsideMenu = event => {
		if (!dropdown.contains(event.target) && !burger.contains(event.target)) {
			dropdown.classList.remove('dropdown--active')
			burger.classList.remove('burger--active')
			body.classList.remove('no-scroll')
		}
	}

	burger.addEventListener('click', () => {
		contactsModal.classList.remove('contactsModal--active')
		toggleMenu()
	})
	document.addEventListener('click', clickOutsideMenu)

	if (filter) {
		if (innerWidth < 993) {
			filterOpen.addEventListener('click', () => {
				filter.classList.add('filter--active')
			})

			filterClose.addEventListener('click', () => {
				filter.classList.remove('filter--active')
			})
		}
	}

	accordion?.forEach(acc => {
		acc.addEventListener('click', e => {
			e.preventDefault()
			const content = acc.querySelector('.accordion__content')
			// const content = acc.nextElementSibling
			if (acc.classList.contains('accordion--active')) {
				acc.classList.remove('accordion--active')
				content.style.maxHeight = '0'
			} else {
				acc.classList.add('accordion--active')
				content.style.maxHeight = content.scrollHeight + 'px'
			}
		})
	})

	if (innerWidth > 992) {
		const dropdown = document.querySelectorAll('.dropdown__item')

		dropdown?.forEach(acc => {
			acc.addEventListener('mouseover', () => {
				const content = acc.querySelector('.dropdown__hidden')
				acc.classList.add('dropdown__hidden--active')
				content.style.maxHeight = content.scrollHeight + 'px'
			})

			acc.addEventListener('mouseleave', () => {
				const content = acc.querySelector('.dropdown__hidden')
				acc.classList.remove('dropdown__hidden--active')
				content.style.maxHeight = '0'
			})
		})
	}

	if (innerWidth < 992) {
		const dropdownItems = document.querySelectorAll('.dropdown__item')

		dropdownItems?.forEach(item => {
			item.addEventListener('click', () => {
				const content = item.querySelector('.dropdown__hidden')

				dropdownItems.forEach(otherItem => {
					if (otherItem !== item) {
						otherItem.classList.remove('dropdown__hidden--active')
						otherItem.querySelector('.dropdown__hidden').style.maxHeight = '0'
					}
				})

				if (item.classList.contains('dropdown__hidden--active')) {
					item.classList.remove('dropdown__hidden--active')
					content.style.maxHeight = '0'
				} else {
					item.classList.add('dropdown__hidden--active')
					content.style.maxHeight = content.scrollHeight + 'px'
				}
			})
		})
	}

	contacts?.addEventListener('click', () => {
		contactsModal.classList.add('contactsModal--active')
		clickOutsideMenu
	})

	contactsModalClose?.addEventListener('click', () => {
		contactsModal.classList.remove('contactsModal--active')
	})

	links?.forEach(link => {
		link.addEventListener('click', () => {
			contactsModal.classList.remove('contactsModal--active')
		})
	})

	chairsItem?.forEach(item => {
		item.addEventListener('click', function () {
			chairsItem.forEach(item => {
				item.classList.remove('chairs__sorting-item--active')
			})
			this.classList.add('chairs__sorting-item--active')
		})
	})

	$('.filter__sorting').each(function () {
		const $select = $(this)
		const $parent = $select.closest('.filter__item-select')
		$select.select2({
			dropdownParent: $parent,
		})
	})

	const dropdownParents = [
		$('.filter__items-select--one'),
		$('.filter__items-select--two'),
		$('.filter__items-select--three'),
	]

	dropdownParents.forEach(parent => {
		$('.filter__sorting').select2({
			dropdownParent: parent,
		})
	})

	function handleTabClick(
		tabs,
		pages,
		activeTabClass,
		activePageClass,
		opacityPageClass
	) {
		tabs.forEach((tab, idx) => {
			tab.addEventListener('click', () => {
				tabs.forEach(tab => tab.classList.remove(activeTabClass))
				pages.forEach(page => {
					page.classList.remove(activePageClass)
					page.classList.remove(opacityPageClass)
				})

				tab.classList.add(activeTabClass)
				pages[idx].classList.add(activePageClass)

				setTimeout(() => {
					pages[idx].classList.add(opacityPageClass)
				}, 380)
			})
		})
	}

	handleTabClick(
		tabs,
		pages,
		'tab__target--active',
		'tab__info--active',
		'tab__info--opacity'
	)

	if (document.querySelector('[name="phone"]')) {
		const element = document.querySelector('[name="phone"]')
		const maskOptions = {
			mask: '+{7} 000 000 00 00',
		}
		const mask = IMask(element, maskOptions)
	}

	if (document.querySelector('.reviews__swiper')) {
		const reviewsSwiper = new Swiper('.reviews__swiper', {
			slidesPerView: 3,
			spaceBetween: 24,
			loop: true,
			breakpoints: {
				1080: {
					slidesPerView: 3,
				},
				577: {
					slidesPerView: 2,
				},
				320: {
					slidesPerView: 1,
				},
			},
		})
	}

	if (document.querySelector('.confidence__swiper')) {
		const confidenceSwiper = new Swiper('.confidence__swiper', {
			slidesPerView: 5,
			spaceBetween: 24,
			loop: true,
			breakpoints: {
				1366: {
					slidesPerView: 5,
				},
				993: {
					slidesPerView: 4,
				},
				769: {
					slidesPerView: 3,
				},
				577: {
					slidesPerView: 2,
				},
				361: {
					slidesPerView: 1.8,
				},
				320: {
					slidesPerView: 1.2,
				},
			},
			navigation: {
				nextEl: `.confidence__arrow-next`,
				prevEl: `.confidence__arrow-prev`,
			},
		})
	}

	if (document.querySelector('.awards__swiper')) {
		const awardsSwiper = new Swiper('.awards__swiper', {
			slidesPerView: 5,
			spaceBetween: 24,
			loop: true,
			breakpoints: {
				1366: {
					slidesPerView: 5,
				},
				993: {
					slidesPerView: 4,
				},
				769: {
					slidesPerView: 3,
				},
				577: {
					slidesPerView: 2,
				},
				361: {
					slidesPerView: 1.5,
				},
				320: {
					slidesPerView: 1.2,
				},
			},
			navigation: {
				nextEl: `.awards__arrow-next`,
				prevEl: `.awards__arrow-prev`,
			},
		})
	}

	if (document.querySelector('.partners__swiper')) {
		const partnersSwiper = new Swiper('.partners__swiper', {
			slidesPerView: 7,
			spaceBetween: 24,
			breakpoints: {
				1366: {
					slidesPerView: 7,
				},
				993: {
					slidesPerView: 6,
					grid: {
						rows: 2,
					},
				},
				769: {
					slidesPerView: 5,
				},
				577: {
					slidesPerView: 4,
				},
				361: {
					slidesPerView: 3.1,
				},
				320: {
					slidesPerView: 2.1,
					grid: {
						rows: 1,
					},
				},
			},
		})
	}

	const chairsSwipers = []
	const chairsSwiper = document.querySelectorAll('.chairs__item-swiper')
	chairsSwiper?.forEach((swiper, index) => {
		chairsSwipers.push(setChairsSwiper(index + 1))
	})
	function setChairsSwiper(index) {
		return new Swiper(`.chairs__item-swiper--${index}`, {
			slidesPerView: 1,
			navigation: {
				prevEl: `.chairs__arrow-prev--${index}`,
				nextEl: `.chairs__arrow-next--${index}`,
			},
		})
	}
})
