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
	h1 {
		font-size: 3.6rem;
		margin-bottom: 6rem;
	}
	h2 {
		font-size: 2.4rem;
		text-transform: unset;
		font-weight: 500;
		font-family: "Red Hat Text";
	}
	h3 {
		font-size: 1.8rem;
		text-transform: unset;
		font-weight: 500;
		font-family: "Red Hat Text";
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
		--max-width: 750px;
	}
}
</style>
