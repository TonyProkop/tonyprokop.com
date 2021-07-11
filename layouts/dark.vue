<template>
	<div class="page-container">
		<Header />
		<main>
			<nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
	components: {
		Header,
		Footer
	}
}
</script>

<style lang="scss">
@import '~assets/base.scss';

body {
	background-color: var(--clr-black);
	color: var(--clr-white);
}

*:not(svg):not(path) {
  color: var(--clr-white);
}
</style>
