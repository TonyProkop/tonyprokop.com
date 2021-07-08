<template>
	<div>
		<ul class="desktop-menu">
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/#portfolio" @click.prevent="() => scrollToId('portfolio')">Portfolio</a>
			</li>
			<li>
				<a href="/#process" @click.prevent="() => scrollToId('process')">Process</a>
			</li>
			<li>
				<a href="/contact">Contact</a>
			</li>
		</ul>
		<div class="mobile-menu">
			<button class="open-button" type="button" title="Menu" @click="toggleMenu">
				<Menu />
			</button>
			<div v-if="open" class="menu">
				<button class="close-button" type="button" title="Close Menu" @click="toggleMenu">
					<Close />
				</button>
				<nav v-if="open">
					<a href="/" @click="toggleMenu">Home</a>
					<a href="/#portfolio" @click.prevent="() => scrollToId('portfolio')">Portfolio</a>
					<a href="/#process" @click.prevent="() => scrollToId('process')">Process</a>
					<a href="/contact" @click="toggleMenu">Contact</a>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
import Logo from '~/static/logo.svg?inline';
import Menu from '~/static/menu.svg?inline';
import Close from '~/static/close.svg?inline';

export default {
	components: {
		Logo,
		Menu,
		Close,
	},

	data () {
		return {
			open: false
		}
	},

	methods: {
		toggleMenu () {
			this.open = !this.open;
			document.querySelector('body').classList.toggle('menuOpen');
		},

		scrollToId (id) {
			if (this.open) {
				this.toggleMenu();
			}

			const element = document.getElementById(id);
			const rect = element.getBoundingClientRect();
			window.scrollTo({
				top: rect.top,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
}
</script>

<style scoped lang="scss">
.desktop-menu {
	display: none;
	padding: 0;

	@media (min-width: 650px) {
		display: flex;
	}

	li {
		list-style: none;
		padding: 0 1.5rem;
		font-size: 1.4rem;
		font-weight: 600;

		a {
			text-decoration: none;
			color: inherit;
		}
	}
}

.mobile-menu {
	display: block;

	@media (min-width: 650px) {
		display: none;
	}

	.menu {
		display: grid;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: var(--clr-black);

		nav {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			a {
				font-size: 3.8rem;
				font-weight: 700;
				padding: 1rem 0;
				color: var(--clr-white);
			}
		}
	}

	.open-button,
	.close-button {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.open-button {
		svg {
			color: var(--clr-black);
		}
	}

	.close-button {
		position: absolute;
		top: 2rem;
		right: 2rem;

		svg {
			color: var(--clr-white);
		}
	}
}
</style>