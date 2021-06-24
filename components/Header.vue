<template>
		<header class="header">
			<a href="/" class="logo">
				Tony Prokop
			</a>
			<ul class="menu">
				<li class="item">
					<a href="/">Home</a>
				</li>
				<li class="item">
					<a href="/#portfolio">Portfolio</a>
				</li>
				<li class="item">
					<a href="/#process">Process</a>
				</li>
				<li class="item">
					<a href="/about">About</a>
				</li>
				<li class="item">
					<a href="/contact">Contact</a>
				</li>
			</ul>
			<!-- <Menu /> -->
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
	padding: 5rem 3rem;
	width: 100%;
	margin: 0 auto;
	max-width: var(--max-width);
}

.logo {
	font-size: 1.8rem;
	font-weight: 700;
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
	padding: 0 1.5rem;
	font-size: 1.4rem;
	font-weight: 600;
}

.item a {
	text-decoration: none;
	color: inherit;
}
</style>