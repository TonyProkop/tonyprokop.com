<template>
		<header class="header">
			<CircleIcon href="/" title="Tony Prokop">
				<Logo />
			</CircleIcon>
			<ul class="menu">
				<li class="item">
					<a href="/">Home</a>
				</li>
				<li class="item">
					<a href="#portfolio">Portfolio</a>
				</li>
				<li class="item">
					<a href="#services">Services</a>
				</li>
				<li class="item">
					<a href="/contact">Contact</a>
				</li>
			</ul>
			<CircleIcon href="#" title="Menu">
				<Menu />
			</CircleIcon>
		</header>
</template>

<script>
import Logo from '~/static/logo.svg?inline';
import Menu from '~/static/menu.svg?inline';
import CircleIcon from './CircleIcon';

export default {
	components: {
		Logo,
		Menu,
		CircleIcon
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