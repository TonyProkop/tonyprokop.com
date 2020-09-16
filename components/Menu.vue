<template>
	<div>
		<button class="circle-icon" type="button" title="Menu" @click="toggleMenu">
			<Menu />
		</button>
		<div v-if="open" class="menu">
			<button class="circle-icon close-button" type="button" title="Close Menu" @click="toggleMenu">
				<Close />
			</button>
			<nav v-if="open">
				<a href="/" @click="toggleMenu">Home</a>
				<a href="/#portfolio" @click="toggleMenu">Portfolio</a>
				<a href="/#services" @click="toggleMenu">Services</a>
				<a href="/contact" @click="toggleMenu">Contact</a>
			</nav>
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
		}
	}
}
</script>

<style scoped lang="scss">
.menu {
	display: grid;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #4C566A;

	nav {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		a {
			font-size: 3.8rem;
			font-weight: 700;
			padding: 1rem 0;
		}
	}
}

.close-button {
	position: absolute;
	top: 2rem;
	right: 2rem;
}
</style>