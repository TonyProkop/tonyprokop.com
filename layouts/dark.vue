<template>
	<div class="page-container --dark">
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
</style>