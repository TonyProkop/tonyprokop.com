<template>
	<div class="container">
		<h1 class="heading">Let's Talk.</h1>
		<p class="paragraph">Got a project you’d like to discuss? I’d love to hear about it, drop me a message</p>
		<ContactForm />
	</div>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
	layout: 'dark',

	components: {
		ContactForm
	}
}
</script>

<style scoped>
.container {
	max-width: 80rem;
	margin: 0 auto;
	padding: 0 5rem;
}

@media(max-width: 600px) {
	.container {
		padding: 0 3rem;
	}
}

.heading {
	font-size: 6.4rem;
	margin-top: 15%;
}

.paragraph {
	margin: 2rem 0 6rem;
}
</style>