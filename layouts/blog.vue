<template>
	<div class="page-container --small">
		<Header />
		<main>
			<nuxt />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from "../components/Header"
import Footer from "../components/Footer"

export default {
	components: {
		Header,
		Footer,
	},
}
</script>

<style lang="scss">
@import "~assets/base.scss";

.page-container.--small {
	background-color: var(--clr-white);
	color: var(--clr-black);

	*:not(svg):not(path) {
		color: var(--clr-black);
	}

	h1 {
		font-size: 3.6rem;
	}

	h2 {
		font-size: 2.4rem;
	}

	h3 {
		font-size: 1.8rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-bottom: 3rem;
	}

	p {
		margin-bottom: 2rem;
	}

	.section-content {
		--max-width: 600px;
	}
}
</style>
