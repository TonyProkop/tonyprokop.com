<template>
		<header class="header">
			<a href="/" class="circle-icon" title="Tony Prokop">
				<Logo />
			</a>
			<ul class="menu">
				<li class="item">
					<a href="/">Home</a>
				</li>
				<li class="item">
					<a href="/#portfolio">Portfolio</a>
				</li>
				<li class="item">
					<a href="/#services">Services</a>
				</li>
				<li class="item">
					<a href="/contact">Contact</a>
				</li>
			</ul>
			<Menu />
		</header>
</template>

<script>
import Logo from '~/static/logo.svg?inline';
import Menu from './Menu';

export default {
	components: {
		Logo,
		Menu,
	}
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem;
	width: 100%;
	margin: 0 auto;
}

.menu {
	display: flex;
	padding: 0;
}

@media (max-width: 650px) {
	.menu {
		display: none;
	}
}

.item {
	list-style: none;
	padding: 0 2rem;
	text-transform: uppercase;
	font-size: 1.4rem;
}

.item a {
	text-decoration: none;
	color: inherit;
}
</style>