<template>
	<header class="header">
		<nuxt-link to="/" class="logo"> Tony Prokop </nuxt-link>
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
	padding: var(--default-white-space);
	width: 100%;
	margin: 0 auto;
	max-width: var(--max-width);
	z-index: 2;
}

.logo {
	font-size: 1.8rem;
	font-weight: 500;
}
</style>